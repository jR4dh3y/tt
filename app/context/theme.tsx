import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

export const themeColors = {
  light: {
    primary: '#059669', // Darker Emerald for better contrast
    primaryLight: '#10b981', // Emerald 500
    primaryDark: '#047857', // Emerald 700
    background: '#ffffff',
    card: '#ecfdf5', // Slightly darker card background
    border: '#a7f3d0', // Darker border for better visibility
    text: '#064e3b', // Emerald 900
    textMuted: '#065f46', // Darker muted text for better readability
    tabBar: '#ffffff',
    tabBarBorder: '#a7f3d0', // Matching border color
    cardText: '#065f46', // Specific text color for cards
    highlight: '#34d399', // Highlight color for important elements
    success: '#059669', // Success color
    divider: '#d1fae5', // Subtle divider color
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
    cardText: '#d1fae5', // Card text color
    highlight: '#10b981', // Highlight color
    success: '#059669', // Success color
    divider: '#1e293b', // Subtle divider
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