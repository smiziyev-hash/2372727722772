import { component$, useContext } from "@builder.io/qwik";
import { LocaleContext } from "~/store/locale-store";

export default component$(() => {
  const { locale: localeSignal } = useContext(LocaleContext);
  const locale = localeSignal.value;

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>
        {locale === 'ru' 
          ? <>Разработано <span class="font-bold">командой безопасности</span> 2025</>
          : <>Developed by <span class="font-bold">security team</span> 2025</>
        }
      </p>
    </aside>
  </footer>
  );
});
