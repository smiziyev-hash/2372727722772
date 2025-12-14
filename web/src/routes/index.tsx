import { component$, useContext } from '@builder.io/qwik';
import { type DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/furniture/hero";
import SectionLinkGrid from "~/components/psc/section-link-grid";
import Progress from "~/components/psc/progress";

import { ChecklistContext } from '~/store/checklist-context';

import { useChecklist } from '~/store/local-checklist-store';

export default component$(() => { 
  const checklists = useContext(ChecklistContext);

  const localChecklist = useChecklist();

  // Ensure we always have an array
  const sections = localChecklist.checklist.checklist || 
    (Array.isArray(checklists.value) ? checklists.value : []);

  return (
    <>
      <Hero />
      <Progress />
      <SectionLinkGrid sections={sections} />
    </>
  );
});

export const head: DocumentHead = {
  title: "InkSec",
  meta: [
    {
      name: "description",
      content: "The ultimate personal security checklist, for securing your digital life.",
    },
  ],
};
