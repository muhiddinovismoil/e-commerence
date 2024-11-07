### Uyga Vazifa: ITINFO Loyihasi uchun CRUD Operatsiyalarini Yozish va JWT ni Integratsiya Qilish

### Vazifalar Ro'yxati:

1. **Author va Category jadvallari uchun CRUD operatsiyalarini yozish**
2. **User va Admin kolleksiyalari uchun validatsiya va CRUD operatsiyalarini yozish**
3. **JWT orqali autentifikatsiya tizimini qo'shish**

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

### 2. JWT orqali autentifikatsiya tizimini qo'shish

#### Vazifalar:
- JWT token yaratish
- Login va token olish uchun endpoint yaratish
- JWT orqali himoyalangan endpointlarni autentifikatsiya qilish

### API Yo'nalishlari

#### SuperAdmin:

**User CRUD operatsiyalari:**
- Foydalanuvchini yaratish:
  ```bash
  POST localhost:4000/user/
  Body:
    {
      "email": "user@example.com",
      "password": "strong_password",
      // Boshqa foydalanuvchi xususiyatlari (ismi, roli, h.k.)
    }
  ```

- Foydalanuvchini o'qish:
  ```bash
  GET localhost:4000/user/
  ```

- Foydalanuvchini yangilash:
  ```bash
  PUT localhost:4000/user/{user_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar (masalan, email, parol)
    }
  ```

- Foydalanuvchini o'chirish:
  ```bash
  DELETE localhost:4000/user/{user_id}
  ```

**Admin CRUD operatsiyalari:**
- Admin yaratish:
  ```bash
  POST localhost:4000/user/
  Body:
    {
      "email": "admin@example.com",
      "password": "strong_password",
      // Boshqa admin xususiyatlari
    }
  ```

- Adminni o'chirish:
  ```bash
  DELETE localhost:4000/user/{admin_id}
  ```

- Adminni yangilash:
  ```bash
  PUT localhost:4000/user/{admin_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar
    }
  ```

#### Admin:

**Category CRUD operatsiyalari:**
- Kategoriyani yaratish:
  ```bash
  POST localhost:4000/category/
  Body:
    {
      "name": "Category Name",
      // Boshqa kategoriya xususiyatlari (ta'rif, h.k.)
    }
  ```

- Kategoriyani o'qish:
  ```bash
  GET localhost:4000/category/
  ```

- Kategoriyani yangilash:
  ```bash
  PUT localhost:4000/category/{category_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar (masalan, nomi, ta'rifi)
    }
  ```

- Kategoriyani o'chirish:
  ```bash
  DELETE localhost:4000/category/{category_id}
  ```

**User CRUD operatsiyalari:**
- Foydalanuvchini yaratish:
  ```bash
  POST localhost:4000/user/
  Body:
    {
      "email": "user@example.com",
      "password": "strong_password",
      // Boshqa foydalanuvchi xususiyatlari (ismi, roli, h.k.)
    }
  ```

- Foydalanuvchini o'qish:
  ```bash
  GET localhost:4000/user/
  ```

- Foydalanuvchini yangilash:
  ```bash
  PUT localhost:4000/user/{user_id}
  Body:
    {
      // Yangilanishi kerak bo'lgan xususiyatlar (masalan, email, parol)
    }
  ```

### Admin roli cheklovlari:
- Admin foydalanuvchi va kataloglarni o'chira olmaydi, ammo yaratish va yangilash mumkin.

### Vazifa bo'yicha qo'llanma

#### 1. Author va Category CRUD operatsiyalarini yozish
- Har bir operatsiya uchun kerakli endpointlarni yozing (`POST`, `GET`, `PUT`, `DELETE`).
- Ma'lumotlarni saqlash va olish uchun mos keladigan modellarni yarating ( Mongoose  yordamida).

#### 2. User va Admin validatsiya va CRUD operatsiyalarini yozish
- SuperAdmin roliga ega foydalanuvchi tomonidan boshqariladigan CRUD operatsiyalarini yozing.
- Yaratish, o'qish, yangilash va o'chirish uchun endpointlarni yozing.

#### 3. JWT orqali autentifikatsiya tizimini qo'shish
- JWT token yaratish uchun login endpointini yozing (`POST /login`).
- Himoyalangan endpointlar uchun JWT autentifikatsiya middleware yarating.
- JWT tokenlarni tekshirish uchun middleware ni endpointlarga qo'llang.

### Yakuniy eslatmalar:
1. **Kod strukturasini va xavfsizlikni ta'minlash uchun middleware dan foydalaning.**
2. **API nuqtalarini sinovdan o'tkazish uchun Postman yoki boshqa vositalardan foydalaning.**

Agar qo'shimcha savollar yoki tushunmovchiliklar bo'lsa, marhamat qilib so'rang!i