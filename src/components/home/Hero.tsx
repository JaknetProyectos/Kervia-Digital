"use client";

import { motion } from "framer-motion";

export function HeroVisuals({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <div className="relative hidden h-[500px] w-full md:block lg:h-[650px]">
      {/* Fondo gráfico */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-6 h-[88%] w-[86%] rounded-[42px] border border-[#7b4dff]/15 bg-[#151020]/45" />

        <div className="absolute right-0 top-6 h-[88%] w-[86%] rounded-[42px] bg-[linear-gradient(rgba(169,156,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(169,156,255,0.045)_1px,transparent_1px)] bg-[size:34px_34px]" />

        <div className="absolute -right-8 top-8 h-52 w-52 rounded-full bg-[#3b2cf5]/20 blur-[90px]" />

        <div className="absolute bottom-10 left-10 h-44 w-44 rounded-full bg-[#ff4fd8]/15 blur-[80px]" />
      </div>

      {/* IMAGEN 1: Principal */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group absolute right-0 top-0 z-10 h-[72%] w-[76%] overflow-hidden rounded-[36px_8px_36px_36px] border border-[#a99cff]/20 bg-[#151020] shadow-[0_30px_80px_rgba(13,11,22,0.55)]"
      >
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&h=800&fit=crop"
          alt={isEs ? "Estrategia digital" : "Digital strategy"}
          className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b16]/85 via-[#0d0b16]/15 to-transparent" />

        <div className="absolute inset-0 bg-[#3b2cf5]/10 mix-blend-color" />

        <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-[#0d0b16]/60 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#ff4fd8] shadow-[0_0_12px_rgba(255,79,216,0.9)]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
            {isEs ? "Dirección digital" : "Digital direction"}
          </span>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#ff4fd8]">
              01 / {isEs ? "Estrategia" : "Strategy"}
            </span>

            <p className="max-w-xs text-lg font-medium leading-snug text-white lg:text-xl">
              {isEs
                ? "Ideas claras convertidas en crecimiento."
                : "Clear ideas transformed into growth."}
            </p>
          </div>

          <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold text-white backdrop-blur-md lg:flex">
            KD
          </div>
        </div>
      </motion.div>

      {/* IMAGEN 2: Secundaria */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="group absolute bottom-4 left-0 z-20 h-[43%] w-[57%] overflow-hidden rounded-[8px_30px_30px_30px] border border-[#ff4fd8]/30 bg-[#211936] shadow-[0_26px_65px_rgba(13,11,22,0.5)]"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
          alt={isEs ? "Proceso creativo" : "Creative process"}
          className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b16]/65 via-transparent to-[#3b2cf5]/10" />

        <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-[#0d0b16]/65 px-4 py-3 backdrop-blur-md">
          <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-[#a99cff]">
            02 / {isEs ? "Creativo" : "Creative"}
          </span>

          <span className="mt-1 block text-sm font-medium text-white">
            {isEs ? "Colaboración con propósito" : "Purposeful collaboration"}
          </span>
        </div>
      </motion.div>

      {/* IMAGEN 3: Acento flotante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut",
        }}
        className="group absolute -right-5 bottom-[18%] z-30 hidden h-[31%] w-[30%] overflow-hidden rounded-[26px_6px_26px_26px] border-4 border-[#0d0b16] bg-[#211936] shadow-[0_24px_60px_rgba(13,11,22,0.6)] lg:block"
      >
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=600&fit=crop"
          alt={isEs ? "Espacio creativo" : "Creative workspace"}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#3b2cf5]/55 via-transparent to-[#ff4fd8]/10" />

        <div className="absolute right-3 top-3 rounded-lg border border-white/15 bg-[#0d0b16]/65 px-3 py-2 backdrop-blur-md">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff4fd8]">
            03 / {isEs ? "Espacio" : "Space"}
          </span>
        </div>
      </motion.div>

      {/* Elementos decorativos */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute left-[9%] top-[8%] z-30 grid h-16 w-16 grid-cols-3 gap-1.5"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className={`h-1.5 w-1.5 rounded-full ${
              index === 4
                ? "bg-[#ff4fd8] shadow-[0_0_10px_rgba(255,79,216,0.8)]"
                : "bg-[#a99cff]/35"
            }`}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 88 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="absolute bottom-[5%] right-[23%] z-40 h-px bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]"
      />
    </div>
  );
}