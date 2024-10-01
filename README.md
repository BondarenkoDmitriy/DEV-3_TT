# Drag and Drop

## Опис проекту
Цей проект реалізує можливість введення тексту, відображення його на сторінці, а також перетягування символів або груп символів за допомогою миші. Він надає користувачу можливість обирати один або кілька символів, переміщувати їх в будь-якій кількості на строку input, або обмінювати місцями символи при перетягуванні.

## Функціонал

1. **Введення тексту**:
   - Користувач вводить будь-який текст в інпут полі.
   - Після натискання на кнопку **"Застосувати"**, введений текст відображається нижче поля вводу.

2. **Виділення символів**:
   - Можна виділити один або кілька символів:
     - **По одному символу** — клік на символ виділяє його.
     - **Виділення групи символів** — затискаючи **Ctrl**, можна перемістити кілька символів в строку input.
   - Після виділення символи змінюють колір, щоб візуально позначити активні елементи.

3. **Переміщення символів**:
   - **Один символ**: користувач може перетягнути окремий символ за допомогою миші. Символ слідує за курсором і може бути переміщений у будь-яке місце на сторінці.
   - **Кілька символів**: можна виділити кілька символів і перемістити їх разом.
   - **Обмін місцями**: коли один символ переміщується на місце іншого, вони обмінюються місцями.

4. **Виділення та зняття виділення**:
   - Користувач може знімати виділення символів за повторним кліком на них або виділяти їх знову.

## Технічні деталі

- **Події миші**:
  - Використовуються події `mousedown`, `mousemove`, та `mouseup` для реалізації логіки перетягування.
  - Перетягування починається при натисканні на символ, після чого він слідує за курсором.
  - Після відпускання миші символ фіксується на новому місці.

- **CSS і SCSS**:
  - Стилі написані з використанням **SCSS** і компілюються в **CSS**.
  - Використовується **BEM** (Block Element Modifier) методологія для структурування стилів.
  - При перетягуванні символів їм надаються спеціальні стилі (зміна прозорості та положення).

## Структура проекту
DEV-3_TT/
├── index.html 
# Головний HTML файл 
├── style.css
# Скомпільований CSS файл 
├── src/ │ 
 ├── style.scss 
 # SCSS файл для стилів 
 │ └── script.js 
 # JavaScript файл з логікою перетягування 
 ├── package.json 
 # Конфігурація npm 
 └── README.md 
 # Опис проекту
 
## Як запустити проект
1. **Клонувати репозиторій**:
   # bash
   git clone https://github.com/BondarenkoDmitriy/DEV-3_TT.git
   # Для встановлення залежностей запустіть:
   npm install
   # Запуск компіляції SCSS:
   npm run sass
   # Запуск проекту:
   Для локального перегляду проекту рекомендується використовувати Live Server:
     - Встановіть розширення Live Server в VS Code.
     - Відкрийте index.html і виберіть "Open with Live Server" для запуску проекту в браузері.
