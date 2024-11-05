### Uyga Vazifa: ITINFO Loyihasi uchun Author va Category Jadvallariga CRUD Operatsiyalarini Yozish

Bu uyga vazifa Node.js va Express.js yordamida Author va Category jadvallariga CRUD (Create, Read, Update, Delete) operatsiyalarini amalga oshirishni o'rganishni maqsad qiladi. Har bir vazifa tushuntirilgan va qadamlar ko'rsatilgan.

#### Task 1: Loyiha yaratish va asosiy konfiguratsiyani o'rnatish

1. **Loyihani yaratish va paketlarni o'rnatish**
   - `npm init -y` buyrug'i yordamida yangi Node.js loyihasini yarating.
   - Express va Mongoose paketlarini o'rnating.
     ```bash
     npm install express mongoose dotenv nodemon joi 
     ```

2. **Loyihani strukturalash**
   - Quyidagi fayl va katalog strukturasini yarating:
![[1 - Projects/najot-talim/2-OY. NodeJS, Databases/42-dars/Pasted image 20240523113042.png]]
    
#### Task 2: Ma'lumotlar bazasini ulash

1. **MongoDB ulanish konfiguratsiyasini yozish**
   - `src/config/db.js` faylini yarating va unda MongoDB ulanishni konfiguratsiya qiling.

2. **Asosiy ilova konfiguratsiyasi**
   - `src/app.js` faylini yarating va Express ilovasini yarating, MongoDB ulanishini amalga oshiring va marshrutlarni o'rnating.

3. **Serverni ishga tushirish**
   - `server.js` faylini yarating va HTTP serverni ishga tushiring.

#### Task 3: Modellarni yaratish

1. **Author modeli**
   - `src/models/authorModel.js` faylini yarating va Author modelini yozing.
   

2. **Category modeli**
   - `src/models/categoryModel.js` faylini yarating va Category modelini yozing.

#### Task 4: Controllerlarni yaratish

1. **Author controlleri**
   - `src/controllers/authorController.js` faylini yarating va Author uchun CRUD operatsiyalarini amalga oshiring.
  

2. **Category controlleri**
   - `src/controllers/categoryController.js` faylini yarating va Category uchun CRUD operatsiyalarini amalga oshiring.


#### Task 5: Routerlarni yozish

1. **Author Routerlarni**
   - `src/routes/authorRoutes.js` faylini yarating va Routerlarni yozing.

3. **Category Routerlarni**
   - `src/routes/categoryRoutes.js` faylini yarating va Routerlarni yozing.

#### Task 6 :  (services)

1. **Author xizmatlari**
    - `src/services/authorService.js` faylini yarating va Author uchun CRUD operatsiyalarini amalga oshiring.
        
2. **Category xizmatlari**
    - `src/services/categoryService.js` faylini yarating va Category uchun CRUD operatsiyalarini amalga oshiring.

### Ko'rsatmalar

1. **Loyihani yaratish va konfiguratsiyani o'rnatish**:
   - Birinchi topshiriqni bajaring va loyiha strukturasini tashkil qiling.
   - MongoDB ulanishini konfiguratsiya qiling va serverni ishga tushirishni tashkil qiling.

2. **Modellarni yaratish**:
   - `Author` va `Category` modellarini yarating.

3. **Controllerlarni yozish**:
   - CRUD operatsiyalarini amalga oshiruvchi controllerlarni yozing.

4. **Marshrutlarni yozish**:
   - CRUD operatsiyalarini qo'llab-quvvatlaydigan marshrutlarni yozing.

5. **Test qilish**:
   - Postman yoki boshqa API testing vositasi yordamida CRUD operatsiyalarini test qiling.

Agar sizda biror savol yoki tushunmovchilik bo'lsa, marhamat qilib so'rang!