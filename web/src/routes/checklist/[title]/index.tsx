import { component$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { marked } from 'marked';

import Icon from '~/components/core/icon';
import { ChecklistContext } from '~/store/checklist-context';
import { LocaleContext } from '~/store/locale-store';
import { translateSectionTitle } from '~/i18n/section-translations';
import { translateChecklistContent } from '~/i18n/checklist-content-translations';
import type { Section } from "~/types/PSC";
import Table from '~/components/psc/checklist-table';

export default component$(() => {
  const { t, locale: localeSignal } = useContext(LocaleContext);
  const locale = localeSignal.value;

  const checklists = useContext(ChecklistContext);

  const loc = useLocation();
  const slug = loc.params.title;

  // Ensure we always have an array
  const sections = Array.isArray(checklists.value) ? checklists.value : [];
  const section: Section | undefined = sections.find((item: Section) => item.slug === slug);
  
  const sectionTitle = section ? translateSectionTitle(section.title, locale) : '';

  const parseMarkdown = (text: string | undefined): string => {
    return marked.parse(text || '', { async: false }) as string || '';
  };
  
  return (
    <div class="md:my-8 md:px-16 sm:px-2 rounded-md">
    <article class="bg-back p-8 mx-auto w-full max-w-[1200px] rounded-lg shadow-md">
      <h1 class={['gap-2 text-5xl font-bold capitalize flex']}>
        <Icon height={36} width={36} icon={section?.icon || 'star'}  />
        {sectionTitle || section?.title}
      </h1>
      <p class="py-2" dangerouslySetInnerHTML={parseMarkdown(
        section?.slug && locale === 'ru' 
          ? translateChecklistContent(section.slug, undefined, locale, 'intro', section?.intro) || section?.intro
          : section?.intro
      )}></p>

      <div class="overflow-x-auto">
        {section && (<Table section={section} />)}
      </div>

      <div class="divider my-4">{t.checklistPage.usefulLinks}</div>
      <h3 class="text-xl my-2">{t.checklistPage.recommendedSoftware}</h3>
      <ul class="list-disc pl-4">
        {t.checklistPage.courses.map((course, index) => (
          <li key={index}>
            <a class="link link-primary" href={course.url} target="_blank" rel="noopener noreferrer">{course.title}</a>
          </li>
        ))}
      </ul>

    </article>
    </div>
  );
});

