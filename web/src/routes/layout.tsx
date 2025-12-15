import { component$, useContextProvider, Slot, useSignal, useStore, $, useTask$ } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import jsyaml from "js-yaml";

import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import { LocaleContext, type Locale } from "~/store/locale-store";
import { translations, type Translations } from "~/i18n/translations";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import type { Sections } from "~/types/PSC";

export const useChecklists = routeLoader$(async () => {
  // Load from GitHub repository (reliable in Vercel Edge runtime)
  // Try multiple possible URLs in case of GitHub caching issues
  const remoteUrls = [
    'https://raw.githubusercontent.com/inktech-sc/Digital_security_web/main/personal-security-checklist.yml',
    'https://raw.githubusercontent.com/inktech-sc/Digital_security_web/refs/heads/main/personal-security-checklist.yml',
  ];
  
  let lastError: Error | null = null;
  
  for (const remoteUrl of remoteUrls) {
    try {
      console.log('[useChecklists] Fetching YAML from:', remoteUrl);
      const response = await fetch(remoteUrl, {
        headers: {
          'Accept': 'text/yaml, text/plain, */*',
          'Cache-Control': 'no-cache',
        },
      });
      
      console.log('[useChecklists] Response status:', response.status, response.statusText);
      
      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Unable to read error response');
        console.warn('[useChecklists] Fetch failed for', remoteUrl, ':', response.status, response.statusText);
        lastError = new Error(`Failed to fetch YAML: ${response.status} ${response.statusText}`);
        continue; // Try next URL
      }
    
      const text = await response.text();
      
      if (!text || !text.trim()) {
        throw new Error('YAML file is empty');
      }
      
      console.log('[useChecklists] YAML file loaded, size:', text.length, 'bytes');
      const parsed = jsyaml.load(text);
      
      if (!parsed) {
        throw new Error('Failed to parse YAML');
      }
      
      // YAML might be an object with a root key, check for common patterns
      let sections: Sections = [];
      if (Array.isArray(parsed)) {
        sections = parsed;
      } else if (typeof parsed === 'object' && parsed !== null) {
        // Try to find array in object (e.g., { checklist: [...] })
        const keys = Object.keys(parsed);
        for (const key of keys) {
          const value = (parsed as Record<string, any>)[key];
          if (Array.isArray(value)) {
            sections = value;
            break;
          }
        }
      }
      
      if (!Array.isArray(sections) || sections.length === 0) {
        throw new Error('YAML does not contain a valid sections array');
      }
      
      console.log(`[useChecklists] Successfully loaded ${sections.length} sections from YAML`);
      return sections as Sections;
    } catch (error) {
      // Continue to next URL if this one failed
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn('[useChecklists] Error with URL', remoteUrl, ':', lastError.message);
      continue;
    }
  }
  
  // If all URLs failed, log and return empty array
  const errorMessage = lastError ? lastError.message : 'All fetch attempts failed';
  console.error('[useChecklists] All fetch attempts failed. Last error:', errorMessage);
  return [] as Sections;
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  const checklists = useChecklists();
  // Create a signal that always contains an array
  const checklistsSignal = useSignal<Sections>([]);
  
  // Update signal when checklists data loads
  useTask$(({ track }) => {
    track(() => checklists.value);
    const value = checklists.value;
    if (value !== undefined && value !== null) {
      if (Array.isArray(value) && value.length > 0) {
        checklistsSignal.value = value;
      } else if (!Array.isArray(value)) {
        // Ensure we always have an array
        checklistsSignal.value = [];
      }
    }
  });
  
  // Initialize with current value if available
  if (checklists.value !== undefined && checklists.value !== null && Array.isArray(checklists.value)) {
    checklistsSignal.value = checklists.value;
  }
  
  useContextProvider(ChecklistContext, checklistsSignal);
  
  // Initialize with default locale, will be synced from localStorage on client
  const locale = useSignal<Locale>('en');
  const t = useStore<Translations>(translations.en);
  
  const changeLocale = $((newLocale: Locale) => {
    locale.value = newLocale;
    const newTranslations = translations[newLocale] || translations.en;
    // Update all translation keys
    Object.keys(newTranslations).forEach((key) => {
      const translationKey = key as keyof Translations;
      Object.assign(t[translationKey], newTranslations[translationKey]);
    });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('locale', JSON.stringify(newLocale));
      document.documentElement.lang = newLocale;
    }
  });
  
  useContextProvider(LocaleContext, {
    locale,
    t,
    changeLocale,
  });

  return (
    <>
      <Navbar />
      <main class="bg-base-100 min-h-full">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
