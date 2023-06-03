import { createContext, useState } from "react";

const ThemeContext = createContext();

const themes = {
  dark: "dark",
  light: "light",
  halloween: "halloween",
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = (e) => {
    console.log(e.target.value);
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
  };

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider, themes };
