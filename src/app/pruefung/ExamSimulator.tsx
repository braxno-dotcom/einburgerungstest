"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { questions } from "@/data/questions";
import type { Lang } from "@/data/questions";
import QuizCard from "@/components/QuizCard";
import LangToggle from "@/components/LangToggle";
import Link from "next/link";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const EXAM_QUESTIONS = 33;
const EXAM_TIME = 60 * 60; // 60 minutes in seconds
const PASS_THRESHOLD = 17;

type ExamState = "start" | "running" | "finished";

export default function ExamSimulator() {
  const [state, setState] = useState<ExamState>("start");
  const [examQuestions, setExamQuestions] = useState(questions.slice(0, EXAM_QUESTIONS));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    new Array(EXAM_QUESTIONS).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
  const [lang, setLang] = useState<Lang | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const finishExam = useCallback(() => {
    setState("finished");
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (state !== "running") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          finishExam();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [state, finishExam]);

  const startExam = () => {
    const shuffled = shuffleArray(questions);
    const selected = shuffled.slice(0, Math.min(EXAM_QUESTIONS, shuffled.length));
    setExamQuestions(selected);
    setAnswers(new Array(selected.length).fill(null));
    setCurrentIndex(0);
    setTimeLeft(EXAM_TIME);
    setState("running");
  };

  const handleAnswer = (correct: boolean) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = correct;
      return next;
    });
  };

  const correctCount = answers.filter((a) => a === true).length;
  const answeredCount = answers.filter((a) => a !== null).length;

  if (state === "start") {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Pruefungssimulation
        </h1>
        <div className="max-w-md mx-auto text-gray-600 space-y-2 mb-8">
          <p>
            <strong>{Math.min(EXAM_QUESTIONS, questions.length)} Fragen</strong>{" "}
            aus dem gesamten Fragenkatalog
          </p>
          <p>
            <strong>60 Minuten</strong> Zeit
          </p>
          <p>
            Mindestens <strong>{PASS_THRESHOLD} richtige</strong> Antworten zum
            Bestehen
          </p>
        </div>
        <button
          onClick={startExam}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Pruefung starten
        </button>
      </div>
    );
  }

  if (state === "finished") {
    const passed = correctCount >= PASS_THRESHOLD;
    return (
      <div className="text-center py-16">
        <div
          className={`text-6xl mb-4 ${passed ? "text-green-600" : "text-red-600"}`}
        >
          {passed ? "Bestanden!" : "Nicht bestanden"}
        </div>
        <p className="text-2xl text-gray-900 mb-2">
          {correctCount} von {examQuestions.length} richtig
        </p>
        <p className="text-gray-500 mb-8">
          {passed
            ? "Herzlichen Glueckwunsch!"
            : `Sie brauchen mindestens ${PASS_THRESHOLD} richtige Antworten.`}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={startExam}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Nochmal versuchen
          </button>
          <Link
            href="/"
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Zum Lernen
          </Link>
        </div>
      </div>
    );
  }

  // Running state
  const currentQuestion = examQuestions[currentIndex];

  return (
    <div>
      {/* Header bar */}
      <div className="flex items-center justify-between mb-6 bg-white rounded-lg border border-gray-200 p-4 flex-wrap gap-2">
        <span className="text-sm text-gray-600">
          Frage {currentIndex + 1} / {examQuestions.length}
        </span>
        <span className="text-sm font-medium text-gray-600">
          {correctCount} richtig
        </span>
        <LangToggle lang={lang} onToggle={setLang} />
        <span
          className={`text-sm font-mono font-medium ${
            timeLeft < 300 ? "text-red-600" : "text-gray-600"
          }`}
        >
          {formatTime(timeLeft)}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
        <div
          className="bg-blue-600 h-1.5 rounded-full transition-all"
          style={{
            width: `${((currentIndex + 1) / examQuestions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <QuizCard
        key={currentQuestion.id}
        question={currentQuestion}
        onAnswer={handleAnswer}
        lang={lang}
      />

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-30"
        >
          Zurueck
        </button>

        {currentIndex < examQuestions.length - 1 ? (
          <button
            onClick={() => setCurrentIndex((i) => i + 1)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Weiter
          </button>
        ) : (
          <button
            onClick={finishExam}
            className="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Abgeben ({answeredCount}/{examQuestions.length} beantwortet)
          </button>
        )}
      </div>
    </div>
  );
}
