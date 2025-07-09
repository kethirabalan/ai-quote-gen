"use client";
import { useEffect, useState } from "react";
// import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [dark, setDark] = useState(false);

  // On mount, read theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // When dark changes, update localStorage and html class
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="max-w-md mx-auto py-6 px-4 text-blue-500">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">AI Quote Generator</h1>
      <p className="text-sm text-gray-500 text-center">Generate a random quote with AI</p>
      {/* <button
        aria-label="Toggle dark mode"
        className="ml-4 p-2 rounded-full border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setDark((d) => !d)}
      >
        {dark ? (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        )}
      </button> */}
      </header>
  );
} 