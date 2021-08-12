import React, { ReactNode, useContext, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { themes } from './themes';
import { Themes } from './types';

export const gradient = (
  angle: number,
  from: string,
  percentFrom: number,
  to: string,
  percentTo: number
) => `linear-gradient(${angle}deg, rgba(${from}) ${percentFrom}%, rgba(${to}) ${percentTo}%)`;

export const rgba = (color: string) => `rgba(${color})`;

export enum ThemeNames {
  default = 'default',
  dark = 'dark',
}

interface ThemeContextProps {
  currentTheme: Themes[ThemeNames];
  currentThemeName: string;
  changeTheme: (name: string) => void;
  isCurrentThemeDark: boolean;
  xl: boolean;
  lg: boolean;
  md: boolean;
  sm: boolean;
  xs: boolean;
}

const ThemeContext = React.createContext({} as ThemeContextProps);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentThemeName, setCurrentThemeName] = useState(
    localStorage.getItem('theme') || ThemeNames.default
  );

  const changeTheme = (name: string) => {
    localStorage.setItem('theme', name);
    setCurrentThemeName(name);
  };

  const width = useWindowWidth();
  const xl = width < 1800;
  const lg = width < 1400;
  const md = width < 1024;
  const sm = width < 768;
  const xs = width < 480;

  const arrayOfThemes = [ThemeNames.default, ThemeNames.dark];

  const currentTheme: Themes[ThemeNames] =
    themes[arrayOfThemes.find(theme => theme === currentThemeName) || ThemeNames.default];

  const isCurrentThemeDark = currentThemeName === ThemeNames.dark;

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        currentThemeName,
        changeTheme,
        isCurrentThemeDark,
        xl,
        lg,
        md,
        sm,
        xs,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
