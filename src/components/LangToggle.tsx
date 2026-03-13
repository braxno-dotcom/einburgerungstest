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
    <div className="flex items-center gap-1">
      <span className="text-xs text-gray-400 mr-1">Перевод:</span>
      <button
        onClick={() => handleClick("ru")}
        className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
          lang === "ru"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => handleClick("ua")}
        className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
          lang === "ua"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
        }`}
      >
        UA
      </button>
    </div>
  );
}
