import { createClient } from "@/lib/supabase/server";
import { Plan } from "@/types";
import { PlanGrid } from "./PlanGrid";
import { getTranslation } from "@/lib/translator"; // 1. Importamos tu utilidad de traducción

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const supabase = await createClient();

  const { data: plans } = await supabase
    .from("plans_nc")
    .select("*")
    .eq("is_active", true)
    .neq("slug", "plan-personalizado")
    .order("price", { ascending: false });

  // Textos según el idioma
  const isEs = locale === "es";

  // === 2. LÓGICA DE TRADUCCIÓN ===
  // Creamos una nueva variable para guardar los planes traducidos
  let displayPlans = plans || [];

  if (!isEs && plans) {
    // Si no es español, mapeamos cada plan de forma asíncrona
    displayPlans = await Promise.all(
      plans.map(async (plan) => {
        const translatedTitle = await getTranslation(plan.title, locale);
        return {
          ...plan,
          title: translatedTitle, // Reemplazamos el título original por el traducido
        };
      })
    );
  }
  // ================================

  const tagText = isEs
    ? "Nuestras Estrategias"
    : "Our Strategies";
  const title1 = isEs ? "Planes de" : "Marketing";
  const title2 = isEs ? "Élite" : "Plans";
  const descText = isEs
    ? "Propuestas integrales creadas para fortalecer la presencia de tu marca y convertir cada acción en resultados medibles."
    : "Comprehensive proposals created to strengthen your brand presence and turn every action into measurable results.";

  return (
    // Reemplaza los "duration-[700ms]" u otros valores en Tailwind que te daban warnings 
    // usando la escala de Tailwind (ej. duration-700) o transition-duration-[700ms] si los tienes en este u otros archivos.
    <main className="relative min-h-screen overflow-hidden bg-[#f5f2ff] pb-24 pt-32">
      {/* Fondo limpio */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_7%_18%,rgba(123,77,255,0.14),transparent_27%),radial-gradient(circle_at_93%_76%,rgba(255,79,216,0.10),transparent_25%),linear-gradient(180deg,#faf8ff_0%,#eee9ff_100%)]" />

      {/* Formas decorativas */}
      <div className="pointer-events-none absolute -left-52 top-20 h-[520px] w-[520px] rounded-full border border-[#7b4dff]/10" />

      <div className="pointer-events-none absolute -right-44 bottom-16 h-[460px] w-[460px] rounded-full border border-[#ff4fd8]/10" />

      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="relative mb-20 animate-in overflow-hidden rounded-[36px] bg-[#171020] px-7 py-12 shadow-[0_32px_90px_rgba(44,28,91,0.22)] fade-in slide-in-from-bottom-8 duration-700 sm:px-10 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#7b4dff]/28 blur-[110px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#ff4fd8]/12 blur-[110px]" />

          <div className="pointer-events-none absolute right-10 top-10 hidden h-40 w-40 rounded-full border border-[#a99cff]/10 lg:block" />

          <div className="pointer-events-none absolute right-20 top-20 hidden h-20 w-20 rounded-full border border-[#ff4fd8]/15 lg:block" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff78df]">
                  Kervia Digital
                </span>
              </div>

              <span className="inline-flex items-center rounded-full border border-[#7b4dff]/25 bg-[#7b4dff]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#c6bbff]">
                {tagText}
              </span>
            </div>

            <div>
              <h1 className="text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#f6f2ff] sm:text-5xl lg:text-6xl">
                {title1}{" "}
                <span className="bg-gradient-to-r from-[#a99cff] via-[#d7cfff] to-[#ff78df] bg-clip-text text-transparent">
                  {title2}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#aaa1bd]">
                {descText}
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-12 flex flex-col justify-between gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ff4fd8] shadow-[0_0_14px_rgba(255,79,216,0.8)]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a99cff]">
                {isEs? "Estrategia · Comunicación · Crecimiento" : "Strategy · Communication · Growth"}
              </span>
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#81788f]">
              01 / {isEs? "Servicios" : "Services"}
            </span>
          </div>
        </div>

        {/* Encabezado del catálogo */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.26em] text-[#7b4dff]">
              02 / Portfolio
            </span>

            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#171020] md:text-3xl">
              {isEs
                ? "Selecciona la estrategia ideal"
                : "Choose the ideal strategy"}
            </h2>
          </div>

          {displayPlans && displayPlans.length > 0 && (
            <div className="inline-flex items-center gap-3 self-start rounded-[14px] border border-[#7b4dff]/15 bg-white/75 px-4 py-3 shadow-[0_12px_30px_rgba(54,36,105,0.07)] sm:self-auto">
              <span className="h-2 w-2 rounded-full bg-[#7b4dff]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#756d86]">
                {String(displayPlans.length).padStart(2, "0")}{" "}
                {isEs ? "planes disponibles" : "available plans"}
              </span>
            </div>
          )}
        </div>

        {/* Planes */}
        {displayPlans && displayPlans.length > 0 ? (
          <div className="relative">
            <div className="pointer-events-none absolute -left-16 top-1/3 h-44 w-44 rounded-full bg-[#7b4dff]/10 blur-[80px]" />

            <div className="pointer-events-none absolute -right-16 bottom-1/4 h-44 w-44 rounded-full bg-[#ff4fd8]/8 blur-[80px]" />

            <div className="relative z-10">
              {/* 3. Pasamos el arreglo ya traducido al Client Component */}
              <PlanGrid plans={displayPlans as Plan[]} locale={locale} />
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-[28px] border border-[#7b4dff]/15 bg-white/80 px-6 py-20 text-center shadow-[0_24px_60px_rgba(54,36,105,0.09)]">
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7b4dff]/50 to-transparent" />

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#7b4dff]/20 bg-[#eee9ff]">
              <span className="h-4 w-4 rotate-45 rounded-[4px] bg-gradient-to-br from-[#3b2cf5] to-[#ff4fd8]" />
            </div>

            <p className="text-[#756d86]">
              {isEs
                ? "No hay planes disponibles en este momento."
                : "No plans available at the moment."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}