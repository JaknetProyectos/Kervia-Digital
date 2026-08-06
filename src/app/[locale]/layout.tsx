import type { Metadata } from "next";
import "../globals.css";
import { ClientBody } from "@/components/shared/ClientBody";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { NextIntlClientProvider } from "next-intl";

import { Space_Grotesk, DM_Sans } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kervia Digital | Estrategia, creatividad y crecimiento",
    template: "%s | Kervia Digital",
  },
  description:
    "Agencia de marketing enfocada en impulsar marcas mediante estrategias dirigidas, comunicación disruptiva y experiencias diseñadas para generar crecimiento.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <NextIntlClientProvider locale={locale} messages={{}}>
          <ClientBody>
            <Navigation />

            <main className="flex-grow">{children}</main>

            <Footer />
          </ClientBody>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}