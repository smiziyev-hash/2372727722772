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

export const useChecklists = routeLoader$(async ({ url }) => {
  // Try to load from local file first, then fallback to remote
  try {
    const baseUrl = url.origin;
    const response = await fetch(`${baseUrl}/personal-security-checklist.yml`, {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    if (response.ok) {
      const text = await response.text();
      const parsed = jsyaml.load(text);
      if (parsed && Array.isArray(parsed)) {
        return parsed as Sections;
      }
    }
  } catch (e) {
    console.error('Failed to load local YAML:', e);
  }
  
  // Fallback to remote (our repository)
  try {
    const remoteUrl = 'https://raw.githubusercontent.com/inktech-sc/Digital_security_web/main/personal-security-checklist.yml';
    const response = await fetch(remoteUrl);
    if (response.ok) {
      const text = await response.text();
      const parsed = jsyaml.load(text);
      if (parsed && Array.isArray(parsed)) {
        return parsed as Sections;
      }
    }
  } catch (e) {
    console.error('Failed to load remote YAML:', e);
  }
  
  // Return empty array as last resort
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
  useContextProvider(ChecklistContext, checklists);
  
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
