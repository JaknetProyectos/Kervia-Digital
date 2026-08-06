"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "next-intl";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLocale();
  const isEs = locale === "es";

  // El array se mueve adentro para poder leer el 'locale'
  const services = [
    {
      title: isEs
        ? "Marketing de Alto Rendimiento"
        : "High-Performance Marketing",
      description: isEs
        ? "Impulsa tu marca hacia el siguiente nivel. Implementamos soluciones disruptivas diseñadas para que logres destacar y conectar con tu audiencia de manera auténtica y efectiva."
        : "Push your brand to the next level. We implement disruptive solutions designed to help you stand out and connect with your audience authentically and effectively.",
    },
    {
      title: isEs
        ? "Comunicación Estratégica"
        : "Strategic Communication",
      description: isEs
        ? "Creamos conexiones que impactan. Potenciamos tu mensaje mediante enfoques creativos que aseguran que tu voz sea escuchada con claridad por el público adecuado."
        : "We create connections that make an impact. We empower your message through creative approaches ensuring your voice is heard clearly by the right audience.",
    },
    {
      title: isEs
        ? "Estrategia y Visión de Negocio"
        : "Business Strategy & Vision",
      description: isEs
        ? "Diseñamos la hoja de ruta para tu éxito. Elevamos el valor de tu marca con estrategias innovadoras que garantizan un posicionamiento sólido y un impacto duradero en la industria."
        : "We design the roadmap to your success. We elevate your brand's value with innovative strategies that guarantee solid positioning and a lasting impact in the industry.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-[#f4f1ff] py-28 lg:py-36"
    >
      {/* Fondo liso y formas editoriales */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,rgba(123,77,255,0.14),transparent_28%),radial-gradient(circle_at_92%_78%,rgba(255,79,216,0.11),transparent_26%),linear-gradient(180deg,#f7f5ff_0%,#eee9ff_100%)]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-[#7b4dff]/10" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[460px] w-[460px] rounded-full border border-[#ff4fd8]/10" />

      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 grid gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:items-end"
        >
          <div>
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#6b3ff2]">
              <span className="h-px w-10 bg-[#6b3ff2]" />
              {isEs ? "Sobre Nosotros" : "About Us"}
            </span>

            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#756d86]">
              Kervia Digital
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#171020] sm:text-5xl lg:text-6xl">
            Kervia Digital{" "}
            <span className="bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#e333bd] bg-clip-text text-transparent">
              {isEs
                ? "Elevando el Potencial de tu Negocio"
                : "Elevating Your Business Potential"}
            </span>
          </h2>
        </motion.div>

        {/* Presentación */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-[32px] bg-[#171020] p-8 shadow-[0_30px_80px_rgba(44,28,91,0.18)] sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#7b4dff]/30 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#ff4fd8]/15 blur-[90px]" />

            <span className="relative z-10 mb-14 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff78df]">
              01 / Kervia Digital
            </span>

            <p className="relative z-10 text-xl leading-relaxed text-[#e9e3f5] lg:text-2xl">
              {isEs ? (
                <>
                  En{" "}
                  <strong className="font-semibold text-white">
                    Kervia Digital
                  </strong>
                  , tenemos una misión definida: crear soluciones de marketing
                  personalizadas y de alto impacto que ayuden a las empresas no
                  solo a crecer, sino a destacar dentro de un mercado en
                  transformación constante.
                </>
              ) : (
                <>
                  At{" "}
                  <strong className="font-semibold text-white">
                    Kervia Digital
                  </strong>
                  , our mission is defined: to create personalized,
                  high-impact marketing solutions that help companies not only
                  grow, but stand out in a constantly evolving market.
                </>
              )}
            </p>

            <div className="relative z-10 mt-12 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ff4fd8] shadow-[0_0_14px_rgba(255,79,216,0.8)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a99cff]">
                Strategy · Creativity · Growth
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-[32px] border border-[#7b4dff]/15 bg-white/75 p-8 shadow-[0_25px_65px_rgba(62,42,120,0.09)] backdrop-blur-xl sm:p-10 lg:p-12"
          >
            <div className="mb-9 flex items-center justify-between gap-6">
              <div>
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.26em] text-[#e333bd]">
                  02 / Purpose
                </span>

                <h3 className="text-3xl font-bold tracking-[-0.03em] text-[#171020]">
                  {isEs
                    ? "Nuestra Visión y Propósito"
                    : "Our Vision & Purpose"}
                </h3>
              </div>

              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#7b4dff]/20 bg-[#eee9ff] sm:flex">
                <span className="h-3 w-3 rounded-full bg-[#7b4dff] shadow-[0_0_18px_rgba(123,77,255,0.55)]" />
              </div>
            </div>

            <div className="space-y-6 leading-relaxed text-[#655d73]">
              <p>
                {isEs
                  ? "Buscamos posicionarnos como un referente de confianza y resultados dentro del sector. Nos impulsan la creatividad estratégica, la innovación continua y el compromiso permanente por ofrecer un servicio sobresaliente."
                  : "We seek to position ourselves as a trusted benchmark for results within the industry. We are driven by strategic creativity, continuous innovation, and an ongoing commitment to delivering outstanding service."}
              </p>

              <p>
                {isEs
                  ? "Sabemos que los mejores resultados nacen del trabajo conjunto. Por eso promovemos una colaboración cercana y una comunicación clara con cada cliente, procurando que sus objetivos no solo se cumplan, sino que alcancen un nivel superior."
                  : "We know the best results come from working together. That is why we promote close collaboration and clear communication with every client, ensuring their goals are not only achieved, but taken to a higher level."}
              </p>

              <p className="border-l-2 border-[#ff4fd8] pl-5 font-medium text-[#241a35]">
                {isEs
                  ? "¿Quieres resultados concretos con una perspectiva creativa? Contáctanos y convirtamos tu visión en una estrategia de éxito."
                  : "Looking for tangible results with a creative perspective? Contact us and let us turn your vision into a successful strategy."}
              </p>
            </div>

            <motion.a
              href={`/${locale}/contact`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-10 inline-flex items-center gap-4"
            >
              <span className="font-semibold text-[#5b32df] transition-colors group-hover:text-[#d82caf]">
                {isEs ? "Inicia tu Proyecto" : "Start Your Project"}
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#3b2cf5] to-[#ff4fd8] text-white shadow-[0_12px_25px_rgba(91,50,223,0.25)] transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  className="h-4 w-4"
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
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 border-t border-[#7b4dff]/15 pt-20"
        >
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#7b4dff]">
                03 / Expertise
              </span>

              <h3 className="text-3xl font-bold tracking-[-0.035em] text-[#171020] lg:text-4xl">
                {isEs
                  ? "Nuestros Servicios Especializados"
                  : "Our Specialized Services"}
              </h3>
            </div>

            <span className="text-sm text-[#756d86]">
              Kervia Digital · {String(services.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group relative min-h-[330px] overflow-hidden rounded-[28px] border border-[#7b4dff]/15 bg-white/80 p-8 shadow-[0_20px_50px_rgba(54,36,105,0.08)] transition-all duration-300 hover:border-[#7b4dff]/35 hover:shadow-[0_28px_65px_rgba(91,50,223,0.14)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#7b4dff]/10 blur-3xl transition-colors duration-500 group-hover:bg-[#ff4fd8]/12" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-12 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7b4dff]/20 bg-[#eee9ff]">
                      <div className="h-5 w-5 rotate-45 rounded-[5px] bg-gradient-to-br from-[#3b2cf5] to-[#ff4fd8] transition-transform duration-500 group-hover:rotate-[135deg]" />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#aaa1bd]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="mb-5 text-xl font-bold leading-snug text-[#4f2ed1]">
                    {service.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-[#696174]">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="h-[2px] w-12 bg-gradient-to-r from-[#3b2cf5] to-[#ff4fd8] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}