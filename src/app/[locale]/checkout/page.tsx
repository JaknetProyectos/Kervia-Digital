"use client";

import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import {
  CheckCircle,
  Loader2,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { processCheckout } from "@/actions/checkout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartItem, CheckoutPayload } from "@/types";

export default function CheckoutContent() {
  const { items, total, clearCart } = useCart();
  const locale = useLocale();
  const isEs = locale === "es";

  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [billingInfo, setBillingInfo] = useState({
    pais: "",
    direccion: "",
    localidad: "",
    estado: "",
    codigo_postal: "",
  });

  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const savedData = sessionStorage.getItem("nc_temp_contact");

    if (savedData) {
      const { firstName, lastName, email } = JSON.parse(savedData);

      setContactInfo((prev) => ({
        ...prev,
        firstName,
        lastName,
        email,
      }));

      sessionStorage.removeItem("nc_temp_contact");
    }
  }, []);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMsg("");

    const payload: CheckoutPayload = {
      locale,
      contactInfo,
      billingInfo,
      cardInfo,
      items,
      total,
    };

    const res = await processCheckout(payload);

    if (res.success) {
      clearCart();

      setContactInfo({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });

      setBillingInfo({
        pais: "",
        direccion: "",
        localidad: "",
        estado: "",
        codigo_postal: "",
      });

      setCardInfo({
        number: "",
        name: "",
        expiry: "",
        cvv: "",
      });

      setShowSuccess(true);
      window.scrollTo(0, 0);
    } else {
      setErrorMsg(
        res.message ||
          (isEs
            ? "Ocurrió un error al procesar el pago."
            : "An error occurred while processing the payment.")
      );

      setIsProcessing(false);
    }
  };

  const handleExpiryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let val = e.target.value.replace(/\D/g, "");

    if (val.length > 4) val = val.slice(0, 4);
    if (val.length > 2) {
      val = `${val.slice(0, 2)}/${val.slice(2)}`;
    }

    setCardInfo({
      ...cardInfo,
      expiry: val,
    });
  };

  const inputClass =
    "h-14 w-full rounded-[14px] border border-[#7b4dff]/20 bg-[#100c19]/70 px-5 text-[#f6f2ff] placeholder:text-[#81788f] transition-all duration-300 hover:border-[#7b4dff]/35 focus-visible:border-[#a99cff]/60 focus-visible:ring-1 focus-visible:ring-[#7b4dff]/40 disabled:cursor-not-allowed disabled:opacity-60";

  if (showSuccess) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d0914] px-4 py-28">
        {/* Fondo limpio */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,44,245,0.18),transparent_30%),radial-gradient(circle_at_82%_80%,rgba(255,79,216,0.10),transparent_28%),linear-gradient(145deg,#0d0914_0%,#151020_52%,#0b0811_100%)]" />

        <div className="pointer-events-none absolute -left-44 top-20 h-[450px] w-[450px] rounded-full border border-[#7b4dff]/10" />

        <div className="pointer-events-none absolute -right-40 bottom-12 h-[400px] w-[400px] rounded-full border border-[#ff4fd8]/10" />

        <div className="relative z-10 w-full max-w-lg animate-in overflow-hidden rounded-[34px] border border-[#7b4dff]/20 bg-[#151020]/92 p-9 text-center shadow-[0_35px_90px_rgba(8,5,18,0.55)] backdrop-blur-xl fade-in zoom-in duration-500 md:p-14">
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
              {isEs
                ? "¡Estrategia Confirmada!"
                : "Strategy Confirmed!"}
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-[#aaa1bd]">
              {isEs
                ? "Hemos enviado un recibo detallado a tu correo electrónico con los siguientes pasos."
                : "We have sent a detailed receipt to your email with the next steps."}
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
    <main className="relative min-h-screen overflow-hidden bg-[#0d0914] pb-24 pt-32 text-[#f6f2ff]">
      {/* Fondo liso */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_7%_18%,rgba(59,44,245,0.16),transparent_28%),radial-gradient(circle_at_94%_74%,rgba(255,79,216,0.09),transparent_27%),linear-gradient(145deg,#0d0914_0%,#151020_50%,#0b0811_100%)]" />

      <div className="pointer-events-none absolute -left-48 top-28 h-[500px] w-[500px] rounded-full border border-[#7b4dff]/10" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[430px] w-[430px] rounded-full border border-[#ff4fd8]/10" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff4fd8]/55 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Encabezado */}
        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff4fd8]">
              Kervia Digital · Checkout
            </span>
          </div>

          <h1 className="bg-gradient-to-r from-[#f6f2ff] via-[#c6bbff] to-[#ff78df] bg-clip-text text-4xl font-bold tracking-[-0.045em] text-transparent md:text-5xl">
            {isEs ? "Finalizar compra" : "Complete Purchase"}
          </h1>

          <p className="mt-4 max-w-2xl text-[#91879f]">
            {isEs
              ? "Completa tus datos y confirma tu inversión de forma segura."
              : "Complete your information and securely confirm your investment."}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-8 rounded-[16px] border border-[#ff4f79]/30 bg-[#ff4f79]/10 p-4 text-sm font-medium text-[#ff8fa7]">
            {errorMsg}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid items-start gap-10 lg:grid-cols-12"
        >
          <div className="space-y-8 lg:col-span-8">
            {/* Facturación */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#7b4dff]/18 bg-[#151020]/90 p-6 shadow-[0_28px_70px_rgba(8,5,18,0.38)] backdrop-blur-xl sm:p-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#7b4dff]/14 blur-[90px]" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4 border-b border-white/[0.07] pb-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7b4dff]/25 bg-[#7b4dff]/10 text-sm font-bold text-[#c6bbff]">
                    01
                  </span>

                  <div>
                    <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.23em] text-[#ff4fd8]">
                      {isEs
                        ? "Información personal"
                        : "Personal information"}
                    </span>

                    <h2 className="text-xl font-bold text-[#f6f2ff]">
                      {isEs
                        ? "Detalles de facturación"
                        : "Billing Details"}
                    </h2>
                  </div>
                </div>

                <div className="mb-5 grid gap-5 sm:grid-cols-2">
                  <Input
                    placeholder={
                      isEs ? "Nombre *" : "First Name *"
                    }
                    required
                    value={contactInfo.firstName}
                    onChange={(e) =>
                      setContactInfo({
                        ...contactInfo,
                        firstName: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                  <Input
                    placeholder={
                      isEs ? "Apellidos *" : "Last Name *"
                    }
                    required
                    value={contactInfo.lastName}
                    onChange={(e) =>
                      setContactInfo({
                        ...contactInfo,
                        lastName: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                  <Input
                    placeholder={
                      isEs
                        ? "Correo electrónico *"
                        : "Email address *"
                    }
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) =>
                      setContactInfo({
                        ...contactInfo,
                        email: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                  <Input
                    placeholder={
                      isEs
                        ? "Teléfono *"
                        : "Phone number *"
                    }
                    type="tel"
                    required
                    value={contactInfo.phone}
                    onChange={(e) =>
                      setContactInfo({
                        ...contactInfo,
                        phone: e.target.value,
                      })
                    }
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    placeholder={
                      isEs
                        ? "País / Región *"
                        : "Country / Region *"
                    }
                    required
                    value={billingInfo.pais}
                    onChange={(e) =>
                      setBillingInfo({
                        ...billingInfo,
                        pais: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                  <Input
                    placeholder={
                      isEs
                        ? "Dirección de la calle *"
                        : "Street address *"
                    }
                    required
                    value={billingInfo.direccion}
                    onChange={(e) =>
                      setBillingInfo({
                        ...billingInfo,
                        direccion: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                  <Input
                    placeholder={
                      isEs
                        ? "Localidad / Ciudad *"
                        : "City / Locality *"
                    }
                    required
                    value={billingInfo.localidad}
                    onChange={(e) =>
                      setBillingInfo({
                        ...billingInfo,
                        localidad: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                  <Input
                    placeholder={
                      isEs
                        ? "Región / Estado *"
                        : "State / Province *"
                    }
                    required
                    value={billingInfo.estado}
                    onChange={(e) =>
                      setBillingInfo({
                        ...billingInfo,
                        estado: e.target.value,
                      })
                    }
                    className={inputClass}
                  />

                  <Input
                    placeholder={
                      isEs
                        ? "Código postal *"
                        : "Postal / Zip code *"
                    }
                    required
                    value={billingInfo.codigo_postal}
                    onChange={(e) =>
                      setBillingInfo({
                        ...billingInfo,
                        codigo_postal: e.target.value,
                      })
                    }
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Pago */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#7b4dff]/18 bg-[#151020]/90 p-6 shadow-[0_28px_70px_rgba(8,5,18,0.38)] backdrop-blur-xl sm:p-8">
              <div className="pointer-events-none absolute -right-12 top-8 opacity-[0.025]">
                <CreditCard className="h-44 w-44" />
              </div>

              <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#ff4fd8]/10 blur-[90px]" />

              <div className="relative z-10">
                <div className="mb-8 flex flex-col justify-between gap-5 border-b border-white/[0.07] pb-6 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#ff4fd8]/20 bg-[#ff4fd8]/10 text-sm font-bold text-[#ff78df]">
                      02
                    </span>

                    <div>
                      <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.23em] text-[#a99cff]">
                        {isEs
                          ? "Pago protegido"
                          : "Secure payment"}
                      </span>

                      <h2 className="flex items-center gap-3 text-xl font-bold text-[#f6f2ff]">
                        <CreditCard className="h-5 w-5 text-[#c6bbff]" />

                        {isEs
                          ? "Tarjeta de Crédito/Débito"
                          : "Credit/Debit Card"}
                      </h2>
                    </div>
                  </div>

                  <div className="rounded-[10px] border border-white/10 bg-white px-3 py-2">
                    <img
                      src="/etomin_logo.svg"
                      alt="Etomin"
                      className="h-5"
                    />
                  </div>
                </div>

                <div className="grid max-w-lg gap-5">
                  <Input
                    placeholder={
                      isEs
                        ? "Número de tarjeta *"
                        : "Card number *"
                    }
                    required
                    maxLength={19}
                    value={cardInfo.number}
                    onChange={(e) =>
                      setCardInfo({
                        ...cardInfo,
                        number: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    className={`${inputClass} font-mono tracking-widest`}
                  />

                  <Input
                    placeholder={
                      isEs
                        ? "Nombre en la tarjeta *"
                        : "Name on card *"
                    }
                    required
                    value={cardInfo.name}
                    onChange={(e) =>
                      setCardInfo({
                        ...cardInfo,
                        name: e.target.value.toUpperCase(),
                      })
                    }
                    className={inputClass}
                  />

                  <div className="grid grid-cols-2 gap-5">
                    <Input
                      placeholder="MM/AA *"
                      required
                      maxLength={5}
                      value={cardInfo.expiry}
                      onChange={handleExpiryChange}
                      className={`${inputClass} text-center`}
                    />

                    <Input
                      placeholder="CVV *"
                      type="password"
                      required
                      maxLength={4}
                      value={cardInfo.cvv}
                      onChange={(e) =>
                        setCardInfo({
                          ...cardInfo,
                          cvv: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      className={`${inputClass} text-center tracking-widest`}
                    />
                  </div>

                  <div className="mt-3 rounded-[16px] border border-[#7b4dff]/15 bg-[#100c19]/55 p-4">
                    <img
                      src="/etomin_secbadge.svg"
                      alt="Seguridad"
                      className="h-10 opacity-90 grayscale transition-all duration-300 hover:grayscale-0"
                    />

                    <p className="mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#91879f]">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#a99cff]" />

                      {isEs
                        ? "Datos protegidos y encriptados."
                        : "Protected and encrypted data."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="sticky top-32 overflow-hidden rounded-[28px] border border-[#7b4dff]/20 bg-[#151020]/94 p-7 shadow-[0_30px_75px_rgba(8,5,18,0.46)] backdrop-blur-xl lg:col-span-4 lg:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#7b4dff]/16 blur-[85px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#ff4fd8]/10 blur-[80px]" />

            <div className="relative z-10">
              <div className="mb-6 border-b border-white/[0.07] pb-5">
                <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff4fd8]">
                  03 / Order
                </span>

                <h2 className="text-xl font-bold text-[#f6f2ff]">
                  {isEs ? "Tu pedido" : "Your order"}
                </h2>
              </div>

              <div className="mb-6 space-y-4">
                {items.map((item: CartItem, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-4 rounded-[14px] border border-white/[0.06] bg-[#100c19]/45 p-4 text-sm"
                  >
                    <span className="leading-relaxed text-[#aaa1bd]">
                      {item.plans_nc?.title ||
                        (isEs ? "Personalizado" : "Custom")}{" "}
                      <span className="font-semibold text-[#f6f2ff]">
                        x{item.quantity}
                      </span>
                    </span>

                    <span className="shrink-0 font-bold text-[#f6f2ff]">
                      {formatPrice(
                        (item.custom_price ||
                          item.plans_nc?.price ||
                          0) * item.quantity
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-8 border-t border-white/[0.07] pt-6">
                <div className="mb-3 flex items-center justify-between text-sm text-[#aaa1bd]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#f6f2ff]">
                    {formatPrice(total)}
                  </span>
                </div>

                <div className="mb-5 flex items-center justify-between text-sm text-[#aaa1bd]">
                  <span>
                    {isEs ? "Impuesto (16%)" : "Tax (16%)"}
                  </span>

                  <span className="font-medium text-[#f6f2ff]">
                    {formatPrice(total * 0.16)}
                  </span>
                </div>

                <div className="border-t border-white/[0.07] pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-[#f6f2ff]">
                      {isEs
                        ? "Total estimado"
                        : "Estimated Total"}
                    </span>

                    <span className="bg-gradient-to-r from-[#c6bbff] via-white to-[#ff78df] bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                      {formatPrice(total * 1.16)}
                    </span>
                  </div>

                  <p className="mt-2 text-right text-[9px] uppercase tracking-[0.16em] text-[#81788f]">
                    MXN · IVA incluido
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isProcessing}
                className="h-14 w-full overflow-hidden rounded-[15px] border-0 bg-gradient-to-r from-[#3b2cf5] via-[#7045ff] to-[#ff4fd8] text-base font-bold text-white shadow-[0_20px_45px_rgba(59,44,245,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 hover:shadow-[0_24px_55px_rgba(255,79,216,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isProcessing ? (
                  <Loader2 className="mx-auto h-5 w-5 animate-spin" />
                ) : isEs ? (
                  "REALIZAR EL PAGO"
                ) : (
                  "PROCESS PAYMENT"
                )}
              </Button>

              <div className="mt-5 flex items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#81788f]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#a99cff]" />

                {isEs
                  ? "Transacción protegida"
                  : "Protected transaction"}
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}