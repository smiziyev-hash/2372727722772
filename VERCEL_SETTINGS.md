# Настройки Vercel для Qwik Edge

## Настройки проекта на Vercel

Откройте проект на Vercel → Settings → General и установите следующие значения:

### Build & Development Settings

1. **Root Directory**: `web`
   - Это указывает Vercel, что проект находится в папке `web`

2. **Build Command**: `npm run build.server`
   - Эта команда собирает клиентскую часть (`npm run build.client`), затем серверную для Vercel Edge
   - Команда автоматически собирает и клиент, и сервер

3. **Output Directory**: (оставить пустым)
   - Qwik Edge адаптер автоматически создает `.vercel/output`

4. **Install Command**: `npm install --legacy-peer-deps`
   - Используется для установки зависимостей с legacy peer deps

### Framework Preset

- **Framework Preset**: `Other` или `Qwik` (если доступно)

### Environment Variables

Если нужны переменные окружения, добавьте их в Settings → Environment Variables

## Синхронизация настроек

Если вы видите сообщение:
> "Параметры конфигурации в текущей производственной среде отличаются от текущих параметров проекта"

Это означает, что настройки проекта были изменены, но текущий деплой использует старые настройки.

**Как исправить:**

1. **Вариант 1 (Рекомендуется)**: Нажмите кнопку **"Redeploy"** или **"Redeploy with current settings"** в разделе General
   - Это пересоберет проект с новыми настройками

2. **Вариант 2**: Вручную обновите настройки в разделе General:
   - Убедитесь, что все настройки соответствуют указанным выше
   - Сохраните изменения
   - Перейдите в Deployments → нажмите "Redeploy" на последнем деплое

## Проверка деплоя

После настройки:
1. Перейдите в Deployments
2. Нажмите "Redeploy" на последнем деплое
3. Проверьте логи сборки и runtime логи

## Если ошибка 500 сохраняется

1. Проверьте Runtime Logs в разделе Deployments
2. Убедитесь, что файл `personal-security-checklist.yml` доступен по URL:
   `https://raw.githubusercontent.com/inktech-sc/Digital_security_web/main/personal-security-checklist.yml`
3. Проверьте, что все зависимости установлены правильно

