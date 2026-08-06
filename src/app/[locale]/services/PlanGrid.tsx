"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Plan } from "@/types";

export function PlanGrid({
  plans,
  locale,
}: {
  plans: Plan[];
  locale: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <div
      ref={ref}
      className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {plans.map((plan, index) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          index={index}
          isInView={isInView}
          locale={locale}
        />
      ))}
    </div>
  );
}

function PlanCard({
  plan,
  index,
  isInView,
  locale,
}: {
  plan: Plan;
  index: number;
  isInView: boolean;
  locale: string;
}) {
  const formatPrice = (p: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(p);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group flex h-full"
    >
      <div className="relative flex w-full flex-col overflow-hidden rounded-[28px] border border-[#7b4dff]/15 bg-white shadow-[0_20px_55px_rgba(54,36,105,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-[#7b4dff]/35 hover:shadow-[0_32px_75px_rgba(91,50,223,0.16)]">
        {/* Imagen del plan */}
        <div className="relative h-52 w-full overflow-hidden bg-[#171020]">
          {plan.image_url ? (
            <img
              src={plan.image_url}
              alt={plan.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#171020]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#7b4dff]/20 bg-[#7b4dff]/10">
                <span className="text-3xl font-bold tracking-[-0.04em] text-[#c6bbff]">
                  KD
                </span>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#171020]/85 via-[#171020]/15 to-transparent" />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
            <span className="rounded-full border border-white/15 bg-[#171020]/60 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Kervia Digital
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-white/15 bg-white/10 text-[10px] font-bold text-white backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#ff78df]">
              {locale === "es"
                ? "Estrategia de marketing"
                : "Marketing strategy"}
            </span>

            <h3 className="text-xl font-bold leading-tight text-white">
              {plan.title}
            </h3>
          </div>
        </div>

        {/* Precio */}
        <div className="relative border-b border-[#7b4dff]/10 bg-[#faf8ff] px-6 py-5">
          <div className="pointer-events-none absolute -right-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#7b4dff]/8 blur-2xl" />

          <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#91879f]">
            {locale === "es" ? "Inversión" : "Investment"}
          </span>

          <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
            <span className="text-2xl font-bold tracking-[-0.035em] text-[#341d76]">
              {formatPrice(plan.price)}
            </span>

            <span className="pb-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#91879f]">
              MXN + IVA
            </span>
          </div>
        </div>

        {/* Acción */}
        <div className="mt-auto bg-white px-6 py-5">
          <Link
            href={`/${locale}/services/${plan.slug}`}
            className="group/link flex items-center justify-between rounded-[15px] border border-[#7b4dff]/15 bg-[#f3efff] px-4 py-3.5 transition-all duration-300 hover:border-[#7b4dff]/35 hover:bg-[#171020]"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5b32df] transition-colors duration-300 group-hover/link:text-white">
              {locale === "es" ? "Ver Detalles" : "View Details"}
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#171020] text-white transition-all duration-300 group-hover/link:bg-[#ff4fd8] group-hover/link:text-white">
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Acento inferior */}
        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8] transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}