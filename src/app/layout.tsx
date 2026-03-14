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
  title: "Einbuergerungstest Trainer - Alle 300 Fragen mit Erklaerungen",
  description:
    "Kostenlos fuer den Einbuergerungstest ueben. Alle Fragen nach Themen sortiert mit Erklaerungen und Pruefungssimulation.",
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
      </body>
    </html>
  );
}
