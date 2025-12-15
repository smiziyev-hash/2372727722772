import { component$, useContextProvider, Slot, useSignal, useStore, $, useTask$ } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import jsyaml from "js-yaml";

import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import { LocaleContext, type Locale } from "~/store/locale-store";
import { translations, type Translations } from "~/i18n/translations";
import type { Sections } from "~/types/PSC";

export const useChecklists = routeLoader$(async ({ url }) => {
  // Load from local public folder (works in dev mode)
  const localUrl = '/personal-security-checklist.yml';
  
  try {
    // Fetch from local public folder
    const response = await fetch(new URL(localUrl, url.origin), {
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
  const checklistsSignal = useSignal<Sections>([]);
  
  useTask$(({ track }) => {
    track(() => checklists.value);
    const value = checklists.value;
    if (Array.isArray(value)) {
      checklistsSignal.value = value;
    } else {
      checklistsSignal.value = [];
    }
  });
  
  if (checklists.value !== undefined && checklists.value !== null && Array.isArray(checklists.value)) {
    checklistsSignal.value = checklists.value;
  }
  
  useContextProvider(ChecklistContext, checklistsSignal);
  
  const locale = useSignal<Locale>('en');
  const t = useStore<Translations>(translations.en);
  
  const changeLocale = $((newLocale: Locale) => {
    locale.value = newLocale;
    const newTranslations = translations[newLocale] || translations.en;
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
