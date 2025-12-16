# Инструкция по развертыванию сайта

## Подготовка к развертыванию

### 1. Сборка статического сайта

Выполните следующие команды в папке `web`:

```bash
cd web
npm install
npm run build
npm run build.static
```

После выполнения команд будет создана папка `dist/` со статическими файлами сайта.

### 2. Проверка сборки локально

Перед развертыванием проверьте сборку:

```bash
npm run preview
```

Сайт откроется в браузере на `http://localhost:4173`

---

## Варианты бесплатного хостинга

### Вариант 1: Vercel (Рекомендуется)

**Преимущества:** Простое развертывание, автоматические обновления из GitHub, бесплатный SSL

1. Зайдите на [vercel.com](https://vercel.com) и войдите через GitHub
2. Нажмите "Add New Project"
3. Импортируйте репозиторий `inktech-sc/Digital_security_web`
4. Настройки проекта:
   - **Root Directory**: `web`
   - **Build Command**: `npm run build && npm run build.static`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install --legacy-peer-deps`
5. Нажмите "Deploy"
6. После деплоя обновите `SITE_URL` в настройках проекта (Environment Variables) на ваш домен Vercel

### Вариант 2: Netlify

**Преимущества:** Простое развертывание, drag & drop, бесплатный SSL

1. Зайдите на [netlify.com](https://netlify.com) и войдите через GitHub
2. Нажмите "Add new site" → "Import an existing project"
3. Выберите репозиторий `inktech-sc/Digital_security_web`
4. Настройки сборки:
   - **Base directory**: `web`
   - **Build command**: `npm run build && npm run build.static`
   - **Publish directory**: `web/dist`
5. Нажмите "Deploy site"
6. После деплоя добавьте переменную окружения `SITE_URL` с вашим доменом Netlify

### Вариант 3: Cloudflare Pages

**Преимущества:** Быстрый CDN, бесплатный SSL, хорошая производительность

1. Зайдите на [dash.cloudflare.com](https://dash.cloudflare.com) → Pages
2. Нажмите "Create a project" → "Connect to Git"
3. Выберите репозиторий `inktech-sc/Digital_security_web`
4. Настройки сборки:
   - **Framework preset**: None
   - **Build command**: `cd web && npm install --legacy-peer-deps && npm run build && npm run build.static`
   - **Build output directory**: `web/dist`
   - **Root directory**: (пусто)
5. Нажмите "Save and Deploy"
6. После деплоя добавьте переменную окружения `SITE_URL` с вашим доменом Cloudflare Pages

### Вариант 4: GitHub Pages

**Преимущества:** Бесплатно, интегрировано с GitHub

1. В репозитории перейдите в Settings → Pages
2. В разделе "Source" выберите "GitHub Actions"
3. Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        working-directory: ./web
        run: npm install --legacy-peer-deps
        
      - name: Build
        working-directory: ./web
        run: npm run build && npm run build.static
        
      - name: Setup Pages
        uses: actions/configure-pages@v2
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: './web/dist'
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

4. Сохраните файл и закоммитьте
5. После первого push сайт будет доступен по адресу `https://inktech-sc.github.io/Digital_security_web/`

### Вариант 5: Ручное развертывание (любой хостинг)

1. Выполните сборку:
   ```bash
   cd web
   npm install
   npm run build
   npm run build.static
   ```

2. Скопируйте содержимое папки `web/dist/` на ваш хостинг через FTP/SFTP или панель управления

3. Убедитесь, что файл `personal-security-checklist.yml` находится в корне сайта (должен быть скопирован в `dist/`)

---

## Важные замечания

1. **Файл данных**: Убедитесь, что `personal-security-checklist.yml` копируется в `dist/` при сборке (это должно происходить автоматически через `viteStaticCopy`)

2. **Переменная окружения**: После деплоя обновите `SITE_URL` в настройках хостинга на ваш реальный домен (для правильной генерации статических страниц)

3. **Проверка**: После деплоя проверьте, что:
   - Главная страница открывается
   - Разделы `/checklist/authentication/` и другие работают
   - Данные загружаются корректно

---

## Рекомендация

**Рекомендуется использовать Vercel или Netlify** - они наиболее просты в настройке и автоматически обновляют сайт при каждом push в GitHub.

