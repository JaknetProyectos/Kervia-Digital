"use client";

import { useTransition } from "react";
import { CartItem } from "@/types";
import { updateQuantity, removeFromCart } from "@/actions/cart";
import { useCart } from "@/hooks/use-cart";
import { Minus, Plus, Trash2, Loader2 } from "lucide-react";
import { useLocale } from "next-intl";

export function CartItemComponent({ item }: { item: CartItem }) {
  const { refreshCart } = useCart();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const isEs = locale === "es";

  const price =
    item.custom_price !== null
      ? item.custom_price
      : item.plans_nc?.price || 0;

  const formatPrice = (p: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(p);

  const handleUpdateQty = (newQty: number) => {
    if (newQty < 1) return;

    startTransition(async () => {
      await updateQuantity(item.id, newQty);
      await refreshCart();
    });
  };

  const handleRemove = () => {
    startTransition(async () => {
      await removeFromCart(item.id);
      await refreshCart();
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-[#7b4dff]/20 bg-gradient-to-br from-[#211936]/90 via-[#191223]/90 to-[#130e1c]/90 p-5 shadow-[0_18px_45px_rgba(8,5,18,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a99cff]/40 hover:shadow-[0_24px_55px_rgba(59,44,245,0.18)]">
      {/* Iluminación decorativa */}
      <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#7b4dff]/12 blur-3xl transition-colors duration-500 group-hover:bg-[#ff4fd8]/15" />

      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#a99cff]/55 to-transparent" />

      {isPending && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#130e1c]/65 backdrop-blur-[3px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7b4dff]/30 bg-[#211936]/90 shadow-[0_15px_35px_rgba(8,5,18,0.35)]">
            <Loader2 className="h-5 w-5 animate-spin text-[#ff4fd8]" />
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col justify-between">
        <div className="pr-12">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff4fd8] shadow-[0_0_10px_rgba(255,79,216,0.75)]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#a99cff]/75">
              {isEs ? "Estrategia seleccionada" : "Selected strategy"}
            </span>
          </div>

          <h4 className="text-lg font-semibold leading-tight tracking-[-0.02em] text-[#f6f2ff]">
            {/* VUELVE A LA NORMALIDAD: Muestra el título real o el fallback */}
            {item.plans_nc?.title ||
              (isEs
                ? "Estrategia Personalizada"
                : "Custom Strategy")}
          </h4>

          {item.quote_id && (
            <p className="mt-2 inline-flex items-center rounded-full border border-[#7b4dff]/20 bg-[#7b4dff]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c6bbff]">
              {isEs ? "Folio:" : "Ref:"} {item.quote_id}
            </p>
          )}
        </div>

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/[0.06] pt-4">
          {/* Selector de cantidad */}
          <div className="flex items-center gap-1 rounded-[13px] border border-[#7b4dff]/20 bg-[#100c19]/65 p-1.5 shadow-[inset_0_0_18px_rgba(123,77,255,0.06)]">
            <button
              onClick={() => handleUpdateQty(item.quantity - 1)}
              disabled={item.quantity <= 1 || isPending}
              className="flex h-8 w-8 items-center justify-center rounded-[9px] text-[#9d94ae] transition-all duration-300 hover:bg-[#7b4dff]/15 hover:text-[#f6f2ff] disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-[#9d94ae]"
              aria-label={isEs ? "Disminuir cantidad" : "Decrease quantity"}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>

            <span className="w-7 text-center text-sm font-bold text-[#f6f2ff]">
              {item.quantity}
            </span>

            <button
              onClick={() => handleUpdateQty(item.quantity + 1)}
              disabled={isPending}
              className="flex h-8 w-8 items-center justify-center rounded-[9px] text-[#9d94ae] transition-all duration-300 hover:bg-[#ff4fd8]/12 hover:text-[#ff78df] disabled:cursor-not-allowed disabled:opacity-30"
              aria-label={isEs ? "Aumentar cantidad" : "Increase quantity"}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Precio */}
          <div className="text-right">
            <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#81788f]">
              {isEs ? "Subtotal" : "Subtotal"}
            </span>

            <div className="bg-gradient-to-r from-[#c6bbff] via-white to-[#ff78df] bg-clip-text text-xl font-bold tracking-tight text-transparent">
              {formatPrice(price * item.quantity)}
            </div>
          </div>
        </div>
      </div>

      {/* Eliminar */}
      <button
        onClick={handleRemove}
        disabled={isPending}
        title={isEs ? "Eliminar" : "Remove"}
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-[11px] border border-white/[0.07] bg-white/[0.025] text-[#81788f] transition-all duration-300 hover:border-[#ff4f79]/35 hover:bg-[#ff4f79]/10 hover:text-[#ff7895] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Trash2 className="h-4 w-4" />
      </button>

      {/* Indicador inferior */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}