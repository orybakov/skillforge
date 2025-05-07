# SkillForge 🛠️
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.
> Твоя персональная платформа развития навыков. От новичка — до мастера.

---

## 🚀 О проекте

**SkillForge** — это платформа, которая позволяет пользователям создавать индивидуальные roadmaps, управлять задачами, отслеживать прогресс и достигать целей. Приложение построено на **Angular** с применением лучших практик: **NgRx**, **RxJS**, **Firebase**, **CI/CD**, **PWA** и **SSR**.

Проект задуман как способ **прокачать весь стек Angular** и продемонстрировать экспертные навыки на практике.

---

## 🧱 Архитектура и Стек

- **Frontend**: Angular 19+, Standalone API
- **State Management**: NgRx / Signal Store
- **UI**: Angular Material + Tailwind CSS
- **Backend**: Firebase (Auth, Firestore)
- **PWA**: Offline режим, установка на устройство
- **i18n**: Английский / Русский
- **CI/CD**: GitHub Actions + Deploy (Vercel/Netlify)
- **Testing**: Jasmine + Karma / Vitest + Jest
- **SSR**: Angular Universal (в следующих этапах)

---

## 🔮 MVP

- [x] Авторизация (Firebase)
- [x] Создание roadmap и навыков
- [x] Задачи внутри навыков, drag-n-drop по статусам
- [x] Прогресс по категориям и в целом
- [x] Тёмная тема
- [x] Мобильная адаптивность
- [x] PWA: offline и install
- [x] CI/CD pipeline и деплой

---

## 📌 Модули

- `Dashboard` – общая статистика и прогресс
- `Roadmap` – категории навыков
- `Tasks` – задачи внутри категории
- `Settings` – аккаунт, тема, язык
- `Auth` – вход, регистрация, восстановление

---

## ⚙️ Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск проекта
ng serve

# Сборка PWA
ng build --configuration production

# Линтер, тесты
ng lint && ng test
