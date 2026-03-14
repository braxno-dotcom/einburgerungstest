"use client";

import type { Lang } from "@/data/questions";

interface LangToggleProps {
  lang: Lang | null;
  onToggle: (lang: Lang | null) => void;
}

export default function LangToggle({ lang, onToggle }: LangToggleProps) {
  const handleClick = (target: Lang) => {
    onToggle(lang === target ? null : target);
  };

  return (
    <div className="fixed bottom-6 right-4 z-50 flex items-center gap-1.5 bg-white border border-gray-300 rounded-full px-2 py-1.5 shadow-xl">
      <button
        onClick={() => handleClick("ru")}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
          lang === "ru"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => handleClick("ua")}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
          lang === "ua"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        UA
      </button>
    </div>
  );
}
