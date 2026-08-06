"use client";

import { useCart } from "@/hooks/use-cart";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItemComponent } from "./CartItem";
import { useLocale } from "next-intl";
import Link from "next/link";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, total } = useCart();
  const locale = useLocale();

  if (!isOpen) return null;

  const formatPrice = (p: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(p);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 animate-in bg-[#08060d]/80 backdrop-blur-md fade-in duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Panel lateral */}
      <div className="relative flex h-full w-full max-w-md animate-in flex-col overflow-hidden border-l border-[#7b4dff]/20 bg-[#100c19] shadow-[-30px_0_90px_rgba(8,5,18,0.7)] slide-in-from-right duration-500">
        {/* Fondo limpio con degradados suaves */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_5%,rgba(123,77,255,0.16),transparent_32%),radial-gradient(circle_at_5%_90%,rgba(255,79,216,0.08),transparent_34%),linear-gradient(160deg,#100c19_0%,#151020_48%,#0d0a14_100%)]" />

        {/* Forma curva superior */}
        <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full border border-[#7b4dff]/10" />

        <div className="pointer-events-none absolute -right-24 top-32 h-56 w-56 rounded-full border border-[#ff4fd8]/10" />

        {/* Línea vertical decorativa */}
        <div className="pointer-events-none absolute bottom-24 right-7 top-36 w-px bg-gradient-to-b from-transparent via-[#7b4dff]/20 to-transparent" />

        {/* Encabezado */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.07] px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7b4dff]/35 bg-gradient-to-br from-[#3b2cf5]/25 to-[#ff4fd8]/10 text-[#c6bbff] shadow-[inset_0_0_22px_rgba(123,77,255,0.12)]">
              <ShoppingBag className="h-5 w-5" />

              {items.length > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#100c19] bg-[#ff4fd8] px-1 text-[10px] font-bold text-white shadow-[0_0_16px_rgba(255,79,216,0.45)]">
                  {items.length}
                </span>
              )}
            </div>

            <div>
              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.28em] text-[#ff4fd8]">
                Kervia Digital
              </span>

              <h2 className="text-2xl font-semibold tracking-tight text-[#f6f2ff]">
                {locale === "es" ? "Tu Carrito" : "Your Cart"}
              </h2>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[#aaa1bd] transition-all duration-300 hover:rotate-90 hover:border-[#ff4fd8]/45 hover:bg-[#ff4fd8]/10 hover:text-white"
            aria-label={locale === "es" ? "Cerrar carrito" : "Close cart"}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Contenido */}
        <div className="scrollbar-hidden relative z-10 flex-1 space-y-6 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#7b4dff]/20 bg-gradient-to-br from-[#211936] to-[#171020] text-[#a99cff] shadow-[0_22px_55px_rgba(8,5,18,0.35)]">
                <div className="pointer-events-none absolute inset-2 rounded-[22px] border border-white/[0.05]" />

                <ShoppingBag className="relative z-10 h-10 w-10" />

                <span className="absolute -right-2 top-2 h-3 w-3 rounded-full bg-[#ff4fd8] shadow-[0_0_16px_rgba(255,79,216,0.8)]" />
              </div>

              <span className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#7b4dff]">
                {locale === "es" ? "Selección vacía" : "Empty selection"}
              </span>

              <p className="max-w-[280px] text-sm leading-relaxed text-[#aaa1bd]">
                {locale === "es"
                  ? "Aún no has seleccionado ninguna estrategia."
                  : "You haven't selected any strategy yet."}
              </p>

              <div className="mt-8 flex items-center gap-2">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#7b4dff]/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff4fd8]" />
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#7b4dff]/70" />
              </div>
            </div>
          ) : (
            items.map((item) => (
              <CartItemComponent key={item.id} item={item} />
            ))
          )}
        </div>

        {/* Resumen */}
        {items.length > 0 && (
          <div className="relative z-10 border-t border-white/[0.07] bg-[#151020]/90 p-6 backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#ff4fd8]/60 to-transparent" />

            <div className="mb-7 rounded-[18px] border border-[#7b4dff]/20 bg-gradient-to-br from-[#211936]/80 to-[#171020]/80 p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.24em] text-[#a99cff]">
                    {locale === "es"
                      ? "Total de Inversión"
                      : "Total Investment"}
                  </span>

                  <span className="text-xs text-[#8f869f]">
                    {locale === "es"
                      ? "Resumen de tu selección"
                      : "Summary of your selection"}
                  </span>
                </div>

                <div className="text-right">
                  <span className="block bg-gradient-to-r from-[#c6bbff] via-white to-[#ff78df] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                    {formatPrice(total)}
                  </span>

                  <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-[#81788f]">
                    {locale === "es"
                      ? "MXN + IVA del 16%"
                      : "MXN + 16% VAT"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {/* BOTÓN VER CARRITO */}
              <Button
                asChild
                className="h-14 w-full rounded-[14px] border border-[#7b4dff]/30 bg-transparent p-0 font-semibold text-[#f6f2ff] shadow-none transition-all duration-300 hover:border-[#a99cff]/60 hover:bg-[#7b4dff]/10 hover:text-white"
              >
                <Link
                  href={`/${locale}/cart`}
                  onClick={() => setIsOpen(false)}
                  className="flex h-full w-full items-center justify-center"
                >
                  {locale === "es" ? "Ver carrito" : "View cart"}
                </Link>
              </Button>

              {/* BOTÓN CHECKOUT */}
              <Button
                asChild
                className="group h-14 w-full overflow-hidden rounded-[14px] border-0 bg-gradient-to-r from-[#3b2cf5] via-[#6c3fff] to-[#ff4fd8] p-0 font-bold text-white shadow-[0_18px_40px_rgba(59,44,245,0.28)] transition-all duration-300 hover:scale-[1.01] hover:opacity-100 hover:shadow-[0_22px_50px_rgba(255,79,216,0.22)]"
              >
                <Link
                  href={`/${locale}/checkout`}
                  onClick={() => setIsOpen(false)}
                  className="flex h-full w-full items-center justify-center"
                >
                  {locale === "es"
                    ? "Continuar al Checkout"
                    : "Proceed to Checkout"}

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}