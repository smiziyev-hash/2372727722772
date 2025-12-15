import { createContextId, type Signal, type QRL, useSignal, useStore } from '@builder.io/qwik';
import { translations, type Translations } from '~/i18n/translations';
import { useLocalStorage } from '~/hooks/useLocalStorage';

export type Locale = 'en' | 'ru';

export interface LocaleState {
  locale: Signal<Locale>;
  t: Translations;
  changeLocale: QRL<(newLocale: Locale) => void>;
}

export const LocaleContext = createContextId<LocaleState>('locale');

export const useLocale = () => {
  const [localeStorage, setLocaleStorage] = useLocalStorage('locale', 'en');
  const locale = useSignal<Locale>(localeStorage.value || 'en');
  const t = useStore<Translations>(translations[locale.value] || translations.en);
  
  const changeLocale = (newLocale: Locale) => {
    locale.value = newLocale;
    setLocaleStorage(newLocale);
    Object.assign(t, translations[newLocale] || translations.en);
    // Update document language
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale;
    }
  };
  
  // Sync with storage changes
  if (localeStorage.value !== locale.value) {
    locale.value = localeStorage.value;
    Object.assign(t, translations[locale.value] || translations.en);
  }
  
  return {
    locale: locale.value,
    t,
    changeLocale,
  };
};

