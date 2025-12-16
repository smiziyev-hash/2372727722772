// Translations for checklist content (intro texts and checklist items)
// Structure: section slug -> translations

export const checklistContentTranslations: Record<string, {
  intro: { en: string; ru: string };
  items: Record<string, {
    point: { en: string; ru: string };
    details: { en: string; ru: string };
  }>;
}> = {
  'authentication': {
    intro: {
      en: `Most reported data breaches are caused by the use of weak, default, or stolen passwords (according to [this Verizon report](http://www.verizonenterprise.com/resources/reports/rp_dbir-2016-executive-summary_xg_en.pdf)). Use long, strong, and unique passwords, manage them in a secure password manager, enable 2-factor authentication, keep on top of breaches, and take care while logging into your accounts.`,
      ru: `Большинство зарегистрированных утечек данных вызваны использованием слабых, стандартных или украденных паролей (согласно [этому отчету Verizon](http://www.verizonenterprise.com/resources/reports/rp_dbir-2016-executive-summary_xg_en.pdf)). Используйте длинные, надежные и уникальные пароли, управляйте ими в безопасном менеджере паролей, включите двухфакторную аутентификацию, следите за утечками и будьте осторожны при входе в свои аккаунты.`
    },
    items: {
      'Use a Strong Password': {
        point: { en: 'Use a Strong Password', ru: 'Используйте надежный пароль' },
        details: {
          en: `If your password is too short, or contains dictionary words, places, or names, then it can be easily cracked through brute force or guessed by someone. The easiest way to make a strong password is by making it long (12+ characters) — consider using a 'passphrase' made up of many words. Alternatively, use a password generator to create a long, strong random password. Have a play with [Security.org's How Secure Is My Password?](https://security.org/how-secure-is-my-password/), to get an idea of how quickly common passwords can be cracked. Read more about creating strong passwords: [securityinabox.org](https://securityinabox.org/en/passwords/passwords-and-2fa/).`,
          ru: `Если ваш пароль слишком короткий или содержит слова из словаря, названия мест или имена, то его можно легко взломать методом перебора или угадать. Самый простой способ создать надежный пароль — сделать его длинным (12+ символов) — рассмотрите возможность использования "парольной фразы", состоящей из нескольких слов. Альтернативно, используйте генератор паролей для создания длинного, надежного случайного пароля. Попробуйте [Security.org's How Secure Is My Password?](https://security.org/how-secure-is-my-password/), чтобы понять, как быстро можно взломать обычные пароли. Подробнее о создании надежных паролей: [securityinabox.org](https://securityinabox.org/en/passwords/passwords-and-2fa/).`
        }
      },
      "Don't Reuse Passwords": {
        point: { en: "Don't Reuse Passwords", ru: 'Не используйте пароли повторно' },
        details: {
          en: `If someone were to reuse a password and one site they had an account with suffered a leak, then a criminal could easily gain unauthorized access to their other accounts. This is usually done through large-scale automated login requests, and it is called Credential Stuffing. Unfortunately, this is all too common, but it's simple to protect against — use a different password for each of your online accounts.`,
          ru: `Если кто-то повторно использует пароль и один из сайтов, на котором у него есть аккаунт, пострадал от утечки, то преступник может легко получить несанкционированный доступ к его другим аккаунтам. Обычно это делается через массовые автоматизированные запросы на вход, и это называется Credential Stuffing. К сожалению, это очень распространено, но защититься просто — используйте разные пароли для каждого из ваших онлайн-аккаунтов.`
        }
      },
      'Use a Secure Password Manager': {
        point: { en: 'Use a Secure Password Manager', ru: 'Используйте безопасный менеджер паролей' },
        details: {
          en: `For most people, it is going to be near-impossible to remember hundreds of strong and unique passwords. A password manager is an application that generates, stores, and auto-fills your login credentials for you. All your passwords will be encrypted against 1 master password (which you must remember, and it should be very strong). Most password managers have browser extensions and mobile apps, so whatever device you are on, your passwords can be auto-filled. A good all-rounder is [Bitwarden](https://awesome-privacy.xyz/essentials/password-managers/bitwarden), or see [Recommended Password Managers](https://awesome-privacy.xyz/essentials/password-managers).`,
          ru: `Для большинства людей будет почти невозможно запомнить сотни надежных и уникальных паролей. Менеджер паролей — это приложение, которое генерирует, хранит и автоматически заполняет ваши учетные данные для входа. Все ваши пароли будут зашифрованы одним мастер-паролем (который вы должны запомнить, и он должен быть очень надежным). Большинство менеджеров паролей имеют расширения для браузера и мобильные приложения, поэтому на любом устройстве ваши пароли могут быть автоматически заполнены. Хороший универсальный вариант — [Bitwarden](https://awesome-privacy.xyz/essentials/password-managers/bitwarden), или посмотрите [Рекомендуемые менеджеры паролей](https://awesome-privacy.xyz/essentials/password-managers).`
        }
      },
      'Avoid Sharing Passwords': {
        point: { en: 'Avoid Sharing Passwords', ru: 'Избегайте совместного использования паролей' },
        details: {
          en: `While there may be times that you need to share access to an account with another person, you should generally avoid doing this because it makes it easier for the account to become compromised. If you absolutely do need to share a password — for example, when working on a team with a shared account — this should be done via features built into a password manager.`,
          ru: `Хотя иногда вам может понадобиться поделиться доступом к аккаунту с другим человеком, вам следует избегать этого, так как это облегчает компрометацию аккаунта. Если вам абсолютно необходимо поделиться паролем — например, при работе в команде с общим аккаунтом — это должно быть сделано через функции, встроенные в менеджер паролей.`
        }
      },
      'Enable 2-Factor Authentication': {
        point: { en: 'Enable 2-Factor Authentication', ru: 'Включите двухфакторную аутентификацию' },
        details: {
          en: `2FA is where you must provide both something you know (a password) and something you have (such as a code on your phone) to log in. This means that if anyone has your password (e.g., through phishing, malware, or a data breach), they will not be able to log into your account. It's easy to get started, download an authenticator app onto your phone, and then go to your account security settings and follow the steps to enable 2FA. Next time you log in on a new device, you will be prompted for the code that is displayed in the app on your phone (it works without internet, and the code usually changes every 30 seconds).`,
          ru: `2FA — это когда вы должны предоставить и то, что вы знаете (пароль), и то, что у вас есть (например, код на вашем телефоне) для входа. Это означает, что если кто-то получит ваш пароль (например, через фишинг, вредоносное ПО или утечку данных), он не сможет войти в ваш аккаунт. Легко начать: загрузите приложение-аутентификатор на свой телефон, затем перейдите в настройки безопасности аккаунта и следуйте инструкциям для включения 2FA. В следующий раз, когда вы войдете на новом устройстве, вам будет предложено ввести код, который отображается в приложении на вашем телефоне (оно работает без интернета, и код обычно меняется каждые 30 секунд).`
        }
      },
      'Keep Backup Codes Safe': {
        point: { en: 'Keep Backup Codes Safe', ru: 'Храните резервные коды в безопасности' },
        details: {
          en: `When you enable multi-factor authentication, you will usually be given several codes that you can use if your 2FA method is lost, broken, or unavailable. Keep these codes somewhere safe to prevent loss or unauthorized access. You should store these on paper or in a safe place on disk (e.g., in offline storage or an encrypted file/drive). Don't store these in your password manager as 2FA sources and passwords should be kept separately.`,
          ru: `Когда вы включаете многофакторную аутентификацию, вам обычно предоставляется несколько кодов, которые вы можете использовать, если ваш метод 2FA потерян, сломан или недоступен. Храните эти коды в безопасном месте, чтобы предотвратить потерю или несанкционированный доступ. Вы должны хранить их на бумаге или в безопасном месте на диске (например, в автономном хранилище или в зашифрованном файле/диске). Не храните их в менеджере паролей, так как источники 2FA и пароли должны храниться отдельно.`
        }
      },
      'Sign Up for Breach Alerts': {
        point: { en: 'Sign Up for Breach Alerts', ru: 'Подпишитесь на уведомления об утечках' },
        details: {
          en: `After a website suffers a significant data breach, the leaked data often ends up on the internet. Several websites collect these leaked records and allow you to search your email address to check if you are in any of their lists. Firefox Monitor, Have I Been Pwned, and DeHashed allow you to sign up for monitoring, where they will notify you if your email address appears in any new data sets. It is useful to know as soon as possible when this happens so that you can change your passwords for the affected accounts. Have i been pwned also has domain-wide notification, where you can receive alerts if any email addresses under your entire domain appear (useful if you use aliases for anonymous forwarding).`,
          ru: `После того, как веб-сайт пострадает от значительной утечки данных, утерянные данные часто попадают в интернет. Несколько веб-сайтов собирают эти утерянные записи и позволяют вам искать свой email-адрес, чтобы проверить, есть ли вы в каких-либо их списках. Firefox Monitor, Have I Been Pwned и DeHashed позволяют вам подписаться на мониторинг, где они уведомят вас, если ваш email-адрес появится в каких-либо новых наборах данных. Полезно знать как можно скорее, когда это происходит, чтобы вы могли изменить пароли для затронутых аккаунтов. Have i been pwned также имеет уведомления на уровне домена, где вы можете получать предупреждения, если какие-либо email-адреса под вашим доменом появятся (полезно, если вы используете алиасы для анонимной пересылки).`
        }
      },
      'Shield your Password/PIN': {
        point: { en: 'Shield your Password/PIN', ru: 'Прикрывайте пароль/PIN' },
        details: {
          en: `When typing your password in public places, ensure you are not in direct line of sight of a CCTV camera and that no one can see over your shoulder. Cover your password or pin code while you type, and do not reveal any plain text passwords on your screen.`,
          ru: `При вводе пароля в общественных местах убедитесь, что вы не находитесь в прямой видимости камеры видеонаблюдения и что никто не может видеть через ваше плечо. Прикрывайте пароль или PIN-код во время ввода и не показывайте пароли в открытом виде на экране.`
        }
      },
      'Update Critical Passwords Periodically': {
        point: { en: 'Update Critical Passwords Periodically', ru: 'Периодически обновляйте критичные пароли' },
        details: {
          en: `Database leaks and breaches are common, and, likely, several of your passwords are already somewhere online. Occasionally updating passwords of security-critical accounts can help mitigate this. But providing that all your passwords are long, strong, and unique, there is no need to do this too often — annually should be sufficient. Enforcing mandatory password changes within organisations is no longer recommended, as it encourages colleagues to select weaker passwords.`,
          ru: `Утечки и взломы баз данных распространены, и, вероятно, несколько ваших паролей уже где-то в интернете. Периодическое обновление паролей для критически важных с точки зрения безопасности аккаунтов может помочь смягчить это. Но при условии, что все ваши пароли длинные, надежные и уникальные, нет необходимости делать это слишком часто — ежегодно должно быть достаточно. Принудительная смена паролей в организациях больше не рекомендуется, так как это побуждает коллег выбирать более слабые пароли.`
        }
      },
      "Don't Save your Password in Browsers": {
        point: { en: "Don't Save your Password in Browsers", ru: 'Не сохраняйте пароль в браузерах' },
        details: {
          en: `Most modern browsers offer to save your credentials when you log into a site. Don't allow this, as they are not always encrypted and could allow someone to gain access to your accounts. Instead, use a dedicated password manager to store (and auto-fill) your passwords.`,
          ru: `Большинство современных браузеров предлагают сохранить ваши учетные данные при входе на сайт. Не разрешайте это, так как они не всегда зашифрованы и могут позволить кому-то получить доступ к вашим аккаунтам. Вместо этого используйте специальный менеджер паролей для хранения (и автоматического заполнения) ваших паролей.`
        }
      },
      "Avoid Logging In on Someone Else's Device": {
        point: { en: "Avoid Logging In on Someone Else's Device", ru: 'Избегайте входа на чужих устройствах' },
        details: {
          en: `Avoid logging in on other people's computers since you can't be sure their system is clean. Be especially cautious of public machines, as malware and tracking arr more common here. Using someone else's device is especially dangerous with critical accounts like online banking. When using someone else's machine, ensure that you're in a private/incognito session (Use Ctrl+Shift+N/ Cmd+Shift+N). This will request the browser to not save your credentials, cookies, and browsing history.`,
          ru: `Избегайте входа на чужих компьютерах, так как вы не можете быть уверены, что их система чиста. Будьте особенно осторожны с общественными машинами, так как вредоносное ПО и отслеживание здесь более распространены. Использование чужого устройства особенно опасно для критических аккаунтов, таких как онлайн-банкинг. При использовании чужой машины убедитесь, что вы находитесь в приватном/инкогнито-сеансе (используйте Ctrl+Shift+N/ Cmd+Shift+N). Это попросит браузер не сохранять ваши учетные данные, куки и историю просмотров.`
        }
      },
      'Avoid Password Hints': {
        point: { en: 'Avoid Password Hints', ru: 'Избегайте подсказок к паролю' },
        details: {
          en: `Some sites allow you to set password hints. Often, it is very easy to guess answers. In cases where password hints are mandatory, use random answers and record them in your password manager (Name of the first school: 6D-02-8B-!a-E8-8F-81).`,
          ru: `Некоторые сайты позволяют установить подсказки к паролю. Часто очень легко угадать ответы. В случаях, когда подсказки к паролю обязательны, используйте случайные ответы и записывайте их в менеджер паролей (Название первой школы: 6D-02-8B-!a-E8-8F-81).`
        }
      },
      'Never Answer Online Security Questions Truthfully': {
        point: { en: 'Never Answer Online Security Questions Truthfully', ru: 'Никогда не отвечайте на вопросы безопасности правдиво' },
        details: {
          en: `If a site asks security questions (such as place of birth, mother's maiden name, or first car, etc.), don't provide real answers. It is a trivial task for hackers to find out this information online or through social engineering. Instead, create a fictitious answer, and store it inside your password manager. Using real words is better than random characters, as explained here.`,
          ru: `Если сайт задает вопросы безопасности (например, место рождения, девичья фамилия матери или первая машина и т.д.), не предоставляйте реальные ответы. Для хакеров это тривиальная задача — узнать эту информацию в интернете или через социальную инженерию. Вместо этого создайте вымышленный ответ и сохраните его в менеджере паролей. Использование реальных слов лучше, чем случайные символы, как объясняется здесь.`
        }
      },
      "Don't Use a 4-digit PIN": {
        point: { en: "Don't Use a 4-digit PIN", ru: 'Не используйте 4-значный PIN' },
        details: {
          en: `Don't use a short PIN to access your smartphone or computer. Instead, use a text password or a much longer PIN. Numeric passphrases are easy to crack (A 4-digit pin has 10,000 combinations, compared to 7.4 million for a 4-character alpha-numeric code).`,
          ru: `Не используйте короткий PIN для доступа к смартфону или компьютеру. Вместо этого используйте текстовый пароль или гораздо более длинный PIN. Числовые парольные фразы легко взломать (4-значный PIN имеет 10 000 комбинаций по сравнению с 7,4 миллионами для 4-символьного буквенно-цифрового кода).`
        }
      },
      'Avoid Using SMS for 2FA': {
        point: { en: 'Avoid Using SMS for 2FA', ru: 'Избегайте использования SMS для 2FA' },
        details: {
          en: `When enabling multi-factor authentication, opt for app-based codes or a hardware token if supported. SMS is susceptible to several common threats, such as SIM-swapping and interception. There's also no guarantee of how securely your phone number will be stored or what else it will be used for. From a practical point of view, SMS will only work when you have a signal and can be slow. If a website or service requires the usage of an SMS number for recovery, consider purchasing a second pre-paid phone number only used for account recovery for these instances.`,
          ru: `При включении многофакторной аутентификации выбирайте коды на основе приложения или аппаратный токен, если это поддерживается. SMS уязвима для нескольких распространенных угроз, таких как SIM-своппинг и перехват. Также нет гарантии, насколько безопасно будет храниться ваш номер телефона или для чего еще он будет использоваться. С практической точки зрения, SMS будет работать только при наличии сигнала и может быть медленной. Если веб-сайт или сервис требует использования SMS-номера для восстановления, рассмотрите возможность покупки второго предоплаченного номера телефона, используемого только для восстановления аккаунта в этих случаях.`
        }
      },
      'Avoid Using your PM to Generate OTPs': {
        point: { en: 'Avoid Using your PM to Generate OTPs', ru: 'Избегайте использования менеджера паролей для генерации OTP' },
        details: {
          en: `Many password managers are also able to generate 2FA codes. It is best not to use your primary password manager as your 2FA authenticator as well, since it would become a single point of failure if compromised. Instead, use a dedicated authenticator app on your phone or laptop.`,
          ru: `Многие менеджеры паролей также могут генерировать коды 2FA. Лучше не использовать ваш основной менеджер паролей также в качестве аутентификатора 2FA, так как он станет единой точкой отказа в случае компрометации. Вместо этого используйте специальное приложение-аутентификатор на вашем телефоне или ноутбуке.`
        }
      },
      'Avoid Face Unlock': {
        point: { en: 'Avoid Face Unlock', ru: 'Избегайте разблокировки по лицу' },
        details: {
          en: `Most phones and laptops offer a facial recognition authentication feature, using the camera to compare a snapshot of your face with a stored hash. It may be very convenient, but there are numerous ways to fool it and gain access to the device through digital photos and reconstructions from CCTV footage. Unlike your password, there are likely photos of your face on the internet and videos recorded by surveillance cameras.`,
          ru: `Большинство телефонов и ноутбуков предлагают функцию аутентификации по распознаванию лица, используя камеру для сравнения снимка вашего лица с сохраненным хешем. Это может быть очень удобно, но есть множество способов обмануть это и получить доступ к устройству через цифровые фотографии и реконструкции из видеозаписей видеонаблюдения. В отличие от вашего пароля, в интернете, вероятно, есть фотографии вашего лица и видео, записанные камерами видеонаблюдения.`
        }
      },
      'Watch Out for Keyloggers': {
        point: { en: 'Watch Out for Keyloggers', ru: 'Остерегайтесь кейлоггеров' },
        details: {
          en: `A hardware keylogger is a physical device planted between your keyboard and the USB port, which intercepts all keystrokes and sometimes relays data to a remote server. It gives a hacker access to everything typed, including passwords. The best way to stay protected is just by checking your USB connection after your PC has been unattended. It is also possible for keyloggers to be planted inside the keyboard housing, so look for any signs that the case has been tampered with, and consider bringing your own keyboard to work. Data typed on a virtual keyboard, pasted from the clipboard, or auto-filled by a password manager can not be intercepted by a hardware keylogger.`,
          ru: `Аппаратный кейлоггер — это физическое устройство, установленное между клавиатурой и USB-портом, которое перехватывает все нажатия клавиш и иногда передает данные на удаленный сервер. Это дает хакеру доступ ко всему, что набрано, включая пароли. Лучший способ защититься — просто проверить USB-соединение после того, как ваш ПК оставался без присмотра. Также возможно, что кейлоггеры могут быть установлены внутри корпуса клавиатуры, поэтому ищите любые признаки того, что корпус был вскрыт, и рассмотрите возможность принести свою клавиатуру на работу. Данные, введенные на виртуальной клавиатуре, вставленные из буфера обмена или автоматически заполненные менеджером паролей, не могут быть перехвачены аппаратным кейлоггером.`
        }
      },
      'Consider a Hardware Token': {
        point: { en: 'Consider a Hardware Token', ru: 'Рассмотрите аппаратный токен' },
        details: {
          en: `A U2F/FIDO2 security key is a USB (or NFC) device that you insert while logging in to an online service to verify your identity instead of entering a OTP from your authenticator. SoloKey and NitroKey are examples of such keys. They bring with them several security benefits. Since the browser communicates directly with the device, it cannot be fooled as to which host is requesting authentication because the TLS certificate is checked. This post is a good explanation of the security of using FIDO U2F tokens. Of course, it is important to store the physical key somewhere safe or keep it on your person. Some online accounts allow for several methods of 2FA to be enabled.`,
          ru: `U2F/FIDO2 ключ безопасности — это USB (или NFC) устройство, которое вы вставляете при входе в онлайн-сервис для проверки вашей личности вместо ввода OTP из вашего аутентификатора. SoloKey и NitroKey — примеры таких ключей. Они приносят с собой несколько преимуществ безопасности. Поскольку браузер общается напрямую с устройством, его нельзя обмануть относительно того, какой хост запрашивает аутентификацию, потому что проверяется TLS-сертификат. Этот пост хорошо объясняет безопасность использования токенов FIDO U2F. Конечно, важно хранить физический ключ в безопасном месте или держать его при себе. Некоторые онлайн-аккаунты позволяют включить несколько методов 2FA.`
        }
      },
      'Consider Offline Password Manager': {
        point: { en: 'Consider Offline Password Manager', ru: 'Рассмотрите офлайн-менеджер паролей' },
        details: {
          en: `For increased security, an encrypted offline password manager will give you full control over your data. KeePass is a popular choice, with lots of plugins and community forks with additional compatibility and functionality. Popular clients include: KeePassXC (desktop), KeePassDX (Android) and StrongBox (iOS). The drawback being that it may be slightly less convenient for some, and it will be up to you to back it up and store it securely.`,
          ru: `Для повышения безопасности зашифрованный офлайн-менеджер паролей даст вам полный контроль над вашими данными. KeePass — популярный выбор, с множеством плагинов и форков сообщества с дополнительной совместимостью и функциональностью. Популярные клиенты включают: KeePassXC (настольный), KeePassDX (Android) и StrongBox (iOS). Недостатком является то, что это может быть немного менее удобно для некоторых, и вам придется самостоятельно делать резервные копии и хранить их безопасно.`
        }
      },
      'Consider Unique Usernames': {
        point: { en: 'Consider Unique Usernames', ru: 'Рассмотрите уникальные имена пользователей' },
        details: {
          en: `Having different passwords for each account is a good first step, but if you also use a unique username, email, or phone number to log in, then it will be significantly harder for anyone trying to gain unauthorised access. The easiest method for multiple emails, is using auto-generated aliases for anonymous mail forwarding. This is where [anything]@yourdomain.com will arrive in your inbox, allowing you to use a different email for each account (see Mail Alias Providers). Usernames are easier since you can use your password manager to generate, store, and auto-fill these. Virtual phone numbers can be generated through your VOIP provider.`,
          ru: `Использование разных паролей для каждого аккаунта — хороший первый шаг, но если вы также используете уникальное имя пользователя, email или номер телефона для входа, то будет значительно сложнее для любого, кто пытается получить несанкционированный доступ. Самый простой метод для нескольких email — использование автоматически генерируемых алиасов для анонимной пересылки почты. Это когда [что угодно]@yourdomain.com будет приходить в ваш почтовый ящик, позволяя вам использовать другой email для каждого аккаунта (см. Провайдеры почтовых алиасов). Имена пользователей проще, так как вы можете использовать менеджер паролей для генерации, хранения и автоматического заполнения. Виртуальные номера телефонов могут быть сгенерированы через вашего VOIP-провайдера.`
        }
      }
    }
  },
  'web-browsing': {
    intro: {
      en: `Most websites on the internet will use some form of tracking, often to gain insight into their users behaviour and preferences. This data can be incredibly detailed, and so is extremely valuable to corporations, governments and intellectual property thieves. Data breaches and leaks are common, and deanonymizing users web activity is often a trivial task.

There are two primary methods of tracking; stateful (cookie-based), and stateless (fingerprint-based). Cookies are small pieces of information, stored in your browser with a unique ID that is used to identify you. Browser fingerprinting is a highly accurate way to identify and track users wherever they go online. The information collected is quite comprehensive, and often includes browser details, OS, screen resolution, supported fonts, plugins, time zone, language and font preferences, and even hardware configurations.

This section outlines the steps you can take, to be better protected from threats, minimise online tracking and improve privacy.`,
      ru: `Большинство веб-сайтов в интернете используют какую-либо форму отслеживания, часто для получения информации о поведении и предпочтениях пользователей. Эти данные могут быть невероятно детальными и поэтому чрезвычайно ценны для корпораций, правительств и воров интеллектуальной собственности. Утечки данных распространены, и деанонимизация веб-активности пользователей часто является тривиальной задачей.

Существует два основных метода отслеживания: stateful (на основе cookies) и stateless (на основе отпечатков). Cookies — это небольшие фрагменты информации, хранящиеся в вашем браузере с уникальным ID, который используется для идентификации вас. Отпечаток браузера — это очень точный способ идентификации и отслеживания пользователей везде, где они находятся в интернете. Собираемая информация довольно обширна и часто включает детали браузера, ОС, разрешение экрана, поддерживаемые шрифты, плагины, часовой пояс, языковые и шрифтовые предпочтения и даже конфигурацию оборудования.

В этом разделе описаны шаги, которые вы можете предпринять, чтобы лучше защититься от угроз, минимизировать онлайн-отслеживание и улучшить конфиденциальность.`
    },
    items: {
      'Block Ads': {
        point: { en: 'Block Ads', ru: 'Блокируйте рекламу' },
        details: {
          en: `Using an ad-blocker can help improve your privacy, by blocking the trackers that ads implement. [uBlock Origin](https://awesome-privacy.xyz/networking/ad-blockers/ublock-origin) is a very efficient and open source browser addon, developed by Raymond Hill. When 3rd-party ads are displayed on a webpage, they have the ability to track you, gathering personal information about you and your habits, which can then be sold, or used to show you more targeted ads, and some ads are plain malicious or fake. Blocking ads also makes pages load faster, uses less data and provides a less cluttered experience.`,
          ru: `Использование блокировщика рекламы может помочь улучшить вашу конфиденциальность, блокируя трекеры, которые используют рекламные объявления. [uBlock Origin](https://awesome-privacy.xyz/networking/ad-blockers/ublock-origin) — это очень эффективное и открытое расширение для браузера, разработанное Раймондом Хиллом. Когда сторонняя реклама отображается на веб-странице, она может отслеживать вас, собирая личную информацию о вас и ваших привычках, которая затем может быть продана или использована для показа вам более целевой рекламы, а некоторые рекламные объявления просто вредоносны или поддельные. Блокировка рекламы также ускоряет загрузку страниц, использует меньше данных и обеспечивает менее загроможденный опыт.`
        }
      },
      'Ensure Website is Legitimate': {
        point: { en: 'Ensure Website is Legitimate', ru: 'Убедитесь, что веб-сайт легитимен' },
        details: {
          en: `It may sound obvious, but when you logging into any online accounts, double check the URL is correct. Storing commonly visited sites in your bookmarks is a good way to ensure the URL is easy to find. When visiting new websites, look for common signs that it could be unsafe: Browser warnings, redirects, on-site spam and pop-ups. You can also check a website using a tool, such as: [Virus Total](https://awesome-privacy.xyz/security-tools/online-tools/virus-total), [IsLegitSite](https://www.islegitsite.com), [Google Safe Browsing Status](https://transparencyreport.google.com/safe-browsing/search) if you are unsure.`,
          ru: `Это может показаться очевидным, но при входе в любые онлайн-аккаунты дважды проверьте, что URL правильный. Сохранение часто посещаемых сайтов в закладках — хороший способ убедиться, что URL легко найти. При посещении новых веб-сайтов ищите общие признаки того, что он может быть небезопасным: предупреждения браузера, редиректы, спам на сайте и всплывающие окна. Вы также можете проверить веб-сайт с помощью инструмента, такого как: [Virus Total](https://awesome-privacy.xyz/security-tools/online-tools/virus-total), [IsLegitSite](https://www.islegitsite.com), [Google Safe Browsing Status](https://transparencyreport.google.com/safe-browsing/search), если вы не уверены.`
        }
      },
      'Watch out for Browser Malware': {
        point: { en: 'Watch out for Browser Malware', ru: 'Остерегайтесь вредоносного ПО браузера' },
        details: {
          en: `Your system or browser can be compromised by spyware, miners, browser hijackers, malicious redirects, adware etc. You can usually stay protected, just by: ignoring pop-ups, be wary of what your clicking, don't proceed to a website if your browser warns you it may be malicious. Common signs of browser malware include: default search engine or homepage has been modified, toolbars, unfamiliar extensions or icons, significantly more ads, errors and pages loading much slower than usual. These articles from Heimdal explain [signs of browser malware](https://heimdalsecurity.com/blog/warning-signs-operating-system-infected-malware), [how browsers get infected](https://heimdalsecurity.com/blog/practical-online-protection-where-malware-hides) and [how to remove browser malware](https://heimdalsecurity.com/blog/malware-removal).`,
          ru: `Ваша система или браузер могут быть скомпрометированы шпионским ПО, майнерами, перехватчиками браузера, вредоносными редиректами, рекламным ПО и т.д. Обычно вы можете оставаться защищенными, просто: игнорируя всплывающие окна, осторожно относясь к тому, на что вы нажимаете, не переходя на веб-сайт, если ваш браузер предупреждает, что он может быть вредоносным. Общие признаки вредоносного ПО браузера включают: изменена поисковая система по умолчанию или домашняя страница, панели инструментов, незнакомые расширения или иконки, значительно больше рекламы, ошибки и страницы загружаются намного медленнее, чем обычно. Эти статьи от Heimdal объясняют [признаки вредоносного ПО браузера](https://heimdalsecurity.com/blog/warning-signs-operating-system-infected-malware), [как браузеры заражаются](https://heimdalsecurity.com/blog/practical-online-protection-where-malware-hides) и [как удалить вредоносное ПО браузера](https://heimdalsecurity.com/blog/malware-removal).`
        }
      },
      'Use a Privacy-Respecting Browser': {
        point: { en: 'Use a Privacy-Respecting Browser', ru: 'Используйте браузер, уважающий конфиденциальность' },
        details: {
          en: `[Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox) (with a few tweaks) and [Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser) are secure, private-respecting browsers. Both are fast, open source, user-friendly and available on all major operating systems. Your browser has access to everything that you do online, so if possible, avoid Google Chrome, Edge and Safari as (without correct configuration) all three of them, collect usage data, call home and allow for invasive tracking. Firefox requires a few changes to achieve optimal security, for example - [arkenfox](https://github.com/arkenfox/user.js/wiki) or [12byte](https://12bytes.org/firefox-configuration-guide-for-privacy-freaks-and-performance-buffs/)'s user.js configs. See more: [Privacy Browsers](https://github.com/Lissy93/awesome-privacy#browsers).`,
          ru: `[Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox) (с несколькими настройками) и [Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser) — это безопасные браузеры, уважающие конфиденциальность. Оба быстрые, с открытым исходным кодом, удобные для пользователя и доступны на всех основных операционных системах. Ваш браузер имеет доступ ко всему, что вы делаете в интернете, поэтому, если возможно, избегайте Google Chrome, Edge и Safari, так как (без правильной конфигурации) все три из них собирают данные об использовании, отправляют данные домой и позволяют инвазивное отслеживание. Firefox требует нескольких изменений для достижения оптимальной безопасности, например — конфигурации user.js от [arkenfox](https://github.com/arkenfox/user.js/wiki) или [12byte](https://12bytes.org/firefox-configuration-guide-for-privacy-freaks-and-performance-buffs/). Подробнее: [Браузеры для конфиденциальности](https://github.com/Lissy93/awesome-privacy#browsers).`
        }
      },
      'Use a Private Search Engine': {
        point: { en: 'Use a Private Search Engine', ru: 'Используйте приватную поисковую систему' },
        details: {
          en: `Using a privacy-preserving, non-tracking search engine, will reduce risk that your search terms are not logged, or used against you. Consider [DuckDuckGo](https://awesome-privacy.xyz/essentials/search-engines/duckduckgo), or [Qwant](https://awesome-privacy.xyz/essentials/search-engines/qwant). Google implements some [incredibly invasive](https://hackernoon.com/data-privacy-concerns-with-google-b946f2b7afea) tracking policies, and have a history of displaying [biased search results](https://www.businessinsider.com/evidence-that-google-search-results-are-biased-2014-10). Therefore Google, along with Bing, Baidu, Yahoo and Yandex are incompatible with anyone looking to protect their privacy. It is recommended to update your [browsers default search](https://duckduckgo.com/install) to a privacy-respecting search engine.`,
          ru: `Использование приватной, не отслеживающей поисковой системы снизит риск того, что ваши поисковые запросы не будут зарегистрированы или использованы против вас. Рассмотрите [DuckDuckGo](https://awesome-privacy.xyz/essentials/search-engines/duckduckgo) или [Qwant](https://awesome-privacy.xyz/essentials/search-engines/qwant). Google реализует некоторые [невероятно инвазивные](https://hackernoon.com/data-privacy-concerns-with-google-b946f2b7afea) политики отслеживания и имеет историю отображения [предвзятых результатов поиска](https://www.businessinsider.com/evidence-that-google-search-results-are-biased-2014-10). Поэтому Google, наряду с Bing, Baidu, Yahoo и Yandex, несовместимы с теми, кто хочет защитить свою конфиденциальность. Рекомендуется обновить [поисковую систему по умолчанию в браузере](https://duckduckgo.com/install) на уважающую конфиденциальность поисковую систему.`
        }
      },
      'Remove Unnecessary Browser Addons': {
        point: { en: 'Remove Unnecessary Browser Addons', ru: 'Удалите ненужные расширения браузера' },
        details: {
          en: `Extensions are able to see, log or modify anything you do in the browser, and some innocent looking browser apps, have malicious intentions. Websites can see which extensions you have installed, and may use this to enhance your fingerprint, to more accurately identify/ track you. Both [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox) and Chrome web stores allow you to check what permissions/access rights an extension requires before you install it. Check the reviews. Only install extensions you really need, and removed those which you haven't used in a while.`,
          ru: `Расширения могут видеть, регистрировать или изменять все, что вы делаете в браузере, и некоторые безобидные на вид приложения браузера имеют злонамеренные намерения. Веб-сайты могут видеть, какие расширения у вас установлены, и могут использовать это для улучшения вашего отпечатка, чтобы более точно идентифицировать/отслеживать вас. И [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), и магазины расширений Chrome позволяют проверить, какие разрешения/права доступа требует расширение перед его установкой. Проверьте отзывы. Устанавливайте только те расширения, которые вам действительно нужны, и удаляйте те, которые вы не использовали некоторое время.`
        }
      },
      'Keep Browser Up-to-date': {
        point: { en: 'Keep Browser Up-to-date', ru: 'Поддерживайте браузер в актуальном состоянии' },
        details: {
          en: `Browser vulnerabilities are constantly being [discovered](https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=browser) and patched, so it's important to keep it up to date, to avoid a zero-day exploit. You can [see which browser version you're using here](https://www.whatismybrowser.com/), or follow [this guide](https://www.whatismybrowser.com/guides/how-to-update-your-browser/) for instructions on how to update. Some browsers will auto-update to the latest stable version.`,
          ru: `Уязвимости браузера постоянно [обнаруживаются](https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=browser) и исправляются, поэтому важно поддерживать его в актуальном состоянии, чтобы избежать эксплойта нулевого дня. Вы можете [увидеть, какую версию браузера вы используете здесь](https://www.whatismybrowser.com/), или следовать [этому руководству](https://www.whatismybrowser.com/guides/how-to-update-your-browser/) для получения инструкций по обновлению. Некоторые браузеры будут автоматически обновляться до последней стабильной версии.`
        }
      },
      'Check for HTTPS': {
        point: { en: 'Check for HTTPS', ru: 'Проверяйте HTTPS' },
        details: {
          en: `If you enter information on a non-HTTPS website, this data is transported unencrypted and can therefore be read by anyone who intercepts it. Do not enter any data on a non-HTTPS website, but also do not let the green padlock give you a false sense of security, just because a website has SSL certificate, does not mean that it is legitimate or trustworthy. [HTTPS-Everywhere](https://www.eff.org/https-everywhere) (developed by the [EFF](https://www.eff.org/)) used to be a browser extension/addon that automatically enabled HTTPS on websites, but as of 2022 is now deprecated. In their [accouncement article](https://www.eff.org/) the EFF explains that most browsers now integrate such protections. Additionally, it provides instructions for [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), Chrome, Edge and Safari browsers on how to enable their HTTPS secure protections.`,
          ru: `Если вы вводите информацию на веб-сайте без HTTPS, эти данные передаются в незашифрованном виде и поэтому могут быть прочитаны любым, кто их перехватит. Не вводите никакие данные на веб-сайте без HTTPS, но также не позволяйте зеленому замку давать вам ложное чувство безопасности, просто потому, что у веб-сайта есть SSL-сертификат, это не означает, что он легитимен или заслуживает доверия. [HTTPS-Everywhere](https://www.eff.org/https-everywhere) (разработанный [EFF](https://www.eff.org/)) раньше был расширением/дополнением браузера, которое автоматически включало HTTPS на веб-сайтах, но с 2022 года теперь устарел. В своей [статье-объявлении](https://www.eff.org/) EFF объясняет, что большинство браузеров теперь интегрируют такие защиты. Кроме того, он предоставляет инструкции для браузеров [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), Chrome, Edge и Safari о том, как включить их защиту HTTPS.`
        }
      },
      'Use DNS-over-HTTPS': {
        point: { en: 'Use DNS-over-HTTPS', ru: 'Используйте DNS-over-HTTPS' },
        details: {
          en: `Traditional DNS makes requests in plain text for everyone to see. It allows for eavesdropping and manipulation of DNS data through man-in-the-middle attacks. Whereas DNS-over-HTTPS performs DNS resolution via the HTTPS protocol, meaning data between you and your DNS resolver is encrypted. A popular option is [CloudFlare](https://awesome-privacy.xyz/networking/dns-providers/cloudflare)'s [1.1.1.1](https://awesome-privacy.xyz/security-tools/mobile-apps/1.1.1.1), or compare providers- it is simple to enable in-browser. Note that DoH comes with its own issues, mostly preventing web filtering.`,
          ru: `Традиционный DNS делает запросы в открытом тексте для всех. Это позволяет подслушивать и манипулировать данными DNS через атаки типа "человек посередине". В то время как DNS-over-HTTPS выполняет разрешение DNS через протокол HTTPS, что означает, что данные между вами и вашим DNS-резолвером зашифрованы. Популярный вариант — [1.1.1.1](https://awesome-privacy.xyz/security-tools/mobile-apps/1.1.1.1) от [CloudFlare](https://awesome-privacy.xyz/networking/dns-providers/cloudflare), или сравните провайдеров — это просто включить в браузере. Обратите внимание, что DoH имеет свои проблемы, в основном предотвращая веб-фильтрацию.`
        }
      },
      'Multi-Session Containers': {
        point: { en: 'Multi-Session Containers', ru: 'Многопрофильные контейнеры' },
        details: {
          en: `Compartmentalisation is really important to keep different aspects of your browsing separate. For example, using different profiles for work, general browsing, social media, online shopping etc will reduce the number associations that data brokers can link back to you. One option is to make use of [Firefox Containers](https://awesome-privacy.xyz/security-tools/browser-extensions/firefox-multi-account-containers) which is designed exactly for this purpose. Alternatively, you could use different browsers for different tasks ([Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser), [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) etc).`,
          ru: `Разделение действительно важно для отделения различных аспектов вашего просмотра. Например, использование разных профилей для работы, общего просмотра, социальных сетей, онлайн-покупок и т.д. уменьшит количество ассоциаций, которые брокеры данных могут связать с вами. Один из вариантов — использовать [Firefox Containers](https://awesome-privacy.xyz/security-tools/browser-extensions/firefox-multi-account-containers), который разработан именно для этой цели. Альтернативно, вы можете использовать разные браузеры для разных задач ([Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser), [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) и т.д.).`
        }
      },
      'Multi-[Session](https://awesome-privacy.xyz/communication/encrypted-messaging/session) Containers': {
        point: { en: 'Multi-Session Containers', ru: 'Многопрофильные контейнеры' },
        details: {
          en: `Compartmentalisation is really important to keep different aspects of your browsing separate. For example, using different profiles for work, general browsing, social media, online shopping etc will reduce the number associations that data brokers can link back to you. One option is to make use of [Firefox Containers](https://awesome-privacy.xyz/security-tools/browser-extensions/firefox-multi-account-containers) which is designed exactly for this purpose. Alternatively, you could use different browsers for different tasks ([Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser), [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) etc).`,
          ru: `Разделение действительно важно для отделения различных аспектов вашего просмотра. Например, использование разных профилей для работы, общего просмотра, социальных сетей, онлайн-покупок и т.д. уменьшит количество ассоциаций, которые брокеры данных могут связать с вами. Один из вариантов — использовать [Firefox Containers](https://awesome-privacy.xyz/security-tools/browser-extensions/firefox-multi-account-containers), который разработан именно для этой цели. Альтернативно, вы можете использовать разные браузеры для разных задач ([Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser), [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) и т.д.).`
        }
      },
      'Use Incognito': {
        point: { en: 'Use Incognito', ru: 'Используйте режим инкогнито' },
        details: {
          en: `When using someone else's machine, ensure that you're in a private/ incognito session. This will prevent browser history, cookies and some data being saved, but is not fool-proof- you can still be tracked.`,
          ru: `При использовании чужой машины убедитесь, что вы находитесь в приватном/инкогнито-сеансе. Это предотвратит сохранение истории браузера, cookies и некоторых данных, но это не надежно — вас все еще можно отслеживать.`
        }
      },
      'Understand Your Browser Fingerprint': {
        point: { en: 'Understand Your Browser Fingerprint', ru: 'Поймите отпечаток вашего браузера' },
        details: {
          en: `Browser Fingerprinting is an incredibly accurate method of tracking, where a website identifies you based on your device information. You can view your fingerprint at amiunique.org- The aim is to be as un-unique as possible.`,
          ru: `Отпечаток браузера — это невероятно точный метод отслеживания, при котором веб-сайт идентифицирует вас на основе информации об устройстве. Вы можете просмотреть свой отпечаток на amiunique.org — цель — быть как можно менее уникальным.`
        }
      },
      'Manage Cookies': {
        point: { en: 'Manage Cookies', ru: 'Управляйте cookies' },
        details: {
          en: `Clearing cookies regularly is one step you can take to help reduce websites from tracking you. Cookies may also store your session token, which if captured, would allow someone to access your accounts without credentials. To mitigate this you should clear cookies often.`,
          ru: `Регулярная очистка cookies — это один из шагов, которые вы можете предпринять, чтобы помочь уменьшить отслеживание вас веб-сайтами. Cookies также могут хранить ваш токен сессии, который, если он будет перехвачен, позволит кому-то получить доступ к вашим аккаунтам без учетных данных. Чтобы смягчить это, вы должны часто очищать cookies.`
        }
      },
      'Block Third-Party Cookies': {
        point: { en: 'Block Third-Party Cookies', ru: 'Блокируйте сторонние cookies' },
        details: {
          en: `Third-party cookies placed on your device by a website other than the one you're visiting. This poses a privacy risk, as a 3rd entity can collect data from your current session. This guide explains how you can disable 3rd-party cookies, and you can check here ensure this worked.`,
          ru: `Сторонние cookies, размещенные на вашем устройстве веб-сайтом, отличным от того, который вы посещаете. Это создает риск для конфиденциальности, поскольку третья сторона может собирать данные из вашей текущей сессии. Это руководство объясняет, как вы можете отключить сторонние cookies, и вы можете проверить здесь, что это сработало.`
        }
      },
      'Block Third-Party Trackers': {
        point: { en: 'Block Third-Party Trackers', ru: 'Блокируйте сторонние трекеры' },
        details: {
          en: `Blocking trackers will help to stop websites, advertisers, analytics and more from tracking you in the background. [Privacy Badger](https://awesome-privacy.xyz/security-tools/browser-extensions/privacy-badger), [DuckDuckGo Privacy Essentials](https://awesome-privacy.xyz/security-tools/browser-extensions/privacy-essentials), [uBlock Origin](https://awesome-privacy.xyz/networking/ad-blockers/ublock-origin) and uMatrix (advanced) are all very effective, open source tracker-blockers available for all major browsers.`,
          ru: `Блокировка трекеров поможет остановить отслеживание вас веб-сайтами, рекламодателями, аналитикой и другими в фоновом режиме. [Privacy Badger](https://awesome-privacy.xyz/security-tools/browser-extensions/privacy-badger), [DuckDuckGo Privacy Essentials](https://awesome-privacy.xyz/security-tools/browser-extensions/privacy-essentials), [uBlock Origin](https://awesome-privacy.xyz/networking/ad-blockers/ublock-origin) и uMatrix (продвинутый) — все это очень эффективные блокировщики трекеров с открытым исходным кодом, доступные для всех основных браузеров.`
        }
      },
      'Beware of Redirects': {
        point: { en: 'Beware of Redirects', ru: 'Остерегайтесь редиректов' },
        details: {
          en: `While some redirects are harmless, others, such as Unvalidated redirects are used in phishing attacks, it can make a malicious link seem legitimate. If you are unsure about a redirect URL, you can check where it forwards to with a tool like RedirectDetective.`,
          ru: `Хотя некоторые редиректы безвредны, другие, такие как непроверенные редиректы, используются в фишинговых атаках, они могут сделать вредоносную ссылку легитимной. Если вы не уверены в URL редиректа, вы можете проверить, куда он перенаправляет, с помощью такого инструмента, как RedirectDetective.`
        }
      },
      'Do Not Sign Into Your Browser': {
        point: { en: 'Do Not Sign Into Your Browser', ru: 'Не входите в браузер' },
        details: {
          en: `Many browsers allow you to sign in, in order to sync history, bookmarks and other browsing data across devices. However this not only allows for further data collection, but also increases attack surface through providing another avenue for a malicious actor to get hold of personal information.`,
          ru: `Многие браузеры позволяют вам войти, чтобы синхронизировать историю, закладки и другие данные просмотра между устройствами. Однако это не только позволяет собирать дополнительные данные, но и увеличивает поверхность атаки, предоставляя еще один путь для злоумышленника получить доступ к личной информации.`
        }
      },
      'Disallow Prediction Services': {
        point: { en: 'Disallow Prediction Services', ru: 'Запретите службы предсказаний' },
        details: {
          en: `Some browsers allow for prediction services, where you receive real-time search results or URL auto-fill. If this is enabled then data is sent to Google (or your default search engine) with every keypress, rather than when you hit enter.`,
          ru: `Некоторые браузеры позволяют использовать службы предсказаний, где вы получаете результаты поиска в реальном времени или автоматическое заполнение URL. Если это включено, то данные отправляются в Google (или вашу поисковую систему по умолчанию) при каждом нажатии клавиши, а не когда вы нажимаете Enter.`
        }
      },
      'Avoid G Translate for Webpages': {
        point: { en: 'Avoid G Translate for Webpages', ru: 'Избегайте Google Translate для веб-страниц' },
        details: {
          en: `When you visit a web page written in a foreign language, you may be prompted to install the Google Translate extension. Be aware that Google collects all data (including input fields), along with details of the current user. Instead use a translation service that is not linked to your browser.`,
          ru: `Когда вы посещаете веб-страницу, написанную на иностранном языке, вам может быть предложено установить расширение Google Translate. Имейте в виду, что Google собирает все данные (включая поля ввода), а также детали текущего пользователя. Вместо этого используйте службу перевода, которая не связана с вашим браузером.`
        }
      },
      'Disable Web Notifications': {
        point: { en: 'Disable Web Notifications', ru: 'Отключите веб-уведомления' },
        details: {
          en: `Browser push notifications are a common method for criminals to encourage you to click their link, since it is easy to spoof the source. Be aware of this, and for instructions on disabling browser notifications, see this article.`,
          ru: `Веб-уведомления браузера — это распространенный метод, используемый преступниками, чтобы побудить вас нажать на их ссылку, поскольку легко подделать источник. Имейте это в виду, и для получения инструкций по отключению уведомлений браузера см. эту статью.`
        }
      },
      'Disable Automatic Downloads': {
        point: { en: 'Disable Automatic Downloads', ru: 'Отключите автоматические загрузки' },
        details: {
          en: `Drive-by downloads is a common method of getting harmful files onto a users device. This can be mitigated by disabling auto file downloads, and be cautious of websites which prompt you to download files unexpectedly.`,
          ru: `Загрузки при просмотре — это распространенный метод получения вредоносных файлов на устройство пользователя. Это можно смягчить, отключив автоматическую загрузку файлов, и быть осторожным с веб-сайтами, которые неожиданно предлагают вам загрузить файлы.`
        }
      },
      'Disallow Access to Sensors': {
        point: { en: 'Disallow Access to Sensors', ru: 'Запретите доступ к датчикам' },
        details: {
          en: `Mobile websites can tap into your device sensors without asking. If you grant these permissions to your browser once, then all websites are able to use these capabilities, without permission or notification.`,
          ru: `Мобильные веб-сайты могут подключаться к датчикам вашего устройства без запроса. Если вы предоставите эти разрешения браузеру один раз, то все веб-сайты смогут использовать эти возможности без разрешения или уведомления.`
        }
      },
      'Disallow Location': {
        point: { en: 'Disallow Location', ru: 'Запретите определение местоположения' },
        details: {
          en: `Location Services lets sites ask for your physical location to improve your experience. This should be disabled in settings. Note that there are still other methods of determining your approximate location.`,
          ru: `Службы определения местоположения позволяют сайтам запрашивать ваше физическое местоположение для улучшения вашего опыта. Это должно быть отключено в настройках. Обратите внимание, что все еще существуют другие методы определения вашего приблизительного местоположения.`
        }
      },
      'Disallow Camera/ Microphone access': {
        point: { en: 'Disallow Camera/ Microphone access', ru: 'Запретите доступ к камере/микрофону' },
        details: {
          en: `Check browser settings to ensure that no websites are granted access to webcam or microphone. It may also be beneficial to use physical protection such as a webcam cover and microphone blocker.`,
          ru: `Проверьте настройки браузера, чтобы убедиться, что ни один веб-сайт не имеет доступа к веб-камере или микрофону. Также может быть полезно использовать физическую защиту, такую как крышка веб-камеры и блокировщик микрофона.`
        }
      },
      'Disable Browser Password Saves': {
        point: { en: 'Disable Browser Password Saves', ru: 'Отключите сохранение паролей в браузере' },
        details: {
          en: `Do not allow your browser to store usernames and passwords. These can be easily viewed or accessed. Instead use a password manager.`,
          ru: `Не разрешайте браузеру хранить имена пользователей и пароли. Их можно легко просмотреть или получить к ним доступ. Вместо этого используйте менеджер паролей.`
        }
      },
      'Disable Browser Autofill': {
        point: { en: 'Disable Browser Autofill', ru: 'Отключите автозаполнение браузера' },
        details: {
          en: `Turn off autofill for any confidential or personal details. This feature can be harmful if your browser is compromised in any way. Instead, consider using your password manager's Notes feature.`,
          ru: `Отключите автозаполнение для любых конфиденциальных или личных данных. Эта функция может быть вредной, если ваш браузер каким-либо образом скомпрометирован. Вместо этого рассмотрите возможность использования функции Notes вашего менеджера паролей.`
        }
      },
      'Protect from Exfil Attack': {
        point: { en: 'Protect from Exfil Attack', ru: 'Защититесь от атаки Exfil' },
        details: {
          en: `The CSS Exfiltrate attack is a method where credentials and other sensitive details can be snagged with just pure CSS. You can stay protected, with the [CSS Exfil Protection](https://awesome-privacy.xyz/security-tools/browser-extensions/css-exfil-protection) plugin.`,
          ru: `Атака CSS Exfiltrate — это метод, при котором учетные данные и другие конфиденциальные данные могут быть перехвачены с помощью чистого CSS. Вы можете оставаться защищенными с помощью плагина [CSS Exfil Protection](https://awesome-privacy.xyz/security-tools/browser-extensions/css-exfil-protection).`
        }
      },
      'Deactivate ActiveX': {
        point: { en: 'Deactivate ActiveX', ru: 'Деактивируйте ActiveX' },
        details: {
          en: `ActiveX is a browser extension API that built into Microsoft IE, and enabled by default. It's not commonly used anymore, but since it gives plugins intimate access rights, and can be dangerous, therefore you should disable it.`,
          ru: `ActiveX — это API расширения браузера, встроенное в Microsoft IE и включенное по умолчанию. Оно больше не используется широко, но поскольку оно дает плагинам интимные права доступа и может быть опасным, поэтому вы должны отключить его.`
        }
      },
      'Disable WebRTC': {
        point: { en: 'Disable WebRTC', ru: 'Отключите WebRTC' },
        details: {
          en: `WebRTC allows high-quality audio/video communication and peer-to-peer file-sharing straight from the browser. However it can pose as a privacy leak. To learn more, check out this guide.`,
          ru: `WebRTC позволяет высококачественную аудио/видео связь и обмен файлами peer-to-peer прямо из браузера. Однако это может представлять собой утечку конфиденциальности. Чтобы узнать больше, ознакомьтесь с этим руководством.`
        }
      },
      'Spoof HTML5 Canvas Sig': {
        point: { en: 'Spoof HTML5 Canvas Sig', ru: 'Подделайте подпись HTML5 Canvas' },
        details: {
          en: `Canvas Fingerprinting allows websites to identify and track users very accurately. You can use the Canvas-Fingerprint-Blocker extension to spoof your fingerprint or use [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor).`,
          ru: `Отпечаток Canvas позволяет веб-сайтам очень точно идентифицировать и отслеживать пользователей. Вы можете использовать расширение Canvas-Fingerprint-Blocker для подделки вашего отпечатка или использовать [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor).`
        }
      },
      'Spoof User Agent': {
        point: { en: 'Spoof User Agent', ru: 'Подделайте User Agent' },
        details: {
          en: `The user agent tells the website what device, browser and version you are using. Switching user agent periodically is one small step you can take to become less unique.`,
          ru: `User Agent сообщает веб-сайту, какое устройство, браузер и версию вы используете. Периодическое переключение user agent — это один небольшой шаг, который вы можете предпринять, чтобы стать менее уникальным.`
        }
      },
      'Disregard DNT': {
        point: { en: 'Disregard DNT', ru: 'Игнорируйте DNT' },
        details: {
          en: `Enabling Do Not Track has very limited impact, since many websites do not respect or follow this. Since it is rarely used, it may also add to your signature, making you more unique.`,
          ru: `Включение Do Not Track имеет очень ограниченное влияние, поскольку многие веб-сайты не соблюдают или не следуют этому. Поскольку это редко используется, это также может добавить к вашей подписи, делая вас более уникальным.`
        }
      },
      'Prevent HSTS Tracking': {
        point: { en: 'Prevent HSTS Tracking', ru: 'Предотвратите отслеживание HSTS' },
        details: {
          en: `HSTS was designed to help secure websites, but privacy concerns have been raised as it allowed site operators to plant super-cookies. It can be disabled by visiting chrome://net-internals/#hsts in Chromium-based browsers.`,
          ru: `HSTS был разработан для защиты веб-сайтов, но были подняты проблемы конфиденциальности, поскольку это позволяло операторам сайтов размещать супер-cookies. Это можно отключить, посетив chrome://net-internals/#hsts в браузерах на основе Chromium.`
        }
      },
      'Prevent Automatic Browser Connections': {
        point: { en: 'Prevent Automatic Browser Connections', ru: 'Предотвратите автоматические подключения браузера' },
        details: {
          en: `Even when you are not using your browser, it may call home to report on usage activity, analytics and diagnostics. You may wish to disable some of this, which can be done through the settings.`,
          ru: `Даже когда вы не используете браузер, он может отправлять данные домой для отчетов об активности использования, аналитике и диагностике. Вы можете отключить некоторые из этих функций, что можно сделать через настройки.`
        }
      },
      'Enable 1st-Party Isolation': {
        point: { en: 'Enable 1st-Party Isolation', ru: 'Включите изоляцию первой стороны' },
        details: {
          en: `[First Party Isolation](https://awesome-privacy.xyz/security-tools/browser-extensions/first-party-isolation) means that all identifier sources and browser state are scoped using the URL bar domain, this can greatly reduce tracking.`,
          ru: `[Изоляция первой стороны](https://awesome-privacy.xyz/security-tools/browser-extensions/first-party-isolation) означает, что все источники идентификаторов и состояние браузера ограничены доменом адресной строки, это может значительно уменьшить отслеживание.`
        }
      },
      'Strip Tracking Params from URLs': {
        point: { en: 'Strip Tracking Params from URLs', ru: 'Удаляйте параметры отслеживания из URL' },
        details: {
          en: `Websites often append additional GET parameters to URLs that you click, to identify information like source/referrer. You can sanitize manually, or use an extension like [ClearURLs](https://awesome-privacy.xyz/security-tools/browser-extensions/clearurls) to strip tracking data from URLs automatically.`,
          ru: `Веб-сайты часто добавляют дополнительные GET-параметры к URL, на которые вы нажимаете, для идентификации информации, такой как источник/реферер. Вы можете очистить вручную или использовать расширение, такое как [ClearURLs](https://awesome-privacy.xyz/security-tools/browser-extensions/clearurls), для автоматического удаления данных отслеживания из URL.`
        }
      },
      'First Launch Security': {
        point: { en: 'First Launch Security', ru: 'Безопасность первого запуска' },
        details: {
          en: `After installing a web browser, the first time you launch it (prior to configuring its privacy settings), most browsers will call home. Therefore, after installing a browser, you should first disable your internet connection, then configure privacy options before reenabling your internet connectivity.`,
          ru: `После установки веб-браузера, при первом его запуске (до настройки параметров конфиденциальности), большинство браузеров отправят данные домой. Поэтому после установки браузера вы должны сначала отключить интернет-соединение, затем настроить параметры конфиденциальности перед повторным включением интернет-соединения.`
        }
      },
      'Use The Tor Browser': {
        point: { en: 'Use The Tor Browser', ru: 'Используйте браузер Tor' },
        details: {
          en: `The [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) Project provides a browser that encrypts and routes your traffic through multiple nodes, keeping users safe from interception and tracking. The main drawbacks are speed and user experience.`,
          ru: `Проект [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) предоставляет браузер, который шифрует и маршрутизирует ваш трафик через несколько узлов, защищая пользователей от перехвата и отслеживания. Основными недостатками являются скорость и пользовательский опыт.`
        }
      },
      'Disable JavaScript': {
        point: { en: 'Disable JavaScript', ru: 'Отключите JavaScript' },
        details: {
          en: `Many modern web apps are JavaScript-based, so disabling it will greatly decrease your browsing experience. But if you really want to go all out, then it will really reduce your attack surface.`,
          ru: `Многие современные веб-приложения основаны на JavaScript, поэтому его отключение значительно ухудшит ваш опыт просмотра. Но если вы действительно хотите пойти до конца, то это действительно уменьшит вашу поверхность атаки.`
        }
      }
    }
  },
  'email': {
    intro: {
      en: `Nearly 50 years since the first email was sent, it's still very much a big part of our day-to-day life, and will continue to be for the near future. So considering how much trust we put in them, it's surprising how fundamentally insecure this infrastructure is. Email-related fraud [is on the up](https://www.csoonline.com/article/3247670/email/email-security-in-2018.html), and without taking basic measures you could be at risk.

If a hacker gets access to your emails, it provides a gateway for your other accounts to be compromised (through password resets), therefore email security is paramount for your digital safety.

The big companies providing "free" email service, don't have a good reputation for respecting users privacy: Gmail was caught giving [third parties full access](https://www.wsj.com/articles/techs-dirty-secret-the-app-developers-sifting-through-your-gmail-1530544442) to user emails and also [tracking all of your purchases](https://www.cnbc.com/2019/05/17/google-gmail-tracks-purchase-history-how-to-delete-it.html). Yahoo was also caught scanning emails in real-time [for US surveillance agencies](http://news.trust.org/item/20161004170601-99f8c) Advertisers [were granted access](https://thenextweb.com/insider/2018/08/29/both-yahoo-and-aol-are-scanning-customer-emails-to-attract-advertisers) to Yahoo and AOL users messages to "identify and segment potential customers by picking up on contextual buying signals, and past purchases."`,
      ru: `Почти 50 лет с момента отправки первого email, он все еще остается большой частью нашей повседневной жизни и будет продолжать быть таковым в ближайшем будущем. Учитывая, сколько доверия мы им оказываем, удивительно, насколько фундаментально небезопасна эта инфраструктура. Мошенничество, связанное с email, [растет](https://www.csoonline.com/article/3247670/email/email-security-in-2018.html), и без принятия базовых мер вы можете оказаться в опасности.

Если хакер получит доступ к вашим email, это открывает путь для компрометации ваших других аккаунтов (через сброс паролей), поэтому безопасность email имеет первостепенное значение для вашей цифровой безопасности.

Крупные компании, предоставляющие "бесплатные" email-сервисы, не имеют хорошей репутации в отношении уважения конфиденциальности пользователей: Gmail был пойман на предоставлении [третьим лицам полного доступа](https://www.wsj.com/articles/techs-dirty-secret-the-app-developers-sifting-through-your-gmail-1530544442) к email пользователей, а также [отслеживании всех ваших покупок](https://www.cnbc.com/2019/05/17/google-gmail-tracks-purchase-history-how-to-delete-it.html). Yahoo также был пойман на сканировании email в реальном времени [для агентств наблюдения США](http://news.trust.org/item/20161004170601-99f8c). Рекламодателям [был предоставлен доступ](https://thenextweb.com/insider/2018/08/29/both-yahoo-and-aol-are-scanning-customer-emails-to-attract-advertisers) к сообщениям пользователей Yahoo и AOL для "идентификации и сегментации потенциальных клиентов путем выявления контекстных сигналов покупки и прошлых покупок."`
    },
    items: {
      'Have more than one email address': {
        point: { en: 'Have more than one email address', ru: 'Имейте более одного email-адреса' },
        details: {
          en: `Consider using a different email address for security-critical communications from trivial mail such as newsletters. This compartmentalization could reduce the amount of damage caused by a data breach, and also make it easier to recover a compromised account.`,
          ru: `Рассмотрите возможность использования другого email-адреса для критически важных с точки зрения безопасности сообщений, отличного от тривиальной почты, такой как рассылки. Это разделение может уменьшить ущерб, причиненный утечкой данных, а также облегчить восстановление скомпрометированного аккаунта.`
        }
      },
      'Keep Email Address Private': {
        point: { en: 'Keep Email Address Private', ru: 'Держите email-адрес в секрете' },
        details: {
          en: `Do not share your primary email publicly, as mail addresses are often the starting point for most phishing attacks.`,
          ru: `Не делитесь своим основным email публично, так как почтовые адреса часто являются отправной точкой для большинства фишинговых атак.`
        }
      },
      'Keep your Account Secure': {
        point: { en: 'Keep your Account Secure', ru: 'Поддерживайте безопасность аккаунта' },
        details: {
          en: `Use a long and unique password, enable 2FA and be careful while logging in. Your email account provides an easy entry point to all your other online accounts for an attacker.`,
          ru: `Используйте длинный и уникальный пароль, включите 2FA и будьте осторожны при входе. Ваш email-аккаунт предоставляет легкую точку входа ко всем вашим другим онлайн-аккаунтам для злоумышленника.`
        }
      },
      'Disable Automatic Loading of Remote Content': {
        point: { en: 'Disable Automatic Loading of Remote Content', ru: 'Отключите автоматическую загрузку удаленного контента' },
        details: {
          en: `Email messages can contain remote content such as images or stylesheets, often automatically loaded from the server. You should disable this, as it exposes your IP address and device information, and is often used for tracking. For more info, see [this article](https://www.theverge.com/2019/7/3/20680903/email-pixel-trackers-how-to-stop-images-automatic-download).`,
          ru: `Email-сообщения могут содержать удаленный контент, такой как изображения или таблицы стилей, часто автоматически загружаемые с сервера. Вы должны отключить это, так как это раскрывает ваш IP-адрес и информацию об устройстве, и часто используется для отслеживания. Для получения дополнительной информации см. [эту статью](https://www.theverge.com/2019/7/3/20680903/email-pixel-trackers-how-to-stop-images-automatic-download).`
        }
      },
      'Use Plaintext': {
        point: { en: 'Use Plaintext', ru: 'Используйте обычный текст' },
        details: {
          en: `There are two main types of emails on the internet: plaintext and HTML. The former is strongly preferred for privacy & security as HTML messages often include identifiers in links and inline images, which can collect usage and personal data. There's also numerous risks of remote code execution targeting the HTML parser of your mail client, which cannot be exploited if you are using plaintext. For more info, as well as setup instructions for your mail provider, see [UsePlaintext.email](https://useplaintext.email/).`,
          ru: `В интернете существует два основных типа email: обычный текст и HTML. Первый настоятельно рекомендуется для конфиденциальности и безопасности, так как HTML-сообщения часто включают идентификаторы в ссылках и встроенных изображениях, которые могут собирать данные об использовании и личные данные. Также существует множество рисков удаленного выполнения кода, нацеленных на HTML-парсер вашего почтового клиента, которые не могут быть использованы, если вы используете обычный текст. Для получения дополнительной информации, а также инструкций по настройке для вашего почтового провайдера, см. [UsePlaintext.email](https://useplaintext.email/).`
        }
      },
      "Don't connect third-party apps to your email account": {
        point: { en: "Don't connect third-party apps to your email account", ru: 'Не подключайте сторонние приложения к вашему email-аккаунту' },
        details: {
          en: `If you give a third-party app or plug-in full access to your inbox, they effectively have full unhindered access to all your emails and their contents, which poses significant security and privacy risks.`,
          ru: `Если вы предоставите стороннему приложению или плагину полный доступ к вашему почтовому ящику, они фактически получат полный беспрепятственный доступ ко всем вашим email и их содержимому, что создает значительные риски безопасности и конфиденциальности.`
        }
      },
      "Don't Share Sensitive Data via Email": {
        point: { en: "Don't Share Sensitive Data via Email", ru: 'Не делитесь конфиденциальными данными через email' },
        details: {
          en: `Emails are very easily intercepted. Furthermore, you can't be sure of how secure your recipient's environment is. Therefore, emails cannot be considered safe for exchanging confidential information, unless it is encrypted.`,
          ru: `Email очень легко перехватываются. Кроме того, вы не можете быть уверены, насколько безопасна среда получателя. Поэтому email нельзя считать безопасными для обмена конфиденциальной информацией, если они не зашифрованы.`
        }
      },
      'Consider Switching to a Secure Mail Provider': {
        point: { en: 'Consider Switching to a Secure Mail Provider', ru: 'Рассмотрите переход на безопасного почтового провайдера' },
        details: {
          en: `Secure and reputable email providers such as [Forward Email](https://awesome-privacy.xyz/communication/encrypted-email/forward-email), [ProtonMail](https://awesome-privacy.xyz/communication/mail-forwarding/protonmail), and [Tutanota](https://awesome-privacy.xyz/communication/encrypted-email/tuta) allow for end-to-end encryption, full privacy as well as more security-focused features. Unlike typical email providers, your mailbox cannot be read by anyone but you, since all messages are encrypted.`,
          ru: `Безопасные и авторитетные почтовые провайдеры, такие как [Forward Email](https://awesome-privacy.xyz/communication/encrypted-email/forward-email), [ProtonMail](https://awesome-privacy.xyz/communication/mail-forwarding/protonmail) и [Tutanota](https://awesome-privacy.xyz/communication/encrypted-email/tuta), позволяют использовать сквозное шифрование, полную конфиденциальность, а также функции, ориентированные на безопасность. В отличие от типичных почтовых провайдеров, ваш почтовый ящик не может быть прочитан никем, кроме вас, поскольку все сообщения зашифрованы.`
        }
      },
      'Use Smart Key': {
        point: { en: 'Use Smart Key', ru: 'Используйте смарт-ключ' },
        details: {
          en: `OpenPGP does not support Forward secrecy, which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed. Therefore, you should take great care to keep your private keys safe. One method of doing so, is to use a USB Smart Key to sign or decrypt messages, allowing you to do so without your private key leaving the USB device.`,
          ru: `OpenPGP не поддерживает Forward secrecy, что означает, что если ваш или приватный ключ получателя когда-либо будет украден, все предыдущие сообщения, зашифрованные с его помощью, будут раскрыты. Поэтому вы должны очень тщательно хранить свои приватные ключи в безопасности. Один из методов — использовать USB Smart Key для подписания или расшифровки сообщений, позволяя делать это без того, чтобы ваш приватный ключ покидал USB-устройство.`
        }
      },
      'Use Aliasing / Anonymous Forwarding': {
        point: { en: 'Use Aliasing / Anonymous Forwarding', ru: 'Используйте алиасы / анонимную пересылку' },
        details: {
          en: `Email aliasing allows messages to be sent to [anything]@my-domain.com and still land in your primary inbox. Effectively allowing you to use a different, unique email address for each service you sign up for. This means if you start receiving spam, you can block that alias and determine which company leaked your email address.`,
          ru: `Email-алиасы позволяют отправлять сообщения на [что угодно]@my-domain.com, и они все равно попадут в ваш основной почтовый ящик. Эффективно позволяя вам использовать другой, уникальный email-адрес для каждого сервиса, на который вы регистрируетесь. Это означает, что если вы начнете получать спам, вы можете заблокировать этот алиас и определить, какая компания утекла ваш email-адрес.`
        }
      },
      'Subaddressing': {
        point: { en: 'Subaddressing', ru: 'Суб-адресация' },
        details: {
          en: `An alternative to aliasing is subaddressing, where anything after the \`+\` symbol is omitted during mail delivery. This enables you to keep track of who shared/ leaked your email address, but unlike aliasing, it will not protect against your real address being revealed.`,
          ru: `Альтернативой алиасам является суб-адресация, где все после символа \`+\` опускается при доставке почты. Это позволяет вам отслеживать, кто поделился/утекла ваш email-адрес, но в отличие от алиасов, это не защитит от раскрытия вашего реального адреса.`
        }
      },
      'Use a Custom Domain': {
        point: { en: 'Use a Custom Domain', ru: 'Используйте собственный домен' },
        details: {
          en: `Using a custom domain means that you are not dependent on the address assigned by your mail provider. So you can easily switch providers in the future and do not need to worry about a service being discontinued.`,
          ru: `Использование собственного домена означает, что вы не зависите от адреса, назначенного вашим почтовым провайдером. Таким образом, вы можете легко сменить провайдера в будущем и не нужно беспокоиться о прекращении работы сервиса.`
        }
      },
      'Sync with a client for backup': {
        point: { en: 'Sync with a client for backup', ru: 'Синхронизируйте с клиентом для резервного копирования' },
        details: {
          en: `To avoid losing temporary or permanent access to your emails during an unplanned event (such as an outage or account lock), Thunderbird can sync/ backup messages from multiple accounts via IMAP and store locally on your primary device.`,
          ru: `Чтобы избежать потери временного или постоянного доступа к вашим email во время незапланированного события (например, сбоя или блокировки аккаунта), Thunderbird может синхронизировать/резервировать сообщения с нескольких аккаунтов через IMAP и хранить локально на вашем основном устройстве.`
        }
      },
      'Be Careful with Mail Signatures': {
        point: { en: 'Be Careful with Mail Signatures', ru: 'Будьте осторожны с почтовыми подписями' },
        details: {
          en: `You do not know how secure of an email environment the recipient of your message may have. There are several extensions that automatically crawl messages, and create a detailed database of contact information based upon email signatures.`,
          ru: `Вы не знаете, насколько безопасна email-среда получателя вашего сообщения. Существует несколько расширений, которые автоматически сканируют сообщения и создают подробную базу данных контактной информации на основе почтовых подписей.`
        }
      },
      'Be Careful with Auto-Replies': {
        point: { en: 'Be Careful with Auto-Replies', ru: 'Будьте осторожны с автоответами' },
        details: {
          en: `Out-of-office automatic replies are very useful for informing people there will be a delay in replying, but all too often people reveal too much information- which can be used in social engineering and targeted attacks.`,
          ru: `Автоматические ответы "вне офиса" очень полезны для информирования людей о задержке в ответе, но слишком часто люди раскрывают слишком много информации, которая может быть использована в социальной инженерии и целевых атаках.`
        }
      },
      'Choose the Right Mail Protocol': {
        point: { en: 'Choose the Right Mail Protocol', ru: 'Выберите правильный почтовый протокол' },
        details: {
          en: `Do not use outdated protocols (below IMAPv4 or POPv3), both have known vulnerabilities and out-dated security.`,
          ru: `Не используйте устаревшие протоколы (ниже IMAPv4 или POPv3), оба имеют известные уязвимости и устаревшую безопасность.`
        }
      },
      'Self-Hosting': {
        point: { en: 'Self-Hosting', ru: 'Самостоятельный хостинг' },
        details: {
          en: `Self-hosting your own mail server is not recommended for non-advanced users, since correctly securing it is critical yet requires strong networking knowledge.`,
          ru: `Самостоятельный хостинг собственного почтового сервера не рекомендуется для неопытных пользователей, поскольку правильная его защита критически важна, но требует глубоких знаний сетей.`
        }
      },
      'Always use TLS Ports': {
        point: { en: 'Always use TLS Ports', ru: 'Всегда используйте TLS-порты' },
        details: {
          en: `There are SSL options for POP3, IMAP, and SMTP as standard TCP/IP ports. They are easy to use, and widely supported so should always be used instead of plaintext email ports.`,
          ru: `Существуют SSL-опции для POP3, IMAP и SMTP в качестве стандартных TCP/IP-портов. Они просты в использовании и широко поддерживаются, поэтому всегда должны использоваться вместо портов email с открытым текстом.`
        }
      },
      'DNS Availability': {
        point: { en: 'DNS Availability', ru: 'Доступность DNS' },
        details: {
          en: `For self-hosted mail servers, to prevent DNS problems impacting availability- use at least 2 MX records, with secondary and tertiary MX records for redundancy when the primary MX record fails.`,
          ru: `Для самостоятельно размещенных почтовых серверов, чтобы предотвратить проблемы с DNS, влияющие на доступность, используйте как минимум 2 MX-записи, с вторичными и третичными MX-записями для избыточности, когда основная MX-запись выходит из строя.`
        }
      },
      'Prevent DDoS and Brute Force Attacks': {
        point: { en: 'Prevent DDoS and Brute Force Attacks', ru: 'Предотвратите DDoS и атаки методом перебора' },
        details: {
          en: `For self-hosted mail servers (specifically SMTP), limit your total number of simultaneous connections, and maximum connection rate to reduce the impact of attempted bot attacks.`,
          ru: `Для самостоятельно размещенных почтовых серверов (особенно SMTP) ограничьте общее количество одновременных соединений и максимальную скорость соединения, чтобы уменьшить влияние попыток бот-атак.`
        }
      },
      'Maintain IP Blacklist': {
        point: { en: 'Maintain IP Blacklist', ru: 'Поддерживайте черный список IP' },
        details: {
          en: `For self-hosted mail servers, you can improve spam filters and harden security, through maintaining an up-to-date local IP blacklist and a spam URI realtime block lists to filter out malicious hyperlinks.`,
          ru: `Для самостоятельно размещенных почтовых серверов вы можете улучшить спам-фильтры и усилить безопасность, поддерживая актуальный локальный черный список IP и списки блокировки спам URI в реальном времени для фильтрации вредоносных гиперссылок.`
        }
      }
    }
  },
  'messaging': {
    intro: {
      en: ``,
      ru: ``
    },
    items: {
      'Only Use Fully End-to-End Encrypted Messengers': {
        point: { en: 'Only Use Fully End-to-End Encrypted Messengers', ru: 'Используйте только полностью сквозно зашифрованные мессенджеры' },
        details: {
          en: `End-to-end encryption is a system of communication where messages are encrypted on your device and not decrypted until they reach the intended recipient. This ensures that any actor who intercepts traffic cannot read the message contents, nor can anybody with access to the central servers where data is stored.`,
          ru: `Сквозное шифрование — это система связи, при которой сообщения шифруются на вашем устройстве и не расшифровываются до тех пор, пока не достигнут предполагаемого получателя. Это гарантирует, что любой, кто перехватывает трафик, не может прочитать содержимое сообщения, как и никто с доступом к центральным серверам, где хранятся данные.`
        }
      },
      'Use only Open Source Messaging Platforms': {
        point: { en: 'Use only Open Source Messaging Platforms', ru: 'Используйте только платформы мессенджеров с открытым исходным кодом' },
        details: {
          en: `If code is open source then it can be independently examined and audited by anyone qualified to do so, to ensure that there are no backdoors, vulnerabilities, or other security issues.`,
          ru: `Если код открыт, то он может быть независимо изучен и проверен любым квалифицированным специалистом, чтобы убедиться, что нет бэкдоров, уязвимостей или других проблем безопасности.`
        }
      },
      'Use a "Trustworthy" Messaging Platform': {
        point: { en: 'Use a "Trustworthy" Messaging Platform', ru: 'Используйте "надежную" платформу мессенджеров' },
        details: {
          en: `When selecting an encrypted messaging app, ensure it's fully open source, stable, actively maintained, and ideally backed by reputable developers.`,
          ru: `При выборе зашифрованного мессенджера убедитесь, что он полностью открыт, стабилен, активно поддерживается и, в идеале, поддерживается авторитетными разработчиками.`
        }
      },
      'Check Security Settings': {
        point: { en: 'Check Security Settings', ru: 'Проверьте настройки безопасности' },
        details: {
          en: `Enable security settings, including contact verification, security notifications, and encryption. Disable optional non-security features such as read receipt, last online, and typing notification.`,
          ru: `Включите настройки безопасности, включая проверку контактов, уведомления безопасности и шифрование. Отключите опциональные функции, не связанные с безопасностью, такие как подтверждение прочтения, последний раз в сети и уведомление о наборе текста.`
        }
      },
      'Ensure your Recipients Environment is Secure': {
        point: { en: 'Ensure your Recipients Environment is Secure', ru: 'Убедитесь, что среда получателя безопасна' },
        details: {
          en: `Your conversation can only be as secure as the weakest link. Often the easiest way to infiltrate a communications channel is to target the individual or node with the least protection.`,
          ru: `Ваш разговор может быть настолько безопасным, насколько безопасно самое слабое звено. Часто самый простой способ проникнуть в канал связи — нацелиться на человека или узел с наименьшей защитой.`
        }
      },
      'Disable Cloud Services': {
        point: { en: 'Disable Cloud Services', ru: 'Отключите облачные сервисы' },
        details: {
          en: `Some mobile messaging apps offer a web or desktop companion. This not only increases attack surface but it has been linked to several critical security issues, and should therefore be avoided, if possible.`,
          ru: `Некоторые мобильные мессенджеры предлагают веб- или настольное приложение-компаньон. Это не только увеличивает поверхность атаки, но и связано с несколькими критическими проблемами безопасности, и поэтому должно быть избегаемо, если возможно.`
        }
      },
      'Secure Group Chats': {
        point: { en: 'Secure Group Chats', ru: 'Безопасные групповые чаты' },
        details: {
          en: `The risk of compromise rises exponentially, the more participants are in a group, as the attack surface increases. Periodically check that all participants are legitimate.`,
          ru: `Риск компрометации растет экспоненциально, чем больше участников в группе, так как поверхность атаки увеличивается. Периодически проверяйте, что все участники легитимны.`
        }
      },
      'Create a Safe Environment for Communication': {
        point: { en: 'Create a Safe Environment for Communication', ru: 'Создайте безопасную среду для общения' },
        details: {
          en: `There are several stages where your digital communications could be monitored or intercepted. This includes: your or your participants' device, your ISP, national gateway or government logging, the messaging provider, the servers.`,
          ru: `Существует несколько этапов, на которых ваши цифровые коммуникации могут быть отслежены или перехвачены. Это включает: ваше или устройство участников, ваш интернет-провайдер, национальный шлюз или логирование правительства, провайдер мессенджера, серверы.`
        }
      },
      'Agree on a Communication Plan': {
        point: { en: 'Agree on a Communication Plan', ru: 'Договоритесь о плане связи' },
        details: {
          en: `In certain situations, it may be worth making a communication plan. This should include primary and backup methods of securely getting in hold with each other.`,
          ru: `В определенных ситуациях может быть полезно составить план связи. Это должно включать основные и резервные методы безопасного контакта друг с другом.`
        }
      },
      'Strip Meta-Data from Media': {
        point: { en: 'Strip Meta-Data from Media', ru: 'Удаляйте метаданные из медиа' },
        details: {
          en: `Metadata is "Data about Data" or additional information attached to a file or transaction. When you send a photo, audio recording, video, or document you may be revealing more than you intended to.`,
          ru: `Метаданные — это "данные о данных" или дополнительная информация, прикрепленная к файлу или транзакции. Когда вы отправляете фотографию, аудиозапись, видео или документ, вы можете раскрыть больше, чем намеревались.`
        }
      },
      'Defang URLs': {
        point: { en: 'Defang URLs', ru: 'Обезвреживайте URL' },
        details: {
          en: `Sending links via various services can unintentionally expose your personal information. This is because, when a thumbnail or preview is generated- it happens on the client-side.`,
          ru: `Отправка ссылок через различные сервисы может непреднамеренно раскрыть вашу личную информацию. Это происходит потому, что когда генерируется миниатюра или превью, это происходит на стороне клиента.`
        }
      },
      'Verify your Recipient': {
        point: { en: 'Verify your Recipient', ru: 'Проверяйте получателя' },
        details: {
          en: `Always ensure you are talking to the intended recipient, and that they have not been compromised. One method for doing so is to use an app which supports contact verification.`,
          ru: `Всегда убеждайтесь, что вы общаетесь с предполагаемым получателем и что он не был скомпрометирован. Один из методов — использовать приложение, которое поддерживает проверку контактов.`
        }
      },
      'Enable Ephemeral Messages': {
        point: { en: 'Enable Ephemeral Messages', ru: 'Включите временные сообщения' },
        details: {
          en: `Self-destructing messages is a feature that causes your messages to automatically delete after a set amount of time. This means that if your device is lost, stolen, or seized, an adversary will only have access to the most recent communications.`,
          ru: `Самоуничтожающиеся сообщения — это функция, которая заставляет ваши сообщения автоматически удаляться через установленное время. Это означает, что если ваше устройство потеряно, украдено или изъято, противник будет иметь доступ только к самым последним сообщениям.`
        }
      },
      'Avoid SMS': {
        point: { en: 'Avoid SMS', ru: 'Избегайте SMS' },
        details: {
          en: `SMS may be convenient, but it's not secure. It is susceptible to threats such as interception, sim swapping, manipulation, and malware.`,
          ru: `SMS может быть удобным, но это небезопасно. Оно уязвимо для угроз, таких как перехват, SIM-своппинг, манипуляции и вредоносное ПО.`
        }
      },
      'Watch out for Trackers': {
        point: { en: 'Watch out for Trackers', ru: 'Остерегайтесь трекеров' },
        details: {
          en: `Be wary of messaging applications with trackers, as the detailed usage statistics they collect are often very invasive, and can sometimes reveal your identity as well as personal information that you would otherwise not intend to share.`,
          ru: `Остерегайтесь мессенджеров с трекерами, так как подробная статистика использования, которую они собирают, часто очень инвазивна и иногда может раскрыть вашу личность, а также личную информацию, которую вы в противном случае не намеревались делиться.`
        }
      },
      'Consider Jurisdiction': {
        point: { en: 'Consider Jurisdiction', ru: 'Учитывайте юрисдикцию' },
        details: {
          en: `The jurisdictions where the organisation is based, and data is hosted should also be taken into account.`,
          ru: `Также следует учитывать юрисдикции, где базируется организация и где размещены данные.`
        }
      },
      'Use an Anonymous Platform': {
        point: { en: 'Use an Anonymous Platform', ru: 'Используйте анонимную платформу' },
        details: {
          en: `If you believe you may be targeted, you should opt for an anonymous messaging platform that does not require a phone number, or any other personally identifiable information to sign up or use.`,
          ru: `Если вы считаете, что можете быть целью, вы должны выбрать анонимную платформу мессенджера, которая не требует номера телефона или любой другой личной идентифицирующей информации для регистрации или использования.`
        }
      },
      'Ensure Forward Secrecy is Supported': {
        point: { en: 'Ensure Forward Secrecy is Supported', ru: 'Убедитесь, что поддерживается Forward Secrecy' },
        details: {
          en: `Opt for a platform that implements forward secrecy. This is where your app generates a new encryption key for every message.`,
          ru: `Выберите платформу, которая реализует forward secrecy. Это когда ваше приложение генерирует новый ключ шифрования для каждого сообщения.`
        }
      },
      'Consider a Decentralized Platform': {
        point: { en: 'Consider a Decentralized Platform', ru: 'Рассмотрите децентрализованную платформу' },
        details: {
          en: `If all data flows through a central provider, you have to trust them with your data and meta-data. You cannot verify that the system running is authentic without back doors.`,
          ru: `Если все данные проходят через центрального провайдера, вы должны доверять им свои данные и метаданные. Вы не можете проверить, что работающая система аутентична без бэкдоров.`
        }
      }
    }
  },
  'social-media': {
    intro: {
      en: `Online communities have existed since the invention of the internet, and give people around the world the opportunity to connect, communicate and share. Although these networks are a great way to promote social interaction and bring people together, that have a dark side - there are some serious [Privacy Concerns with Social Networking Services](https://en.wikipedia.org/wiki/Privacy_concerns_with_social_networking_services), and these social networking sites are owned by private corporations, and that they make their money by collecting data about individuals and selling that data on, often to third party advertisers.

Secure your account, lock down your privacy settings, but know that even after doing so, all data intentionally and non-intentionally uploaded is effectively public. If possible, avoid using conventional social media networks.`,
      ru: `Онлайн-сообщества существуют с момента изобретения интернета и дают людям по всему миру возможность общаться, коммуницировать и делиться. Хотя эти сети — отличный способ способствовать социальному взаимодействию и объединять людей, у них есть темная сторона — существуют серьезные [проблемы конфиденциальности с социальными сетями](https://en.wikipedia.org/wiki/Privacy_concerns_with_social_networking_services), и эти сайты социальных сетей принадлежат частным корпорациям, которые зарабатывают деньги, собирая данные о людях и продавая эти данные, часто сторонним рекламодателям.

Защитите свой аккаунт, заблокируйте настройки конфиденциальности, но знайте, что даже после этого все данные, намеренно и ненамеренно загруженные, фактически являются публичными. Если возможно, избегайте использования обычных социальных сетей.`
    },
    items: {
      'Secure your Account': {
        point: { en: 'Secure your Account', ru: 'Защитите свой аккаунт' },
        details: {
          en: `Social media profiles get stolen or taken over all too often. To protect your account: use a unique and strong password, and enable 2-factor authentication.`,
          ru: `Профили в социальных сетях слишком часто крадутся или захватываются. Чтобы защитить свой аккаунт: используйте уникальный и надежный пароль и включите двухфакторную аутентификацию.`
        }
      },
      'Check Privacy Settings': {
        point: { en: 'Check Privacy Settings', ru: 'Проверьте настройки конфиденциальности' },
        details: {
          en: `Most social networks allow you to control your privacy settings. Ensure that you are comfortable with what data you are currently exposing and to whom.`,
          ru: `Большинство социальных сетей позволяют вам контролировать настройки конфиденциальности. Убедитесь, что вы довольны тем, какие данные вы в настоящее время раскрываете и кому.`
        }
      },
      'Think of All Interactions as Public': {
        point: { en: 'Think of All Interactions as Public', ru: 'Считайте все взаимодействия публичными' },
        details: {
          en: `There are still numerous methods of viewing a users 'private' content across many social networks. Therefore, before uploading, posting or commenting on anything, think "Would I mind if this was totally public?"`,
          ru: `Все еще существует множество методов просмотра "приватного" контента пользователей во многих социальных сетях. Поэтому перед загрузкой, публикацией или комментированием чего-либо подумайте: "Буду ли я против, если это будет полностью публичным?"`
        }
      },
      'Think of All Interactions as Permanent': {
        point: { en: 'Think of All Interactions as Permanent', ru: 'Считайте все взаимодействия постоянными' },
        details: {
          en: `Pretty much every post, comment, photo etc is being continuously backed up by a myriad of third-party services, who archive this data and make it indexable and publicly available almost forever.`,
          ru: `Практически каждый пост, комментарий, фотография и т.д. постоянно резервируются множеством сторонних сервисов, которые архивируют эти данные и делают их индексируемыми и публично доступными почти навсегда.`
        }
      },
      "Don't Reveal too Much": {
        point: { en: "Don't Reveal too Much", ru: 'Не раскрывайте слишком много' },
        details: {
          en: `Profile information creates a goldmine of info for hackers, the kind of data that helps them personalize phishing scams. Avoid sharing too much detail (DoB, Hometown, School etc).`,
          ru: `Информация профиля создает золотую жилу информации для хакеров, тот вид данных, который помогает им персонализировать фишинговые схемы. Избегайте делиться слишком большим количеством деталей (дата рождения, родной город, школа и т.д.).`
        }
      },
      'Be Careful what you Upload': {
        point: { en: 'Be Careful what you Upload', ru: 'Будьте осторожны с тем, что загружаете' },
        details: {
          en: `Status updates, comments, check-ins and media can unintentionally reveal a lot more than you intended them to. This is especially relevant to photos and videos, which may show things in the background.`,
          ru: `Обновления статуса, комментарии, отметки о посещении и медиа могут непреднамеренно раскрыть гораздо больше, чем вы намеревались. Это особенно актуально для фотографий и видео, которые могут показывать вещи на заднем плане.`
        }
      },
      "Don't Share Email or Phone Number": {
        point: { en: "Don't Share Email or Phone Number", ru: 'Не делитесь email или номером телефона' },
        details: {
          en: `Posting your real email address or mobile number, gives hackers, trolls and spammers more munition to use against you, and can also allow separate aliases, profiles or data points to be connected.`,
          ru: `Публикация вашего реального email-адреса или мобильного номера дает хакерам, троллям и спамерам больше боеприпасов для использования против вас, а также может позволить связать отдельные алиасы, профили или точки данных.`
        }
      },
      "Don't Grant Unnecessary Permissions": {
        point: { en: "Don't Grant Unnecessary Permissions", ru: 'Не предоставляйте ненужные разрешения' },
        details: {
          en: `By default many of the popular social networking apps will ask for permission to access your contacts, call log, location, messaging history etc. If they don't need this access, don't grant it.`,
          ru: `По умолчанию многие популярные приложения социальных сетей будут запрашивать разрешение на доступ к вашим контактам, журналу вызовов, местоположению, истории сообщений и т.д. Если им не нужен этот доступ, не предоставляйте его.`
        }
      },
      'Be Careful of 3rd-Party Integrations': {
        point: { en: 'Be Careful of 3rd-Party Integrations', ru: 'Будьте осторожны со сторонними интеграциями' },
        details: {
          en: `Avoid signing up for accounts using a Social Network login, revoke access to social apps you no longer use.`,
          ru: `Избегайте регистрации аккаунтов с использованием входа через социальную сеть, отзовите доступ к социальным приложениям, которые вы больше не используете.`
        }
      },
      'Avoid Publishing Geo Data while still Onsite': {
        point: { en: 'Avoid Publishing Geo Data while still Onsite', ru: 'Избегайте публикации геоданных, пока еще на месте' },
        details: {
          en: `If you plan to share any content that reveals a location, then wait until you have left that place. This is particularly important when you are taking a trip, at a restaurant, campus, hotel/resort, public building or airport.`,
          ru: `Если вы планируете поделиться любым контентом, который раскрывает местоположение, подождите, пока вы не покинете это место. Это особенно важно, когда вы в поездке, в ресторане, кампусе, отеле/курорте, общественном здании или аэропорту.`
        }
      },
      'Remove metadata before uploading media': {
        point: { en: 'Remove metadata before uploading media', ru: 'Удаляйте метаданные перед загрузкой медиа' },
        details: {
          en: `Most smartphones and some cameras automatically attach a comprehensive set of additional data (called EXIF data) to each photograph. Remove this data before uploading.`,
          ru: `Большинство смартфонов и некоторые камеры автоматически прикрепляют комплексный набор дополнительных данных (называемых EXIF-данными) к каждой фотографии. Удалите эти данные перед загрузкой.`
        }
      },
      'Implement Image Cloaking': {
        point: { en: 'Implement Image Cloaking', ru: 'Используйте маскировку изображений' },
        details: {
          en: `Tools like Fawkes can be used to very subtly, slightly change the structure of faces within photos in a way that is imperceptible by humans, but will prevent facial recognition systems from being able to recognize a given face.`,
          ru: `Инструменты, такие как Fawkes, могут быть использованы для очень тонкого, незначительного изменения структуры лиц на фотографиях таким образом, что это незаметно для людей, но предотвратит распознавание данного лица системами распознавания лиц.`
        }
      },
      'Consider Spoofing GPS in home vicinity': {
        point: { en: 'Consider Spoofing GPS in home vicinity', ru: 'Рассмотрите подделку GPS в районе дома' },
        details: {
          en: `Even if you yourself never use social media, there is always going to be others who are not as careful, and could reveal your location.`,
          ru: `Даже если вы сами никогда не используете социальные сети, всегда будут другие, которые не так осторожны и могут раскрыть ваше местоположение.`
        }
      },
      'Consider False Information': {
        point: { en: 'Consider False Information', ru: 'Рассмотрите ложную информацию' },
        details: {
          en: `If you just want to read, and do not intend on posting too much- consider using an alias name, and false contact details.`,
          ru: `Если вы просто хотите читать и не намереваетесь публиковать слишком много, рассмотрите использование псевдонима и ложных контактных данных.`
        }
      },
      "Don't have any social media accounts": {
        point: { en: "Don't have any social media accounts", ru: 'Не имейте аккаунтов в социальных сетях' },
        details: {
          en: `Social media is fundamentally un-private, so for maximum online security and privacy, avoid using any mainstream social networks.`,
          ru: `Социальные сети по своей сути не являются приватными, поэтому для максимальной онлайн-безопасности и конфиденциальности избегайте использования любых основных социальных сетей.`
        }
      }
    }
  },
  'networks': {
    intro: {
      en: `This section covers how you connect your devices to the internet securely, including configuring your router and setting up a VPN.`,
      ru: `В этом разделе рассматривается, как безопасно подключать ваши устройства к интернету, включая настройку роутера и настройку VPN.`
    },
    items: {
      'Use a VPN': {
        point: { en: 'Use a VPN', ru: 'Используйте VPN' },
        details: {
          en: `Use a reputable, paid-for VPN. This can help protect sites you visit from logging your real IP, reduce the amount of data your ISP can collect, and increase protection on public WiFi.`,
          ru: `Используйте авторитетный платный VPN. Это может помочь защитить посещаемые вами сайты от логирования вашего реального IP, уменьшить количество данных, которые может собирать ваш интернет-провайдер, и увеличить защиту в публичном WiFi.`
        }
      },
      'Change your Router Password': {
        point: { en: 'Change your Router Password', ru: 'Измените пароль роутера' },
        details: {
          en: `After getting a new router, change the password. Default router passwords are publicly available, meaning anyone within proximity would be able to connect.`,
          ru: `После получения нового роутера измените пароль. Пароли роутеров по умолчанию публично доступны, что означает, что любой в пределах досягаемости сможет подключиться.`
        }
      },
      'Use WPA2, and a strong password': {
        point: { en: 'Use WPA2, and a strong password', ru: 'Используйте WPA2 и надежный пароль' },
        details: {
          en: `There are different authentication protocols for connecting to WiFi. Currently, the most secure options are WPA2 and WPA3 (on newer routers).`,
          ru: `Существуют различные протоколы аутентификации для подключения к WiFi. В настоящее время наиболее безопасными вариантами являются WPA2 и WPA3 (на новых роутерах).`
        }
      },
      'Keep router firmware up-to-date': {
        point: { en: 'Keep router firmware up-to-date', ru: 'Поддерживайте прошивку роутера в актуальном состоянии' },
        details: {
          en: `Manufacturers release firmware updates that fix security vulnerabilities, implement new standards, and sometimes add features or improve the performance of your router.`,
          ru: `Производители выпускают обновления прошивки, которые исправляют уязвимости безопасности, реализуют новые стандарты, а иногда добавляют функции или улучшают производительность вашего роутера.`
        }
      },
      'Implement a Network-Wide VPN': {
        point: { en: 'Implement a Network-Wide VPN', ru: 'Внедрите VPN для всей сети' },
        details: {
          en: `If you configure your VPN on your router, firewall, or home server, then traffic from all devices will be encrypted and routed through it, without needing individual VPN apps.`,
          ru: `Если вы настроите VPN на своем роутере, файрволе или домашнем сервере, то трафик со всех устройств будет зашифрован и маршрутизирован через него, без необходимости в отдельных VPN-приложениях.`
        }
      },
      'Protect against DNS leaks': {
        point: { en: 'Protect against DNS leaks', ru: 'Защититесь от утечек DNS' },
        details: {
          en: `When using a VPN, it is extremely important to exclusively use the DNS server of your VPN provider or secure service.`,
          ru: `При использовании VPN крайне важно использовать исключительно DNS-сервер вашего VPN-провайдера или безопасного сервиса.`
        }
      },
      'Use a secure VPN Protocol': {
        point: { en: 'Use a secure VPN Protocol', ru: 'Используйте безопасный VPN-протокол' },
        details: {
          en: `OpenVPN and WireGuard are open source, lightweight, and secure tunneling protocols. Avoid using PPTP or SSTP.`,
          ru: `OpenVPN и WireGuard — это открытые, легковесные и безопасные туннельные протоколы. Избегайте использования PPTP или SSTP.`
        }
      },
      'Secure DNS': {
        point: { en: 'Secure DNS', ru: 'Безопасный DNS' },
        details: {
          en: `Use DNS-over-HTTPS which performs DNS resolution via the HTTPS protocol, encrypting data between you and your DNS resolver.`,
          ru: `Используйте DNS-over-HTTPS, который выполняет разрешение DNS через протокол HTTPS, шифруя данные между вами и вашим DNS-резолвером.`
        }
      },
      'Avoid the free router from your ISP': {
        point: { en: 'Avoid the free router from your ISP', ru: 'Избегайте бесплатного роутера от вашего интернет-провайдера' },
        details: {
          en: `Typically they're manufactured cheaply in bulk in China, with insecure propriety firmware that doesn't receive regular security updates.`,
          ru: `Обычно они дешево производятся массово в Китае, с небезопасной проприетарной прошивкой, которая не получает регулярных обновлений безопасности.`
        }
      },
      'Whitelist MAC Addresses': {
        point: { en: 'Whitelist MAC Addresses', ru: 'Добавьте MAC-адреса в белый список' },
        details: {
          en: `You can whitelist MAC addresses in your router settings, disallowing any unknown devices to immediately connect to your network, even if they know your credentials.`,
          ru: `Вы можете добавить MAC-адреса в белый список в настройках роутера, запрещая любым неизвестным устройствам немедленно подключаться к вашей сети, даже если они знают ваши учетные данные.`
        }
      },
      "Change the Router's Local IP Address": {
        point: { en: "Change the Router's Local IP Address", ru: 'Измените локальный IP-адрес роутера' },
        details: {
          en: `It is possible for a malicious script in your web browser to exploit a cross-site scripting vulnerability, accessing known-vulnerable routers at their local IP address and tampering with them.`,
          ru: `Вредоносный скрипт в вашем веб-браузере может использовать уязвимость межсайтового скриптинга, получая доступ к известным уязвимым роутерам по их локальному IP-адресу и вмешиваясь в них.`
        }
      },
      "Don't Reveal Personal Info in SSID": {
        point: { en: "Don't Reveal Personal Info in SSID", ru: 'Не раскрывайте личную информацию в SSID' },
        details: {
          en: `You should update your network name, choosing an SSID that does not identify you, include your flat number/address, and does not specify the device brand/model.`,
          ru: `Вы должны обновить имя сети, выбрав SSID, который не идентифицирует вас, не включает номер квартиры/адрес и не указывает марку/модель устройства.`
        }
      },
      'Opt-Out Router Listings': {
        point: { en: 'Opt-Out Router Listings', ru: 'Откажитесь от публикации роутера' },
        details: {
          en: `WiFi SSIDs are scanned, logged, and then published on various websites, which is a serious privacy concern for some.`,
          ru: `WiFi SSID сканируются, регистрируются, а затем публикуются на различных веб-сайтах, что является серьезной проблемой конфиденциальности для некоторых.`
        }
      },
      'Hide your SSID': {
        point: { en: 'Hide your SSID', ru: 'Скрывайте свой SSID' },
        details: {
          en: `Your router's Service Set Identifier is simply the network name. If it is not visible, it may receive less abuse.`,
          ru: `Service Set Identifier вашего роутера — это просто имя сети. Если оно не видно, оно может получать меньше злоупотреблений.`
        }
      },
      'Disable WPS': {
        point: { en: 'Disable WPS', ru: 'Отключите WPS' },
        details: {
          en: `Wi-Fi Protected Setup provides an easier method to connect, without entering a long WiFi password, but WPS introduces a series of major security issues.`,
          ru: `Wi-Fi Protected Setup предоставляет более простой метод подключения без ввода длинного пароля WiFi, но WPS вводит ряд серьезных проблем безопасности.`
        }
      },
      'Disable UPnP': {
        point: { en: 'Disable UPnP', ru: 'Отключите UPnP' },
        details: {
          en: `Universal Plug and Play allows applications to automatically forward a port on your router, but it has a long history of serious security issues.`,
          ru: `Universal Plug and Play позволяет приложениям автоматически перенаправлять порт на вашем роутере, но у него долгая история серьезных проблем безопасности.`
        }
      },
      'Use a Guest Network for Guests': {
        point: { en: 'Use a Guest Network for Guests', ru: 'Используйте гостевую сеть для гостей' },
        details: {
          en: `Do not grant access to your primary WiFi network to visitors, as it enables them to interact with other devices on the network.`,
          ru: `Не предоставляйте доступ к вашей основной WiFi-сети посетителям, так как это позволяет им взаимодействовать с другими устройствами в сети.`
        }
      },
      "Change your Router's Default IP": {
        point: { en: "Change your Router's Default IP", ru: 'Измените IP-адрес роутера по умолчанию' },
        details: {
          en: `Modifying your router admin panel's default IP address will make it more difficult for malicious scripts targeting local IP addresses.`,
          ru: `Изменение IP-адреса по умолчанию панели администратора роутера затруднит работу вредоносных скриптов, нацеленных на локальные IP-адреса.`
        }
      },
      'Kill unused processes and services on your router': {
        point: { en: 'Kill unused processes and services on your router', ru: 'Отключите неиспользуемые процессы и службы на роутере' },
        details: {
          en: `Services like Telnet and SSH that provide command-line access to devices should never be exposed to the internet and should also be disabled on the local network unless they're actually needed.`,
          ru: `Службы, такие как Telnet и SSH, которые предоставляют доступ к командной строке устройств, никогда не должны быть доступны в интернете и также должны быть отключены в локальной сети, если они не нужны.`
        }
      },
      "Don't have Open Ports": {
        point: { en: "Don't have Open Ports", ru: 'Не оставляйте открытые порты' },
        details: {
          en: `Close any open ports on your router that are not needed. Open ports provide an easy entrance for hackers.`,
          ru: `Закройте любые открытые порты на вашем роутере, которые не нужны. Открытые порты предоставляют легкий вход для хакеров.`
        }
      },
      'Disable Unused Remote Access Protocols': {
        point: { en: 'Disable Unused Remote Access Protocols', ru: 'Отключите неиспользуемые протоколы удаленного доступа' },
        details: {
          en: `When protocols such as PING, Telnet, SSH, UPnP, and HNAP etc are enabled, they allow your router to be probed from anywhere in the world.`,
          ru: `Когда протоколы, такие как PING, Telnet, SSH, UPnP и HNAP и т.д., включены, они позволяют зондировать ваш роутер из любой точки мира.`
        }
      },
      'Disable Cloud-Based Management': {
        point: { en: 'Disable Cloud-Based Management', ru: 'Отключите облачное управление' },
        details: {
          en: `You should treat your router's admin panel with the utmost care, as considerable damage can be caused if an attacker is able to gain access.`,
          ru: `Вы должны относиться к панели администратора роутера с максимальной осторожностью, так как значительный ущерб может быть причинен, если злоумышленник получит доступ.`
        }
      },
      'Manage Range Correctly': {
        point: { en: 'Manage Range Correctly', ru: 'Правильно управляйте радиусом действия' },
        details: {
          en: `It's common to want to pump your router's range to the max, but if you reside in a smaller flat, your attack surface is increased when your WiFi network can be picked up across the street.`,
          ru: `Обычно хочется увеличить радиус действия роутера до максимума, но если вы живете в небольшой квартире, ваша поверхность атаки увеличивается, когда вашу WiFi-сеть можно поймать через улицу.`
        }
      },
      'Route all traffic through Tor': {
        point: { en: 'Route all traffic through Tor', ru: 'Маршрутизируйте весь трафик через Tor' },
        details: {
          en: `VPNs have their weaknesses. For increased security, route all your internet traffic through the [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) network.`,
          ru: `VPN имеют свои слабости. Для повышения безопасности маршрутизируйте весь ваш интернет-трафик через сеть [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor).`
        }
      },
      'Disable WiFi on all Devices': {
        point: { en: 'Disable WiFi on all Devices', ru: 'Отключите WiFi на всех устройствах' },
        details: {
          en: `Connecting to even a secure WiFi network increases your attack surface. Disabling your home WiFi and connect each device via Ethernet.`,
          ru: `Подключение даже к безопасной WiFi-сети увеличивает вашу поверхность атаки. Отключите домашний WiFi и подключите каждое устройство через Ethernet.`
        }
      },
      'Route all traffic through [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor)': {
        point: { en: 'Route all traffic through Tor', ru: 'Маршрутизируйте весь трафик через Tor' },
        details: {
          en: `VPNs have their weaknesses. For increased security, route all your internet traffic through the [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) network.`,
          ru: `VPN имеют свои слабости. Для повышения безопасности маршрутизируйте весь ваш интернет-трафик через сеть [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor).`
        }
      }
    }
  },
  'mobile-devices': {
    intro: {
      en: `Smart phones have revolutionized so many aspects of life and brought the world to our fingertips. For many of us, smart phones are our primary means of communication, entertainment and access to knowledge. But while they've brought convenience to whole new level, there's some ugly things going on behind the screen.

Geo-tracking is used to trace our every move, and we have little control over who has this data- your phone is even able to [track your location without GPS](https://gizmodo.com/how-to-track-a-cellphone-without-gps-or-consent-1821125371). Over the years numerous reports that surfaced, outlining ways in which your phone's [mic can eavesdrop](https://www.independent.co.uk/life-style/gadgets-and-tech/news/smartphone-apps-listening-privacy-alphonso-shazam-advertising-pool-3d-honey-quest-a8139451.html), and the [camera can watch you](https://www.businessinsider.com/hackers-governments-smartphone-iphone-camera-wikileaks-cybersecurity-hack-privacy-webcam-2017-6)- all without your knowledge or consent. And then there's the malicious apps, lack of security patches and potential/ likely backdoors.

Using a smart phone generates a lot of data about you- from information you intentionally share, to data silently generated from your actions. It can be scary to see what Google, Microsoft, Apple and Facebook know about us- sometimes they know more than our closest family. It's hard to comprehend what your data will reveal, especially in conjunction with other data.

This data is used for [far more than just advertising](https://internethealthreport.org/2018/the-good-the-bad-and-the-ugly-sides-of-data-tracking/) - more often it's used to rate people for finance, insurance and employment. Targeted ads can even be used for fine-grained surveillance (see [ADINT](https://adint.cs.washington.edu))

More of us are concerned about how [governments use collect and use our smart phone data](https://www.statista.com/statistics/373916/global-opinion-online-monitoring-government/), and rightly so, federal agencies often [request our data from Google](https://www.statista.com/statistics/273501/global-data-requests-from-google-by-federal-agencies-and-governments/), [Facebook](https://www.statista.com/statistics/287845/global-data-requests-from-facebook-by-federal-agencies-and-governments/), Apple, Microsoft, Amazon, and other tech companies. Sometimes requests are made in bulk, returning detailed information on everybody within a certain geo-fence, [often for innocent people](https://www.nytimes.com/interactive/2019/04/13/us/google-location-tracking-police.html). And this doesn't include all of the internet traffic that intelligence agencies around the world have unhindered access to.`,
      ru: `Смартфоны произвели революцию во многих аспектах жизни и принесли мир к нашим кончикам пальцев. Для многих из нас смартфоны являются основным средством общения, развлечения и доступа к знаниям. Но хотя они принесли удобство на совершенно новый уровень, за экраном происходит кое-что неприятное.

Гео-отслеживание используется для отслеживания каждого нашего движения, и у нас мало контроля над тем, кто имеет эти данные — ваш телефон даже способен [отслеживать ваше местоположение без GPS](https://gizmodo.com/how-to-track-a-cellphone-without-gps-or-consent-1821125371). На протяжении многих лет появлялись многочисленные отчеты, описывающие способы, которыми [микрофон вашего телефона может подслушивать](https://www.independent.co.uk/life-style/gadgets-and-tech/news/smartphone-apps-listening-privacy-alphonso-shazam-advertising-pool-3d-honey-quest-a8139451.html), а [камера может наблюдать за вами](https://www.businessinsider.com/hackers-governments-smartphone-iphone-camera-wikileaks-cybersecurity-hack-privacy-webcam-2017-6) — все без вашего ведома или согласия. А еще есть вредоносные приложения, отсутствие патчей безопасности и потенциальные/вероятные бэкдоры.

Использование смартфона генерирует много данных о вас — от информации, которую вы намеренно делитесь, до данных, молча генерируемых из ваших действий. Может быть страшно видеть, что Google, Microsoft, Apple и Facebook знают о нас — иногда они знают больше, чем наша ближайшая семья. Трудно понять, что ваши данные раскроют, особенно в сочетании с другими данными.

Эти данные используются [для гораздо большего, чем просто реклама](https://internethealthreport.org/2018/the-good-the-bad-and-the-ugly-sides-of-data-tracking/) — чаще они используются для оценки людей для финансов, страхования и трудоустройства. Таргетированная реклама может даже использоваться для детального наблюдения (см. [ADINT](https://adint.cs.washington.edu)).

Все больше из нас обеспокоены тем, как [правительства собирают и используют данные наших смартфонов](https://www.statista.com/statistics/373916/global-opinion-online-monitoring-government/), и не без оснований, федеральные агентства часто [запрашивают наши данные у Google](https://www.statista.com/statistics/273501/global-data-requests-from-google-by-federal-agencies-and-governments/), [Facebook](https://www.statista.com/statistics/287845/global-data-requests-from-facebook-by-federal-agencies-and-governments/), Apple, Microsoft, Amazon и других технологических компаний. Иногда запросы делаются массово, возвращая подробную информацию обо всех в определенной гео-зоне, [часто для невинных людей](https://www.nytimes.com/interactive/2019/04/13/us/google-location-tracking-police.html). И это не включает весь интернет-трафик, к которому разведывательные агентства по всему миру имеют беспрепятственный доступ.`
    },
    items: {
      'Encrypt your Device': {
        point: { en: 'Encrypt your Device', ru: 'Зашифруйте ваше устройство' },
        details: {
          en: `In order to keep your data safe from physical access, use file encryption. This will mean if your device is lost or stolen, no one will have access to your data.`,
          ru: `Чтобы защитить ваши данные от физического доступа, используйте шифрование файлов. Это означает, что если ваше устройство потеряно или украдено, никто не получит доступ к вашим данным.`
        }
      },
      "Turn off connectivity features that aren't being used": {
        point: { en: "Turn off connectivity features that aren't being used", ru: 'Отключайте функции подключения, которые не используются' },
        details: {
          en: `When you're not using WiFi, Bluetooth, NFC etc, turn those features off. There are several common threats that utilise these features.`,
          ru: `Когда вы не используете WiFi, Bluetooth, NFC и т.д., отключайте эти функции. Существует несколько распространенных угроз, которые используют эти функции.`
        }
      },
      'Keep app count to a minimum': {
        point: { en: 'Keep app count to a minimum', ru: 'Держите количество приложений на минимуме' },
        details: {
          en: `Uninstall apps that you don't need or use regularly. As apps often run in the background, slowing your device down, but also collecting data.`,
          ru: `Удаляйте приложения, которые вам не нужны или которые вы не используете регулярно. Приложения часто работают в фоновом режиме, замедляя ваше устройство, но также собирая данные.`
        }
      },
      'App Permissions': {
        point: { en: 'App Permissions', ru: 'Разрешения приложений' },
        details: {
          en: `Don't grant apps permissions that they don't need. For Android, [Bouncer](https://awesome-privacy.xyz/security-tools/mobile-apps/bouncer) is an app that allows you to grant temporary/ 1-off permissions.`,
          ru: `Не предоставляйте приложениям разрешения, которые им не нужны. Для Android [Bouncer](https://awesome-privacy.xyz/security-tools/mobile-apps/bouncer) — это приложение, которое позволяет предоставлять временные/одноразовые разрешения.`
        }
      },
      'Only install Apps from official source': {
        point: { en: 'Only install Apps from official source', ru: 'Устанавливайте приложения только из официальных источников' },
        details: {
          en: `Applications on Apple App Store and Google Play Store are scanned and cryptographically signed, making them less likely to be malicious.`,
          ru: `Приложения в Apple App Store и Google Play Store сканируются и криптографически подписываются, что делает их менее вероятно вредоносными.`
        }
      },
      'Be Careful of Phone Charging Threats': {
        point: { en: 'Be Careful of Phone Charging Threats', ru: 'Будьте осторожны с угрозами зарядки телефона' },
        details: {
          en: `Juice Jacking is when hackers use public charging stations to install malware on your smartphone or tablet through a compromised USB port.`,
          ru: `Juice Jacking — это когда хакеры используют общественные зарядные станции для установки вредоносного ПО на ваш смартфон или планшет через скомпрометированный USB-порт.`
        }
      },
      'Set up a mobile carrier PIN': {
        point: { en: 'Set up a mobile carrier PIN', ru: 'Настройте PIN мобильного оператора' },
        details: {
          en: `SIM hijacking is when a hacker is able to get your mobile number transferred to their sim. The easiest way to protect against this is to set up a PIN through your mobile provider.`,
          ru: `Захват SIM — это когда хакер может перенести ваш мобильный номер на свою SIM-карту. Самый простой способ защититься от этого — настроить PIN через вашего мобильного провайдера.`
        }
      },
      'Opt-out of Caller ID Listings': {
        point: { en: 'Opt-out of Caller ID Listings', ru: 'Откажитесь от публикации в Caller ID' },
        details: {
          en: `To keep your details private, you can unlist your number from caller ID apps like TrueCaller, CallApp, SyncMe, and Hiya.`,
          ru: `Чтобы сохранить ваши данные в секрете, вы можете удалить свой номер из приложений Caller ID, таких как TrueCaller, CallApp, SyncMe и Hiya.`
        }
      },
      'Use Offline Maps': {
        point: { en: 'Use Offline Maps', ru: 'Используйте офлайн-карты' },
        details: {
          en: `Consider using an offline maps app, such as OsmAnd or Organic Maps, to reduce data leaks from map apps.`,
          ru: `Рассмотрите использование офлайн-приложения карт, такого как OsmAnd или Organic Maps, чтобы уменьшить утечки данных из приложений карт.`
        }
      },
      'Opt-out of personalized ads': {
        point: { en: 'Opt-out of personalized ads', ru: 'Откажитесь от персонализированной рекламы' },
        details: {
          en: `You can slightly reduce the amount of data collected by opting-out of seeing personalized ads.`,
          ru: `Вы можете немного уменьшить количество собираемых данных, отказавшись от просмотра персонализированной рекламы.`
        }
      },
      'Erase after too many login attempts': {
        point: { en: 'Erase after too many login attempts', ru: 'Стирайте после слишком многих попыток входа' },
        details: {
          en: `To protect against an attacker brute forcing your pin, set your device to erase after too many failed login attempts.`,
          ru: `Чтобы защититься от атаки методом перебора вашего PIN, установите на вашем устройстве стирание после слишком многих неудачных попыток входа.`
        }
      },
      'Monitor Trackers': {
        point: { en: 'Monitor Trackers', ru: 'Отслеживайте трекеры' },
        details: {
          en: `[εxodus](https://awesome-privacy.xyz/security-tools/online-tools/εxodus) is a great service which lets you search for any app and see which trackers are embedded in it.`,
          ru: `[εxodus](https://awesome-privacy.xyz/security-tools/online-tools/εxodus) — отличный сервис, который позволяет вам искать любое приложение и видеть, какие трекеры встроены в него.`
        }
      },
      'Use a Mobile Firewall': {
        point: { en: 'Use a Mobile Firewall', ru: 'Используйте мобильный файрвол' },
        details: {
          en: `To prevent applications from leaking privacy-sensitive data, you can install a firewall app.`,
          ru: `Чтобы предотвратить утечку конфиденциальных данных приложениями, вы можете установить приложение файрвола.`
        }
      },
      'Reduce Background Activity': {
        point: { en: 'Reduce Background Activity', ru: 'Уменьшите фоновую активность' },
        details: {
          en: `For Android, SuperFreeze makes it possible to entirely freeze all background activities on a per-app basis.`,
          ru: `Для Android SuperFreeze позволяет полностью заморозить всю фоновую активность для каждого приложения.`
        }
      },
      'Sandbox Mobile Apps': {
        point: { en: 'Sandbox Mobile Apps', ru: 'Изолируйте мобильные приложения' },
        details: {
          en: `Prevent permission-hungry apps from accessing your private data with [Island](https://awesome-privacy.xyz/security-tools/mobile-apps/island), a sandbox environment.`,
          ru: `Предотвратите доступ приложений, требующих разрешений, к вашим личным данным с помощью [Island](https://awesome-privacy.xyz/security-tools/mobile-apps/island), среды изоляции.`
        }
      },
      'Tor Traffic': {
        point: { en: 'Tor Traffic', ru: 'Трафик Tor' },
        details: {
          en: `[Orbot](https://awesome-privacy.xyz/security-tools/mobile-apps/orbot) provides a system-wide Tor connection, which will help protect you from surveillance and public WiFi threats.`,
          ru: `[Orbot](https://awesome-privacy.xyz/security-tools/mobile-apps/orbot) предоставляет системное соединение Tor, которое поможет защитить вас от наблюдения и угроз публичного WiFi.`
        }
      },
      'Avoid Custom Virtual Keyboards': {
        point: { en: 'Avoid Custom Virtual Keyboards', ru: 'Избегайте пользовательских виртуальных клавиатур' },
        details: {
          en: `It is recommended to stick with your device's stock keyboard. If you choose to use a third-party keyboard app, ensure it is reputable.`,
          ru: `Рекомендуется придерживаться стандартной клавиатуры вашего устройства. Если вы решите использовать стороннее приложение клавиатуры, убедитесь, что оно авторитетное.`
        }
      },
      'Restart Device Regularly': {
        point: { en: 'Restart Device Regularly', ru: 'Регулярно перезагружайте устройство' },
        details: {
          en: `Restarting your phone at least once a week will clear the app state cached in memory and may run more smoothly after a restart.`,
          ru: `Перезагрузка телефона хотя бы раз в неделю очистит состояние приложений, кэшированное в памяти, и может работать более плавно после перезагрузки.`
        }
      },
      'Avoid SMS': {
        point: { en: 'Avoid SMS', ru: 'Избегайте SMS' },
        details: {
          en: `SMS should not be used to receive 2FA codes or for communication, instead use an encrypted messaging app, such as [Signal](https://awesome-privacy.xyz/communication/encrypted-messaging/signal).`,
          ru: `SMS не следует использовать для получения кодов 2FA или для общения, вместо этого используйте зашифрованное приложение для сообщений, такое как [Signal](https://awesome-privacy.xyz/communication/encrypted-messaging/signal).`
        }
      },
      'Keep your Number Private': {
        point: { en: 'Keep your Number Private', ru: 'Держите свой номер в секрете' },
        details: {
          en: `[MySudo](https://awesome-privacy.xyz/finance/virtual-credit-cards/mysudo) allows you to create and use virtual phone numbers for different people or groups. This is great for compartmentalisation.`,
          ru: `[MySudo](https://awesome-privacy.xyz/finance/virtual-credit-cards/mysudo) позволяет создавать и использовать виртуальные номера телефонов для разных людей или групп. Это отлично для разделения.`
        }
      },
      'Watch out for Stalkerware': {
        point: { en: 'Watch out for Stalkerware', ru: 'Остерегайтесь Stalkerware' },
        details: {
          en: `Stalkerware is malware that is installed directly onto your device by someone you know. The best way to get rid of it is through a factory reset.`,
          ru: `Stalkerware — это вредоносное ПО, которое устанавливается непосредственно на ваше устройство кем-то, кого вы знаете. Лучший способ избавиться от него — через сброс к заводским настройкам.`
        }
      },
      'Favor the Browser, over Dedicated App': {
        point: { en: 'Favor the Browser, over Dedicated App', ru: 'Предпочитайте браузер вместо специального приложения' },
        details: {
          en: `Where possible, consider using a secure browser to access sites, rather than installing dedicated applications.`,
          ru: `Где возможно, рассмотрите использование безопасного браузера для доступа к сайтам, а не установку специальных приложений.`
        }
      },
      'Consider running a custom ROM (Android)': {
        point: { en: 'Consider running a custom ROM (Android)', ru: 'Рассмотрите запуск пользовательской прошивки (Android)' },
        details: {
          en: `If you're concerned about your device manufacturer collecting too much personal information, consider a privacy-focused custom ROM.`,
          ru: `Если вы обеспокоены тем, что производитель вашего устройства собирает слишком много личной информации, рассмотрите пользовательскую прошивку, ориентированную на конфиденциальность.`
        }
      }
    }
  },
  'personal-computers': {
    intro: {
      en: `Although Windows and OS X are easy to use and convenient, they both are far from secure. Your OS provides the interface between hardware and your applications, so if compromised can have detrimental effects.`,
      ru: `Хотя Windows и OS X просты в использовании и удобны, они далеки от безопасности. Ваша ОС предоставляет интерфейс между оборудованием и вашими приложениями, поэтому если она скомпрометирована, это может иметь пагубные последствия.`
    },
    items: {
      'Keep your System up-to-date': {
        point: { en: 'Keep your System up-to-date', ru: 'Поддерживайте систему в актуальном состоянии' },
        details: {
          en: `System updates contain fixes/patches for security issues, improve performance, and sometimes add new features. Install new updates when prompted.`,
          ru: `Обновления системы содержат исправления/патчи для проблем безопасности, улучшают производительность, а иногда добавляют новые функции. Устанавливайте новые обновления, когда будет предложено.`
        }
      },
      'Encrypt your Device': {
        point: { en: 'Encrypt your Device', ru: 'Зашифруйте ваше устройство' },
        details: {
          en: `Use BitLocker for Windows, FileVault on MacOS, or LUKS on Linux, to enable full disk encryption. This prevents unauthorized access if your computer is lost or stolen.`,
          ru: `Используйте BitLocker для Windows, FileVault на MacOS или LUKS на Linux для включения полного шифрования диска. Это предотвращает несанкционированный доступ, если ваш компьютер потерян или украден.`
        }
      },
      'Backup Important Data': {
        point: { en: 'Backup Important Data', ru: 'Резервное копирование важных данных' },
        details: {
          en: `Maintaining encrypted backups prevents loss due to ransomware, theft, or damage. Consider using [Cryptomator](https://awesome-privacy.xyz/security-tools/mobile-apps/cryptomator) for cloud files or [VeraCrypt](https://awesome-privacy.xyz/essentials/file-encryption/veracrypt) for USB drives.`,
          ru: `Поддержание зашифрованных резервных копий предотвращает потерю из-за ransomware, кражи или повреждения. Рассмотрите использование [Cryptomator](https://awesome-privacy.xyz/security-tools/mobile-apps/cryptomator) для облачных файлов или [VeraCrypt](https://awesome-privacy.xyz/essentials/file-encryption/veracrypt) для USB-накопителей.`
        }
      },
      'Be Careful Plugging USB Devices into your Computer': {
        point: { en: 'Be Careful Plugging USB Devices into your Computer', ru: 'Будьте осторожны при подключении USB-устройств к компьютеру' },
        details: {
          en: `USB devices can pose serious threats. Consider making a USB sanitizer with CIRCLean to safely check USB devices.`,
          ru: `USB-устройства могут представлять серьезные угрозы. Рассмотрите создание USB-санитайзера с CIRCLean для безопасной проверки USB-устройств.`
        }
      },
      'Activate Screen-Lock when Idle': {
        point: { en: 'Activate Screen-Lock when Idle', ru: 'Активируйте блокировку экрана при простое' },
        details: {
          en: `Lock your computer when away and set it to require a password on resume from screensaver or sleep to prevent unauthorized access.`,
          ru: `Блокируйте компьютер, когда уходите, и установите требование пароля при возобновлении работы после заставки или сна, чтобы предотвратить несанкционированный доступ.`
        }
      },
      'Disable Cortana or Siri': {
        point: { en: 'Disable Cortana or Siri', ru: 'Отключите Cortana или Siri' },
        details: {
          en: `Voice-controlled assistants can have privacy implications due to data sent back for processing. Disable or limit their listening capabilities.`,
          ru: `Голосовые помощники могут иметь последствия для конфиденциальности из-за данных, отправляемых обратно для обработки. Отключите или ограничьте их возможности прослушивания.`
        }
      },
      'Review your Installed Apps': {
        point: { en: 'Review your Installed Apps', ru: 'Проверьте установленные приложения' },
        details: {
          en: `Keep installed applications to a minimum to reduce exposure to vulnerabilities and regularly clear application caches.`,
          ru: `Держите установленные приложения на минимуме, чтобы уменьшить подверженность уязвимостям, и регулярно очищайте кэши приложений.`
        }
      },
      'Manage Permissions': {
        point: { en: 'Manage Permissions', ru: 'Управляйте разрешениями' },
        details: {
          en: `Control which apps have access to your location, camera, microphone, contacts, and other sensitive information.`,
          ru: `Контролируйте, какие приложения имеют доступ к вашему местоположению, камере, микрофону, контактам и другой конфиденциальной информации.`
        }
      },
      'Disallow Usage Data from being sent to the Cloud': {
        point: { en: 'Disallow Usage Data from being sent to the Cloud', ru: 'Запретите отправку данных об использовании в облако' },
        details: {
          en: `Limit the amount of usage information or feedback sent to the cloud to protect your privacy.`,
          ru: `Ограничьте количество информации об использовании или обратной связи, отправляемой в облако, чтобы защитить вашу конфиденциальность.`
        }
      },
      'Avoid Quick Unlock': {
        point: { en: 'Avoid Quick Unlock', ru: 'Избегайте быстрой разблокировки' },
        details: {
          en: `Use a strong password instead of biometrics or short PINs for unlocking your computer to enhance security.`,
          ru: `Используйте надежный пароль вместо биометрии или коротких PIN для разблокировки компьютера, чтобы повысить безопасность.`
        }
      },
      'Power Off Computer, instead of Standby': {
        point: { en: 'Power Off Computer, instead of Standby', ru: 'Выключайте компьютер вместо режима ожидания' },
        details: {
          en: `Shut down your device when not in use, especially if your disk is encrypted, to keep data secure.`,
          ru: `Выключайте устройство, когда оно не используется, особенно если ваш диск зашифрован, чтобы сохранить данные в безопасности.`
        }
      },
      "Don't link your PC with your Microsoft or Apple Account": {
        point: { en: "Don't link your PC with your Microsoft or Apple Account", ru: 'Не связывайте ПК с вашим аккаунтом Microsoft или Apple' },
        details: {
          en: `Use a local account only to prevent data syncing and exposure. Avoid using sync services that compromise privacy.`,
          ru: `Используйте только локальный аккаунт, чтобы предотвратить синхронизацию данных и их раскрытие. Избегайте использования сервисов синхронизации, которые компрометируют конфиденциальность.`
        }
      },
      'Check which Sharing Services are Enabled': {
        point: { en: 'Check which Sharing Services are Enabled', ru: 'Проверьте, какие службы общего доступа включены' },
        details: {
          en: `Disable network sharing features you are not using to close gateways to common threats.`,
          ru: `Отключите функции сетевого общего доступа, которые вы не используете, чтобы закрыть шлюзы для распространенных угроз.`
        }
      },
      "Don't use Root/Admin Account for Non-Admin Tasks": {
        point: { en: "Don't use Root/Admin Account for Non-Admin Tasks", ru: 'Не используйте аккаунт Root/Admin для задач не администратора' },
        details: {
          en: `Use an unprivileged user account for daily tasks and only elevate permissions for administrative changes to mitigate vulnerabilities.`,
          ru: `Используйте непривилегированный пользовательский аккаунт для ежедневных задач и повышайте разрешения только для административных изменений, чтобы уменьшить уязвимости.`
        }
      },
      'Block Webcam + Microphone': {
        point: { en: 'Block Webcam + Microphone', ru: 'Блокируйте веб-камеру + микрофон' },
        details: {
          en: `Cover your webcam when not in use and consider blocking unauthorized audio recording to protect privacy.`,
          ru: `Закрывайте веб-камеру, когда она не используется, и рассмотрите блокировку несанкционированной аудиозаписи для защиты конфиденциальности.`
        }
      },
      'Use a Privacy Filter': {
        point: { en: 'Use a Privacy Filter', ru: 'Используйте фильтр конфиденциальности' },
        details: {
          en: `Use a screen privacy filter in public spaces to prevent shoulder surfing and protect sensitive information.`,
          ru: `Используйте фильтр конфиденциальности экрана в общественных местах, чтобы предотвратить подсматривание через плечо и защитить конфиденциальную информацию.`
        }
      },
      'Physically Secure Device': {
        point: { en: 'Physically Secure Device', ru: 'Физически защитите устройство' },
        details: {
          en: `Use a Kensington Lock to secure your laptop in public spaces and consider port locks to prevent unauthorized physical access.`,
          ru: `Используйте замок Kensington для защиты ноутбука в общественных местах и рассмотрите блокировку портов для предотвращения несанкционированного физического доступа.`
        }
      },
      "Don't Charge Devices from your PC": {
        point: { en: "Don't Charge Devices from your PC", ru: 'Не заряжайте устройства от ПК' },
        details: {
          en: `Use a power bank or AC wall charger instead of your PC to avoid security risks associated with USB connections.`,
          ru: `Используйте внешний аккумулятор или настенное зарядное устройство переменного тока вместо ПК, чтобы избежать рисков безопасности, связанных с USB-соединениями.`
        }
      },
      'Randomize your hardware address on Wi-Fi': {
        point: { en: 'Randomize your hardware address on Wi-Fi', ru: 'Рандомизируйте аппаратный адрес в Wi-Fi' },
        details: {
          en: `Modify or randomize your MAC address to protect against tracking across different WiFi networks.`,
          ru: `Измените или рандомизируйте ваш MAC-адрес, чтобы защититься от отслеживания в разных WiFi-сетях.`
        }
      },
      'Use a Firewall': {
        point: { en: 'Use a Firewall', ru: 'Используйте файрвол' },
        details: {
          en: `Install a firewall app to monitor and block unwanted internet access by certain applications, protecting against remote access attacks and privacy breaches.`,
          ru: `Установите приложение файрвола для мониторинга и блокировки нежелательного доступа в интернет определенными приложениями, защищая от атак удаленного доступа и нарушений конфиденциальности.`
        }
      },
      'Protect Against Software Keyloggers': {
        point: { en: 'Protect Against Software Keyloggers', ru: 'Защититесь от программных кейлоггеров' },
        details: {
          en: `Use key stroke encryption tools to protect against software keyloggers recording your keystrokes.`,
          ru: `Используйте инструменты шифрования нажатий клавиш для защиты от программных кейлоггеров, записывающих ваши нажатия клавиш.`
        }
      },
      'Check Keyboard Connection': {
        point: { en: 'Check Keyboard Connection', ru: 'Проверьте подключение клавиатуры' },
        details: {
          en: `Be vigilant for hardware keyloggers when using public or unfamiliar computers by checking keyboard connections.`,
          ru: `Будьте бдительны к аппаратным кейлоггерам при использовании общественных или незнакомых компьютеров, проверяя подключения клавиатуры.`
        }
      },
      'Prevent Keystroke Injection Attacks': {
        point: { en: 'Prevent Keystroke Injection Attacks', ru: 'Предотвратите атаки инъекции нажатий клавиш' },
        details: {
          en: `Lock your PC when away and consider using USBGuard or similar tools to protect against keystroke injection attacks.`,
          ru: `Блокируйте ПК, когда уходите, и рассмотрите использование USBGuard или подобных инструментов для защиты от атак инъекции нажатий клавиш.`
        }
      },
      "Don't use commercial \"Free\" Anti-Virus": {
        point: { en: "Don't use commercial \"Free\" Anti-Virus", ru: 'Не используйте коммерческие "бесплатные" антивирусы' },
        details: {
          en: `Rely on built-in security tools and avoid free anti-virus applications due to their potential for privacy invasion and data collection.`,
          ru: `Полагайтесь на встроенные инструменты безопасности и избегайте бесплатных антивирусных приложений из-за их потенциала для вторжения в конфиденциальность и сбора данных.`
        }
      },
      'Periodically check for Rootkits': {
        point: { en: 'Periodically check for Rootkits', ru: 'Периодически проверяйте на руткиты' },
        details: {
          en: `Regularly check for rootkits to detect and mitigate full system control threats using tools like [chkrootkit](https://awesome-privacy.xyz/operating-systems/linux-defenses/chkrootkit).`,
          ru: `Регулярно проверяйте на руткиты для обнаружения и устранения угроз полного контроля системы с помощью инструментов, таких как [chkrootkit](https://awesome-privacy.xyz/operating-systems/linux-defenses/chkrootkit).`
        }
      },
      'BIOS Boot Password': {
        point: { en: 'BIOS Boot Password', ru: 'Пароль загрузки BIOS' },
        details: {
          en: `Enable a BIOS or UEFI password to add an additional security layer during boot-up, though be aware of its limitations.`,
          ru: `Включите пароль BIOS или UEFI для добавления дополнительного уровня безопасности во время загрузки, хотя будьте aware его ограничений.`
        }
      },
      'Use a Security-Focused Operating System': {
        point: { en: 'Use a Security-Focused Operating System', ru: 'Используйте ОС, ориентированную на безопасность' },
        details: {
          en: `Consider switching to Linux or a security-focused distro like QubeOS or [Tails](https://awesome-privacy.xyz/operating-systems/desktop-operating-systems/tails) for enhanced privacy and security.`,
          ru: `Рассмотрите переход на Linux или дистрибутив, ориентированный на безопасность, такой как QubeOS или [Tails](https://awesome-privacy.xyz/operating-systems/desktop-operating-systems/tails) для улучшенной конфиденциальности и безопасности.`
        }
      },
      'Make Use of VMs': {
        point: { en: 'Make Use of VMs', ru: 'Используйте виртуальные машины' },
        details: {
          en: `Use virtual machines for risky activities or testing suspicious software to isolate potential threats from your primary system.`,
          ru: `Используйте виртуальные машины для рискованных действий или тестирования подозрительного программного обеспечения, чтобы изолировать потенциальные угрозы от вашей основной системы.`
        }
      },
      'Compartmentalize': {
        point: { en: 'Compartmentalize', ru: 'Разделяйте' },
        details: {
          en: `Isolate different programs and data sources from one another as much as possible to limit the extent of potential breaches.`,
          ru: `Изолируйте разные программы и источники данных друг от друга как можно больше, чтобы ограничить масштаб потенциальных нарушений.`
        }
      },
      'Disable Undesired Features (Windows)': {
        point: { en: 'Disable Undesired Features (Windows)', ru: 'Отключите нежелательные функции (Windows)' },
        details: {
          en: `Disable unnecessary Windows "features" and services that run in the background to reduce data collection and resource use.`,
          ru: `Отключите ненужные "функции" и службы Windows, которые работают в фоновом режиме, чтобы уменьшить сбор данных и использование ресурсов.`
        }
      },
      'Secure Boot': {
        point: { en: 'Secure Boot', ru: 'Безопасная загрузка' },
        details: {
          en: `Ensure that Secure Boot is enabled to prevent malware from replacing your boot loader and other critical software.`,
          ru: `Убедитесь, что Secure Boot включен, чтобы предотвратить замену загрузчика и другого критического программного обеспечения вредоносным ПО.`
        }
      },
      'Secure SSH Access': {
        point: { en: 'Secure SSH Access', ru: 'Защитите доступ SSH' },
        details: {
          en: `Take steps to protect SSH access from attacks by changing the default port, using SSH keys, and configuring firewalls.`,
          ru: `Примите меры для защиты доступа SSH от атак, изменив порт по умолчанию, используя SSH-ключи и настроив файрволы.`
        }
      },
      'Close Un-used Open Ports': {
        point: { en: 'Close Un-used Open Ports', ru: 'Закройте неиспользуемые открытые порты' },
        details: {
          en: `Turn off services listening on external ports that are not needed to protect against remote exploits and improve security.`,
          ru: `Отключите службы, прослушивающие внешние порты, которые не нужны, чтобы защититься от удаленных эксплойтов и улучшить безопасность.`
        }
      },
      'Implement Mandatory Access Control': {
        point: { en: 'Implement Mandatory Access Control', ru: 'Внедрите обязательный контроль доступа' },
        details: {
          en: `Restrict privileged access to limit the damage that can be done if a system is compromised.`,
          ru: `Ограничьте привилегированный доступ, чтобы ограничить ущерб, который может быть нанесен, если система скомпрометирована.`
        }
      },
      'Use Canary Tokens': {
        point: { en: 'Use Canary Tokens', ru: 'Используйте Canary Tokens' },
        details: {
          en: `Deploy canary tokens to detect unauthorized access to your files or emails faster and gather information about the intruder.`,
          ru: `Разверните canary tokens для более быстрого обнаружения несанкционированного доступа к вашим файлам или email и сбора информации о злоумышленнике.`
        }
      }
    }
  },
  'smart-home': {
    intro: {
      en: `Home assistants (such as Google Home, Alexa and Siri) and other internet connected devices collect large amounts of personal data (including voice samples, location data, home details and logs of all interactions). Since you have limited control on what is being collected, how it's stored, and what it will be used for, this makes it hard to recommend any consumer smart-home products to anyone who cares about privacy and security.

Security vs Privacy: There are many smart devices on the market that claim to increase the security of your home while being easy and convenient to use (Such as Smart Burglar Alarms, Internet Security Cameras, Smart Locks and Remote access Doorbells to name a few). These devices may appear to make security easier, but there is a trade-off in terms of privacy: as they collect large amounts of personal data, and leave you without control over how this is stored or used. The security of these devices is also questionable, since many of them can be (and are being) hacked, allowing an intruder to bypass detection with minimum effort.

The most privacy-respecting option, would be to not use "smart" internet-connected devices in your home, and not to rely on a security device that requires an internet connection. But if you do, it is important to fully understand the risks of any given product, before buying it. Then adjust settings to increase privacy and security. The following checklist will help mitigate the risks associated with internet-connected home devices.`,
      ru: `Домашние помощники (такие как Google Home, Alexa и Siri) и другие устройства, подключенные к интернету, собирают большие объемы личных данных (включая образцы голоса, данные о местоположении, детали дома и журналы всех взаимодействий). Поскольку у вас ограниченный контроль над тем, что собирается, как это хранится и для чего будет использоваться, это затрудняет рекомендацию любых потребительских продуктов для умного дома тем, кто заботится о конфиденциальности и безопасности.

Безопасность против конфиденциальности: На рынке есть много умных устройств, которые заявляют о повышении безопасности вашего дома, будучи простыми и удобными в использовании (такие как умные охранные сигнализации, интернет-камеры безопасности, умные замки и дверные звонки с удаленным доступом, чтобы назвать несколько). Эти устройства могут казаться, что делают безопасность проще, но есть компромисс в плане конфиденциальности: они собирают большие объемы личных данных и оставляют вас без контроля над тем, как это хранится или используется. Безопасность этих устройств также сомнительна, поскольку многие из них могут быть (и взламываются) взломаны, позволяя злоумышленнику обойти обнаружение с минимальными усилиями.

Самый уважающий конфиденциальность вариант — не использовать "умные" устройства, подключенные к интернету, в вашем доме, и не полагаться на устройство безопасности, которое требует подключения к интернету. Но если вы это делаете, важно полностью понять риски любого продукта перед покупкой. Затем настройте настройки для повышения конфиденциальности и безопасности. Следующий чеклист поможет смягчить риски, связанные с устройствами для умного дома, подключенными к интернету.`
    },
    items: {
      'Rename devices to not specify brand/model': {
        point: { en: 'Rename devices to not specify brand/model', ru: 'Переименуйте устройства, чтобы не указывать марку/модель' },
        details: {
          en: `Change default device names to something generic to prevent targeted attacks by obscuring brand or model information.`,
          ru: `Измените имена устройств по умолчанию на что-то общее, чтобы предотвратить целевые атаки, скрывая информацию о марке или модели.`
        }
      },
      'Disable microphone and camera when not in use': {
        point: { en: 'Disable microphone and camera when not in use', ru: 'Отключайте микрофон и камеру, когда они не используются' },
        details: {
          en: `Use hardware switches to turn off microphones and cameras on smart devices to protect against accidental recordings or targeted access.`,
          ru: `Используйте аппаратные переключатели для отключения микрофонов и камер на умных устройствах, чтобы защититься от случайных записей или целевого доступа.`
        }
      },
      'Understand what data is collected, stored and transmitted': {
        point: { en: 'Understand what data is collected, stored and transmitted', ru: 'Поймите, какие данные собираются, хранятся и передаются' },
        details: {
          en: `Research and ensure comfort with the data handling practices of smart home devices before purchase, avoiding devices that share data with third parties.`,
          ru: `Изучите и убедитесь в комфорте с практиками обработки данных устройств для умного дома перед покупкой, избегая устройств, которые делятся данными с третьими лицами.`
        }
      },
      'Set privacy settings, and opt out of sharing data with third parties': {
        point: { en: 'Set privacy settings, and opt out of sharing data with third parties', ru: 'Настройте параметры конфиденциальности и откажитесь от обмена данными с третьими лицами' },
        details: {
          en: `Adjust app settings for strictest privacy controls and opt-out of data sharing with third parties wherever possible.`,
          ru: `Настройте параметры приложения для самых строгих элементов управления конфиденциальностью и откажитесь от обмена данными с третьими лицами везде, где это возможно.`
        }
      },
      "Don't link your smart home devices to your real identity": {
        point: { en: "Don't link your smart home devices to your real identity", ru: 'Не связывайте устройства умного дома с вашей реальной личностью' },
        details: {
          en: `Use anonymous usernames and passwords, avoiding sign-up/log-in via social media or other third-party services to maintain privacy.`,
          ru: `Используйте анонимные имена пользователей и пароли, избегая регистрации/входа через социальные сети или другие сторонние сервисы для сохранения конфиденциальности.`
        }
      },
      'Keep firmware up-to-date': {
        point: { en: 'Keep firmware up-to-date', ru: 'Поддерживайте прошивку в актуальном состоянии' },
        details: {
          en: `Regularly update smart device firmware to apply security patches and enhancements.`,
          ru: `Регулярно обновляйте прошивку умных устройств для применения патчей безопасности и улучшений.`
        }
      },
      'Protect your Network': {
        point: { en: 'Protect your Network', ru: 'Защитите вашу сеть' },
        details: {
          en: `Secure your home WiFi and network to prevent unauthorized access to smart devices.`,
          ru: `Защитите ваш домашний WiFi и сеть, чтобы предотвратить несанкционированный доступ к умным устройствам.`
        }
      },
      'Be wary of wearables': {
        point: { en: 'Be wary of wearables', ru: 'Остерегайтесь носимых устройств' },
        details: {
          en: `Consider the extensive data collection capabilities of wearable devices and their implications for privacy.`,
          ru: `Рассмотрите обширные возможности сбора данных носимых устройств и их последствия для конфиденциальности.`
        }
      },
      "Don't connect your home's critical infrastructure to the Internet": {
        point: { en: "Don't connect your home's critical infrastructure to the Internet", ru: 'Не подключайте критическую инфраструктуру дома к интернету' },
        details: {
          en: `Evaluate the risks of internet-connected thermostats, alarms, and detectors due to potential remote access by hackers.`,
          ru: `Оцените риски термостатов, сигнализаций и детекторов, подключенных к интернету, из-за потенциального удаленного доступа хакеров.`
        }
      },
      'Mitigate Alexa/ Google Home Risks': {
        point: { en: 'Mitigate Alexa/ Google Home Risks', ru: 'Смягчите риски Alexa/Google Home' },
        details: {
          en: `Consider privacy-focused alternatives like [Mycroft](https://awesome-privacy.xyz/smart-home-and-iot/voice-assistants/mycroft) or use Project Alias to prevent idle listening by voice-activated assistants.`,
          ru: `Рассмотрите альтернативы, ориентированные на конфиденциальность, такие как [Mycroft](https://awesome-privacy.xyz/smart-home-and-iot/voice-assistants/mycroft), или используйте Project Alias для предотвращения прослушивания в режиме ожидания голосовыми помощниками.`
        }
      },
      'Monitor your home network closely': {
        point: { en: 'Monitor your home network closely', ru: 'Внимательно следите за домашней сетью' },
        details: {
          en: `Use tools like FingBox or router features to monitor for unusual network activity.`,
          ru: `Используйте инструменты, такие как FingBox или функции роутера, для мониторинга необычной сетевой активности.`
        }
      },
      'Deny Internet access where possible': {
        point: { en: 'Deny Internet access where possible', ru: 'Запретите доступ в интернет, где возможно' },
        details: {
          en: `Use firewalls to block internet access for devices that don't need it, limiting operation to local network use.`,
          ru: `Используйте файрволы для блокировки доступа в интернет для устройств, которым он не нужен, ограничивая работу использованием локальной сети.`
        }
      },
      'Assess risks': {
        point: { en: 'Assess risks', ru: 'Оцените риски' },
        details: {
          en: `Consider the privacy implications for all household members and adjust device settings for security and privacy, such as disabling devices at certain times.`,
          ru: `Рассмотрите последствия для конфиденциальности всех членов домохозяйства и настройте параметры устройств для безопасности и конфиденциальности, например, отключение устройств в определенное время.`
        }
      }
    }
  },
  'personal-finance': {
    intro: {
      en: `Credit card fraud is the most common form of identity theft (with [133,015 reports in the US in 2017 alone](https://www.experian.com/blogs/ask-experian/identity-theft-statistics/)), and a total loss of $905 million, which was a 26% increase from the previous year. The with a median amount lost per person was $429 in 2017. It's more important than ever to take basic steps to protect yourself from falling victim

Note about credit cards: Credit cards have technological methods in place to detect and stop some fraudulent transactions. Major payment processors implement this, by mining huge amounts of data from their card holders, in order to know a great deal about each persons spending habits. This data is used to identify fraud, but is also sold onto other data brokers. Credit cards are therefore good for security, but terrible for data privacy.`,
      ru: `Мошенничество с кредитными картами является наиболее распространенной формой кражи личных данных (с [133,015 сообщениями в США только в 2017 году](https://www.experian.com/blogs/ask-experian/identity-theft-statistics/)), и общим убытком в 905 миллионов долларов, что было увеличением на 26% по сравнению с предыдущим годом. Медианная сумма, потерянная на человека, составила 429 долларов в 2017 году. Как никогда важно принять базовые шаги для защиты себя от жертвы

Примечание о кредитных картах: Кредитные карты имеют технологические методы для обнаружения и остановки некоторых мошеннических транзакций. Крупные платежные процессоры реализуют это, добывая огромные объемы данных от держателей карт, чтобы знать многое о привычках расходов каждого человека. Эти данные используются для идентификации мошенничества, но также продаются другим брокерам данных. Поэтому кредитные карты хороши для безопасности, но ужасны для конфиденциальности данных.`
    },
    items: {
      'Sign up for Fraud Alerts and Credit Monitoring': {
        point: { en: 'Sign up for Fraud Alerts and Credit Monitoring', ru: 'Зарегистрируйтесь на оповещения о мошенничестве и мониторинг кредита' },
        details: {
          en: `Enable fraud alerts and credit monitoring through Experian, TransUnion, or Equifax to be alerted of suspicious activity.`,
          ru: `Включите оповещения о мошенничестве и мониторинг кредита через Experian, TransUnion или Equifax, чтобы получать предупреждения о подозрительной активности.`
        }
      },
      'Apply a Credit Freeze': {
        point: { en: 'Apply a Credit Freeze', ru: 'Примените заморозку кредита' },
        details: {
          en: `Prevent unauthorized credit inquiries by freezing your credit through Experian, TransUnion, and Equifax.`,
          ru: `Предотвратите несанкционированные запросы кредита, заморозив ваш кредит через Experian, TransUnion и Equifax.`
        }
      },
      'Use Virtual Cards': {
        point: { en: 'Use Virtual Cards', ru: 'Используйте виртуальные карты' },
        details: {
          en: `Utilize virtual card numbers for online transactions to protect your real banking details. Services like [Privacy.com](https://awesome-privacy.xyz/finance/virtual-credit-cards/privacy.com) and [MySudo](https://awesome-privacy.xyz/finance/virtual-credit-cards/mysudo) offer such features.`,
          ru: `Используйте виртуальные номера карт для онлайн-транзакций, чтобы защитить ваши реальные банковские данные. Сервисы, такие как [Privacy.com](https://awesome-privacy.xyz/finance/virtual-credit-cards/privacy.com) и [MySudo](https://awesome-privacy.xyz/finance/virtual-credit-cards/mysudo), предлагают такие функции.`
        }
      },
      'Use Cash for Local Transactions': {
        point: { en: 'Use Cash for Local Transactions', ru: 'Используйте наличные для местных транзакций' },
        details: {
          en: `Pay with [Cash](https://awesome-privacy.xyz/finance/other-payment-methods/cash) for local and everyday purchases to avoid financial profiling by institutions.`,
          ru: `Платите [наличными](https://awesome-privacy.xyz/finance/other-payment-methods/cash) за местные и повседневные покупки, чтобы избежать финансового профилирования учреждениями.`
        }
      },
      'Use Cryptocurrency for Online Transactions': {
        point: { en: 'Use Cryptocurrency for Online Transactions', ru: 'Используйте криптовалюту для онлайн-транзакций' },
        details: {
          en: `Opt for privacy-focused cryptocurrencies like [Monero](https://awesome-privacy.xyz/finance/cryptocurrencies/monero) for online transactions to maintain anonymity. Use cryptocurrencies wisely to ensure privacy.`,
          ru: `Выберите криптовалюты, ориентированные на конфиденциальность, такие как [Monero](https://awesome-privacy.xyz/finance/cryptocurrencies/monero), для онлайн-транзакций для сохранения анонимности. Используйте криптовалюты разумно, чтобы обеспечить конфиденциальность.`
        }
      },
      'Store Crypto Securely': {
        point: { en: 'Store Crypto Securely', ru: 'Храните криптовалюту безопасно' },
        details: {
          en: `Securely store cryptocurrencies using offline wallet generation, hardware wallets like [Trezor](https://awesome-privacy.xyz/finance/crypto-wallets/trezor) or [ColdCard](https://awesome-privacy.xyz/finance/crypto-wallets/coldcard), or consider long-term storage solutions like [CryptoSteel](https://awesome-privacy.xyz/finance/crypto-wallets/cryptosteel).`,
          ru: `Безопасно храните криптовалюты, используя офлайн-генерацию кошельков, аппаратные кошельки, такие как [Trezor](https://awesome-privacy.xyz/finance/crypto-wallets/trezor) или [ColdCard](https://awesome-privacy.xyz/finance/crypto-wallets/coldcard), или рассмотрите долгосрочные решения хранения, такие как [CryptoSteel](https://awesome-privacy.xyz/finance/crypto-wallets/cryptosteel).`
        }
      },
      'Buy Crypto Anonymously': {
        point: { en: 'Buy Crypto Anonymously', ru: 'Покупайте криптовалюту анонимно' },
        details: {
          en: `Purchase cryptocurrencies without linking to your identity through services like [LocalBitcoins](https://awesome-privacy.xyz/finance/crypto-exchanges/localbitcoins), [Bisq](https://awesome-privacy.xyz/finance/crypto-exchanges/bisq), or Bitcoin ATMs.`,
          ru: `Покупайте криптовалюты без привязки к вашей личности через сервисы, такие как [LocalBitcoins](https://awesome-privacy.xyz/finance/crypto-exchanges/localbitcoins), [Bisq](https://awesome-privacy.xyz/finance/crypto-exchanges/bisq) или Bitcoin-банкоматы.`
        }
      },
      'Tumble/ Mix Coins': {
        point: { en: 'Tumble/ Mix Coins', ru: 'Перемешивайте монеты' },
        details: {
          en: `Use a bitcoin mixer or CoinJoin before converting Bitcoin to currency to obscure transaction trails.`,
          ru: `Используйте биткоин-миксер или CoinJoin перед конвертацией Bitcoin в валюту, чтобы скрыть следы транзакций.`
        }
      },
      'Use an Alias Details for Online Shopping': {
        point: { en: 'Use an Alias Details for Online Shopping', ru: 'Используйте псевдонимные данные для онлайн-покупок' },
        details: {
          en: `For online purchases, consider using alias details, forwarding email addresses, VOIP numbers, and secure delivery methods to protect your identity.`,
          ru: `Для онлайн-покупок рассмотрите использование псевдонимных данных, пересылаемых email-адресов, VOIP-номеров и безопасных методов доставки для защиты вашей личности.`
        }
      },
      'Use alternate delivery address': {
        point: { en: 'Use alternate delivery address', ru: 'Используйте альтернативный адрес доставки' },
        details: {
          en: `Opt for deliveries to non-personal addresses such as PO Boxes, forwarding addresses, or local pickup locations to avoid linking purchases directly to you.`,
          ru: `Выберите доставку на неличные адреса, такие как почтовые ящики, адреса пересылки или местные пункты выдачи, чтобы избежать прямой привязки покупок к вам.`
        }
      }
    }
  },
  'human-aspect': {
    intro: {
      en: `Many data breaches, hacks and attacks are caused by human error. The following list contains steps you should take, to reduce the risk of this happening to you. Many of them are common sense, but it's worth takin note of.`,
      ru: `Многие утечки данных, взломы и атаки вызваны человеческой ошибкой. Следующий список содержит шаги, которые вы должны предпринять, чтобы уменьшить риск того, что это произойдет с вами. Многие из них являются здравым смыслом, но стоит принять к сведению.`
    },
    items: {
      'Verify Recipients': {
        point: { en: 'Verify Recipients', ru: 'Проверяйте получателей' },
        details: {
          en: `Emails can be easily spoofed. Verify the sender's authenticity, especially for sensitive actions, and prefer entering URLs manually rather than clicking links in emails.`,
          ru: `Email легко подделать. Проверяйте подлинность отправителя, особенно для чувствительных действий, и предпочитайте вводить URL вручную, а не нажимать ссылки в email.`
        }
      },
      "Don't Trust Your Popup Notifications": {
        point: { en: "Don't Trust Your Popup Notifications", ru: 'Не доверяйте всплывающим уведомлениям' },
        details: {
          en: `Fake pop-ups can be deployed by malicious actors. Always check the URL before entering any information on a popup.`,
          ru: `Поддельные всплывающие окна могут быть развернуты злоумышленниками. Всегда проверяйте URL перед вводом любой информации во всплывающем окне.`
        }
      },
      'Never Leave Device Unattended': {
        point: { en: 'Never Leave Device Unattended', ru: 'Никогда не оставляйте устройство без присмотра' },
        details: {
          en: `Unattended devices can be compromised even with strong passwords. Use encryption and remote erase features like Find My Phone for lost devices.`,
          ru: `Устройства без присмотра могут быть скомпрометированы даже с надежными паролями. Используйте шифрование и функции удаленного стирания, такие как Find My Phone для потерянных устройств.`
        }
      },
      'Prevent Camfecting': {
        point: { en: 'Prevent Camfecting', ru: 'Предотвратите заражение камеры' },
        details: {
          en: `Protect against camfecting by using webcam covers and microphone blockers. Mute home assistants when not in use or discussing sensitive matters.`,
          ru: `Защититесь от заражения камеры, используя крышки веб-камер и блокировщики микрофонов. Отключайте домашних помощников, когда они не используются или при обсуждении чувствительных вопросов.`
        }
      },
      'Stay protected from shoulder surfers': {
        point: { en: 'Stay protected from shoulder surfers', ru: 'Защититесь от подсматривания через плечо' },
        details: {
          en: `Use privacy screens on laptops and mobiles to prevent others from reading your screen in public spaces.`,
          ru: `Используйте экраны конфиденциальности на ноутбуках и мобильных устройствах, чтобы предотвратить чтение вашего экрана другими в общественных местах.`
        }
      },
      'Educate yourself about phishing attacks': {
        point: { en: 'Educate yourself about phishing attacks', ru: 'Обучите себя фишинговым атакам' },
        details: {
          en: `Be cautious of phishing attempts. Verify URLs, context of received messages, and employ good security practices like using 2FA and not reusing passwords.`,
          ru: `Будьте осторожны с попытками фишинга. Проверяйте URL, контекст полученных сообщений и применяйте хорошие практики безопасности, такие как использование 2FA и не повторное использование паролей.`
        }
      },
      'Watch out for Stalkerware': {
        point: { en: 'Watch out for Stalkerware', ru: 'Остерегайтесь Stalkerware' },
        details: {
          en: `Be aware of stalkerware installed by acquaintances for spying. Look out for signs like unusual battery usage and perform factory resets if suspected.`,
          ru: `Будьте aware о stalkerware, установленном знакомыми для шпионажа. Обращайте внимание на признаки, такие как необычное использование батареи, и выполняйте сброс к заводским настройкам, если подозреваете.`
        }
      },
      'Install Reputable Software from Trusted Sources': {
        point: { en: 'Install Reputable Software from Trusted Sources', ru: 'Устанавливайте авторитетное программное обеспечение из надежных источников' },
        details: {
          en: `Only download software from legitimate sources and check files with tools like [Virus Total](https://awesome-privacy.xyz/security-tools/online-tools/virus-total) before installation.`,
          ru: `Загружайте программное обеспечение только из законных источников и проверяйте файлы с помощью инструментов, таких как [Virus Total](https://awesome-privacy.xyz/security-tools/online-tools/virus-total), перед установкой.`
        }
      },
      'Store personal data securely': {
        point: { en: 'Store personal data securely', ru: 'Храните личные данные безопасно' },
        details: {
          en: `Ensure all personal data on devices or in the cloud is encrypted to protect against unauthorized access.`,
          ru: `Убедитесь, что все личные данные на устройствах или в облаке зашифрованы для защиты от несанкционированного доступа.`
        }
      },
      'Obscure Personal Details from Documents': {
        point: { en: 'Obscure Personal Details from Documents', ru: 'Скрывайте личные детали в документах' },
        details: {
          en: `When sharing documents, obscure personal details with opaque rectangles to prevent information leakage.`,
          ru: `При обмене документами скрывайте личные детали непрозрачными прямоугольниками, чтобы предотвратить утечку информации.`
        }
      },
      'Do not assume a site is secure, just because it is `HTTPS`': {
        point: { en: 'Do not assume a site is secure, just because it is `HTTPS`', ru: 'Не предполагайте, что сайт безопасен только потому, что он `HTTPS`' },
        details: {
          en: `HTTPS does not guarantee a website's legitimacy. Verify URLs and exercise caution with personal data.`,
          ru: `HTTPS не гарантирует легитимность веб-сайта. Проверяйте URL и проявляйте осторожность с личными данными.`
        }
      },
      'Use Virtual Cards when paying online': {
        point: { en: 'Use Virtual Cards when paying online', ru: 'Используйте виртуальные карты при оплате онлайн' },
        details: {
          en: `Use virtual cards for online payments to protect your banking details and limit transaction risks.`,
          ru: `Используйте виртуальные карты для онлайн-платежей, чтобы защитить ваши банковские данные и ограничить риски транзакций.`
        }
      },
      'Review application permissions': {
        point: { en: 'Review application permissions', ru: 'Проверяйте разрешения приложений' },
        details: {
          en: `Regularly review and manage app permissions to ensure no unnecessary access to sensitive device features.`,
          ru: `Регулярно проверяйте и управляйте разрешениями приложений, чтобы убедиться, что нет ненужного доступа к чувствительным функциям устройства.`
        }
      },
      'Opt-out of public lists': {
        point: { en: 'Opt-out of public lists', ru: 'Откажитесь от публичных списков' },
        details: {
          en: `Remove yourself from public databases and marketing lists to reduce unwanted contacts and potential risks.`,
          ru: `Удалите себя из публичных баз данных и маркетинговых списков, чтобы уменьшить нежелательные контакты и потенциальные риски.`
        }
      },
      'Never Provide Additional PII When Opting-Out': {
        point: { en: 'Never Provide Additional PII When Opting-Out', ru: 'Никогда не предоставляйте дополнительную PII при отказе' },
        details: {
          en: `Do not provide additional personal information when opting out of data services to avoid further data collection.`,
          ru: `Не предоставляйте дополнительную личную информацию при отказе от сервисов данных, чтобы избежать дальнейшего сбора данных.`
        }
      },
      'Opt-out of data sharing': {
        point: { en: 'Opt-out of data sharing', ru: 'Откажитесь от обмена данными' },
        details: {
          en: `Many apps and services default to data sharing settings. Opt out to protect your data from being shared with third parties.`,
          ru: `Многие приложения и сервисы по умолчанию имеют настройки обмена данными. Откажитесь, чтобы защитить ваши данные от обмена с третьими лицами.`
        }
      },
      'Review and update social media privacy': {
        point: { en: 'Review and update social media privacy', ru: 'Проверяйте и обновляйте конфиденциальность в социальных сетях' },
        details: {
          en: `Regularly check and update your social media settings due to frequent terms updates that may affect your privacy settings.`,
          ru: `Регулярно проверяйте и обновляйте настройки социальных сетей из-за частых обновлений условий, которые могут повлиять на ваши настройки конфиденциальности.`
        }
      },
      'Compartmentalize': {
        point: { en: 'Compartmentalize', ru: 'Разделяйте' },
        details: {
          en: `Keep different areas of digital activity separate to limit data exposure in case of a breach.`,
          ru: `Держите разные области цифровой активности отдельно, чтобы ограничить раскрытие данных в случае нарушения.`
        }
      },
      'WhoIs Privacy Guard': {
        point: { en: 'WhoIs Privacy Guard', ru: 'WhoIs Privacy Guard' },
        details: {
          en: `Use WhoIs Privacy Guard for domain registrations to protect your personal information from public searches.`,
          ru: `Используйте WhoIs Privacy Guard для регистрации доменов, чтобы защитить вашу личную информацию от публичных поисков.`
        }
      },
      'Use a forwarding address': {
        point: { en: 'Use a forwarding address', ru: 'Используйте адрес пересылки' },
        details: {
          en: `Use a PO Box or forwarding address for mail to prevent companies from knowing your real address, adding a layer of privacy protection.`,
          ru: `Используйте почтовый ящик или адрес пересылки для почты, чтобы предотвратить знание компаниями вашего реального адреса, добавляя слой защиты конфиденциальности.`
        }
      },
      'Use anonymous payment methods': {
        point: { en: 'Use anonymous payment methods', ru: 'Используйте анонимные методы оплаты' },
        details: {
          en: `Opt for anonymous payment methods like cryptocurrencies to avoid entering identifiable information online.`,
          ru: `Выберите анонимные методы оплаты, такие как криптовалюты, чтобы избежать ввода идентифицирующей информации онлайн.`
        }
      }
    }
  },
  'physical-security': {
    intro: {
      en: `Public records often include sensitive personal data (full name, date of birth, phone number, email, address, ethnicity etc), and are gathered from a range of sources (census records, birth/ death/ marriage certificates, voter registrants, marketing information, customer databases, motor vehicle records, professional/ business licenses and all court files in full detail). This sensitive personal information is [easy and legal to access](https://www.consumerreports.org/consumerist/its-creepy-but-not-illegal-for-this-website-to-provide-all-your-public-info-to-anyone/), which raises some [serious privacy concerns](https://privacyrights.org/resources/public-records-internet-privacy-dilemma) (identity theft, personal safety risks/ stalkers, destruction of reputations, dossier society)

CCTV is one of the major ways that the corporations, individuals and the government tracks your movements. In London, UK the average person is caught on camera about 500 times per day. This network is continuing to grow, and in many cities around the world, facial recognition is being rolled out, meaning the state can know the identity of residents on the footage in real-time.

Strong authentication, encrypted devices, patched software and anonymous web browsing may be of little use if someone is able to physically compromise you, your devices and your data. This section outlines some basic methods for physical security`,
      ru: `Публичные записи часто включают конфиденциальные личные данные (полное имя, дата рождения, номер телефона, email, адрес, этническая принадлежность и т.д.) и собираются из различных источников (записи переписи, свидетельства о рождении/смерти/браке, регистрация избирателей, маркетинговая информация, базы данных клиентов, записи транспортных средств, профессиональные/бизнес-лицензии и все судебные файлы в полном объеме). Эта конфиденциальная личная информация [легко и законно доступна](https://www.consumerreports.org/consumerist/its-creepy-but-not-illegal-for-this-website-to-provide-all-your-public-info-to-anyone/), что вызывает [серьезные проблемы конфиденциальности](https://privacyrights.org/resources/public-records-internet-privacy-dilemma) (кража личных данных, риски личной безопасности/преследователи, разрушение репутации, досье-общество)

CCTV является одним из основных способов, которыми корпорации, частные лица и правительство отслеживают ваши движения. В Лондоне, Великобритания, средний человек попадает на камеру около 500 раз в день. Эта сеть продолжает расти, и во многих городах по всему миру внедряется распознавание лиц, что означает, что государство может знать личность жителей на кадрах в реальном времени.

Сильная аутентификация, зашифрованные устройства, исправленное программное обеспечение и анонимный веб-серфинг могут быть мало полезны, если кто-то может физически скомпрометировать вас, ваши устройства и ваши данные. В этом разделе описаны некоторые базовые методы физической безопасности`
    },
    items: {
      'Destroy Sensitive Documents': {
        point: { en: 'Destroy Sensitive Documents', ru: 'Уничтожайте конфиденциальные документы' },
        details: {
          en: `Shred or redact sensitive documents before disposal to protect against identity theft and maintain confidentiality.`,
          ru: `Измельчайте или редактируйте конфиденциальные документы перед утилизацией, чтобы защититься от кражи личных данных и сохранить конфиденциальность.`
        }
      },
      'Opt-Out of Public Records': {
        point: { en: 'Opt-Out of Public Records', ru: 'Откажитесь от публичных записей' },
        details: {
          en: `Contact people search websites to opt-out from listings that show persona information, using guides like Michael Bazzell's Personal Data Removal Workbook.`,
          ru: `Свяжитесь с веб-сайтами поиска людей, чтобы отказаться от списков, которые показывают информацию о личности, используя руководства, такие как Personal Data Removal Workbook Майкла Баззелла.`
        }
      },
      'Watermark Documents': {
        point: { en: 'Watermark Documents', ru: 'Водяные знаки на документах' },
        details: {
          en: `Add a watermark with the recipient's name and date to digital copies of personal documents to trace the source of a breach.`,
          ru: `Добавьте водяной знак с именем получателя и датой к цифровым копиям личных документов, чтобы отследить источник нарушения.`
        }
      },
      "Don't Reveal Info on Inbound Calls": {
        point: { en: "Don't Reveal Info on Inbound Calls", ru: 'Не раскрывайте информацию на входящих звонках' },
        details: {
          en: `Only share personal data on calls you initiate and verify the recipient's phone number.`,
          ru: `Делитесь личными данными только на звонках, которые вы инициируете, и проверяйте номер телефона получателя.`
        }
      },
      'Stay Alert': {
        point: { en: 'Stay Alert', ru: 'Оставайтесь бдительными' },
        details: {
          en: `Be aware of your surroundings and assess potential risks in new environments.`,
          ru: `Будьте aware вашего окружения и оценивайте потенциальные риски в новых средах.`
        }
      },
      'Secure Perimeter': {
        point: { en: 'Secure Perimeter', ru: 'Безопасный периметр' },
        details: {
          en: `Ensure physical security of locations storing personal info devices, minimizing external access and using intrusion detection systems.`,
          ru: `Обеспечьте физическую безопасность мест хранения устройств с личной информацией, минимизируя внешний доступ и используя системы обнаружения вторжений.`
        }
      },
      'Physically Secure Devices': {
        point: { en: 'Physically Secure Devices', ru: 'Физически защитите устройства' },
        details: {
          en: `Use physical security measures like Kensington locks, webcam covers, and privacy screens for devices.`,
          ru: `Используйте меры физической безопасности, такие как замки Kensington, крышки веб-камер и экраны конфиденциальности для устройств.`
        }
      },
      'Keep Devices Out of Direct Sight': {
        point: { en: 'Keep Devices Out of Direct Sight', ru: 'Держите устройства вне прямого обзора' },
        details: {
          en: `Prevent devices from being visible from outside to mitigate risks from lasers and theft.`,
          ru: `Предотвратите видимость устройств снаружи, чтобы уменьшить риски от лазеров и кражи.`
        }
      },
      'Protect your PIN': {
        point: { en: 'Protect your PIN', ru: 'Защитите ваш PIN' },
        details: {
          en: `Shield your PIN entry from onlookers and cameras, and clean touchscreens after use.`,
          ru: `Защитите ввод PIN от наблюдателей и камер и очищайте сенсорные экраны после использования.`
        }
      },
      'Check for Skimmers': {
        point: { en: 'Check for Skimmers', ru: 'Проверяйте на скиммеры' },
        details: {
          en: `Inspect ATMs and public devices for skimming devices and tampering signs before use.`,
          ru: `Проверяйте банкоматы и общественные устройства на наличие скиммеров и признаков вмешательства перед использованием.`
        }
      },
      'Protect your Home Address': {
        point: { en: 'Protect your Home Address', ru: 'Защитите ваш домашний адрес' },
        details: {
          en: `Use alternative locations, forwarding addresses, and anonymous payment methods to protect your home address.`,
          ru: `Используйте альтернативные местоположения, адреса пересылки и анонимные методы оплаты для защиты вашего домашнего адреса.`
        }
      },
      'Use a PIN, Not Biometrics': {
        point: { en: 'Use a PIN, Not Biometrics', ru: 'Используйте PIN, а не биометрию' },
        details: {
          en: `Prefer PINs over biometrics for device security in situations where legal coercion to unlock devices may occur.`,
          ru: `Предпочитайте PIN биометрии для безопасности устройств в ситуациях, когда может произойти юридическое принуждение к разблокировке устройств.`
        }
      },
      'Reduce exposure to CCTV': {
        point: { en: 'Reduce exposure to CCTV', ru: 'Уменьшите воздействие CCTV' },
        details: {
          en: `Wear disguises and choose routes with fewer cameras to avoid surveillance.`,
          ru: `Носите маскировку и выбирайте маршруты с меньшим количеством камер, чтобы избежать наблюдения.`
        }
      },
      'Anti-Facial Recognition Clothing': {
        point: { en: 'Anti-Facial Recognition Clothing', ru: 'Одежда против распознавания лиц' },
        details: {
          en: `Wear clothing with patterns that trick facial-recognition technology.`,
          ru: `Носите одежду с узорами, которые обманывают технологию распознавания лиц.`
        }
      },
      'Reduce Night Vision Exposure': {
        point: { en: 'Reduce Night Vision Exposure', ru: 'Уменьшите воздействие ночного видения' },
        details: {
          en: `Use IR light sources or reflective glasses to obstruct night vision cameras.`,
          ru: `Используйте источники ИК-света или отражающие очки, чтобы препятствовать камерам ночного видения.`
        }
      },
      'Protect your DNA': {
        point: { en: 'Protect your DNA', ru: 'Защитите вашу ДНК' },
        details: {
          en: `Avoid sharing DNA with heritage websites and be cautious about leaving DNA traces.`,
          ru: `Избегайте обмена ДНК с веб-сайтами наследия и будьте осторожны с оставлением следов ДНК.`
        }
      }
    }
  }
};

