"use client";

import { useState } from "react";
import type { Question } from "@/data/questions";

interface QuizCardProps {
  question: Question;
  onAnswer?: (correct: boolean) => void;
  showExplanationDefault?: boolean;
}

export default function QuizCard({
  question,
  onAnswer,
  showExplanationDefault = false,
}: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    onAnswer?.(index === question.answer);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <p className="font-medium text-gray-900 mb-4">{question.question}</p>
      <div className="space-y-2">
        {question.options.map((option, i) => {
          let className =
            "w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ";
          if (!answered) {
            className += "border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer";
          } else if (i === question.answer) {
            className += "border-green-500 bg-green-50 text-green-800";
          } else if (i === selected) {
            className += "border-red-500 bg-red-50 text-red-800";
          } else {
            className += "border-gray-100 text-gray-400";
          }

          return (
            <button key={i} onClick={() => handleSelect(i)} className={className}>
              <span className="font-medium mr-2">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>
      {(answered || showExplanationDefault) && question.explanation && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
          {question.explanation}
        </div>
      )}
    </div>
  );
}
