"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getTopicStats } from "@/lib/progress";

interface TopicCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  questionIds: number[];
}

export default function TopicCard({ slug, title, description, icon, questionIds }: TopicCardProps) {
  const [stats, setStats] = useState<{ correct: number; total: number } | null>(null);

  useEffect(() => {
    const s = getTopicStats(questionIds);
    setStats({ correct: s.correct, total: s.total });
  }, [questionIds]);

  const pct = stats && stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;

  return (
    <Link
      href={`/themen/${slug}`}
      className="block bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-blue-600 font-medium">
          {questionIds.length} Fragen
        </span>
        {stats && stats.correct > 0 && (
          <span className="text-xs text-gray-500">
            {stats.correct}/{stats.total}
          </span>
        )}
      </div>
      {stats && stats.correct > 0 && (
        <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-green-500 h-1.5 rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </Link>
  );
}
