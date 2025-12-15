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

export const useChecklists = routeLoader$(async ({ url }) => {
  // Try to load from local public folder first, then fallback to remote
  const localUrl = '/personal-security-checklist.yml';
  const remoteUrl = 'https://raw.githubusercontent.com/inktech-sc/Digital_security_web/main/personal-security-checklist.yml';
  
  try {
    let response: Response | null = null;
    let lastError: Error | null = null;
    
    // Try local file first (works in Vercel Edge)
    try {
      const localFullUrl = new URL(localUrl, url.origin);
      response = await fetch(localFullUrl.toString(), {
        headers: {
          'Accept': 'text/yaml, text/plain, */*',
        },
      });
      
      if (!response.ok) {
        console.warn(`Local file fetch failed: ${response.status} ${response.statusText}`);
        response = null;
      }
    } catch (localError) {
      console.warn('Local file fetch error:', localError);
      lastError = localError instanceof Error ? localError : new Error(String(localError));
      response = null;
    }
    
    // If local fails, try remote
    if (!response || !response.ok) {
      try {
        response = await fetch(remoteUrl, {
          headers: {
            'Accept': 'text/yaml, text/plain, */*',
          },
        });
        
        if (!response.ok) {
          throw new Error(`Remote fetch failed: ${response.status} ${response.statusText}`);
        }
      } catch (remoteError) {
        console.error('Remote file fetch error:', remoteError);
        lastError = remoteError instanceof Error ? remoteError : new Error(String(remoteError));
        throw new Error(`Failed to fetch YAML from both local and remote: ${lastError.message}`);
      }
    }
    
    if (!response) {
      throw new Error('No response from fetch');
    }
    
    const text = await response.text();
    
    if (!text || !text.trim()) {
      throw new Error('YAML file is empty');
    }
    
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
    
    console.log(`Successfully loaded ${sections.length} sections from YAML`);
    return sections as Sections;
  } catch (error) {
    // Log error for debugging but return empty array to prevent crash
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error loading checklist:', errorMessage, error);
    // Return empty array to prevent crash, but log the error
    return [] as Sections;
  }
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
