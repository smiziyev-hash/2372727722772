export const sectionTranslations: Record<string, { en: string; ru: string }> = {
  'Authentication': { en: 'Authentication', ru: 'Аутентификация' },
  'Web Browsing': { en: 'Web Browsing', ru: 'Веб-браузинг' },
  'Email': { en: 'Email', ru: 'Почта' },
  'Mobile Devices': { en: 'Mobile Devices', ru: 'Мобильные' },
  'Social Media': { en: 'Social Media', ru: 'Соцсети' },
  'Messaging': { en: 'Messaging', ru: 'Мессенджеры' },
  'Networks': { en: 'Networks', ru: 'Сети' },
  'Personal Computers': { en: 'Personal Computers', ru: 'ПК' },
  'Smart Home': { en: 'Smart Home', ru: 'Умный дом' },
  'Personal Finance': { en: 'Personal Finance', ru: 'Финансы' },
  'Human Aspect': { en: 'Human Aspect', ru: 'Человек' },
  'Physical Security': { en: 'Physical Security', ru: 'Физическая' },
  'File Storage': { en: 'File Storage', ru: 'Хранилище файлов' },
  'Backup': { en: 'Backup', ru: 'Резервное копирование' },
  'Network Security': { en: 'Network Security', ru: 'Сетевая безопасность' },
  'Operating System': { en: 'Operating System', ru: 'Операционная система' },
  'Software Updates': { en: 'Software Updates', ru: 'Обновления программного обеспечения' },
  'Privacy': { en: 'Privacy', ru: 'Конфиденциальность' },
  'Online Accounts': { en: 'Online Accounts', ru: 'Онлайн-аккаунты' },
  'Data Encryption': { en: 'Data Encryption', ru: 'Шифрование данных' },
  'VPN': { en: 'VPN', ru: 'VPN' },
  'Cloud Services': { en: 'Cloud Services', ru: 'Облачные сервисы' },
  'IoT Devices': { en: 'IoT Devices', ru: 'Устройства IoT' },
};

export const sectionDescriptionTranslations: Record<string, { en: string; ru: string }> = {
  'Authentication': {
    en: 'Securing your online account login credentials',
    ru: 'Защита учетных данных для входа в онлайн-аккаунты'
  },
  'Web Browsing': {
    en: 'Avoiding tracking, censorship, and data collection online',
    ru: 'Избегание отслеживания, цензуры и сбора данных в интернете'
  },
  'Email': {
    en: 'Protecting the gateway to your online accounts',
    ru: 'Защита шлюза к вашим онлайн-аккаунтам'
  },
  'Messaging': {
    en: 'Keeping your communications private and secure',
    ru: 'Сохранение ваших коммуникаций приватными и безопасными'
  },
  'Social Media': {
    en: 'Minimizing the risks associated with using online communities',
    ru: 'Минимизация рисков, связанных с использованием онлайн-сообществ'
  },
  'Networks': {
    en: 'Safeguarding your network traffic',
    ru: 'Защита вашего сетевого трафика'
  },
  'Mobile Devices': {
    en: 'Reduce invasive tracking for cells, smartphones and tablets',
    ru: 'Снижение инвазивного отслеживания для сотовых телефонов, смартфонов и планшетов'
  },
  'Personal Computers': {
    en: "Securing your PC's operating system, data & activity",
    ru: 'Защита операционной системы, данных и активности вашего ПК'
  },
  'Smart Home': {
    en: 'Using IoT devices without compromising your privacy',
    ru: 'Использование устройств IoT без компрометации вашей конфиденциальности'
  },
  'Personal Finance': {
    en: 'Protecting your funds, financial accounts and transactions',
    ru: 'Защита ваших средств, финансовых аккаунтов и транзакций'
  },
  'Human Aspect': {
    en: 'Avoiding social engineering security risks',
    ru: 'Избегание рисков безопасности социальной инженерии'
  },
  'Physical Security': {
    en: 'Taking measures to prevent IRL security incidents',
    ru: 'Принятие мер для предотвращения инцидентов физической безопасности'
  },
};

export const translateSectionTitle = (title: string, locale: 'en' | 'ru'): string => {
  const translation = sectionTranslations[title];
  if (translation) {
    return translation[locale];
  }
  return title; // Fallback to original if no translation found
};

export const translateSectionDescription = (title: string, locale: 'en' | 'ru', originalDescription?: string): string => {
  const translation = sectionDescriptionTranslations[title];
  if (translation) {
    return translation[locale];
  }
  return originalDescription || ''; // Fallback to original if no translation found
};

