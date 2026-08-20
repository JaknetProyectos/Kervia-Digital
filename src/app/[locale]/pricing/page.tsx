"use client";

import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import {
  processCustomPlan,
  CustomPlanFormData,
} from "@/actions/custom-plan";
import { Loader2, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function CustomPricingPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState<CustomPlanFormData>({
    nombre: "",
    apellidos: "",
    correo_electronico: "",
    id_cotizacion: "",
    monto: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.monto <= 0) {
      setErrorMsg(
        isEs
          ? "El monto calculado debe ser mayor a cero."
          : "The calculated amount must be greater than zero."
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    const res = await processCustomPlan(formData);

    if (res.success && res.planId && res.customPrice && res.quoteId) {
      sessionStorage.setItem(
        "nc_temp_contact",
        JSON.stringify({
          firstName: formData.nombre,
          lastName: formData.apellidos,
          email: formData.correo_electronico,
        })
      );

      const added = await addToCart(
        res.planId,
        1,
        res.customPrice,
        res.quoteId
      );

      if (added) {
        router.push(`/${locale}/checkout`);
      } else {
        setErrorMsg(
          isEs
            ? "Error al sincronizar con el carrito de compras."
            : "Error syncing with the shopping cart."
        );
        setIsSubmitting(false);
      }
    } else {
      setErrorMsg(
        res.message ||
          (isEs
            ? "Error al procesar el plan personalizado."
            : "Error processing the custom plan.")
      );
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "h-14 w-full rounded-[14px] border border-[#7b4dff]/20 bg-[#100c19]/70 px-5 text-[#f6f2ff] placeholder:text-[#81788f] transition-all duration-300 hover:border-[#7b4dff]/40 focus-visible:border-[#a99cff]/70 focus-visible:ring-1 focus-visible:ring-[#7b4dff]/45";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f2ff] pb-24 pt-32 text-[#171020]">
      {/* Fondo limpio */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,rgba(123,77,255,0.15),transparent_28%),radial-gradient(circle_at_92%_82%,rgba(255,79,216,0.10),transparent_26%),linear-gradient(180deg,#faf8ff_0%,#eee9ff_100%)]" />

      <div className="pointer-events-none absolute -left-48 top-16 h-[500px] w-[500px] rounded-full border border-[#7b4dff]/10" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[430px] w-[430px] rounded-full border border-[#ff4fd8]/10" />

      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Encabezado */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6b3ff2]">
                Kervia Digital
              </span>
            </div>

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#756d86]">
              {isEs ? "Plan personalizado" : "Custom plan"}
            </span>
          </div>

          <div>
            <h1 className="mb-5 text-4xl font-bold tracking-[-0.045em] text-[#171020] md:text-5xl lg:text-6xl">
              {isEs ? "Crea tu Estrategia" : "Create Your Strategy"}
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-[#696174]">
              {isEs
                ? "Ingresa el folio de tu cotización y completa la información necesaria para continuar con el pago."
                : "Enter your quote reference and complete the required information to continue with payment."}
            </p>
          </div>
        </div>

        {errorMsg && (
          <div className="mb-8 rounded-[16px] border border-[#ff4f79]/30 bg-[#ff4f79]/10 p-4 text-sm font-medium text-[#c93254]">
            {errorMsg}
          </div>
        )}

        <div className="grid items-stretch gap-7 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Panel informativo */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#171020] p-8 text-[#f6f2ff] shadow-[0_30px_80px_rgba(44,28,91,0.22)] lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[#7b4dff]/30 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#ff4fd8]/15 blur-[90px]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-12 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-[#a99cff]/25 bg-[#7b4dff]/12 text-[#c6bbff]">
                  <Calculator className="h-5 w-5" />
                </div>

                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff78df]">
                  {isEs? "Personalizado":"Custom"} / 01
                </span>
              </div>

              <h2 className="mb-5 text-3xl font-bold leading-tight tracking-[-0.035em]">
                {isEs
                  ? "Tu cotización, lista para continuar."
                  : "Your quote, ready to continue."}
              </h2>

              <p className="leading-relaxed text-[#bdb5c9]">
                {isEs
                  ? "Utiliza los datos proporcionados en tu cotización. El folio y el presupuesto acordado se vincularán con tu pedido antes de enviarte al checkout."
                  : "Use the information provided in your quote. The reference and agreed budget will be linked to your order before sending you to checkout."}
              </p>

              <div className="mt-10 space-y-4 border-t border-white/[0.08] pt-8">
                {[
                  isEs ? "Información del cliente" : "Customer information",
                  isEs ? "Validación de cotización" : "Quote validation",
                  isEs ? "Continuación al pago" : "Continue to payment",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-[#7b4dff]/25 bg-[#7b4dff]/10 text-[10px] font-bold text-[#c6bbff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-[#d6cfdf]">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ff4fd8] shadow-[0_0_14px_rgba(255,79,216,0.8)]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a99cff]">
                    Kervia Digital · Secure Process
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[32px] border border-[#7b4dff]/20 bg-[#151020] p-7 shadow-[0_32px_85px_rgba(44,28,91,0.24)] sm:p-9 md:p-11"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#7b4dff]/20 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#ff4fd8]/10 blur-[100px]" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between gap-5 border-b border-white/[0.07] pb-6">
                <div>
                  <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#ff4fd8]">
                    02 / {isEs ? "Formulario de Cotización" : "Quote Form"}
                  </span>

                  <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#f6f2ff]">
                    {isEs
                      ? "Datos de tu cotización"
                      : "Your quote details"}
                  </h2>
                </div>

                <span className="hidden rounded-full border border-[#7b4dff]/25 bg-[#7b4dff]/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#c6bbff] sm:block">
                  MXN
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  placeholder={
                    isEs ? "Nombre *" : "First Name *"
                  }
                  required
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      nombre: e.target.value,
                    })
                  }
                  className={inputClass}
                />

                <Input
                  placeholder={
                    isEs ? "Apellidos *" : "Last Name *"
                  }
                  required
                  value={formData.apellidos}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      apellidos: e.target.value,
                    })
                  }
                  className={inputClass}
                />
              </div>

              <div className="mt-5">
                <Input
                  placeholder={
                    isEs
                      ? "Correo Electrónico *"
                      : "Email Address *"
                  }
                  type="email"
                  required
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
                  placeholder={
                    isEs
                      ? "Folio de Cotización (Ej. COT-1234) *"
                      : "Quote Reference (e.g. COT-1234) *"
                  }
                  required
                  value={formData.id_cotizacion}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      id_cotizacion: e.target.value.toUpperCase(),
                    })
                  }
                  className={`${inputClass} font-mono tracking-wider`}
                />
              </div>

              <div className="mt-6 rounded-[18px] border border-[#7b4dff]/18 bg-[#100c19]/50 p-5">
                <label className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#a99cff]">
                  {isEs
                    ? "Presupuesto Acordado (MXN) *"
                    : "Agreed Budget (MXN) *"}
                </label>

                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg font-bold text-[#ff78df]">
                    $
                  </span>

                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    required
                    value={formData.monto || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        monto: Number(e.target.value),
                      })
                    }
                    className={`${inputClass} pl-10 text-lg font-bold`}
                  />
                </div>

                <p className="mt-3 text-[10px] leading-relaxed text-[#81788f]">
                  {isEs
                    ? "Captura exactamente el monto indicado en tu cotización."
                    : "Enter the exact amount indicated in your quote."}
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="group mt-7 h-14 w-full overflow-hidden rounded-[15px] border-0 bg-gradient-to-r from-[#3b2cf5] via-[#7045ff] to-[#ff4fd8] text-base font-bold text-white shadow-[0_20px_45px_rgba(59,44,245,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 hover:shadow-[0_24px_55px_rgba(255,79,216,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <Loader2 className="mx-auto h-5 w-5 animate-spin" />
                ) : (
                  <span className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />

                    {isEs
                      ? "Añadir al Carrito"
                      : "Add to Cart"}
                  </span>
                )}
              </Button>

              <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-[#81788f]">
                {isEs
                  ? "Tu información será vinculada con el checkout"
                  : "Your information will be linked to checkout"}
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}