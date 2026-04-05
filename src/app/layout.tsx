import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Einbürgerungstest на русском — тест на гражданство Германии | 300 вопросов с переводом",
  description:
    "Einbürgerungstest с русским переводом: все 300 вопросов теста на гражданство Германии по темам, с объяснениями. Бесплатная подготовка. Einbürgerungstest kostenlos üben — alle Fragen mit Erklärungen.",
  keywords: ["Einbürgerungstest", "тест на гражданство Германии", "Einbürgerungstest на русском", "einbuergerungstest russisch", "гражданство Германии тест", "Leben in Deutschland Test"],
  openGraph: {
    title: "Einbürgerungstest на русском — 300 вопросов с переводом",
    description: "Бесплатная подготовка к тесту на гражданство Германии. Все вопросы с русским переводом и объяснениями.",
    type: "website",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Einbuergerungstest",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7529900678975882"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} antialiased bg-gray-50 min-h-screen`}>
        <ServiceWorkerRegistrar />
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-gray-900">
              Einbuergerungstest
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/themen/politik-demokratie" className="text-gray-600 hover:text-gray-900">
                Themen
              </Link>
              <Link href="/pruefung" className="text-gray-600 hover:text-gray-900">
                Pruefung
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-gray-200 mt-12 py-6">
          <div className="max-w-4xl mx-auto px-4 flex gap-4 text-xs text-gray-400">
            <Link href="/impressum" className="hover:text-gray-600">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gray-600">Datenschutz</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
