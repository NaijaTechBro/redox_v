import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [dispMenu, setDispMenu] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };
  const toggleMenu = () => {
    setDispMenu(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, dispMenu, toggleMenu }}>
      {children}
    </ThemeContext.Provider>
  );
};
