import Link from "next/link";
import { topics, questions } from "@/data/questions";
import TopicCard from "@/components/TopicCard";

export default function Home() {
  const topicData = topics.map((topic) => ({
    ...topic,
    questionIds: questions.filter((q) => q.topic === topic.slug).map((q) => q.id),
  }));

  return (
    <div>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Einbuergerungstest Trainer
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Bereite dich kostenlos auf den Einbuergerungstest vor. Lerne nach
          Themen oder simuliere die echte Pruefung.
        </p>
        <Link
          href="/pruefung"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Pruefung starten
        </Link>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Themen zum Lernen
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topicData.map((topic) => (
            <TopicCard
              key={topic.slug}
              slug={topic.slug}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              questionIds={topic.questionIds}
            />
          ))}
        </div>
      </section>

      <section className="py-8 bg-white rounded-lg border border-gray-200 p-6 mt-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Ueber den Einbuergerungstest
        </h2>
        <div className="text-gray-600 space-y-2 text-sm">
          <p>
            Der Einbuergerungstest besteht aus <strong>33 Fragen</strong>, von
            denen mindestens <strong>17 richtig</strong> beantwortet werden
            muessen.
          </p>
          <p>
            30 Fragen kommen aus einem Katalog von 300 allgemeinen Fragen, 3
            Fragen betreffen das Bundesland, in dem Sie leben.
          </p>
          <p>
            Sie haben <strong>60 Minuten</strong> Zeit und koennen aus jeweils 4
            Antwortmoeglichkeiten waehlen.
          </p>
        </div>
      </section>
    </div>
  );
}