// Normalize string to handle different quote types, Unicode variants, and markdown links
const normalizeString = (str: string): string => {
  return str
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links: [text](url) -> text
    .replace(/[''""]/g, "'") // Replace all quote variants (straight, curly, smart quotes) with standard apostrophe
    .replace(/\u2018|\u2019|\u201C|\u201D/g, "'") // Replace Unicode quote characters
    .trim();
};

export const translateChecklistContent = (
  sectionSlug: string,
  itemPoint: string | undefined,
  locale: 'en' | 'ru',
  type: 'intro' | 'point' | 'details',
  originalText?: string
): string => {
  const section = checklistContentTranslations[sectionSlug];
  if (!section) {
    return originalText || ''; // Fallback to original
  }

  if (type === 'intro') {
    return section.intro[locale] || originalText || '';
  }

  if (itemPoint) {
    // Try exact match first
    let translation = section.items[itemPoint];
    
    // If not found, try normalized match
    if (!translation) {
      const normalizedPoint = normalizeString(itemPoint);
      // Find matching key by normalizing all keys
      const matchingKey = Object.keys(section.items).find(key => 
        normalizeString(key) === normalizedPoint
      );
      if (matchingKey) {
        translation = section.items[matchingKey];
      }
    }
    
    if (translation) {
      if (type === 'point') {
        return translation.point[locale] || itemPoint;
      }
      if (type === 'details') {
        return translation.details[locale] || originalText || '';
      }
    }
  }

  return originalText || ''; // Fallback to original
};

