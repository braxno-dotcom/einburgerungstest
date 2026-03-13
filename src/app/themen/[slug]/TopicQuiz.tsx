"use client";

import { useState } from "react";
import QuizCard from "@/components/QuizCard";
import type { Question } from "@/data/questions";

interface TopicQuizProps {
  questions: Question[];
}

export default function TopicQuiz({ questions }: TopicQuizProps) {
  const [mode, setMode] = useState<"learn" | "quiz">("quiz");
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const handleAnswer = (correct: boolean) => {
    setAnswered((a) => a + 1);
    if (correct) setScore((s) => s + 1);
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
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
        {mode === "quiz" && answered > 0 && (
          <span className="text-sm text-gray-500 ml-auto">
            {score}/{answered} richtig
          </span>
        )}
      </div>

      <div className="space-y-4">
        {questions.map((q) => (
          <QuizCard
            key={q.id}
            question={q}
            onAnswer={mode === "quiz" ? handleAnswer : undefined}
            showExplanationDefault={mode === "learn"}
          />
        ))}
      </div>
    </div>
  );
}
