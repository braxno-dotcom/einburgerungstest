import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz - Einbuergerungstest Trainer",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklaerung</h1>

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6 text-sm text-gray-700">
        <section>
          <h2 className="font-semibold text-gray-900 mb-2">1. Verantwortlicher</h2>
          <p>Borys Rakhno</p>
          <p>Rue de la Fauvette, 17610 Saintes, Frankreich</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:b.raxno@gmail.com" className="text-blue-600 hover:underline">
              b.raxno@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>
            Diese Website erhebt und speichert keine personenbezogenen Daten auf
            einem Server. Alle Lernfortschritte werden ausschliesslich lokal in
            Ihrem Browser (localStorage) gespeichert und niemals an uns oder
            Dritte uebertragen.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">3. Cookies</h2>
          <p>
            Diese Website verwendet keine Cookies und keine
            Tracking-Technologien.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">4. Hosting</h2>
          <p>
            Diese Website wird bei Netlify (Netlify, Inc., 44 Montgomery
            Street, Suite 300, San Francisco, California 94104, USA) gehostet.
            Beim Besuch der Website werden automatisch technische Daten
            (IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs) in Server-Logfiles
            gespeichert. Dies ist fuer den Betrieb der Website technisch
            notwendig. Weitere Informationen finden Sie in der{" "}
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Datenschutzerklaerung von Netlify
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">5. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Loeschung und
            Einschraenkung der Verarbeitung Ihrer personenbezogenen Daten. Da
            wir keine personenbezogenen Daten erheben, betrifft dies
            ausschliesslich die von Netlify automatisch erfassten
            Server-Logfiles. Wenden Sie sich bei Fragen an die oben genannte
            E-Mail-Adresse.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">6. Aenderungen</h2>
          <p>
            Diese Datenschutzerklaerung kann gelegentlich aktualisiert werden,
            um rechtlichen Anforderungen zu entsprechen oder Aenderungen an der
            Website widerzuspiegeln.
          </p>
          <p className="mt-2 text-gray-500">Stand: Maerz 2026</p>
        </section>
      </div>
    </div>
  );
}
