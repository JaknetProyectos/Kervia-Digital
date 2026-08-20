import Link from "next/link";
import { T } from "@/components/shared/T";
import { ArrowRight } from "lucide-react";
import { HeroVisuals } from "@/components/home/Hero";
import { HeroTags } from "@/components/home/HeroTags";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-[#0d0914]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 lg:pb-20 lg:pt-32">
        {/* Fondo limpio */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(59,44,245,0.18),transparent_30%),radial-gradient(circle_at_88%_70%,rgba(255,79,216,0.10),transparent_28%),linear-gradient(145deg,#0d0914_0%,#151020_48%,#0b0811_100%)]" />

        {/* Elementos decorativos */}
        <div className="pointer-events-none absolute -left-44 top-[12%] h-[500px] w-[500px] rounded-full border border-[#7b4dff]/10" />

        <div className="pointer-events-none absolute -left-32 top-[18%] h-[350px] w-[350px] rounded-full border border-[#ff4fd8]/10" />

        <div className="pointer-events-none absolute right-[6%] top-[12%] h-32 w-px bg-gradient-to-b from-transparent via-[#7b4dff]/30 to-transparent" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7b4dff]/30 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            {/* COLUMNA IZQUIERDA */}
            <div className="relative z-20 mt-6 max-w-2xl lg:mt-0">
              {/* Etiqueta superior */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff4fd8]">
                  {isEs ? "Agencia de Marketing" : "Marketing Agency"}
                </span>
              </div>

              {/* Título principal */}
              <h1 className="mb-7 text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-[#f6f2ff] md:text-6xl lg:text-7xl xl:text-[82px]">
                <T>Kervia</T>

                <br />

                <span className="relative inline-block bg-gradient-to-r from-[#a99cff] via-[#d3caff] to-[#ff78df] bg-clip-text text-transparent">
                  <T>Digital</T>

                  <span className="absolute -bottom-2 left-1 h-[3px] w-[68%] rounded-full bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8]" />
                </span>
              </h1>

              {/* Descripción */}
              <p className="mb-9 max-w-xl text-lg leading-relaxed text-[#aaa1bd] md:text-xl">
                {isEs
                  ? "Convertimos el potencial de tu marca en resultados comprobables. Integramos creatividad estratégica y análisis de datos para llevar tu negocio hacia una nueva etapa de crecimiento."
                  : "We turn your brand's potential into measurable results. We combine strategic creativity and data analysis to move your business into a new stage of growth."}
              </p>

              {/* Etiquetas */}
              <HeroTags locale={locale} />

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                <Link
                  href={`/${locale}/services`}
                  className="group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-[16px] bg-gradient-to-r from-[#3b2cf5] via-[#7045ff] to-[#ff4fd8] px-8 py-4 text-base font-bold text-white shadow-[0_20px_45px_rgba(59,44,245,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_rgba(255,79,216,0.22)]"
                >
                  <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                  <span className="relative z-10">
                    {isEs ? "Ver Estrategias" : "View Strategies"}
                  </span>

                  <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>

              {/* Detalle inferior */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <span className="h-7 w-7 rounded-full border-2 border-[#0d0914] bg-[#3b2cf5]" />
                  <span className="h-7 w-7 rounded-full border-2 border-[#0d0914] bg-[#7b4dff]" />
                  <span className="h-7 w-7 rounded-full border-2 border-[#0d0914] bg-[#ff4fd8]" />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#81788f]">
                  Kervia Digital · {isEs ? " Crecimiento Creativo" : "Creative Growth"}
                </span>
              </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="relative">
              <div className="pointer-events-none absolute -right-10 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#3b2cf5]/10 blur-[100px]" />

              <HeroVisuals locale={locale} />
            </div>
          </div>
        </div>

        {/* Indicador lateral */}
        <div className="pointer-events-none absolute bottom-10 right-8 hidden items-center gap-3 lg:flex">
          <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#81788f]">
            {isEs ? "01 / Inicio" : "01 / Home"}
          </span>

          <span className="h-px w-14 bg-gradient-to-r from-[#7b4dff]/70 to-transparent" />
        </div>
      </section>
    </main>
  );
}