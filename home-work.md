### Uyga Vazifa: ITINFO Loyihasi uchun CRUD Operatsiyalarini Yozish

### Vazifalar Ro'yxati:

1. **Author va Category jadvallari uchun CRUD operatsiyalarini yozish**
2. **User va Admin kolleksiyalari uchun validatsiya va CRUD operatsiyalarini yozish**

### 1. Author va Category jadvallari uchun CRUD operatsiyalari

#### Author CRUD operatsiyalari:
- Author yaratish
- Author o'qish (barchasi yoki ID bo'yicha)
- Author yangilash
- Author o'chirish

#### Category CRUD operatsiyalari:
- Category yaratish
- Category o'qish (barchasi yoki ID bo'yicha)
- Category yangilash
- Category o'chirish

### 2. SuperAdmin User va Admin kolleksiyalari uchun validatsiya va CRUD operatsiyalari

#### User CRUD operatsiyalari:
- User yaratish (SuperAdmin)
- User o'qish (SuperAdmin)
- User yangilash (SuperAdmin)
- User o'chirish (SuperAdmin)

#### Admin CRUD operatsiyalari:
- Admin yaratish (SuperAdmin)
- Admin o'qish (SuperAdmin)
- Admin yangilash (SuperAdmin)
- Admin o'chirish (SuperAdmin)

### API Yo'nalishlari

#### SuperAdmin:

**User CRUD operatsiyalari:**
- Foydalanuvchini yaratish:
  ```bash
  POST localhost:4000/superadmin/user/
  Body:
    {
      "email": "user@example.com",
      "password": "strong_password",
      // Boshqa foydalanuvchi xususiyatlari (ismi, roli, h.k.)
    }
  ```

- Foydalanuvchini o'qish:
  ```bash
  GET localhost:4000/superadmin/user/
  ```

- Foydalanuvchini yangilash:
  ```bash
  PUT localhost:4000/superadmin/user/{user_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar (masalan, email, parol)
    }
  ```

- Foydalanuvchini o'chirish:
  ```bash
  DELETE localhost:4000/superadmin/user/{user_id}
  ```

**Admin CRUD operatsiyalari:**
- Admin yaratish:
  ```bash
  POST localhost:4000/superadmin/admin/
  Body:
    {
      "email": "admin@example.com",
      "password": "strong_password",
      // Boshqa admin xususiyatlari
    }
  ```

- Adminni o'chirish:
  ```bash
  DELETE localhost:4000/superadmin/admin/{admin_id}
  ```

- Adminni yangilash:
  ```bash
  PUT localhost:4000/superadmin/admin/{admin_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar
    }
  ```

#### Admin:

**Category CRUD operatsiyalari:**
- Kategoriyani yaratish:
  ```bash
  POST localhost:4000/admin/category/
  Body:
    {
      "name": "Category Name",
      // Boshqa kategoriya xususiyatlari (ta'rif, h.k.)
    }
  ```

- Kategoriyani o'qish:
  ```bash
  GET localhost:4000/admin/category/
  ```

- Kategoriyani yangilash:
  ```bash
  PUT localhost:4000/admin/category/{category_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar (masalan, nomi, ta'rifi)
    }
  ```

- Kategoriyani o'chirish:
  ```bash
  DELETE localhost:4000/admin/category/{category_id}
  ```

**User CRUD operatsiyalari:**
- Foydalanuvchini yaratish:
  ```bash
  POST localhost:4000/admin/user/
  Body:
    {
      "email": "user@example.com",
      "password": "strong_password",
      // Boshqa foydalanuvchi xususiyatlari (ismi, roli, h.k.)
    }
  ```

- Foydalanuvchini o'qish:
  ```bash
  GET localhost:4000/admin/user/
  ```

- Foydalanuvchini yangilash:
  ```bash
  PUT localhost:4000/admin/user/{user_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar (masalan, email, parol)
    }
  ```

### Admin roli cheklovlari:
- Admin foydalanuvchi va kataloglarni o'chira olmaydi, ammo yaratish va yangilash mumkin.

### API Yo'nalishlari uchun kod misollari

**User routerlari uchun kod (`src/routes/userRoutes.js`):**
`
**Category routerlari uchun kod (`src/routes/categoryRoutes.js`):**


Admin rolining foydalanuvchi va kataloglarni o'chira olmasligini ta'minlash uchun middleware yaratish mumkin.

**Middleware (`src/middlewares/roleMiddleware.js`):**

**Routerlarga middleware qo'llash:**


**Category routerlari uchun middleware (`src/routes/categoryRoutes.js`):**


### Yakuniy eslatmalar:
1. **Kod strukturasini va xavfsizlikni ta'minlash uchun middleware dan foydalaning.**
2. **API nuqtalarini sinovdan o'tkazish uchun Postman yoki boshqa vositalardan foydalaning.**

Agar qo'shimcha savollar yoki tushunmovchiliklar bo'lsa, marhamat qilib so'rang!