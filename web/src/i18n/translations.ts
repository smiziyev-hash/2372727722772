export interface Translations {
  // Common
  common: {
    done: string;
    ignore: string;
    loading: string;
    close: string;
    reset: string;
    show: string;
    hide: string;
    all: string;
    remaining: string;
    completed: string;
    filter: string;
    basic: string;
    optional: string;
    advanced: string;
    details: string;
    advice: string;
    level: string;
    items: string;
    notYetStarted: string;
    usefulLinks: string;
    recommendedSoftware: string;
    viewOnGitHub: string;
  };
  
  // Hero
  hero: {
    title: string;
    subtitle: string;
  };
  
  // Progress
  progress: {
    yourProgress: string;
    completedOutOf: string;
    completedOutOfText: string;
    noStatsYet: string;
    noStatsDescription: string;
    getStarted: string;
    completedOf: string;
    nextUp: string;
    nextUpDescription: string;
    viewDirectory: string;
  };
  
  // Checklist Table
  checklistTable: {
    done: string;
    advice: string;
    level: string;
    details: string;
    complete: string;
    ignored: string;
    resetFilters: string;
    showFilters: string;
    hideFilters: string;
    show: string;
    all: string;
    remaining: string;
    completed: string;
    filter: string;
    basic: string;
    optional: string;
    advanced: string;
  };
  
  // Section Link Grid
  sectionLinkGrid: {
    done: string;
    items: string;
    notYetStarted: string;
  };
  
  // Checklist Page
  checklistPage: {
    usefulLinks: string;
    recommendedSoftware: string;
    courses: { title: string; url: string }[];
  };
  
  // About Page
  about: {
    title: string;
    aboutChecklist: string;
    contributing: string;
    acknowledgments: string;
    sponsors: string;
    sponsorsDescription: string;
    contributors: string;
    contributorsDescription: string;
    aboutAuthor: string;
    authorDescription: string;
    license: string;
    licenseDescription: string;
    whatDoesThisMean: string;
    whatDoesThisMeanDescription: string;
  };
  
  // Articles
  articles: {
    whySecurityMatters: string;
    securityListShort: string;
    helpfulLinks: string;
    securityGadgets: string;
    privacyRespectingSoftware: string;
  };
  
  // Meta
  meta: {
    siteName: string;
    siteDescription: string;
    defaultTitle: string;
  };
}

