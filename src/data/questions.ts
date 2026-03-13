export interface Question {
  id: number;
  question: string;
  options: [string, string, string, string];
  answer: number;
  topic: string;
  explanation?: string;
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  icon: string;
  questionCount?: number;
}

export const topics: Topic[] = [
  {
    slug: "politik-demokratie",
    title: "Politik in der Demokratie",
    description:
      "Grundrechte, Verfassungsorgane, Wahlen und politische Strukturen",
    icon: "\u{1F3DB}\uFE0F",
  },
  {
    slug: "geschichte",
    title: "Geschichte und Verantwortung",
    description:
      "Deutsche Geschichte vom Kaiserreich bis zur Wiedervereinigung",
    icon: "\u{1F4DC}",
  },
  {
    slug: "mensch-gesellschaft",
    title: "Mensch und Gesellschaft",
    description: "Zusammenleben, Religion, Bildung und Alltag in Deutschland",
    icon: "\u{1F465}",
  },
];

export const questions: Question[] = [
  {
    id: 1,
    question: "In Deutschland duerfen Menschen offen etwas gegen die Regierung sagen, weil ...",
    options: [
      "hier Religionsfreiheit gilt.",
      "die Menschen Meinungsfreiheit haben.",
      "hier Versammlungsfreiheit gilt.",
      "die Menschen Wahlrecht haben.",
    ],
    answer: 1,
    topic: "politik-demokratie",
    explanation: "Das Grundgesetz garantiert in Artikel 5 die Meinungsfreiheit. Jeder darf seine Meinung frei aeussern, auch Kritik an der Regierung.",
  },
  {
    id: 2,
    question: "In Deutschland koennen Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am ...",
    options: [
      "Geschichtsunterricht teilnimmt.",
      "Religionsunterricht teilnimmt.",
      "Politikunterricht teilnimmt.",
      "Sprachunterricht teilnimmt.",
    ],
    answer: 1,
    topic: "politik-demokratie",
    explanation: "Nach Artikel 7 des Grundgesetzes ist der Religionsunterricht ordentliches Lehrfach. Eltern koennen bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es daran teilnimmt.",
  },
  {
    id: 3,
    question: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
    options: [
      "Alle Einwohner und der Staat muessen sich an die Gesetze halten.",
      "Der Staat muss sich nicht an die Gesetze halten.",
      "Nur Deutsche muessen die Gesetze befolgen.",
      "Die Gesetze gelten nur fuer Auslaender.",
    ],
    answer: 0,
    topic: "politik-demokratie",
    explanation: "In einem Rechtsstaat sind alle, sowohl Buerger als auch der Staat, an Recht und Gesetz gebunden.",
  },
  {
    id: 4,
    question: "Welches Recht gehoert zu den Grundrechten in Deutschland?",
    options: [
      "Waffenbesitz",
      "Faustrecht",
      "Meinungsfreiheit",
      "Selbstjustiz",
    ],
    answer: 2,
    topic: "politik-demokratie",
    explanation: "Meinungsfreiheit ist in Artikel 5 des Grundgesetzes verankert und gehoert zu den wichtigsten Grundrechten.",
  },
  {
    id: 5,
    question: "Wahlen in Deutschland sind frei. Was bedeutet das?",
    options: [
      "Man muss sich an die Wahlpflicht halten.",
      "Der Arbeitgeber bestimmt, was man waehlt.",
      "Jeder kann waehlen, was er will.",
      "Nur Deutsche duerfen waehlen.",
    ],
    answer: 2,
    topic: "politik-demokratie",
    explanation: "Freie Wahlen bedeuten, dass jeder Wahlberechtigte ohne Zwang oder Druck selbst entscheiden kann, wen oder was er waehlt.",
  },
  {
    id: 6,
    question: "Wie heisst die deutsche Verfassung?",
    options: [
      "Volksgesetz",
      "Bundesgesetz",
      "Deutsches Gesetz",
      "Grundgesetz",
    ],
    answer: 3,
    topic: "politik-demokratie",
    explanation: "Die deutsche Verfassung heisst Grundgesetz. Es wurde 1949 verabschiedet und bildet die rechtliche Grundordnung der Bundesrepublik Deutschland.",
  },
  {
    id: 7,
    question: "Welches Grundrecht gilt in Deutschland nur fuer Auslaender / Auslaenderinnen?",
    options: [
      "Grundrecht auf Asyl",
      "Meinungsfreiheit",
      "Religionsfreiheit",
      "Petitionsrecht",
    ],
    answer: 0,
    topic: "politik-demokratie",
    explanation: "Das Asylrecht nach Artikel 16a des Grundgesetzes gilt speziell fuer politisch Verfolgte aus dem Ausland. Die anderen genannten Grundrechte gelten fuer alle Menschen in Deutschland.",
  },
  {
    id: 8,
    question: "Was ist der Bundestag?",
    options: [
      "die Regierung Deutschlands",
      "das Parlament Deutschlands",
      "das oberste Gericht",
      "die Polizei",
    ],
    answer: 1,
    topic: "politik-demokratie",
    explanation: "Der Bundestag ist das Parlament der Bundesrepublik Deutschland. Die Abgeordneten werden alle vier Jahre vom Volk gewaehlt.",
  },
  {
    id: 9,
    question: "Wer waehlt in Deutschland die Abgeordneten zum Bundestag?",
    options: [
      "das Militaer",
      "die wahlberechtigten Buerger und Buergerinnen",
      "die Wirtschaft",
      "die Kirchen",
    ],
    answer: 1,
    topic: "politik-demokratie",
    explanation: "In Deutschland waehlen die wahlberechtigten Buergerinnen und Buerger die Abgeordneten zum Bundestag in allgemeinen, unmittelbaren, freien, gleichen und geheimen Wahlen.",
  },
  {
    id: 10,
    question: "Was gehoert NICHT zur Exekutive in Deutschland?",
    options: [
      "die Bundesregierung",
      "der Bundestag",
      "die Bundespolizei",
      "die Bundesministerien",
    ],
    answer: 1,
    topic: "politik-demokratie",
    explanation: "Der Bundestag gehoert zur Legislative (gesetzgebende Gewalt), nicht zur Exekutive (ausfuehrende Gewalt). Die Exekutive umfasst die Bundesregierung, ihre Ministerien und die Polizei.",
  },
  {
    id: 11,
    question: "Was geschah am 9. November 1989 in Deutschland?",
    options: [
      "Die Berliner Mauer fiel.",
      "Die BRD und die DDR wurden vereinigt.",
      "Die Verfassung wurde geaendert.",
      "Der Zweite Weltkrieg endete.",
    ],
    answer: 0,
    topic: "geschichte",
    explanation: "Am 9. November 1989 fiel die Berliner Mauer. Dieses Ereignis war entscheidend fuer die deutsche Wiedervereinigung, die am 3. Oktober 1990 stattfand.",
  },
  {
    id: 12,
    question: "Wodurch wurde die Weimarer Republik beendet?",
    options: [
      "durch den Beginn des Ersten Weltkriegs",
      "durch die Machtergreifung Hitlers 1933",
      "durch die Gruendung der Europaeischen Union",
      "durch den Bau der Berliner Mauer",
    ],
    answer: 1,
    topic: "geschichte",
    explanation: "Die Weimarer Republik endete mit der Ernennung Adolf Hitlers zum Reichskanzler am 30. Januar 1933. Damit begann die nationalsozialistische Diktatur.",
  },
  {
    id: 13,
    question: "Was bedeutet der Begriff 'Holocaust'?",
    options: [
      "die Vernichtung der europaeischen Juden",
      "eine Naturkatastrophe",
      "die Gruendung Israels",
      "der Beginn des Kalten Krieges",
    ],
    answer: 0,
    topic: "geschichte",
    explanation: "Der Holocaust bezeichnet den systematischen Voelkermord an den europaeischen Juden waehrend der nationalsozialistischen Herrschaft (1933-1945). Etwa sechs Millionen Juden wurden ermordet.",
  },
  {
    id: 14,
    question: "Wann war der Zweite Weltkrieg?",
    options: [
      "1914 - 1918",
      "1939 - 1945",
      "1949 - 1989",
      "1918 - 1933",
    ],
    answer: 1,
    topic: "geschichte",
    explanation: "Der Zweite Weltkrieg dauerte von 1939 bis 1945. Er begann mit dem deutschen Ueberfall auf Polen am 1. September 1939 und endete mit der bedingungslosen Kapitulation Deutschlands am 8. Mai 1945.",
  },
  {
    id: 15,
    question: "Was war der Marshallplan?",
    options: [
      "ein Plan zum Wiederaufbau Europas nach dem Zweiten Weltkrieg",
      "ein Friedensvertrag zwischen Deutschland und Frankreich",
      "der Plan zur Teilung Deutschlands",
      "ein Militaerbuendnis gegen die Sowjetunion",
    ],
    answer: 0,
    topic: "geschichte",
    explanation: "Der Marshallplan war ein US-amerikanisches Wirtschaftshilfeprogramm zum Wiederaufbau Europas nach dem Zweiten Weltkrieg. Er trug wesentlich zum wirtschaftlichen Aufschwung Westdeutschlands bei.",
  },
  {
    id: 16,
    question: "Wann wurde die Bundesrepublik Deutschland gegruendet?",
    options: ["1945", "1946", "1949", "1952"],
    answer: 2,
    topic: "geschichte",
    explanation: "Die Bundesrepublik Deutschland wurde am 23. Mai 1949 mit der Verkuendung des Grundgesetzes gegruendet.",
  },
  {
    id: 17,
    question: "Was war die DDR?",
    options: [
      "ein Staat im Osten Deutschlands",
      "eine Region im Sueden Deutschlands",
      "eine Kolonie Deutschlands",
      "ein anderer Name fuer Oesterreich",
    ],
    answer: 0,
    topic: "geschichte",
    explanation: "Die Deutsche Demokratische Republik (DDR) war ein sozialistischer Staat im Osten Deutschlands, der von 1949 bis 1990 existierte.",
  },
  {
    id: 18,
    question: "Wann war die deutsche Wiedervereinigung?",
    options: ["1985", "1989", "1990", "1991"],
    answer: 2,
    topic: "geschichte",
    explanation: "Die deutsche Wiedervereinigung fand am 3. Oktober 1990 statt. An diesem Tag trat die DDR der Bundesrepublik Deutschland bei. Der 3. Oktober ist seitdem der Tag der Deutschen Einheit.",
  },
  {
    id: 19,
    question: "Welches Ereignis war am 17. Juni 1953 in der DDR?",
    options: [
      "die Gruendung der DDR",
      "der Volksaufstand",
      "der Bau der Berliner Mauer",
      "die erste freie Wahl",
    ],
    answer: 1,
    topic: "geschichte",
    explanation: "Am 17. Juni 1953 kam es in der DDR zu einem Volksaufstand gegen die SED-Regierung. Der Aufstand wurde von sowjetischen Truppen niedergeschlagen.",
  },
  {
    id: 20,
    question: "Was war der Grund fuer den Bau der Berliner Mauer 1961?",
    options: [
      "die Teilung Berlins in Sektoren",
      "die Massenflucht von DDR-Buergern in den Westen",
      "ein Angriff auf Westberlin",
      "die Wiedervereinigung Deutschlands",
    ],
    answer: 1,
    topic: "geschichte",
    explanation: "Die DDR-Fuehrung liess die Berliner Mauer am 13. August 1961 errichten, um die Massenflucht von DDR-Buergern in den Westen zu stoppen.",
  },
  {
    id: 21,
    question: "In Deutschland darf man nicht bestraft werden, wenn man ...",
    options: [
      "bei einer Demonstration seine Meinung sagt.",
      "einen Laden beklaut.",
      "bei Rot ueber die Ampel geht.",
      "seinen Nachbarn schlaegt.",
    ],
    answer: 0,
    topic: "mensch-gesellschaft",
    explanation: "Die Meinungsfreiheit ist ein Grundrecht. Man darf bei Demonstrationen seine Meinung frei aeussern, solange man dabei keine Straftaten begeht.",
  },
  {
    id: 22,
    question: "Was bedeutet Pressefreiheit in Deutschland?",
    options: [
      "Zeitungen sind kostenlos.",
      "Der Staat bestimmt, was die Zeitungen schreiben.",
      "Journalisten duerfen frei berichten.",
      "Alle Zeitungen gehoeren dem Staat.",
    ],
    answer: 2,
    topic: "mensch-gesellschaft",
    explanation: "Pressefreiheit bedeutet, dass Journalisten und Medien frei und ohne staatliche Zensur berichten duerfen. Dies ist in Artikel 5 des Grundgesetzes garantiert.",
  },
  {
    id: 23,
    question: "In Deutschland hat man die Schulpflicht. Was bedeutet das?",
    options: [
      "Alle Kinder muessen zur Schule gehen.",
      "Es gibt keine Schulpflicht.",
      "Nur Jungen muessen zur Schule gehen.",
      "Man muss eine Schule bauen.",
    ],
    answer: 0,
    topic: "mensch-gesellschaft",
    explanation: "In Deutschland besteht eine allgemeine Schulpflicht. Alle Kinder muessen in der Regel ab dem 6. Lebensjahr fuer mindestens 9 Jahre die Schule besuchen.",
  },
  {
    id: 24,
    question: "Wer ist in Deutschland wahlberechtigt zum Bundestag?",
    options: [
      "alle Einwohner und Einwohnerinnen Deutschlands",
      "alle deutschen Staatsangehoerigen, die mindestens 18 Jahre alt sind",
      "alle Einwohner und Einwohnerinnen ab 16 Jahren",
      "alle Buergerinnen und Buerger der EU",
    ],
    answer: 1,
    topic: "mensch-gesellschaft",
    explanation: "Zum Bundestag waehlen duerfen alle deutschen Staatsangehoerigen, die am Wahltag mindestens 18 Jahre alt sind.",
  },
  {
    id: 25,
    question: "Welche Aussage ist richtig? In Deutschland ...",
    options: [
      "sind Frauen und Maenner gleichberechtigt.",
      "haben Frauen weniger Rechte als Maenner.",
      "haben Maenner weniger Rechte als Frauen.",
      "gibt es keine Gleichberechtigung.",
    ],
    answer: 0,
    topic: "mensch-gesellschaft",
    explanation: "Artikel 3 des Grundgesetzes legt fest, dass Maenner und Frauen gleichberechtigt sind. Der Staat foerdert die Durchsetzung der Gleichberechtigung.",
  },
  {
    id: 26,
    question: "Was ist in Deutschland ab 18 Jahren erlaubt?",
    options: [
      "Alkohol und Tabak kaufen",
      "bei einer Kommunalwahl waehlen",
      "einen Fuehrerschein fuer ein Auto haben",
      "an Bundestagswahlen teilnehmen",
    ],
    answer: 3,
    topic: "mensch-gesellschaft",
    explanation: "Ab 18 Jahren ist man in Deutschland voll geschaeftsfaehig und darf an Bundestagswahlen teilnehmen. Das aktive und passive Wahlrecht zum Bundestag gilt ab 18 Jahren.",
  },
  {
    id: 27,
    question: "Was versteht man unter dem Recht auf 'Unverletzlichkeit der Wohnung'?",
    options: [
      "Man darf in einer Wohnung keinen Laerm machen.",
      "Die Polizei darf jederzeit die Wohnung durchsuchen.",
      "Ohne Erlaubnis oder Gerichtsbeschluss darf niemand die Wohnung betreten.",
      "Man darf seine Wohnung nicht veraendern.",
    ],
    answer: 2,
    topic: "mensch-gesellschaft",
    explanation: "Artikel 13 des Grundgesetzes schuetzt die Unverletzlichkeit der Wohnung. Ohne Einwilligung des Bewohners oder richterlichen Beschluss darf niemand eine Wohnung betreten oder durchsuchen.",
  },
  {
    id: 28,
    question: "Wie heisst Deutschlands Nationalfeiertag?",
    options: [
      "Tag der Arbeit",
      "Tag der Deutschen Einheit",
      "Weihnachten",
      "Ostern",
    ],
    answer: 1,
    topic: "mensch-gesellschaft",
    explanation: "Der Tag der Deutschen Einheit am 3. Oktober ist der Nationalfeiertag Deutschlands. Er erinnert an die Wiedervereinigung am 3. Oktober 1990.",
  },
  {
    id: 29,
    question: "Welche Farben hat die deutsche Flagge?",
    options: [
      "Schwarz-Rot-Gold",
      "Rot-Weiss-Blau",
      "Schwarz-Rot-Gruen",
      "Weiss-Blau-Rot",
    ],
    answer: 0,
    topic: "mensch-gesellschaft",
    explanation: "Die deutschen Nationalfarben sind Schwarz, Rot und Gold. Diese Farben gehen auf die Freiheitskriege des 19. Jahrhunderts zurueck.",
  },
  {
    id: 30,
    question: "Wie heisst die Hauptstadt von Deutschland?",
    options: ["Muenchen", "Bonn", "Frankfurt am Main", "Berlin"],
    answer: 3,
    topic: "mensch-gesellschaft",
    explanation: "Berlin ist seit der Wiedervereinigung 1990 die Hauptstadt der Bundesrepublik Deutschland. Der Bundestag und die Bundesregierung haben dort ihren Sitz.",
  },
];
