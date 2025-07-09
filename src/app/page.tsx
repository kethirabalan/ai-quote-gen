"use client";
import { useState } from "react";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";

const PLACEHOLDER_QUOTE = "The best way to get started is to quit talking and begin doing.";
const PLACEHOLDER_AUTHOR = "Walt Disney";

export default function Home() {
  const [quote, setQuote] = useState(PLACEHOLDER_QUOTE);
  const [author, setAuthor] = useState(PLACEHOLDER_AUTHOR);
  const [loading, setLoading] = useState(false);

  // Mock quote generation (replace with API call for real AI quotes)
  const generateQuote = async () => {
    setLoading(true);
    setTimeout(() => {
      setQuote("Success is not final, failure is not fatal: It is the courage to continue that counts.");
      setAuthor("Winston Churchill");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center w-full px-2">
        <QuoteCard
          quote={quote}
          author={author}
          loading={loading}
          onGenerate={generateQuote}
        />
      </main>
      <footer className="py-6 text-center text-xs text-zinc-400 dark:text-zinc-600 w-full">
        &copy; {new Date().getFullYear()} AI Quote Generator
      </footer>
    </div>
  );
}
