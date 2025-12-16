# Инструкция по переносу кода в новый репозиторий

## ⚡ Быстрый способ (Рекомендуется)

### Шаг 1: Создайте Personal Access Token

1. Зайдите на https://github.com/settings/tokens
2. Нажмите "Generate new token (classic)"
3. Название: `di124124sec-migration`
4. Выберите права: ✅ **repo** (полный доступ к репозиториям)
5. Нажмите "Generate token"
6. **ВАЖНО:** Скопируйте токен сразу (он показывается только один раз!)

### Шаг 2: Выполните команды

Откройте терминал и выполните:

```bash
cd /Users/s/Downloads/personal-security-checklist-master

# Добавьте новый remote (замените YOUR_TOKEN на ваш токен)
git remote add new-origin https://YOUR_TOKEN@github.com/smiziyev-hash/di124124sec.git

# Отправьте весь код
git push new-origin main --all

# Отправьте теги (если есть)
git push new-origin main --tags
```

**Пример:**
```bash
git remote add new-origin https://ghp_xxxxxxxxxxxx@github.com/smiziyev-hash/di124124sec.git
git push new-origin main --all
```

После выполнения кода код будет в новом репозитории!

---

## Альтернативный способ: Через веб-интерфейс

Если у вас проблемы с доступом через командную строку:

1. **Создайте архив проекта:**
   ```bash
   cd /Users/s/Downloads
   zip -r project-backup.zip personal-security-checklist-master -x "*.git*" "node_modules/*" ".DS_Store"
   ```

2. **Зайдите на** https://github.com/smiziyev-hash/di124124sec

3. **Нажмите "Add file" → "Upload files"**

4. **Перетащите архив** или выберите файл `project-backup.zip`

5. **После загрузки:**
   - Распакуйте архив в репозитории
   - Или используйте GitHub Desktop для клонирования и загрузки файлов

---

## После переноса

После успешного переноса обновите remote для удобства:

```bash
cd /Users/s/Downloads/personal-security-checklist-master
git remote set-url origin https://github.com/smiziyev-hash/di124124sec.git
```

Теперь `git push` будет отправлять код в новый репозиторий.
