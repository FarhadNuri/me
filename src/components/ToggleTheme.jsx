import React, { use, useEffect } from "react";
import { RiSunLine, RiMoonLine } from "@remixicon/react";
import { useState } from "react";
const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || 'dark';
    setIsDarkMode(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    
  }, []);
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="size-7 flex items-center justify-center hover:bg-zinc-200 
  dark:hover:bg-zinc-800 transition-colors rounded-full p-1"
    >
      {isDarkMode ? <RiMoonLine /> : <RiSunLine />}
    </button>
  );
};

export default ToggleTheme;
