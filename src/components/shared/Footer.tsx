"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export function Footer() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // Función para cambiar el idioma manteniendo la ruta actual
  const switchLocale = (newLocale: string) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  const footerLinks = {
    services: [
      {
        name: locale === "es" ? "Agencia" : "Agency",
        href: `/${locale}/about`,
      },
      {
        name:
          locale === "es" ? "Estrategias Base" : "Base Strategies",
        href: `/${locale}/services`,
      },
      {
        name:
          locale === "es" ? "Planes a la medida" : "Custom Plans",
        href: `/${locale}/pricing`,
      },
    ],
    legal: [
      {
        name:
          locale === "es"
            ? "Aviso de Privacidad"
            : "Privacy Policy",
        href: `/${locale}/legal/privacy`,
      },
      {
        name:
          locale === "es"
            ? "Términos y Condiciones"
            : "Terms and Conditions",
        href: `/${locale}/legal/terms-conditions`,
      },
      {
        name:
          locale === "es"
            ? "Política de Devoluciones y Reembolsos"
            : "Returns and Refunds Policy",
        href: `/${locale}/legal/cancellation`,
      },
    ],
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#7b4dff]/15 bg-[#0d0914] font-sans">
      {/* Fondo liso decorativo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(59,44,245,0.15),transparent_27%),radial-gradient(circle_at_88%_80%,rgba(255,79,216,0.09),transparent_30%),linear-gradient(145deg,#0d0914_0%,#151020_52%,#0c0912_100%)]" />

      {/* Formas curvas */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-[#7b4dff]/10" />

      <div className="pointer-events-none absolute -left-28 top-32 h-[300px] w-[300px] rounded-full border border-[#ff4fd8]/10" />

      <div className="pointer-events-none absolute -right-36 bottom-0 h-[380px] w-[380px] rounded-full bg-[#3b2cf5]/10 blur-[100px]" />

      {/* Línea superior luminosa */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff4fd8]/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-7 lg:col-span-2">
            <Link
              href={`/${locale}`}
              className="group inline-flex items-center gap-4"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-[20px] border border-[#7b4dff]/25 bg-[#211936]/70 p-2 shadow-[0_20px_45px_rgba(8,5,18,0.3)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#ff4fd8]/45 md:h-20 md:w-20">
                <Image
                  src="/logo.png"
                  alt="Kervia Digital"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff4fd8]">
                  Kervia
                </span>

                <span className="mt-1 block text-xl font-semibold tracking-[0.08em] text-[#f6f2ff]">
                  Digital
                </span>
              </div>
            </Link>

            <p className="max-w-sm leading-relaxed text-[#aaa1bd]">
              {locale === "es"
                ? "Creamos soluciones de marketing con personalidad para impulsar marcas que buscan sobresalir dentro de mercados cada vez más exigentes."
                : "We create distinctive marketing solutions for brands seeking to stand out within increasingly demanding and competitive markets."}
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#a99cff]/70">
                Strategy · Creativity · Growth
              </span>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-[9px] border border-[#7b4dff]/25 bg-[#7b4dff]/10 text-[9px] font-bold text-[#c6bbff]">
                01
              </span>

              <h4 className="text-lg font-semibold text-[#f6f2ff]">
                {locale === "es" ? "Servicios" : "Services"}
              </h4>
            </div>

            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-sm text-[#aaa1bd] transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7b4dff]/60 transition-all duration-300 group-hover:bg-[#ff4fd8] group-hover:shadow-[0_0_10px_rgba(255,79,216,0.8)]" />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-[9px] border border-[#ff4fd8]/20 bg-[#ff4fd8]/10 text-[9px] font-bold text-[#ff78df]">
                02
              </span>

              <h4 className="text-lg font-semibold text-[#f6f2ff]">
                Legal
              </h4>
            </div>

            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-sm text-[#aaa1bd] transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff4fd8]/45 transition-all duration-300 group-hover:bg-[#ff4fd8] group-hover:shadow-[0_0_10px_rgba(255,79,216,0.8)]" />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/[0.07] pt-8">
          <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
            <p className="order-2 text-center text-sm text-[#81788f] md:order-1 md:text-left">
              © {new Date().getFullYear()} Kervia Digital{" "}
              {locale === "es"
                ? "Todos los derechos reservados."
                : "All rights reserved."}
            </p>

            {/* Controles de Idioma y Pagos */}
            <div className="order-1 flex flex-col items-center gap-5 sm:flex-row md:order-2">
              {/* SELECTOR DE IDIOMA */}
              <div className="flex items-center gap-1.5 rounded-[14px] border border-[#7b4dff]/20 bg-[#171020]/80 p-1.5 shadow-[inset_0_0_20px_rgba(123,77,255,0.05)]">
                <div className="flex h-9 w-9 items-center justify-center text-[#a99cff]">
                  <Globe className="h-4 w-4" />
                </div>

                <button
                  onClick={() => switchLocale("es")}
                  className={`rounded-[10px] px-3 py-2 text-xs font-bold transition-all duration-300 ${
                    locale === "es"
                      ? "bg-gradient-to-r from-[#3b2cf5] to-[#7b4dff] text-white shadow-[0_8px_20px_rgba(59,44,245,0.25)]"
                      : "text-[#81788f] hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  ES
                </button>

                <button
                  onClick={() => switchLocale("en")}
                  className={`rounded-[10px] px-3 py-2 text-xs font-bold transition-all duration-300 ${
                    locale === "en"
                      ? "bg-gradient-to-r from-[#3b2cf5] to-[#7b4dff] text-white shadow-[0_8px_20px_rgba(59,44,245,0.25)]"
                      : "text-[#81788f] hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Payment Icons */}
              <div className="flex gap-2">
                <div className="flex h-10 min-w-[64px] items-center justify-center rounded-[11px] border border-white/10 bg-white px-3 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                  <svg
                    className="h-4"
                    viewBox="0 0 780 500"
                    fill="none"
                  >
                    <rect
                      width="780"
                      height="500"
                      rx="40"
                      fill="white"
                    />
                    <path
                      fill="#1434CB"
                      d="M293.2 348.7l33.3-190.4h53.3l-33.3 190.4h-53.3zM500.8 163c-10.5-3.9-27-8.1-47.6-8.1-52.4 0-89.3 26.4-89.6 64.2-.3 28 26.5 43.6 46.7 52.9 20.7 9.5 27.7 15.6 27.6 24.1-.1 13-16.6 19-31.9 19-21.3 0-32.6-3-50.1-10.3l-6.9-3.1-7.5 43.8c12.4 5.4 35.5 10.1 59.4 10.4 55.7 0 91.9-26.1 92.3-66.5.2-22.2-14-39.1-44.6-53-18.6-9-30-15-29.9-24.1 0-8.1 9.6-16.7 30.5-16.7 17.4-.3 30 3.5 39.8 7.5l4.8 2.3 7.2-42.4h.8zM581.8 158.3h-41c-12.7 0-22.2 3.5-27.8 16.2l-78.8 178.2h55.7l11.1-29.1h68.1l6.5 29.1H624l-42.2-194.4zm-65.6 125.2c4.4-11.2 21.3-54.4 21.3-54.4-.3.5 4.4-11.4 7.1-18.7l3.6 16.9s10.2 46.6 12.4 56.2h-44.4z"
                    />
                    <path
                      fill="#1434CB"
                      d="M239.5 158.3L187.4 289l-5.5-26.8c-9.6-30.7-39.5-64-73-80.6l47.5 166.9h56l83.2-190.2h-56.1z"
                    />
                    <path
                      fill="#F7B600"
                      d="M146.9 158.3H61.3l-.6 3.5c66.4 16 110.3 54.7 128.5 101.2l-18.5-88.8c-3.2-12.1-12.5-15.5-23.8-15.9z"
                    />
                  </svg>
                </div>

                <div className="flex h-10 min-w-[64px] items-center justify-center rounded-[11px] border border-white/10 bg-white px-3 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                  <svg
                    className="h-5"
                    viewBox="0 0 152 100"
                    fill="none"
                  >
                    <rect
                      width="152"
                      height="100"
                      rx="8"
                      fill="white"
                    />
                    <circle cx="55" cy="50" r="30" fill="#EB001B" />
                    <circle cx="97" cy="50" r="30" fill="#F79E1B" />
                    <path
                      d="M76 27.5C82.6 32.8 87 40.8 87 50C87 59.2 82.6 67.2 76 72.5C69.4 67.2 65 59.2 65 50C65 40.8 69.4 32.8 76 27.5Z"
                      fill="#FF5F00"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Link
          href={`/${locale}/contact`}
          className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[18px] border border-white/15 bg-gradient-to-br from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8] text-white shadow-[0_18px_45px_rgba(59,44,245,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
          aria-label={locale === "es" ? "Contacto" : "Contact"}
        >
          <span className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />

          <svg
            className="relative z-10 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </Link>
      </motion.div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    instagram: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    twitter: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    linkedin: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    facebook: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  };

  return icons[name] || null;
}