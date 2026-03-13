import type { Metadata } from "next";
import ExamSimulator from "./ExamSimulator";

export const metadata: Metadata = {
  title: "Pruefungssimulation - Einbuergerungstest",
  description:
    "Simuliere den echten Einbuergerungstest mit 33 Fragen und 60 Minuten Zeit.",
};

export default function PruefungPage() {
  return (
    <div>
      <ExamSimulator />
    </div>
  );
}
