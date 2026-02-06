# Chance Shop

Інтернет-магазин колекційних K-Pop карток. Чорно-білий дизайн з ефектами блиску та liquid glass.

## Технічний стек

- **Frontend/Backend:** Next.js 14 (App Router), React, TypeScript
- **Стилі:** Tailwind CSS
- **БД:** SQLite + Prisma ORM
- **Стан:** Zustand (кошик)
- **Інтеграції:** Nova Poshta API, Ukrposhta API, WayForPay (готово до підключення)

## Функціонал

### Для покупця
- Перегляд каталогу з фільтром по категоріях
- Кошик (зберігається в localStorage)
- Оформлення замовлення з вибором:
  - **Доставка:** Нова Пошта, Укрпошта
  - **Оплата:** передоплата на картку, онлайн-оплата карткою

### Для продавця (адмін)
- Управління товарами (CRUD)
- Управління замовленнями з можливістю додавання ТТН
- Перегляд способів доставки та оплати

## Запуск

```bash
# Встановлення залежностей
npm install

# Створення .env (скопіюйте з .env.example)
cp .env.example .env

# Ініціалізація БД
npx prisma generate
npx prisma db push
npm run db:seed

# Запуск
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

## API перевізників

### Nova Poshta
1. Зареєструйтесь на [api-portal.novapost.com](https://api-portal.novapost.com/)
2. Отримайте API ключ
3. Додайте `NOVA_POSHTA_API_KEY` в `.env`

### Ukrposhta
1. Зв'яжіться з Ukrposhta для отримання API токена
2. Додайте `UKRPOSHTA_API_TOKEN` в `.env`

### WayForPay (оплата)
1. Зареєструйтесь на [wayforpay.com](https://wayforpay.com/)
2. Додайте `WAYFORPAY_MERCHANT_ACCOUNT` та `WAYFORPAY_MERCHANT_SECRET_KEY` в `.env`

## Структура

```
/app
  /api           - API routes (orders, admin, nova-poshta)
  /admin         - Панель продавця
  /catalog       - Каталог товарів
  /cart          - Кошик
  /checkout      - Оформлення замовлення
  /orders        - Сторінка успішного замовлення
/components      - UI компоненти
/lib             - Утиліти, Prisma, API інтеграції
/prisma          - Схема БД та seed
```

## Адаптивність

Сайт повністю адаптивний для мобільних пристроїв.
