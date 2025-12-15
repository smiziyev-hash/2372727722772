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
  // Try local file first (for development), then fallback to GitHub
  const localUrl = '/personal-security-checklist.yml';
  const remoteUrl = 'https://raw.githubusercontent.com/inktech-sc/Digital_security_web/main/checklist-data.yml';
  
  try {
    // First try local file
    let response = await fetch(localUrl, {
      headers: {
        'Accept': 'text/yaml, text/plain, */*',
      },
    });
    
    // If local fails, try remote
    if (!response.ok) {
      console.log('Local file not found, trying remote...');
      response = await fetch(remoteUrl, {
        headers: {
          'Accept': 'text/yaml, text/plain, */*',
        },
      });
    }
    
    if (!response.ok) {
      throw new Error(`Failed to fetch YAML: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    
    if (!text || !text.trim()) {
      throw new Error('YAML file is empty');
    }
    
    const parsed = jsyaml.load(text);
    
    if (!parsed) {
      throw new Error('Failed to parse YAML');
    }
    
    let sections: Sections = [];
    if (Array.isArray(parsed)) {
      sections = parsed;
    } else if (typeof parsed === 'object' && parsed !== null) {
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
    
    return sections as Sections;
  } catch (error) {
    console.error('Error loading checklist:', error);
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
