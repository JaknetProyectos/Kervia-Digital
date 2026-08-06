"use client";

import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { Loader2, ShoppingBag } from "lucide-react";
import { useLocale } from "next-intl";

// 1. Tipamos explícitamente el planId
interface AddToCartButtonProps {
  planId: number;
}

export function AddToCartButton({
  planId,
}: AddToCartButtonProps) {
  const locale = useLocale();

  // 2. Solo extraemos addToCart del contexto
  // El contexto ya maneja el refresh y el isOpen
  const { addToCart } = useCart();

  // 3. Estado para controlar la carga
  const [isPending, setIsPending] = useState(false);

  const handleAdd = async () => {
    setIsPending(true);
    await addToCart(planId);
    setIsPending(false);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={isPending}
      className="group relative flex h-16 w-full items-center justify-center overflow-hidden rounded-[16px] border border-[#a99cff]/20 bg-gradient-to-r from-[#3b2cf5] via-[#7045ff] to-[#ff4fd8] text-lg font-bold text-white shadow-[0_20px_45px_rgba(59,44,245,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(255,79,216,0.24)] active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
    >
      {/* Destello al pasar el cursor */}
      <span className="pointer-events-none absolute inset-y-0 left-[-40%] w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[120%]" />

      {/* Brillo interior */}
      <span className="pointer-events-none absolute inset-[1px] rounded-[15px] border border-white/10" />

      <span className="relative z-10 flex items-center gap-3 uppercase tracking-[0.16em]">
        {isPending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />

            <span className="text-sm">
              {locale === "es" ? "Añadiendo" : "Adding"}
            </span>
          </>
        ) : (
          <>
            <span className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-white/15 bg-white/10 transition-all duration-300 group-hover:bg-white/15">
              <ShoppingBag className="h-5 w-5" />
            </span>

            <span className="text-sm">
              {locale === "es"
                ? "Añadir al carrito"
                : "Add to strategy"}
            </span>
          </>
        )}
      </span>
    </button>
  );
}