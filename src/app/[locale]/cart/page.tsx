"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types";

export default function CartPage() {
  const { items, total, removeFromCart } = useCart();
  const locale = useLocale();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);

  if (items.length === 0) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d0914] px-4 pb-24 pt-32">
        {/* Fondo liso */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,44,245,0.18),transparent_30%),radial-gradient(circle_at_82%_80%,rgba(255,79,216,0.10),transparent_28%),linear-gradient(145deg,#0d0914_0%,#151020_52%,#0b0811_100%)]" />

        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-[#7b4dff]/10" />

        <div className="pointer-events-none absolute -right-36 bottom-16 h-[380px] w-[380px] rounded-full border border-[#ff4fd8]/10" />

        <div className="relative z-10 mx-auto max-w-md text-center">
          <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[34px] border border-[#7b4dff]/25 bg-gradient-to-br from-[#211936] to-[#151020] text-[#b9adff] shadow-[0_30px_70px_rgba(8,5,18,0.45)]">
            <div className="pointer-events-none absolute inset-3 rounded-[26px] border border-white/[0.05]" />

            <ShoppingBag className="relative z-10 h-11 w-11" />

            <span className="absolute -right-2 top-3 h-3.5 w-3.5 rounded-full bg-[#ff4fd8] shadow-[0_0_18px_rgba(255,79,216,0.8)]" />
          </div>

          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff4fd8]">
            Kervia Digital
          </span>

          <h1 className="mb-4 text-3xl font-bold tracking-[-0.035em] text-[#f6f2ff] md:text-4xl">
            {locale === "es"
              ? "Tu carrito está vacío"
              : "Your cart is empty"}
          </h1>

          <p className="mx-auto mb-9 max-w-sm leading-relaxed text-[#aaa1bd]">
            {locale === "es"
              ? "Parece que aún no has seleccionado ninguna estrategia para potenciar tu marca."
              : "It looks like you haven't selected any strategy to boost your brand yet."}
          </p>

          <Button
            asChild
            className="h-14 w-full overflow-hidden rounded-[16px] border-0 bg-gradient-to-r from-[#3b2cf5] via-[#7045ff] to-[#ff4fd8] p-0 font-bold text-white shadow-[0_20px_45px_rgba(59,44,245,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 hover:shadow-[0_24px_55px_rgba(255,79,216,0.22)]"
          >
            <Link
              href={`/${locale}/services`}
              className="flex h-full w-full items-center justify-center"
            >
              {locale === "es"
                ? "Explorar Servicios"
                : "Explore Services"}
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d0914] pb-24 pt-32 text-[#f6f2ff]">
      {/* Fondo liso */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(59,44,245,0.16),transparent_28%),radial-gradient(circle_at_94%_72%,rgba(255,79,216,0.09),transparent_27%),linear-gradient(145deg,#0d0914_0%,#151020_50%,#0b0811_100%)]" />

      <div className="pointer-events-none absolute -left-48 top-28 h-[500px] w-[500px] rounded-full border border-[#7b4dff]/10" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full border border-[#ff4fd8]/10" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff4fd8]/55 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Encabezado */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff4fd8]">
                Kervia Digital
              </span>
            </div>

            <h1 className="bg-gradient-to-r from-[#f6f2ff] via-[#c6bbff] to-[#ff78df] bg-clip-text text-4xl font-bold tracking-[-0.045em] text-transparent md:text-5xl">
              {locale === "es" ? "Tu Carrito" : "Your Cart"}
            </h1>
          </div>

          <div className="flex items-center gap-3 self-start rounded-[14px] border border-[#7b4dff]/20 bg-[#171020]/75 px-4 py-3 md:self-auto">
            <ShoppingBag className="h-4 w-4 text-[#a99cff]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#aaa1bd]">
              {items.length}{" "}
              {locale === "es"
                ? items.length === 1
                  ? "servicio"
                  : "servicios"
                : items.length === 1
                  ? "service"
                  : "services"}
            </span>
          </div>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Lista de servicios */}
          <div className="space-y-4 lg:col-span-8">
            <div className="overflow-hidden rounded-[26px] border border-[#7b4dff]/18 bg-[#151020]/88 shadow-[0_28px_70px_rgba(8,5,18,0.38)] backdrop-blur-xl">
              {/* Encabezados de tabla */}
              <div className="hidden grid-cols-12 gap-4 border-b border-white/[0.07] bg-[#211936]/55 p-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#81788f] md:grid">
                <div className="col-span-6">
                  {locale === "es" ? "Servicio" : "Service"}
                </div>

                <div className="col-span-2 text-center">
                  {locale === "es" ? "Cantidad" : "Quantity"}
                </div>

                <div className="col-span-3 text-right">
                  {locale === "es" ? "Precio" : "Price"}
                </div>

                <div className="col-span-1" />
              </div>

              <div className="divide-y divide-white/[0.07]">
                {items.map((item: CartItem, index) => {
                  const itemPrice =
                    item.custom_price !== null
                      ? Number(item.custom_price)
                      : Number(item.plans_nc?.price || 0);

                  return (
                    <div
                      key={item.id}
                      className="group relative grid grid-cols-1 items-center gap-5 p-6 transition-colors duration-300 hover:bg-[#211936]/35 md:grid-cols-12 md:gap-4"
                    >
                      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[2px] scale-y-0 bg-gradient-to-b from-[#3b2cf5] to-[#ff4fd8] transition-transform duration-300 group-hover:scale-y-100" />

                      {/* Servicio */}
                      <div className="col-span-1 md:col-span-6">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-[9px] border border-[#7b4dff]/20 bg-[#7b4dff]/10 text-[9px] font-bold text-[#c6bbff]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#81788f]">
                            {locale === "es"
                              ? "Estrategia seleccionada"
                              : "Selected strategy"}
                          </span>
                        </div>

                        <h3 className="mb-2 text-lg font-bold leading-tight text-[#f6f2ff]">
                          {/* VUELVE A LA NORMALIDAD AQUÍ TAMBIÉN */}
                          {item.plans_nc?.title ||
                            (locale === "es"
                              ? "Estrategia Personalizada"
                              : "Custom Strategy")}
                        </h3>

                        {item.quote_id && (
                          <span className="inline-flex rounded-full border border-[#7b4dff]/20 bg-[#7b4dff]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#c6bbff]">
                            Ref: {item.quote_id}
                          </span>
                        )}
                      </div>

                      {/* Cantidad */}
                      <div className="col-span-1 text-[#aaa1bd] md:col-span-2 md:text-center">
                        <span className="mr-2 text-xs font-bold uppercase tracking-[0.15em] text-[#81788f] md:hidden">
                          {locale === "es" ? "Cantidad:" : "Quantity:"}
                        </span>

                        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-[11px] border border-[#7b4dff]/20 bg-[#100c19]/65 px-3 text-sm font-bold text-[#f6f2ff]">
                          {item.quantity}
                        </span>
                      </div>

                      {/* Precio */}
                      <div className="col-span-1 md:col-span-3 md:text-right">
                        <span className="mr-2 text-xs font-bold uppercase tracking-[0.15em] text-[#81788f] md:hidden">
                          {locale === "es" ? "Precio:" : "Price:"}
                        </span>

                        <span className="bg-gradient-to-r from-[#c6bbff] via-white to-[#ff78df] bg-clip-text text-lg font-bold text-transparent">
                          {formatPrice(itemPrice * item.quantity)}
                        </span>

                        <span className="ml-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#81788f]">
                          MXN
                        </span>
                      </div>

                      {/* Eliminar */}
                      <div className="col-span-1 flex md:col-span-1 md:justify-end">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/[0.07] bg-white/[0.025] text-[#81788f] transition-all duration-300 hover:border-[#ff4f79]/35 hover:bg-[#ff4f79]/10 hover:text-[#ff7895]"
                          title={
                            locale === "es"
                              ? "Eliminar del carrito"
                              : "Remove from cart"
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="sticky top-32 overflow-hidden rounded-[26px] border border-[#7b4dff]/20 bg-[#151020]/92 p-7 shadow-[0_28px_70px_rgba(8,5,18,0.42)] backdrop-blur-xl lg:col-span-4 lg:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#7b4dff]/16 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#ff4fd8]/10 blur-[80px]" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between border-b border-white/[0.07] pb-5">
                <div>
                  <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff4fd8]">
                    01 / Summary
                  </span>

                  <h2 className="text-xl font-bold text-[#f6f2ff]">
                    {locale === "es"
                      ? "Resumen del Pedido"
                      : "Order Summary"}
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#7b4dff]/25 bg-[#7b4dff]/10 text-[#c6bbff]">
                  <ShoppingBag className="h-4 w-4" />
                </div>
              </div>

              <div className="mb-7 space-y-5">
                <div className="flex items-center justify-between text-sm text-[#aaa1bd]">
                  <span>Subtotal</span>

                  <span className="font-medium text-[#f6f2ff]">
                    {formatPrice(total)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-[#aaa1bd]">
                  <span>
                    {locale === "es"
                      ? "Impuesto (16%)"
                      : "Tax (16%)"}
                  </span>

                  <span className="font-medium text-[#f6f2ff]">
                    {formatPrice(total * 0.16)}
                  </span>
                </div>

                <div className="mt-4 border-t border-white/[0.07] pt-5">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-[#f6f2ff]">
                      {locale === "es"
                        ? "Total Estimado"
                        : "Estimated Total"}
                    </span>

                    <span className="bg-gradient-to-r from-[#c6bbff] via-white to-[#ff78df] bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                      {formatPrice(total * 1.16)}
                    </span>
                  </div>

                  <p className="text-right text-[9px] uppercase tracking-[0.16em] text-[#81788f]">
                    MXN · IVA incluido
                  </p>
                </div>
              </div>

              <Button
                asChild
                className="group h-14 w-full overflow-hidden rounded-[15px] border-0 bg-gradient-to-r from-[#3b2cf5] via-[#7045ff] to-[#ff4fd8] p-0 text-base font-bold text-white shadow-[0_18px_40px_rgba(59,44,245,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 hover:shadow-[0_22px_50px_rgba(255,79,216,0.22)]"
              >
                <Link
                  href={`/${locale}/checkout`}
                  className="flex h-full w-full items-center justify-center"
                >
                  {locale === "es"
                    ? "Proceder al Pago"
                    : "Proceed to Checkout"}

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>

              <div className="mt-5 text-center">
                <Link
                  href={`/${locale}/services`}
                  className="text-sm text-[#91879f] underline decoration-[#7b4dff]/40 underline-offset-4 transition-colors duration-300 hover:text-[#c6bbff]"
                >
                  {locale === "es"
                    ? "Continuar explorando servicios"
                    : "Continue exploring services"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}