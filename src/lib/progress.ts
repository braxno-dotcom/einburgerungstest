const STORAGE_KEY = "einbuergerungstest-progress";

interface QuestionResult {
  correct: boolean;
  lastAnswered: string;
}

type ProgressData = Record<number, QuestionResult>;

function read(): ProgressData {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function write(data: ProgressData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function markQuestion(id: number, correct: boolean) {
  const data = read();
  data[id] = { correct, lastAnswered: new Date().toISOString() };
  write(data);
}

export function getProgress(): ProgressData {
  return read();
}

export function getTopicStats(questionIds: number[]) {
  const data = read();
  let correct = 0;
  let attempted = 0;
  for (const id of questionIds) {
    if (data[id]) {
      attempted++;
      if (data[id].correct) correct++;
    }
  }
  return { total: questionIds.length, correct, attempted };
}

export function getCorrectIds(): Set<number> {
  const data = read();
  const set = new Set<number>();
  for (const [id, result] of Object.entries(data)) {
    if (result.correct) set.add(Number(id));
  }
  return set;
}

export function resetProgress() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
  }
}
