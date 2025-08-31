"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark"); // Default fallback
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage when component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setMode(storedTheme);
    } else {
      // If no stored preference, check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setMode(prefersDark ? "dark" : "light");
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
    setMounted(true);
  }, []);

  // Update localStorage when theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", mode);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(mode);
    }
  }, [mode, mounted]);

  const toggle = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      return newMode;
    });
  };

  // Prevent flash of wrong theme by only rendering when mounted
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
