"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-surface/80 backdrop-blur-md border-b border-base flex justify-between items-center px-6 py-3 lg:hidden shadow-sm transition-colors duration-300">
      <h1 className="font-bold text-accent glow text-lg tracking-wide">
        Gabriel Odusanya
      </h1>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-md hover:bg-[var(--color-base)] dark:hover:bg-[#0d1320] transition-all duration-300"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="text-accent" size={18} />
        ) : (
          <Moon className="text-accent" size={18} />
        )}
      </button>
    </header>
  );
}
