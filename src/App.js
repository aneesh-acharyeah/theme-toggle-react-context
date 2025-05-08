import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import "./App.css";

const ThemedContent = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={isDark ? "app dark" : "app light"}>
      <h1>🌗 useContext Theme Toggle</h1>
      <p>The current theme is <strong>{isDark ? "Dark" : "Light"}</strong></p>
      <ThemeToggle />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemedContent />
    </ThemeProvider>
  );
}

export default App;
