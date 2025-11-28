1️⃣ Install Tailwind + plugins:

npm install -D tailwindcss postcss autoprefixer

2️⃣ Create Tailwind & PostCSS files :

npx tailwindcss init -p


It creates:
✔ tailwind.config.js
✔ postcss.config.js

3️⃣ Add paths inside tailwind.config.js :

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

4️⃣ Add Tailwind directives inside index.css / main.css

@tailwind base;
@tailwind components;
@tailwind utilities;

5️⃣ Run the project
npm run dev


Now Tailwind works.