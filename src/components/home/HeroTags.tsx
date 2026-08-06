"use client";

import { motion } from "framer-motion";
import { Target, Zap, CalendarDays } from "lucide-react";

export function HeroTags({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const tags = [
    {
      id: 1,
      icon: <Target className="h-4 w-4" />,
      text: isEs ? "Estrategias Dirigidas" : "Targeted Strategies",
      delay: 0.2,
    },
    {
      id: 2,
      icon: <Zap className="h-4 w-4" />,
      text: isEs
        ? "Comunicación Disruptiva"
        : "Disruptive Communication",
      delay: 0.4,
    },
    {
      id: 3,
      icon: <CalendarDays className="h-4 w-4" />,
      text: isEs ? "Eventos Estratégicos" : "Strategic Events",
      delay: 0.6,
    },
  ];

  return (
    <div className="relative z-30 my-8 flex flex-wrap gap-3">
      {tags.map((tag) => (
        <motion.div
          key={tag.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: tag.delay,
            ease: "easeOut",
          }}
          whileHover={{ y: -4, scale: 1.03 }}
          className="group relative cursor-default overflow-hidden rounded-[14px] border border-[#7b4dff]/25 bg-[#171121]/85 px-4 py-3 shadow-[0_14px_35px_rgba(13,11,22,0.28)] backdrop-blur-xl transition-all duration-300 hover:border-[#ff4fd8]/50 hover:shadow-[0_18px_45px_rgba(59,44,245,0.2)]"
        >
          {/* Brillo decorativo */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#7b4dff]/15 blur-2xl transition-all duration-500 group-hover:bg-[#ff4fd8]/20" />

          {/* Línea superior */}
          <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#a99cff]/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative z-10 flex items-center gap-3">
            {/* Icono */}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-[#7b4dff]/30 bg-gradient-to-br from-[#3b2cf5]/25 to-[#ff4fd8]/10 text-[#c6bbff] shadow-[inset_0_0_16px_rgba(123,77,255,0.12)] transition-all duration-300 group-hover:border-[#ff4fd8]/50 group-hover:text-[#ff78df]">
              {tag.icon}
            </span>

            {/* Texto */}
            <span className="whitespace-nowrap text-sm font-medium tracking-[-0.01em] text-[#f6f2ff]/85 transition-colors duration-300 group-hover:text-white">
              {tag.text}
            </span>

            {/* Número */}
            <span className="ml-1 border-l border-white/10 pl-3 text-[9px] font-bold tracking-[0.18em] text-[#a99cff]/55 transition-colors duration-300 group-hover:text-[#ff4fd8]">
              {String(tag.id).padStart(2, "0")}
            </span>
          </div>

          {/* Acento inferior */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8] transition-all duration-500 group-hover:w-full" />
        </motion.div>
      ))}
    </div>
  );
}