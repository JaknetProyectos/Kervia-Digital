"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { submitContact } from "@/actions/contact";
import { ContactFormData } from "@/lib/mail";
import {
  CheckCircle,
  Loader2,
  Send,
  MapPin,
  Phone,
  Mail as MailIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  const locale = useLocale();
  const isEs = locale === "es";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState<ContactFormData>({
    nombre_completo: "",
    empresa_negocio: "",
    telefono: "",
    correo_electronico: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const res = await submitContact(formData, locale);

    if (res.success) {
      setFormData({
        nombre_completo: "",
        empresa_negocio: "",
        telefono: "",
        correo_electronico: "",
        asunto: "",
        mensaje: "",
      });

      setShowSuccess(true);
      window.scrollTo(0, 0);
    } else {
      setErrorMsg(
        res.message ||
          (isEs ? "Ocurrió un error." : "An error occurred.")
      );
    }

    setIsSubmitting(false);
  };

  const inputClass =
    "h-14 w-full rounded-[14px] border border-[#7b4dff]/20 bg-[#100c19]/70 px-5 text-[#f6f2ff] placeholder:text-[#81788f] transition-all duration-300 hover:border-[#7b4dff]/35 focus-visible:border-[#a99cff]/60 focus-visible:ring-1 focus-visible:ring-[#7b4dff]/40";

  if (showSuccess) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d0914] px-4 py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,44,245,0.18),transparent_30%),radial-gradient(circle_at_84%_82%,rgba(255,79,216,0.10),transparent_28%),linear-gradient(145deg,#0d0914_0%,#151020_52%,#0b0811_100%)]" />

        <div className="pointer-events-none absolute -left-44 top-20 h-[450px] w-[450px] rounded-full border border-[#7b4dff]/10" />

        <div className="pointer-events-none absolute -right-40 bottom-16 h-[400px] w-[400px] rounded-full border border-[#ff4fd8]/10" />

        <div className="relative z-10 w-full max-w-lg animate-in overflow-hidden rounded-[34px] border border-[#7b4dff]/20 bg-[#151020]/94 p-10 text-center shadow-[0_35px_90px_rgba(8,5,18,0.55)] backdrop-blur-xl fade-in zoom-in duration-500 md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#7b4dff]/18 blur-[90px]" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#ff4fd8]/10 blur-[90px]" />

          <div className="relative z-10">
            <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[30px] border border-[#7b4dff]/30 bg-gradient-to-br from-[#3b2cf5]/25 to-[#ff4fd8]/10 text-[#c6bbff] shadow-[0_22px_55px_rgba(59,44,245,0.25)]">
              <div className="pointer-events-none absolute inset-2 rounded-[23px] border border-white/[0.06]" />

              <CheckCircle className="relative z-10 h-12 w-12" />

              <span className="absolute -right-1 top-2 h-3 w-3 rounded-full bg-[#ff4fd8] shadow-[0_0_16px_rgba(255,79,216,0.8)]" />
            </div>

            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff4fd8]">
              Kervia Digital
            </span>

            <h1 className="mb-5 text-4xl font-bold tracking-[-0.04em] text-[#f6f2ff]">
              {isEs ? "¡Mensaje Enviado!" : "Message Sent!"}
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-[#aaa1bd]">
              {isEs
                ? "Recibimos correctamente tu información. Nuestro equipo se comunicará contigo muy pronto."
                : "We received your information successfully. Our team will get in touch with you very soon."}
            </p>

            <Button
              asChild
              className="h-14 w-full overflow-hidden rounded-[15px] border-0 bg-gradient-to-r from-[#3b2cf5] via-[#7045ff] to-[#ff4fd8] p-0 font-bold text-white shadow-[0_20px_45px_rgba(59,44,245,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 hover:shadow-[0_25px_55px_rgba(255,79,216,0.22)]"
            >
              <Link
                href={`/${locale}/`}
                className="flex h-full w-full items-center justify-center"
              >
                {isEs ? "Volver al Inicio" : "Back to Home"}
              </Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f1ff] pb-24 pt-32 text-[#171020]">
      {/* Fondo limpio */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_16%,rgba(123,77,255,0.14),transparent_28%),radial-gradient(circle_at_94%_78%,rgba(255,79,216,0.11),transparent_27%),linear-gradient(180deg,#f8f6ff_0%,#eee9ff_100%)]" />

      <div className="pointer-events-none absolute -left-48 top-24 h-[500px] w-[500px] rounded-full border border-[#7b4dff]/10" />

      <div className="pointer-events-none absolute -right-44 bottom-16 h-[440px] w-[440px] rounded-full border border-[#ff4fd8]/10" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Encabezado */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6b3ff2]">
                Kervia Digital
              </span>
            </div>

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#756d86]">
              {isEs ? "Hablemos de tu proyecto" : "Let’s discuss your project"}
            </span>
          </div>

          <div>
            <h1 className="mb-5 text-4xl font-bold tracking-[-0.045em] text-[#171020] md:text-5xl lg:text-6xl">
              {isEs ? "Contacto" : "Contact"}
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-[#696174]">
              {isEs
                ? "¿Preparado para impulsar tu marca? Escríbenos o visítanos; nuestro equipo está listo para orientarte."
                : "Ready to move your brand forward? Write to us or visit us; our team is ready to guide you."}
            </p>
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          {/* Información de contacto */}
          <div className="space-y-5">
            {/* Dirección */}
            <div className="group relative overflow-hidden rounded-[26px] border border-[#7b4dff]/15 bg-white/80 p-7 shadow-[0_20px_50px_rgba(54,36,105,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7b4dff]/35 hover:shadow-[0_28px_65px_rgba(91,50,223,0.13)]">
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#7b4dff]/10 blur-3xl transition-colors duration-500 group-hover:bg-[#ff4fd8]/12" />

              <div className="relative z-10 flex items-start gap-5">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[16px] border border-[#7b4dff]/20 bg-[#eee9ff] text-[#5b32df]">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.24em] text-[#7b4dff]">
                    01 / Location
                  </span>

                  <h3 className="mb-3 text-lg font-bold text-[#171020]">
                    {isEs ? "Dirección" : "Address"}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#696174]">
                    Álvaro Obregón No. 151, Ofi. 1301
                    <br />
                    Roma Norte, Cuauhtémoc
                    <br />
                    C.P. 06700, CDMX
                  </p>
                </div>
              </div>
            </div>

            {/* Teléfono */}
            <div className="group relative overflow-hidden rounded-[26px] border border-[#7b4dff]/15 bg-white/80 p-7 shadow-[0_20px_50px_rgba(54,36,105,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7b4dff]/35 hover:shadow-[0_28px_65px_rgba(91,50,223,0.13)]">
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#ff4fd8]/8 blur-3xl transition-colors duration-500 group-hover:bg-[#7b4dff]/12" />

              <div className="relative z-10 flex items-start gap-5">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[16px] border border-[#ff4fd8]/18 bg-[#fff0fb] text-[#d82caf]">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.24em] text-[#e333bd]">
                    02 / Phone
                  </span>

                  <h3 className="mb-3 text-lg font-bold text-[#171020]">
                    {isEs ? "Teléfono" : "Phone"}
                  </h3>

                  <a
                    href="tel:+525555256732"
                    className="text-sm font-medium text-[#696174] transition-colors duration-300 hover:text-[#5b32df]"
                  >
                    +52 55 5525 6732
                  </a>
                </div>
              </div>
            </div>

            {/* Correo */}
            <div className="group relative overflow-hidden rounded-[26px] border border-[#7b4dff]/15 bg-[#171020] p-7 shadow-[0_24px_60px_rgba(44,28,91,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff4fd8]/35">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#7b4dff]/25 blur-[70px]" />

              <div className="pointer-events-none absolute -bottom-20 -left-14 h-44 w-44 rounded-full bg-[#ff4fd8]/12 blur-[70px]" />

              <div className="relative z-10 flex items-start gap-5">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[16px] border border-[#a99cff]/25 bg-[#7b4dff]/12 text-[#c6bbff]">
                  <MailIcon className="h-5 w-5" />
                </div>

                <div>
                  <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff78df]">
                    03 / Email
                  </span>

                  <h3 className="mb-3 text-lg font-bold text-[#f6f2ff]">
                    {isEs ? "Mail" : "Email"}
                  </h3>

                  <a
                    href="mailto:ventas@kerviadigital.com"
                    className="break-all text-sm font-medium text-[#c6bfd1] transition-colors duration-300 hover:text-white"
                  >
                    ventas@kerviadigital.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 px-2 pt-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#7b4dff]/35" />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#91879f]">
                {isEs ? "Estrategia · Creatividad · Crecimiento" : "Strategy · Creativity · Growth"}
              </span>

              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#ff4fd8]/35" />
            </div>
          </div>

          {/* Formulario */}
          <div>
            {errorMsg && (
              <div className="mb-6 rounded-[16px] border border-[#ff4f79]/30 bg-[#ff4f79]/10 p-4 text-sm font-medium text-[#cc3656]">
                {errorMsg}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[32px] border border-[#7b4dff]/20 bg-[#151020] p-7 shadow-[0_32px_85px_rgba(44,28,91,0.25)] sm:p-9 md:p-11"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#7b4dff]/20 blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#ff4fd8]/10 blur-[100px]" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between gap-5 border-b border-white/[0.07] pb-6">
                  <div>
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#ff4fd8]">
                      04 / {isEs ? "Ver Estrategias" : "View Strategies"}
                    </span>

                    <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#f6f2ff]">
                      {isEs
                        ? "Cuéntanos sobre tu proyecto"
                        : "Tell us about your project"}
                    </h2>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-[15px] border border-[#7b4dff]/25 bg-[#7b4dff]/10 text-[#c6bbff] sm:flex">
                    <Send className="h-5 w-5" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    placeholder={
                      isEs ? "Nombre Completo *" : "Full Name *"
                    }
                    required
                    value={formData.nombre_completo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        nombre_completo: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                  <Input
                    placeholder={
                      isEs
                        ? "Empresa / Negocio *"
                        : "Company / Business *"
                    }
                    required
                    value={formData.empresa_negocio}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        empresa_negocio: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                  <Input
                    placeholder={
                      isEs ? "Teléfono *" : "Phone Number *"
                    }
                    required
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        telefono: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                  <Input
                    placeholder={
                      isEs
                        ? "Correo Electrónico *"
                        : "Email Address *"
                    }
                    required
                    type="email"
                    value={formData.correo_electronico}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        correo_electronico: e.target.value,
                      })
                    }
                    className={inputClass}
                  />
                </div>

                <div className="mt-5">
                  <Input
                    placeholder={isEs ? "Asunto *" : "Subject *"}
                    required
                    value={formData.asunto}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        asunto: e.target.value,
                      })
                    }
                    className={inputClass}
                  />
                </div>

                <textarea
                  placeholder={
                    isEs
                      ? "Escribe tu mensaje aquí... *"
                      : "Write your message here... *"
                  }
                  required
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mensaje: e.target.value,
                    })
                  }
                  className="mt-5 min-h-[170px] w-full resize-y rounded-[14px] border border-[#7b4dff]/20 bg-[#100c19]/70 p-5 text-[#f6f2ff] placeholder:text-[#81788f] transition-all duration-300 hover:border-[#7b4dff]/35 focus:border-[#a99cff]/60 focus:outline-none focus:ring-1 focus:ring-[#7b4dff]/40"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-6 h-14 w-full overflow-hidden rounded-[15px] border-0 bg-gradient-to-r from-[#3b2cf5] via-[#7045ff] to-[#ff4fd8] text-base font-bold text-white shadow-[0_20px_45px_rgba(59,44,245,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 hover:shadow-[0_24px_55px_rgba(255,79,216,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <Loader2 className="mx-auto h-5 w-5 animate-spin" />
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                      {isEs ? "Enviar Mensaje" : "Send Message"}
                    </span>
                  )}
                </Button>

                <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-[#81788f]">
                  {isEs
                    ? "Responderemos lo antes posible"
                    : "We will respond as soon as possible"}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}