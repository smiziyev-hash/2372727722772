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
  // Try to load from local file first, then fallback to remote
  try {
    const response = await fetch('/personal-security-checklist.yml');
    if (response.ok) {
      const text = await response.text();
      return jsyaml.load(text) as Sections;
    }
  } catch (e) {
    // Fallback to remote
  }
  const remoteUrl = 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/HEAD/personal-security-checklist.yml';
  return fetch(remoteUrl)
    .then((res) => res.text())
    .then((res) => jsyaml.load(res) as Sections)
    .catch(() => []);
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
