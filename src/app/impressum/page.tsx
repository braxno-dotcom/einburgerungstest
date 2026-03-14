import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - Einbuergerungstest Trainer",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6 text-sm text-gray-700">
        <section>
          <h2 className="font-semibold text-gray-900 mb-2">Angaben gemaess § 5 TMG</h2>
          <p>Borys Rakhno</p>
          <p>Rue de la Fauvette</p>
          <p>17610 Saintes</p>
          <p>Frankreich</p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a href="mailto:b.raxno@gmail.com" className="text-blue-600 hover:underline">
              b.raxno@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website werden mit groesster Sorgfalt erstellt.
            Der Anbieter uebernimmt jedoch keine Gewaehr fuer die Richtigkeit,
            Vollstaendigkeit und Aktualitaet der bereitgestellten Inhalte.
          </p>
          <p className="mt-2">
            Die Nutzung der auf dieser Website bereitgestellten Inhalte erfolgt
            auf eigene Gefahr des Nutzers. Die Pruefungsfragen dienen
            ausschliesslich zu Uebungszwecken und ersetzen nicht die offizielle
            Pruefungsvorbereitung.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">Urheberrecht</h2>
          <p>
            Die Pruefungsfragen des Einbuergerungstests sind oeffentlich
            zugaengliche Materialien des Bundesamts fuer Migration und
            Fluechtlinge (BAMF). Uebersetzungen und Erklaerungen sind eigene
            Inhalte des Betreibers.
          </p>
        </section>
      </div>
    </div>
  );
}
