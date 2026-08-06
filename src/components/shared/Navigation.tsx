"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const locale = useLocale();
  const pathname = usePathname();
  const { items, setIsOpen: openCart } = useCart();

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Arreglo de navegación dinámico según el idioma
  const navLinks = [
    { name: locale === "es" ? "Inicio" : "Home", href: `/${locale}` },
    {
      name: locale === "es" ? "Agencia" : "Agency",
      href: `/${locale}/about`,
    },
    {
      name: locale === "es" ? "Estrategias" : "Strategies",
      href: `/${locale}/services`,
    },
    {
      name: locale === "es" ? "Personalizado" : "Custom",
      href: `/${locale}/pricing`,
    },
    {
      name: locale === "es" ? "Contacto" : "Contact",
      href: `/${locale}/contact`,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`relative flex items-center justify-between overflow-hidden border px-4 transition-all duration-500 md:px-6 ${
              scrolled
                ? "rounded-[20px] border-[#ff4fd8]/20 bg-[#0d0b16]/95 py-3 shadow-[0_20px_65px_rgba(16,9,36,0.45)] backdrop-blur-2xl"
                : "rounded-[24px] border-white/10 bg-[#151020]/65 py-4 backdrop-blur-xl"
            }`}
          >
            <div className="pointer-events-none absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-[#ff4fd8]/80 to-transparent" />

            <div className="pointer-events-none absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#3b2cf5]/20 blur-3xl" />

            <div className="pointer-events-none absolute -right-14 top-0 h-28 w-28 rounded-full bg-[#ff4fd8]/15 blur-3xl" />

            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="group relative z-10 flex items-center gap-3"
            >
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[14px] border border-[#a99cff]/30 bg-[#211936]/80 p-1.5 shadow-[inset_0_0_20px_rgba(59,44,245,0.12)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3 group-hover:border-[#ff4fd8]/60 group-hover:bg-[#2a1e43] md:h-12 md:w-12">
                <Image
                  src="/logo.png"
                  alt="Kervia Digital"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>

              <div className="hidden flex-col sm:flex">
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ff4fd8]">
                  Kervia
                </span>

                <span className="-mt-0.5 text-sm font-medium tracking-[0.14em] text-[#f6f2ff]">
                  Digital
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="relative z-10 hidden items-center gap-1 rounded-[14px] border border-white/[0.07] bg-[#221a35]/65 p-1 md:flex">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`relative block overflow-hidden rounded-[10px] px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-[#d8d0eb]/65 hover:bg-white/[0.055] hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-[10px] bg-gradient-to-r from-[#3b2cf5] to-[#7b4dff] shadow-[0_8px_25px_rgba(59,44,245,0.32)]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Acciones Right: Botón CTA & Carrito */}
            <div className="relative z-10 flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => openCart(true)}
                className="group relative flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#a99cff]/15 bg-[#211936]/75 text-[#e5def5]/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff4fd8]/50 hover:bg-[#ff4fd8]/10 hover:text-white"
                title={locale === "es" ? "Abrir carrito" : "Open cart"}
              >
                <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

                {cartCount > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#0d0b16] bg-[#ff4fd8] px-1 text-[10px] font-bold text-white shadow-[0_0_18px_rgba(255,79,216,0.6)]">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#a99cff]/15 bg-[#211936]/75 transition-all duration-300 hover:border-[#7b4dff]/60 hover:bg-[#3b2cf5]/15 md:hidden"
                aria-label={
                  locale === "es" ? "Menú principal" : "Main menu"
                }
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={{
                      rotate: mobileMenuOpen ? 45 : 0,
                      y: mobileMenuOpen ? 6 : 0,
                    }}
                    className="h-0.5 w-5 origin-center rounded-full bg-[#ff4fd8]"
                  />

                  <motion.span
                    animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                    className="h-0.5 w-5 rounded-full bg-[#f6f2ff]"
                  />

                  <motion.span
                    animate={{
                      rotate: mobileMenuOpen ? -45 : 0,
                      y: mobileMenuOpen ? -6 : 0,
                    }}
                    className="h-0.5 w-5 origin-center rounded-full bg-[#7b4dff]"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 overflow-hidden bg-[#0d0b16]/98 pt-28 backdrop-blur-2xl md:hidden"
          >
            <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#3b2cf5]/20 blur-[100px]" />

            <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-[#ff4fd8]/15 blur-[110px]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(169,156,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(169,156,255,0.035)_1px,transparent_1px)] bg-[size:38px_38px]" />

            <div className="relative z-10 flex flex-col gap-3 px-6 py-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3b2cf5]/80" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff4fd8]">
                  Kervia Digital
                </span>

                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#ff4fd8]/80" />
              </div>

              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between rounded-[18px] border px-5 py-4 transition-all duration-300 ${
                        isActive
                          ? "border-[#7b4dff]/60 bg-gradient-to-r from-[#3b2cf5]/25 to-[#7b4dff]/15 text-white"
                          : "border-white/[0.07] bg-[#211936]/55 text-[#d8d0eb]/75 hover:border-[#ff4fd8]/45 hover:bg-[#ff4fd8]/10 hover:text-white"
                      }`}
                    >
                      <span className="text-xl font-medium tracking-tight">
                        {link.name}
                      </span>

                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-[10px] border text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? "border-[#7b4dff] bg-[#3b2cf5] text-white"
                            : "border-white/10 text-[#a99cff]/70 group-hover:border-[#ff4fd8]/50 group-hover:text-[#ff4fd8]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}