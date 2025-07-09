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

  const generateQuote = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Give me a short and unique motivational quote with the author's name. Format exactly like this: 'Quote here' - Author",
        }),
      });

      const data = await response.json();
      const text: string = data.quote || PLACEHOLDER_QUOTE;

      // Try splitting the quote and author
      const [quoteText, authorName] = text.split(" - ");
      setQuote(quoteText.trim());
      setAuthor(authorName?.trim() || "Unknown");

    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to load quote.");
      setAuthor("Try again");
    }

    setLoading(false);
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
