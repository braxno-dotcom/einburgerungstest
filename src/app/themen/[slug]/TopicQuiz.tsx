"use client";

import { useState } from "react";
import QuizCard from "@/components/QuizCard";
import LangToggle from "@/components/LangToggle";
import type { Question, Lang } from "@/data/questions";

interface TopicQuizProps {
  questions: Question[];
}

export default function TopicQuiz({ questions }: TopicQuizProps) {
  const [mode, setMode] = useState<"learn" | "quiz">("quiz");
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [lang, setLang] = useState<Lang | null>(null);

  const handleAnswer = (correct: boolean) => {
    setAnswered((a) => a + 1);
    if (correct) setScore((s) => s + 1);
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setMode("quiz")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "quiz"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Ueben
        </button>
        <button
          onClick={() => setMode("learn")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "learn"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Lesen
        </button>
        <div className="ml-auto flex items-center gap-3">
          {mode === "quiz" && answered > 0 && (
            <span className="text-sm text-gray-500">
              {score}/{answered} richtig
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q) => (
          <QuizCard
            key={q.id}
            question={q}
            onAnswer={mode === "quiz" ? handleAnswer : undefined}
            showExplanationDefault={mode === "learn"}
            lang={lang}
          />
        ))}
      </div>

      <div className="pb-16" />
      <LangToggle lang={lang} onToggle={setLang} />
    </div>
  );
}