export const translations: Record<string, Translations> = {
  en: {
    common: {
      done: 'Done?',
      ignore: 'Ignore',
      loading: 'Loading...',
      close: 'Close',
      reset: 'Reset',
      show: 'Show',
      hide: 'Hide',
      all: 'All',
      remaining: 'Remaining',
      completed: 'Completed',
      filter: 'Filter',
      basic: 'Basic',
      optional: 'Optional',
      advanced: 'Advanced',
      details: 'Details',
      advice: 'Advice',
      level: 'Level',
      items: 'Items',
      notYetStarted: 'Not yet started',
      usefulLinks: 'Useful Links',
      recommendedSoftware: 'Recommended Software',
      viewOnGitHub: 'View on GitHub',
    },
    hero: {
      title: 'Digital Security Checklist',
      subtitle: 'Your guide to securing your digital life and protecting your privacy',
    },
    progress: {
      yourProgress: 'Your Progress',
      completedOutOf: "You've completed",
      completedOutOfText: "out of",
      noStatsYet: 'No stats yet',
      noStatsDescription: "You'll see your progress here, once you start ticking items off the checklists",
      getStarted: 'Get started, by selecting a checklist below',
      completedOf: 'Completed',
      nextUp: 'We recommend regularly reviewing Company policies that are periodically published and updated on our portal',
      nextUpDescription: 'Link',
      viewDirectory: 'https://inktech.peopleforce.io/knowledge_base/categories',
    },
    checklistTable: {
      done: 'Done?',
      advice: 'Advice',
      level: 'Level',
      details: 'Details',
      complete: 'complete',
      ignored: 'ignored',
      resetFilters: 'Reset Filters',
      showFilters: 'Show Filters',
      hideFilters: 'Hide Filters',
      show: 'Show',
      all: 'All',
      remaining: 'Remaining',
      completed: 'Completed',
      filter: 'Filter',
      basic: 'Basic',
      optional: 'Optional',
      advanced: 'Advanced',
    },
    sectionLinkGrid: {
      done: 'Done',
      items: 'Items',
      notYetStarted: 'Not yet started',
    },
    checklistPage: {
      usefulLinks: 'Training Courses',
      recommendedSoftware: 'Recommended Training Courses',
      courses: [
        { title: 'Course "Data Security"', url: 'https://inktech.sana.ai/s/jJiEzNTxyhmi' },
        { title: 'Interactive Course "How to Recognize Phishing"', url: 'https://inktech.sana.ai/s/JDFUKZKPafny' },
        { title: 'Course "Fundamentals of Information Security"', url: 'https://inktech.sana.ai/s/kUJ8sCX94Lwx' },
        { title: 'Course "Fundamentals of General Data Protection Regulation (GDPR)"', url: 'https://inktech.sana.ai/s/RDrZjFwr9F3b' },
      ],
    },
    about: {
      title: 'About | InkSec',
      aboutChecklist: 'About the Security Checklist',
      contributing: 'Contributing',
      acknowledgments: 'Acknowledgments',
      sponsors: 'Sponsors',
      sponsorsDescription: "Huge thanks to the following sponsors, for their ongoing support 💖",
      contributors: 'Contributors',
      contributorsDescription: "This project exists thanks to all the people who've helped build and maintain it.\nSpecial thanks to the below, top-100 contributors 🌟",
      aboutAuthor: 'About the Author',
      authorDescription: 'This project was created by the security team. The objective of this project is to give you practical guidance on how to improve your digital security, and protect your privacy online. The checklist is a living document, and will be updated regularly to reflect the latest threats and best practices.',
      license: 'License',
      licenseDescription: 'This project is split-licensed, with the checklist content (located in personal-security-checklist.yml) being licensed under CC BY-NC-SA 4.0. And everything else (including all the code), licensed under MIT.',
      whatDoesThisMean: 'What does this means for you?',
      whatDoesThisMeanDescription: 'This means that for everything (except the checklist YAML file), you have almost unlimited freedom to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software. All that we ask is that you include the original copyright notice and permission notice in any copies of the software. And for the security-list content you can share and adapt this content as long as you give appropriate credit, don\'t use it for commercial purposes, and distribute your contributions under the same license.',
    },
    articles: {
      whySecurityMatters: 'Why security matters?',
      securityListShort: 'Security List: Short Version',
      helpfulLinks: 'Helpful Links',
      securityGadgets: 'Security Gadgets',
      privacyRespectingSoftware: 'Privacy-Respecting Software',
    },
    meta: {
      siteName: 'InkSec',
      siteDescription: 'The ultimate personal security checklist to secure your digital life',
      defaultTitle: 'InkSec - The ultimate personal security checklist to secure your digital life',
    },
  },
  ru: {
    common: {
      done: 'Выполнено?',
      ignore: 'Игнорировать',
      loading: 'Загрузка...',
      close: 'Закрыть',
      reset: 'Сбросить',
      show: 'Показать',
      hide: 'Скрыть',
      all: 'Все',
      remaining: 'Осталось',
      completed: 'Выполнено',
      filter: 'Фильтр',
      basic: 'Базовый',
      optional: 'Опционально',
      advanced: 'Продвинутый',
      details: 'Детали',
      advice: 'Совет',
      level: 'Уровень',
      items: 'Элементы',
      notYetStarted: 'Еще не начато',
      usefulLinks: 'Полезные ссылки',
      recommendedSoftware: 'Рекомендуемое программное обеспечение',
      viewOnGitHub: 'Посмотреть на GitHub',
    },
    hero: {
      title: 'Чеклист цифровой безопасности',
      subtitle: 'Ваш гид по защите цифровой жизни и конфиденциальности',
    },
    progress: {
      yourProgress: 'Ваш прогресс',
      completedOutOf: 'Вы выполнили',
      completedOutOfText: 'из',
      noStatsYet: 'Пока нет статистики',
      noStatsDescription: 'Ваш прогресс появится здесь, как только вы начнете отмечать элементы в чеклистах',
      getStarted: 'Начните, выбрав чеклист ниже',
      completedOf: 'Выполнено',
      nextUp: 'Рекомендуем постоянно ознакамливаться с политиками Компании которые периодически публикуются и обновляются на нашем портале',
      nextUpDescription: 'Ссылка',
      viewDirectory: 'https://inktech.peopleforce.io/knowledge_base/categories',
    },
    checklistTable: {
      done: 'Выполнено?',
      advice: 'Совет',
      level: 'Уровень',
      details: 'Детали',
      complete: 'выполнено',
      ignored: 'игнорировано',
      resetFilters: 'Сбросить фильтры',
      showFilters: 'Показать фильтры',
      hideFilters: 'Скрыть фильтры',
      show: 'Показать',
      all: 'Все',
      remaining: 'Осталось',
      completed: 'Выполнено',
      filter: 'Фильтр',
      basic: 'Базовый',
      optional: 'Опционально',
      advanced: 'Продвинутый',
    },
    sectionLinkGrid: {
      done: 'Выполнено',
      items: 'Элементы',
      notYetStarted: 'Еще не начато',
    },
    checklistPage: {
      usefulLinks: 'Обучающие курсы',
      recommendedSoftware: 'Рекомендуемые обучающие курсы',
      courses: [
        { title: 'Курс "Безопасность данных"', url: 'https://inktech.sana.ai/s/jJiEzNTxyhmi' },
        { title: 'Интерактивный курс "Как распознать фишинг"', url: 'https://inktech.sana.ai/s/JDFUKZKPafny' },
        { title: 'Курс "Основы информационной безопасности"', url: 'https://inktech.sana.ai/s/kUJ8sCX94Lwx' },
        { title: 'Курс "Основы Общего регламента о защите персональных данных (GDPR)"', url: 'https://inktech.sana.ai/s/RDrZjFwr9F3b' },
      ],
    },
    about: {
      title: 'О проекте | InkSec',
      aboutChecklist: 'О чеклисте безопасности',
      contributing: 'Участие в разработке',
      acknowledgments: 'Благодарности',
      sponsors: 'Спонсоры',
      sponsorsDescription: 'Огромная благодарность следующим спонсорам за их постоянную поддержку 💖',
      contributors: 'Участники',
      contributorsDescription: 'Этот проект существует благодаря всем людям, которые помогли его создать и поддерживать.\nОсобая благодарность топ-100 участникам ниже 🌟',
      aboutAuthor: 'Об авторах',
      authorDescription: 'Этот проект создан командой безопасности. Цель этого проекта - дать вам практические рекомендации о том, как улучшить вашу цифровую безопасность и защитить вашу конфиденциальность в интернете. Чеклист - это живой документ, который будет регулярно обновляться, чтобы отражать последние угрозы и лучшие практики.',
      license: 'Лицензия',
      licenseDescription: 'Этот проект имеет раздельное лицензирование: содержимое чеклиста (находится в personal-security-checklist.yml) лицензировано под CC BY-NC-SA 4.0. Все остальное (включая весь код) лицензировано под MIT.',
      whatDoesThisMean: 'Что это значит для вас?',
      whatDoesThisMeanDescription: 'Это означает, что для всего (кроме YAML файла чеклиста) у вас есть почти неограниченная свобода использовать, копировать, изменять, объединять, публиковать, распространять, сублицензировать и/или продавать копии этого программного обеспечения. Все, о чем мы просим, это включить оригинальное уведомление об авторских правах и уведомление о разрешении в любых копиях программного обеспечения. Что касается содержимого списка безопасности, вы можете делиться и адаптировать это содержимое при условии, что вы даете соответствующую атрибуцию, не используете его в коммерческих целях и распространяете свои вкладки под той же лицензией.',
    },
    articles: {
      whySecurityMatters: 'Почему важна безопасность?',
      securityListShort: 'Список безопасности: краткая версия',
      helpfulLinks: 'Полезные ссылки',
      securityGadgets: 'Гаджеты безопасности',
      privacyRespectingSoftware: 'Программное обеспечение, уважающее конфиденциальность',
    },
    meta: {
      siteName: 'InkSec',
      siteDescription: 'Идеальный чеклист личной безопасности для защиты вашей цифровой жизни',
      defaultTitle: 'InkSec - Идеальный чеклист личной безопасности для защиты вашей цифровой жизни',
    },
  },
};

