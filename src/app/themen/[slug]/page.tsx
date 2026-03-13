import { notFound } from "next/navigation";
import Link from "next/link";
import { topics, questions } from "@/data/questions";
import TopicQuiz from "./TopicQuiz";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const topic = topics.find((t) => t.slug === slug);
  if (!topic) return {};
  return {
    title: `${topic.title} - Einbuergerungstest`,
    description: topic.description,
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = topics.find((t) => t.slug === slug);
  if (!topic) notFound();

  const topicQuestions = questions.filter((q) => q.topic === slug);
  const topicIndex = topics.findIndex((t) => t.slug === slug);
  const prevTopic = topicIndex > 0 ? topics[topicIndex - 1] : null;
  const nextTopic =
    topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null;

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline mb-2 inline-block"
        >
          Zurueck zur Uebersicht
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {topic.icon} {topic.title}
        </h1>
        <p className="text-gray-600">{topic.description}</p>
        <p className="text-sm text-gray-500 mt-1">
          {topicQuestions.length} Fragen
        </p>
      </div>

      <TopicQuiz questions={topicQuestions} />

      <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
        {prevTopic ? (
          <Link
            href={`/themen/${prevTopic.slug}`}
            className="text-blue-600 hover:underline text-sm"
          >
            &larr; {prevTopic.title}
          </Link>
        ) : (
          <div />
        )}
        {nextTopic ? (
          <Link
            href={`/themen/${nextTopic.slug}`}
            className="text-blue-600 hover:underline text-sm"
          >
            {nextTopic.title} &rarr;
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
