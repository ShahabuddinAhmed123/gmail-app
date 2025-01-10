import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const setTheme = (theme) => {
    setThemeMode(theme);
    document.documentElement.className = theme;
  };

  return (
    <ThemeContext.Provider value={{ themeMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}