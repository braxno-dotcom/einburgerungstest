"use client";

import { useState } from "react";
import type { Question, Lang } from "@/data/questions";
import { markQuestion } from "@/lib/progress";

interface QuizCardProps {
  question: Question;
  onAnswer?: (correct: boolean) => void;
  showExplanationDefault?: boolean;
  lang: Lang | null;
}

export default function QuizCard({
  question,
  onAnswer,
  showExplanationDefault = false,
  lang,
}: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    const correct = index === question.answer;
    onAnswer?.(correct);
    markQuestion(question.id, correct);
  };

  const qTrans = lang === "ua" ? question.questionUa : lang === "ru" ? question.questionRu : null;
  const optTrans = lang === "ua" ? question.optionsUa : lang === "ru" ? question.optionsRu : null;
  const expTrans = lang === "ua" ? question.explanationUa : lang === "ru" ? question.explanationRu : null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <p className="font-medium text-gray-900 mb-1">{question.question}</p>
      {lang && qTrans && (
        <p className="text-sm text-gray-400 mb-3">{qTrans}</p>
      )}
      {!lang && <div className="mb-3" />}
      <div className="space-y-2">
        {question.options.map((option, i) => {
          let className =
            "w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ";
          if (!answered) {
            className +=
              "border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer";
          } else if (i === question.answer) {
            className += "border-green-500 bg-green-50 text-green-800";
          } else if (i === selected) {
            className += "border-red-500 bg-red-50 text-red-800";
          } else {
            className += "border-gray-100 text-gray-400";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={className}
            >
              <span className="font-medium mr-2">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
              {lang && optTrans && (
                <span className="block text-xs text-gray-400 mt-0.5 ml-6">
                  {optTrans[i]}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {(answered || showExplanationDefault) && question.explanation && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm">
          <p className="text-blue-800">{question.explanation}</p>
          {lang && expTrans && (
            <p className="text-blue-600 mt-1">{expTrans}</p>
          )}
        </div>
      )}
    </div>
  );
}
