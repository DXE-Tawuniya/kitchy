# Kitchy — اطبخ باللي عندك

تطبيق ويب (mobile-first) بيقترح أكل مصري من المكونات اللي عندك، بميزانية بالجنيه، مع خطة 3 أيام وقائمة مشتريات.
الستايل مستوحى من ألوان الـ Woks Recipe UI Kit (الأخضر `#46764E`)، والخط Cairo.

## التشغيل محلياً

```bash
npm install
npm run dev
```
افتح الرابط اللي هيظهر (عادة http://localhost:5173). على الموبايل: شغّل `npm run dev -- --host` وافتح IP الجهاز.

## النشر على GitHub Pages
1. ارفع المشروع على repo جديد (branch اسمه `main`).
2. من **Settings › Pages** اختار **Source: GitHub Actions**.
3. أي push على `main` هيبني وينشر تلقائي (`.github/workflows/deploy.yml`).

## اللي شغّال فعلاً
- Onboarding (3 شاشات) ← اختيار المكونات (بحث + إضافة مكوّن جديد) ← الأفراد والميزانية.
- الرئيسية: الوصفات مترتبة من الأقل في الناقص ثم الأرخص، مع فلتر فطار/غدا/عشا ومفضلة.
- تفاصيل الوصفة: عندك/ناقص + التكلفة، الطريقة، وإضافة الناقص للمشتريات.
- خطة 3 أيام بتتولّد من المطبخ والميزانية، مع تنبيه لو اليوم فوق الميزانية.
- المشتريات: علّم اللي اتشترى (بيتضاف لمطبخك تلقائي)، احذف، وشارك القائمة (Share / نسخ).
- كل البيانات بتتحفظ على الجهاز (localStorage).

## تعديلات سريعة
| عايز تغيّر | الملف |
|---|---|
| اسم التطبيق واللوجو | `src/config.js` + `src/assets/logo.webp` و`icon.webp` (الأصلي: `public/kitchy-logo.png`) |
| الوصفات والأسعار والمكونات | `src/data.js` (الأسعار تقريبية) |
| صور الوصفات | حط الصورة في `public/images/<id>.jpg` وهتظهر لوحدها (الأسماء في `public/images/README.txt`) |
| الألوان والخطوط | أول `src/styles.css` |

## الهيكل
```
src/
  App.jsx          التنقل بين الشاشات
  store.js         الحالة + الحفظ
  logic.js         الترتيب، التكلفة، توليد الخطة
  data.js          الوصفات والمكونات والأسعار
  screens/         Onboarding, Pantry, Prefs, Home, Recipe, Plan, List
  components/      TabBar, Chip, RecipeTile, LogoSlot, Icon, BackButton
```
