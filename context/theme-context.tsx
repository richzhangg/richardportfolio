"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
type Theme = "light" | "dark";
type ThemeContextProviderProps = { children: React.ReactNode };
type ThemeContextType = { theme: Theme; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark"); // default dark

  useEffect(() => {
    // always enforce dark on mount
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("theme", "dark");
    setTheme("dark");
  }, []);

  const toggleTheme = () => {
    // no-op to keep dark-only
    document.documentElement.classList.add("dark");
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeContextProvider");
  return ctx;
}
