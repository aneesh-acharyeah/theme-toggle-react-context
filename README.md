# 🌗 React useContext - Theme Toggle App

This project is a simple and clean example of how to use the **React `useContext` hook** to manage global state — specifically for toggling between light and dark themes.

## 🚀 Features

- Light / Dark mode toggle
- Global theme state using Context API
- No prop drilling
- Realistic styling with CSS transitions

---

## 🧠 What is `useContext`?

The `useContext` hook in React allows you to access data from a **Context** without passing props manually through every level of the component tree.

This is ideal for global data like:
- Themes (Light/Dark)
- Authenticated User Info
- Language/Locale settings

---

## 🛠️ Technologies Used

- React (Functional Components)
- `useContext` and `createContext`
- CSS for theming
- No third-party libraries

---

## 🧪 How It Works

1. `ThemeContext` uses `useState` to store the `isDark` boolean.
2. The context provides both `isDark` and `toggleTheme()` function.
3. Components use `useContext(ThemeContext)` to access and use this data.
4. The `App` dynamically changes its className (`app dark` or `app light`) based on `isDark`.
5. Button toggles the theme on click.

---

## ▶️ Getting Started

```bash
git clone https://github.com/aneesh-acharyeah/theme-toggle-react-context.git
cd theme-toggle-react-context
npm install
npm start

