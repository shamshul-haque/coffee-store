import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const handleSwitchTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(currentTheme);
    setTheme(currentTheme);
  }, []);

  return { theme, handleSwitchTheme };
};
