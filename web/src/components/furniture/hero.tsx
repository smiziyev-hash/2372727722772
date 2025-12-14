import { component$, useContext } from "@builder.io/qwik";

import Icon from "~/components/core/icon";
import { LocaleContext } from "~/store/locale-store";

export default component$(() => {
  const { t } = useContext(LocaleContext);
  
  return (
    <div class="hero mb-8 mx-auto xl:max-w-7xl max-w-6xl w-full xl:px-10">
      <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
        <div class="max-w-2xl flex flex-col place-items-center">
          <h1 class="text-5xl font-bold">{t.hero.title}</h1>
          <p class="subtitle pb-6">{t.hero.subtitle}</p>
          <Icon class="mb-4" icon="shield" width={120} height={120}  />
        </div>
      </div>
    </div>
  );
});
