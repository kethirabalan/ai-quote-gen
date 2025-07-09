"use client";
import { useState } from "react";
import { Copy, RefreshCw } from "lucide-react";
import Button from "./Button";
import { toast } from "sonner";

interface QuoteCardProps {
  quote: string;
  author?: string;
  loading?: boolean;
  onGenerate: () => void;
}

export default function QuoteCard({ quote, author, loading, onGenerate }: QuoteCardProps) {
  const [fade, setFade] = useState(false);

  // Animate fade-in when quote changes
  // Use key on quote for re-mounting
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(quote);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 transition-colors">
      <div
        key={quote}
        className="w-full min-h-[80px] flex flex-col items-center justify-center text-center transition-opacity duration-500 opacity-0 animate-fadeIn"
      >
        <p className="text-lg sm:text-xl font-serif italic text-zinc-700 dark:text-zinc-200 mb-2">{quote}</p>
        {author && <span className="block text-sm text-zinc-500 dark:text-zinc-400 mt-1">— {author}</span>}
      </div>
      <div className="flex gap-2 w-full justify-center">
        <Button onClick={onGenerate} loading={loading} aria-label="Generate new quote">
          <RefreshCw className="w-5 h-5 mr-2" /> Generate Quote
        </Button>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Copy quote to clipboard"
        >
          <Copy className="w-5 h-5" />
          <span className="sr-only">Copy</span>
        </button>
      </div>
    </div>
  );
}

// Add fadeIn animation to globals.css:
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// .animate-fadeIn { animation: fadeIn 0.6s; opacity: 1 !important; } 