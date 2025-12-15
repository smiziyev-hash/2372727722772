# Настройки Vercel для Qwik Edge

## Настройки проекта на Vercel

Откройте проект на Vercel → Settings → General и установите следующие значения:

### Build & Development Settings

1. **Root Directory**: `web`
   - Это указывает Vercel, что проект находится в папке `web`

2. **Build Command**: `cd web && npm install --legacy-peer-deps && npm run build && npm run build.server`
   - Устанавливает зависимости, собирает клиентскую часть, затем серверную для Edge
   - Или просто: `npm run build.server` (если зависимости уже установлены)

3. **Output Directory**: (оставить пустым)
   - Qwik Edge адаптер автоматически создает `.vercel/output`

4. **Install Command**: `npm install --legacy-peer-deps`
   - Используется для установки зависимостей с legacy peer deps

### Framework Preset

- **Framework Preset**: `Other` или `Qwik` (если доступно)

### Environment Variables

Если нужны переменные окружения, добавьте их в Settings → Environment Variables

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

