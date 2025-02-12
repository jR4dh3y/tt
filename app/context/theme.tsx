import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

export const themeColors = {
  light: {
    primary: '#10b981', // Emerald 500
    primaryLight: '#34d399', // Emerald 400
    primaryDark: '#059669', // Emerald 600
    background: '#ffffff',
    card: '#f0fdf4', // Emerald 50
    border: '#d1fae5', // Emerald 100
    text: '#064e3b', // Emerald 900
    textMuted: '#047857', // Emerald 700
    tabBar: '#ffffff',
    tabBarBorder: '#d1fae5', // Emerald 100
  },
  dark: {
    primary: '#059669', // Emerald 600
    primaryLight: '#10b981', // Emerald 500
    primaryDark: '#047857', // Emerald 700
    background: '#0f172a', // Slate 900
    card: '#1e293b', // Slate 800
    border: '#334155', // Slate 700
    text: '#f0fdf4', // Emerald 50
    textMuted: '#d1fae5', // Emerald 100
    tabBar: '#0f172a', // Slate 900
    tabBarBorder: '#334155', // Slate 700
  }
};

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: typeof themeColors.light | typeof themeColors.dark;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  colors: themeColors.light,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  const colors = isDarkMode ? themeColors.dark : themeColors.light;

  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext); 