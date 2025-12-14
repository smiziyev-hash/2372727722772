import { component$, useContextProvider, Slot, useSignal, useStore, $ } from "@builder.io/qwik";
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
  // Load from remote repository (more reliable in Edge runtime)
  const remoteUrl = 'https://raw.githubusercontent.com/inktech-sc/Digital_security_web/main/personal-security-checklist.yml';
  
  try {
    const response = await fetch(remoteUrl, {
      headers: {
        'Accept': 'text/yaml, text/plain, */*',
      },
    });
    
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
    
    if (!Array.isArray(parsed)) {
      throw new Error('YAML is not an array');
    }
    
    if (parsed.length === 0) {
      throw new Error('YAML array is empty');
    }
    
    return parsed as Sections;
  } catch (error) {
    // Log error for debugging but return empty array to prevent crash
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
  const checklistsSignal = useSignal<Sections>(Array.isArray(checklists.value) ? checklists.value : []);
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
