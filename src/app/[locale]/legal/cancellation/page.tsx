"use client";

import { useLocale } from "next-intl";

export default function CancellationPage() {
  const locale = useLocale();
  const isEs = locale === "es";

  const t = {
    header: {
      title: isEs ? "Política de Devoluciones y Reembolsos[cite: 2]" : "Return and Refund Policy[cite: 2]",
      badge: isEs
        ? "Transparencia · Servicio · Cumplimiento"
        : "Transparency · Service · Compliance",
      tag: isEs ? "Documento legal" : "Legal Document",
    },
    intro: isEs
      ? [
          "En AYRANET S.A. DE C.V. (en adelante “KERVIA DIGITAL”), nos esforzamos por brindar la mejor experiencia a nuestros clientes en todos nuestros servicios. Sin embargo, entendemos que pueden surgir circunstancias que requieran devoluciones o solicitudes de reembolso. A continuación, presentamos nuestra política al respecto.[cite: 2]",
          "Al realizar una compra con nosotros, usted acepta estar sujeto a la siguiente Política de Devolución y Reembolso, la cual le recomendamos leer detenidamente antes de hacer un pedido.[cite: 2]",
        ]
      : [
          "At AYRANET S.A. DE C.V. (hereinafter “KERVIA DIGITAL”), we strive to provide the best experience to our clients in all our services. However, we understand that circumstances may arise that require returns or refund requests. Below, we present our policy in this regard.[cite: 2]",
          "By making a purchase with us, you agree to be bound by the following Return and Refund Policy, which we recommend you read carefully before placing an order.[cite: 2]",
        ],
    sections: [
      {
        id: "01",
        title: isEs ? "CAMBIO DE ÓRDENES[cite: 2]" : "ORDER CHANGES[cite: 2]",
        content: isEs
          ? ["Si alguna de las Partes desea cambiar el alcance o contratar servicios adicionales para completar el alcance del pedido, enviará los detalles del cambio solicitado a la otra Parte por escrito. KERVIA DIGITAL, dentro de un tiempo razonable después de dicha solicitud, proporcionará un presupuesto por escrito al Cliente de:[cite: 2]"]
          : ["If either Party wishes to change the scope or contract additional services to complete the order scope, they will send the details of the requested change to the other Party in writing. KERVIA DIGITAL, within a reasonable time after such request, will provide a written quote to the Client regarding:[cite: 2]"],
        bullets: isEs
          ? [
              "El alcance y entregables de los servicios solicitados.[cite: 2]",
              "El tiempo necesario para implementar los cambios.[cite: 2]",
              "Ajustes en los precios.[cite: 2]",
              "Cualquier otro impacto que el cambio pueda tener en la ejecución de este Acuerdo.[cite: 2]",
            ]
          : [
              "The scope and deliverables of the requested services.[cite: 2]",
              "The time necessary to implement the changes.[cite: 2]",
              "Price adjustments.[cite: 2]",
              "Any other impact the change may have on the execution of this Agreement.[cite: 2]",
            ],
        footerText: isEs
          ? [
              "Inmediatamente después de recibir el presupuesto por escrito, las Partes negociarán y acordarán los términos de dicho cambio (una “Orden de cambio”). Ninguna de las partes estará obligada por ninguna orden de cambio a menos que se acuerde mutuamente.[cite: 2]",
              "KERVIA DIGITAL de vez en cuando puede cambiar los Servicios sin el consentimiento del Cliente, siempre que dichos cambios no afecten materialmente la naturaleza o el alcance de los Servicios, o las tarifas o las fechas de ejecución establecidas en el Pedido.[cite: 2]",
            ]
          : [
              "Immediately after receiving the written quote, the Parties will negotiate and agree on the terms of said change (a “Change Order”). Neither party will be bound by any change order unless mutually agreed.[cite: 2]",
              "KERVIA DIGITAL may from time to time change the Services without the Client's consent, provided that such changes do not materially affect the nature or scope of the Services, or the fees or execution dates set forth in the Order.[cite: 2]",
            ],
      },
      {
        id: "02",
        title: isEs ? "GARANTÍA[cite: 2]" : "WARRANTY[cite: 2]",
        content: isEs
          ? [
              "KERVIA DIGITAL declara y garantiza al Cliente que prestará los Servicios utilizando personal con las habilidades, experiencia y calificaciones requeridas y de una manera profesional y hábil y que dedicará los recursos adecuados para cumplir con sus obligaciones en virtud de estos Términos.[cite: 2]",
              "Si el Cliente, dentro de los 15 días posteriores a la recepción de los Servicios, notifica a KERVIA DIGITAL que los Servicios no cumplen con los requisitos del Pedido, KERVIA DIGITAL, a su entera discreción, y como único recurso del Cliente, puede hacer lo siguiente:[cite: 2]",
            ]
          : [
              "KERVIA DIGITAL declares and warrants to the Client that it will provide the Services using personnel with the required skills, experience, and qualifications in a professional and skillful manner and that it will dedicate adequate resources to fulfill its obligations under these Terms.[cite: 2]",
              "If the Client, within 15 days after receiving the Services, notifies KERVIA DIGITAL that the Services do not comply with the requirements of the Order, KERVIA DIGITAL, at its sole discretion, and as the Client's sole remedy, may do the following:[cite: 2]",
            ],
        bullets: isEs
          ? [
              "Reparar o volver a realizar dichos Servicios (o la parte defectuosa), de acuerdo a los términos de esta política.[cite: 2]",
              "Acreditar o reembolsar el precio de dichos Servicios, de acuerdo a los términos de esta política.[cite: 2]",
              "Rechazar el cambio, devolución o reembolso de los servicios, si no cumple con los términos de esta política para ser aplicable.[cite: 2]",
            ]
          : [
              "Repair or re-perform such Services (or the defective part), in accordance with the terms of this policy.[cite: 2]",
              "Credit or refund the price of such Services, in accordance with the terms of this policy.[cite: 2]",
              "Reject the change, return, or refund of the services if it does not comply with the terms of this policy to be applicable.[cite: 2]",
            ],
      },
      {
        id: "03",
        title: isEs ? "RENUNCIA DE GARANTÍAS[cite: 2]" : "DISCLAIMER OF WARRANTIES[cite: 2]",
        content: isEs
          ? ["Excepto por la garantía establecida en el párrafo anterior de estos términos, KERVIA DIGITAL no otorga ninguna garantía con respecto a los servicios, incluyendo cualquier (a) garantía de comerciabilidad; (b) garantía de aptitud para un propósito particular; (c) garantía de título; o (d) garantía contra la infracción de los derechos de propiedad intelectual de un tercero; ya sea expresa o implícita por ley, curso de negociación, curso de rendimiento, uso del comercio o de otro modo.[cite: 2]"]
          : ["Except for the warranty set forth in the preceding paragraph of these terms, KERVIA DIGITAL makes no warranty with respect to the services, including any (a) warranty of merchantability; (b) warranty of fitness for a particular purpose; (c) warranty of title; or (d) warranty against infringement of third-party intellectual property rights; whether express or implied by law, course of dealing, course of performance, usage of trade, or otherwise.[cite: 2]"],
      },
      {
        id: "04",
        title: isEs ? "DEVOLUCIONES[cite: 2]" : "RETURNS[cite: 2]",
        content: isEs
          ? [
              "Lamentablemente, no podemos ofrecer reembolsos ni cambios en los productos comprados a menos que presenten algún defecto. Sin embargo, en caso de recibir un producto defectuoso o si el pedido que ha recibido difiere de su intención de compra, aceptaremos devoluciones dentro de los 15 días hábiles siguientes a la fecha de recepción del servicio.[cite: 2]",
              "Para procesar su devolución, necesitamos un recibo o comprobante de compra, así como una declaración escrita detallando los motivos de la devolución. Le solicitamos que se ponga en contacto con nuestro departamento de atención al cliente a través de nuestro sitio web.[cite: 2]",
            ]
          : [
              "Unfortunately, we cannot offer refunds or exchanges on purchased products unless they present a defect. However, in case of receiving a defective product or if the order you have received differs from your purchase intent, we will accept returns within 15 business days following the date of receipt of the service.[cite: 2]",
              "To process your return, we need a receipt or proof of purchase, as well as a written statement detailing the reasons for the return. We ask you to contact our customer service department through our website.[cite: 2]",
            ],
        subsections: isEs
          ? [
              {
                title: "Servicios Elegibles para Devolución[cite: 2]",
                content: ["Las devoluciones sólo se aceptarán si los servicios presentan defectos de fabricación. En el caso de los productos digitales, solo se admitirán devoluciones si se entrega un producto incorrecto o dañado.[cite: 2]"],
              },
              {
                title: "Procedimiento de Devolución[cite: 2]",
                content: ["Los clientes deben notificar a KERVIA DIGITAL su intención de devolver un servicio o producto dentro de los 15 días hábiles posteriores a la entrega. Esta notificación debe incluir detalles claros y documentados sobre el motivo de la devolución.[cite: 2]"],
              },
            ]
          : [
              {
                title: "Services Eligible for Return[cite: 2]",
                content: ["Returns will only be accepted if the services present manufacturing defects. In the case of digital products, returns will only be allowed if an incorrect or damaged product is delivered.[cite: 2]"],
              },
              {
                title: "Return Procedure[cite: 2]",
                content: ["Clients must notify KERVIA DIGITAL of their intention to return a service or product within 15 business days following delivery. This notification must include clear and documented details about the reason for the return.[cite: 2]"],
              },
            ],
      },
      {
        id: "05",
        title: isEs ? "INTERCAMBIOS[cite: 2]" : "EXCHANGES[cite: 2]",
        content: isEs
          ? ["Nuestra política de reemplazo aplica solo a servicios defectuosos o dañados. Por favor contáctanos para notificar el problema y comenzar el proceso de reemplazo. Te pedimos que por favor nos proporciones detalles claros para una solución rápida y efectiva, ya que nos comprometemos a garantizar tu satisfacción.[cite: 2]"]
          : ["Our replacement policy applies only to defective or damaged services. Please contact us to notify the issue and begin the replacement process. We ask you to please provide clear details for a quick and effective solution, as we are committed to ensuring your satisfaction.[cite: 2]"],
      },
      {
        id: "06",
        title: isEs ? "REEMBOLSOS[cite: 2]" : "REFUNDS[cite: 2]",
        subsections: isEs
          ? [
              {
                title: "Criterios de Reembolso[cite: 2]",
                content: [
                  "Los reembolsos se procesarán tras recibir y evaluar los servicios devueltos o verificar la elegibilidad del servicio para reembolso. Nos reservamos el derecho de negar un reembolso si los servicios devueltos no cumplen con las condiciones mencionadas.[cite: 2]",
                  "Una vez recibida e inspeccionada su devolución, le informaremos por correo electrónico si su devolución ha sido aprobada o rechazada. En caso de aprobación, su reembolso se procesará y se aplicará automáticamente un crédito a su tarjeta de crédito o al método de pago original.[cite: 2]",
                  "Para solicitar un reembolso, comuníquese con nuestro equipo de atención al cliente dentro de un plazo máximo de 15 días hábiles desde la fecha de entrega del servicio.[cite: 2]",
                ],
              },
              {
                title: "Condiciones de Reembolso[cite: 2]",
                content: [
                  "Los reembolsos están sujetos a evaluación y pueden variar según el tipo de servicio adquirido. Para servicios con pagos parciales o en etapas, los reembolsos se basarán en las etapas completadas y aprobadas.[cite: 2]",
                  "No se realizarán reembolsos si el cliente ha violado los términos del contrato o ha proporcionado información incorrecta o insuficiente que afecte la prestación del servicio.[cite: 2]",
                  "Los servicios que hayan sido utilizados, modificados o alterados después de la entrega no serán elegibles para reembolso, a menos que exista un defecto inherente al producto o servicio que lo haga inadecuado para su propósito previsto.[cite: 2]",
                ],
              },
              {
                title: "Entregas[cite: 2]",
                content: [
                  "Los tiempos de entrega de los proyectos se establecerán de forma detallada con cada cliente al inicio de la colaboración. Estos plazos se determinarán tras analizar en profundidad la complejidad y el alcance del proyecto, considerando aspectos como la disponibilidad de recursos, la complejidad técnica y la colaboración necesaria del cliente.[cite: 2]",
                  "En caso de surgir imprevistos o cambios en los requisitos del proyecto, informaremos de inmediato al cliente y acordaremos ajustes en los plazos de entrega. Trabajaremos para llegar a un acuerdo en caso de requerir ajustes debido a circunstancias imprevistas, lo que podría implicar reprogramar fechas límite o implementar medidas correctivas para mitigar cualquier impacto en la calidad y el resultado final del proyecto.[cite: 2]",
                  "Además, los plazos acordados incluirán períodos específicos para las revisiones por parte del cliente, estableciendo claramente las fechas límite para recibir comentarios y aprobaciones. Esto garantizará una colaboración efectiva y un proceso de revisión eficiente.[cite: 2]",
                  "En casos excepcionales, como eventos de fuerza mayor o situaciones fuera del control de ambas partes, los plazos podrían necesitar ser reajustados. En tales circunstancias, KERVIA DIGITAL y el cliente colaborarán de buena fe para adaptar los plazos y minimizar cualquier impacto negativo.[cite: 2]",
                ],
              },
            ]
          : [
              {
                title: "Refund Criteria[cite: 2]",
                content: [
                  "Refunds will be processed upon receiving and evaluating returned services or verifying service refund eligibility. We reserve the right to deny a refund if returned services do not meet mentioned conditions.[cite: 2]",
                  "Once your return is received and inspected, we will notify you by email if it has been approved or rejected. If approved, your refund will be processed and a credit will automatically be applied to your credit card or original payment method.[cite: 2]",
                  "To request a refund, please contact our customer service team within a maximum of 15 business days from the service delivery date.[cite: 2]",
                ],
              },
              {
                title: "Refund Conditions[cite: 2]",
                content: [
                  "Refunds are subject to evaluation and may vary depending on the type of service acquired. For services with partial or staged payments, refunds will be based on completed and approved stages.[cite: 2]",
                  "No refunds will be given if the client has violated contract terms or provided incorrect or insufficient information affecting service provision.[cite: 2]",
                  "Services that have been used, modified, or altered after delivery will not be eligible for refund, unless there is an inherent defect making it unsuitable for its intended purpose.[cite: 2]",
                ],
              },
              {
                title: "Deliveries[cite: 2]",
                content: [
                  "Project delivery times will be detailed with each client at collaboration onset. Deadlines are determined after deep analysis of project complexity and scope.[cite: 2]",
                  "In case of unforeseen events or requirement changes, we will immediately inform the client and agree on deadline adjustments.[cite: 2]",
                  "Agreed deadlines will include specific periods for client reviews, clearly establishing limits for feedback and approvals.[cite: 2]",
                  "In exceptional cases, like force majeure, KERVIA DIGITAL and the client will collaborate in good faith to adapt deadlines.[cite: 2]",
                ],
              },
            ],
      },
      {
        id: "07",
        title: isEs ? "CAMBIOS A LAS POLÍTICAS[cite: 2]" : "POLICY CHANGES[cite: 2]",
        content: isEs
          ? [
              "La presente Política puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos, de nuestras prácticas de Privacidad, de cambios en nuestro modelo de negocio o por otras causas.[cite: 2]",
              "Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir la presente Política por lo que le recomendamos ingresar periódicamente a nuestro sitio web.[cite: 2]",
            ]
          : [
              "This Policy may undergo modifications, changes, or updates derived from new legal requirements; our own needs for the products or services we offer, our Privacy practices, changes in our business model, or other causes.[cite: 2]",
              "We commit to keeping you informed about the changes this Policy may undergo, so we recommend that you periodically visit our website.[cite: 2]",
            ],
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f2ff] pb-24 pt-32 text-[#171020]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_12%,rgba(123,77,255,0.13),transparent_27%),radial-gradient(circle_at_95%_82%,rgba(255,79,216,0.09),transparent_25%),linear-gradient(180deg,#faf8ff_0%,#eee9ff_100%)]" />
      <div className="pointer-events-none absolute -left-52 top-20 h-[520px] w-[520px] rounded-full border border-[#7b4dff]/10" />
      <div className="pointer-events-none absolute -right-44 bottom-20 h-[460px] w-[460px] rounded-full border border-[#ff4fd8]/10" />
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8]" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="relative mb-10 overflow-hidden rounded-[36px] bg-[#171020] px-7 py-12 shadow-[0_34px_90px_rgba(44,28,91,0.22)] sm:px-10 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#7b4dff]/28 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#ff4fd8]/12 blur-[110px]" />

          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff78df]">
                Kervia Digital · Legal
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-[#f6f2ff] md:text-5xl lg:text-6xl">
              {t.header.title}
            </h1>

            <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#ff4fd8] shadow-[0_0_14px_rgba(255,79,216,0.8)]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a99cff]">
                  {t.header.badge}
                </span>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#81788f]">
                {t.header.tag}
              </span>
            </div>
          </div>
        </header>

        <article className="relative overflow-hidden rounded-[32px] border border-[#7b4dff]/15 bg-white/85 px-6 py-10 shadow-[0_28px_75px_rgba(54,36,105,0.10)] backdrop-blur-xl sm:px-10 md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#7b4dff]/8 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#ff4fd8]/7 blur-[100px]" />

          <div className="relative z-10 space-y-6 text-justify leading-relaxed text-[#655d73]">
            {t.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {t.sections.map((sec) => (
              <section key={sec.id} className="pt-6">
                <h2 className="mb-5 flex items-center gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    {sec.id}
                  </span>
                  {sec.title}
                </h2>

                <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  {sec.content && sec.content.map((p, i) => <p key={i}>{p}</p>)}

                  {sec.bullets && (
                    <ul className="space-y-3">
                      {sec.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eee9ff] text-[8px] font-bold text-[#5b32df]">
                            {i + 1}
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.subsections &&
                    sec.subsections.map((sub, idx) => (
                      <div key={idx} className="rounded-[20px] border border-[#7b4dff]/12 bg-[#faf8ff] p-6">
                        <h3 className="mb-4 text-xl font-bold text-[#241a35]">
                          {sub.title}
                        </h3>
                        <div className="space-y-5">
                          {sub.content.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </div>
                    ))}

                  {sec.footerText &&
                    sec.footerText.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>
            ))}
          </div>
        </article>

        <div className="mt-8 flex flex-col justify-between gap-4 rounded-[20px] border border-[#7b4dff]/12 bg-white/60 px-6 py-5 text-sm text-[#756d86] sm:flex-row sm:items-center">
          <span>Kervia Digital</span>
          <span className="text-xs">
            kerviadigital.com · ventas@kerviadigital.com
          </span>
        </div>
      </div>
    </main>
  );
}