"use client";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="w-full flex items-center justify-between max-w-md mx-auto py-6 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">AI Quote Generator</h1>
      <button
        aria-label="Toggle dark mode"
        className="ml-4 p-2 rounded-full border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setDark((d) => !d)}
      >
        {dark ? (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        )}
      </button>
    </header>
  );
} 