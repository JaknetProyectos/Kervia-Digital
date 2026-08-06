import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AddToCartButton } from "./AddToCartButton";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { T } from "@/components/shared/T";
import { getTranslation } from "@/lib/translator";

// === 1. METADATOS SEO DINÁMICOS TRADUCIDOS ===
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const supabase = await createClient();

  const { data: plan } = await supabase
    .from("plans_nc")
    .select("title, description")
    .eq("slug", slug)
    .single();

  if (!plan) {
    return {
      title: "Plan no encontrado | Kervia Digital",
    };
  }

  // Traducimos antes de enviar el Metadata al navegador
  const translatedTitle = await getTranslation(plan.title, locale);
  const translatedDescription = await getTranslation(
    plan.description,
    locale
  );

  return {
    title: `${translatedTitle} | Kervia Digital`,
    description: translatedDescription,
  };
}

// === 2. PÁGINA DEL SERVIDOR ===
export default async function PlanDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isEs = locale === "es";

  const supabase = await createClient();

  const { data: plan } = await supabase
    .from("plans_nc")
    .select("*, categories_nc(name)")
    .eq("slug", slug)
    .single();

  if (!plan || !plan.is_active) {
    notFound();
  }

  const formatPrice = (p: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(p);

  let featuresList: string[] = [];

  try {
    if (typeof plan.features === "string") {
      featuresList = JSON.parse(plan.features);
    } else if (Array.isArray(plan.features)) {
      featuresList = plan.features;
    }
  } catch (e) {
    console.error("Error parseando features", e);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f2ff] pb-24 pt-32 text-[#171020]">
      {/* Fondo limpio */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_18%,rgba(123,77,255,0.14),transparent_27%),radial-gradient(circle_at_95%_76%,rgba(255,79,216,0.10),transparent_25%),linear-gradient(180deg,#faf8ff_0%,#eee9ff_100%)]" />

      <div className="pointer-events-none absolute -left-52 top-16 h-[520px] w-[520px] rounded-full border border-[#7b4dff]/10" />

      <div className="pointer-events-none absolute -right-44 bottom-12 h-[460px] w-[460px] rounded-full border border-[#ff4fd8]/10" />

      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Regresar */}
        <Link
          href={`/${locale}/services`}
          className="group mb-10 inline-flex items-center gap-3 rounded-full border border-[#7b4dff]/15 bg-white/70 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#756d86] shadow-[0_10px_30px_rgba(54,36,105,0.06)] transition-all duration-300 hover:border-[#7b4dff]/35 hover:bg-white hover:text-[#5b32df]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

          {isEs ? "Volver al catálogo" : "Back to catalog"}
        </Link>

        {/* Encabezado principal */}
        <div className="relative mb-10 overflow-hidden rounded-[36px] bg-[#171020] px-7 py-12 shadow-[0_34px_90px_rgba(44,28,91,0.22)] sm:px-10 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#7b4dff]/30 blur-[110px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#ff4fd8]/13 blur-[110px]" />

          <div className="pointer-events-none absolute right-10 top-10 hidden h-40 w-40 rounded-full border border-[#a99cff]/10 lg:block" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff78df]">
                  Kervia Digital
                </span>
              </div>

              <span className="inline-flex rounded-full border border-[#7b4dff]/25 bg-[#7b4dff]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#c6bbff]">
                {plan.categories_nc?.name ? (
                  <T>{plan.categories_nc.name}</T>
                ) : (
                  <T>Marketing</T>
                )}
              </span>
            </div>

            <div>
              <h1 className="text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#f6f2ff] md:text-5xl lg:text-6xl">
                <T>{plan.title}</T>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#aaa1bd] md:text-xl">
                <T>{plan.description}</T>
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-12 flex flex-col justify-between gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ff4fd8] shadow-[0_0_14px_rgba(255,79,216,0.8)]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a99cff]">
                Strategy · Communication · Growth
              </span>
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#81788f]">
              01 / Strategy
            </span>
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* COLUMNA IZQUIERDA */}
          <div className="space-y-8 lg:col-span-8">
            {/* Lista de características traducidas con <T> */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#7b4dff]/15 bg-white/80 p-7 shadow-[0_24px_65px_rgba(54,36,105,0.09)] backdrop-blur-xl sm:p-9 md:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#7b4dff]/10 blur-[90px]" />

              <div className="relative z-10">
                <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#7b4dff]/10 pb-7 sm:flex-row sm:items-end">
                  <div>
                    <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.26em] text-[#7b4dff]">
                      02 / Deliverables
                    </span>

                    <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#171020] md:text-3xl">
                      {isEs
                        ? "¿Qué incluye esta estrategia?"
                        : "What is included in this strategy?"}
                    </h3>
                  </div>

                  <span className="self-start rounded-full border border-[#7b4dff]/15 bg-[#eee9ff] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#6b3ff2] sm:self-auto">
                    {String(featuresList.length).padStart(2, "0")}{" "}
                    {isEs ? "elementos" : "items"}
                  </span>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2">
                  {featuresList.map((feature, idx) => (
                    <li
                      key={idx}
                      className="group flex min-h-[110px] items-start gap-4 rounded-[20px] border border-[#7b4dff]/12 bg-[#faf8ff] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#7b4dff]/30 hover:bg-white hover:shadow-[0_18px_45px_rgba(91,50,223,0.10)]"
                    >
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-[#7b4dff]/20 bg-[#eee9ff] text-[#5b32df] transition-colors duration-300 group-hover:border-[#ff4fd8]/25 group-hover:bg-[#fff0fb] group-hover:text-[#d82caf]">
                        <CheckCircle2 className="h-5 w-5" />

                        <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-[#171020] px-1 text-[8px] font-bold text-white">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <span className="pt-1 text-sm leading-relaxed text-[#655d73] md:text-base">
                        <T>{feature}</T>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cierre informativo */}
            <div className="flex flex-col justify-between gap-5 rounded-[24px] border border-[#7b4dff]/12 bg-white/60 px-6 py-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#7b4dff]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#756d86]">
                  Kervia Digital
                </span>
              </div>

              <span className="text-xs text-[#91879f]">
                {isEs
                  ? "Estrategia orientada a resultados"
                  : "Results-driven strategy"}
              </span>
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="sticky top-32 lg:col-span-4">
            <div className="relative overflow-hidden rounded-[32px] border border-[#7b4dff]/20 bg-[#171020] p-7 shadow-[0_34px_85px_rgba(44,28,91,0.28)] sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#7b4dff]/28 blur-[90px]" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-[#ff4fd8]/12 blur-[90px]" />

              <div className="relative z-10">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#ff78df]">
                      03 / Inversion
                    </span>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#91879f]">
                      {isEs ? "Inversión" : "Investment"}
                    </span>
                  </div>

                  <span className="rounded-full border border-[#7b4dff]/25 bg-[#7b4dff]/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#c6bbff]">
                    MXN
                  </span>
                </div>

                <div className="mb-8">
                  <div className="bg-gradient-to-r from-[#c6bbff] via-white to-[#ff78df] bg-clip-text text-4xl font-bold tracking-[-0.045em] text-transparent">
                    {formatPrice(plan.price)}
                  </div>

                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#81788f]">
                    {isEs ? "+ IVA (16%)" : "+ Taxes"}
                  </div>
                </div>

                <div className="mb-8 h-px w-full bg-gradient-to-r from-[#7b4dff]/40 via-[#ff4fd8]/25 to-transparent" />

                <AddToCartButton planId={plan.id} />

                <div className="mt-7 rounded-[18px] border border-white/[0.07] bg-[#100c19]/55 p-5 text-center">
                  <div className="mb-3 flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#a99cff]" />

                    <p className="text-sm font-medium text-[#d6cfdf]">
                      {isEs
                        ? "Pago 100% seguro y encriptado."
                        : "100% secure and encrypted payment."}
                    </p>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}