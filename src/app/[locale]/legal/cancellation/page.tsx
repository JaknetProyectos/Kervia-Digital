import { T } from "@/components/shared/T";

export default function CancellationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f2ff] pb-24 pt-32 text-[#171020]">
      {/* Fondo limpio */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_12%,rgba(123,77,255,0.13),transparent_27%),radial-gradient(circle_at_95%_82%,rgba(255,79,216,0.09),transparent_25%),linear-gradient(180deg,#faf8ff_0%,#eee9ff_100%)]" />

      <div className="pointer-events-none absolute -left-52 top-20 h-[520px] w-[520px] rounded-full border border-[#7b4dff]/10" />

      <div className="pointer-events-none absolute -right-44 bottom-20 h-[460px] w-[460px] rounded-full border border-[#ff4fd8]/10" />

      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8]" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
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
              <T>Política de Devoluciones y Reembolsos</T>
            </h1>

            <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#ff4fd8] shadow-[0_0_14px_rgba(255,79,216,0.8)]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a99cff]">
                  Transparencia · Servicio · Cumplimiento
                </span>
              </div>

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#81788f]">
                Documento legal
              </span>
            </div>
          </div>
        </header>

        {/* Documento */}
        <article className="relative overflow-hidden rounded-[32px] border border-[#7b4dff]/15 bg-white/85 px-6 py-10 shadow-[0_28px_75px_rgba(54,36,105,0.10)] backdrop-blur-xl sm:px-10 md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#7b4dff]/8 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#ff4fd8]/7 blur-[100px]" />

          <div className="relative z-10 space-y-6 text-justify leading-relaxed text-[#655d73]">
            <p>
              <T>En</T>{" "}
              <strong className="font-semibold text-[#241a35]">
                AYRANET S.A. DE C.V.
              </strong>{" "}
              <T>(en adelante “</T>
              <strong className="font-semibold text-[#5b32df]">
                KERVIA DIGITAL
              </strong>
              <T>
                ”), nos esforzamos por brindar la mejor experiencia a nuestros
                clientes en todos nuestros servicios. Sin embargo, entendemos
                que pueden surgir circunstancias que requieran devoluciones o
                solicitudes de reembolso. A continuación, presentamos nuestra
                política al respecto.
              </T>
            </p>

            <p>
              <T>
                Al realizar una compra con nosotros, usted acepta estar sujeto a
                la siguiente Política de Devolución y Reembolso, la cual le
                recomendamos leer detenidamente antes de hacer un pedido.
              </T>
            </p>

            <section className="pt-6">
              <h2 className="mb-5 flex items-center gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                  01
                </span>
                <T>CAMBIO DE ÓRDENES</T>
              </h2>

              <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                <p>
                  <T>
                    Si alguna de las Partes desea cambiar el alcance o contratar
                    servicios adicionales para completar el alcance del pedido,
                    enviará los detalles del cambio solicitado a la otra Parte
                    por escrito.
                  </T>{" "}
                  <strong className="font-semibold text-[#5b32df]">
                    KERVIA DIGITAL
                  </strong>
                  <T>
                    , dentro de un tiempo razonable después de dicha solicitud,
                    proporcionará un presupuesto por escrito al Cliente de:
                  </T>
                </p>

                <ul className="space-y-3">
                  {[
                    "El alcance y entregables de los servicios solicitados.",
                    "El tiempo necesario para implementar los cambios.",
                    "Ajustes en los precios.",
                    "Cualquier otro impacto que el cambio pueda tener en la ejecución de este Acuerdo.",
                  ].map((item, index) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eee9ff] text-[8px] font-bold text-[#5b32df]">
                        {index + 1}
                      </span>
                      <span>
                        <T>{item}</T>
                      </span>
                    </li>
                  ))}
                </ul>

                <p>
                  <T>
                    Inmediatamente después de recibir el presupuesto por
                    escrito, las Partes negociarán y acordarán los términos de
                    dicho cambio (una “Orden de cambio”). Ninguna de las partes
                    estará obligada por ninguna orden de cambio a menos que se
                    acuerde mutuamente.
                  </T>
                </p>

                <p>
                  <strong className="font-semibold text-[#5b32df]">
                    KERVIA DIGITAL
                  </strong>{" "}
                  <T>
                    de vez en cuando puede cambiar los Servicios sin el
                    consentimiento del Cliente, siempre que dichos cambios no
                    afecten materialmente la naturaleza o el alcance de los
                    Servicios, o las tarifas o las fechas de ejecución
                    establecidas en el Pedido.
                  </T>
                </p>
              </div>
            </section>

            <section className="pt-6">
              <h2 className="mb-5 flex items-center gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                  02
                </span>
                <T>GARANTÍA</T>
              </h2>

              <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                <p>
                  <strong className="font-semibold text-[#5b32df]">
                    KERVIA DIGITAL
                  </strong>{" "}
                  <T>
                    declara y garantiza al Cliente que prestará los Servicios
                    utilizando personal con las habilidades, experiencia y
                    calificaciones requeridas y de una manera profesional y
                    hábil y que dedicará los recursos adecuados para cumplir con
                    sus obligaciones en virtud de estos Términos.
                  </T>
                </p>

                <p>
                  <T>
                    Si el Cliente, dentro de los 15 días posteriores a la
                    recepción de los Servicios, notifica a
                  </T>{" "}
                  <strong className="font-semibold text-[#5b32df]">
                    KERVIA DIGITAL
                  </strong>{" "}
                  <T>que los Servicios no cumplen con los requisitos del Pedido,</T>{" "}
                  <strong className="font-semibold text-[#5b32df]">
                    KERVIA DIGITAL
                  </strong>
                  <T>
                    , a su entera discreción, y como único recurso del Cliente,
                    puede hacer lo siguiente:
                  </T>
                </p>

                <ul className="space-y-3">
                  {[
                    "Reparar o volver a realizar dichos Servicios (o la parte defectuosa), de acuerdo a los términos de esta política.",
                    "Acreditar o reembolsar el precio de dichos Servicios, de acuerdo a los términos de esta política.",
                    "Rechazar el cambio, devolución o reembolso de los servicios, si no cumple con los términos de esta política para ser aplicable.",
                  ].map((item, index) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7b4dff]" />
                      <span>
                        <T>{item}</T>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="pt-6">
              <h2 className="mb-5 flex items-center gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                  03
                </span>
                <T>RENUNCIA DE GARANTÍAS</T>
              </h2>

              <div className="border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                <p>
                  <T>
                    Excepto por la garantía establecida en el párrafo anterior
                    de estos términos,
                  </T>{" "}
                  <strong className="font-semibold text-[#5b32df]">
                    KERVIA DIGITAL
                  </strong>{" "}
                  <T>
                    no otorga ninguna garantía con respecto a los servicios,
                    incluyendo cualquier (a) garantía de comerciabilidad; (b)
                    garantía de aptitud para un propósito particular; (c)
                    garantía de título; o (d) garantía contra la infracción de
                    los derechos de propiedad intelectual de un tercero; ya sea
                    expresa o implícita por ley, curso de negociación, curso de
                    rendimiento, uso del comercio o de otro modo.
                  </T>
                </p>
              </div>
            </section>

            <section className="pt-6">
              <h2 className="mb-5 flex items-center gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                  04
                </span>
                <T>DEVOLUCIONES</T>
              </h2>

              <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                <p>
                  <T>
                    Lamentablemente, no podemos ofrecer reembolsos ni cambios en
                    los productos comprados a menos que presenten algún defecto.
                    Sin embargo, en caso de recibir un producto defectuoso o si
                    el pedido que ha recibido difiere de su intención de compra,
                    aceptaremos devoluciones dentro de los 15 días hábiles
                    siguientes a la fecha de recepción del servicio.
                  </T>
                </p>

                <p>
                  <T>
                    Para procesar su devolución, necesitamos un recibo o
                    comprobante de compra, así como una declaración escrita
                    detallando los motivos de la devolución. Le solicitamos que
                    se ponga en contacto con nuestro departamento de atención al
                    cliente a través de nuestro sitio web.
                  </T>
                </p>

                <div className="rounded-[20px] border border-[#7b4dff]/12 bg-[#faf8ff] p-6">
                  <h3 className="mb-4 text-xl font-bold text-[#241a35]">
                    <T>Servicios Elegibles para Devolución</T>
                  </h3>

                  <p>
                    <T>
                      Las devoluciones sólo se aceptarán si los servicios
                      presentan defectos de fabricación. En el caso de los
                      productos digitales, solo se admitirán devoluciones si se
                      entrega un producto incorrecto o dañado.
                    </T>
                  </p>
                </div>

                <div className="rounded-[20px] border border-[#7b4dff]/12 bg-[#faf8ff] p-6">
                  <h3 className="mb-4 text-xl font-bold text-[#241a35]">
                    <T>Procedimiento de Devolución</T>
                  </h3>

                  <p>
                    <T>Los clientes deben notificar a</T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      su intención de devolver un servicio o producto dentro de
                      los 15 días hábiles posteriores a la entrega. Esta
                      notificación debe incluir detalles claros y documentados
                      sobre el motivo de la devolución.
                    </T>
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-6">
              <h2 className="mb-5 flex items-center gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                  05
                </span>
                <T>INTERCAMBIOS</T>
              </h2>

              <div className="border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                <p>
                  <T>
                    Nuestra política de reemplazo aplica solo a servicios
                    defectuosos o dañados. Por favor contáctanos para notificar
                    el problema y comenzar el proceso de reemplazo. Te pedimos
                    que por favor nos proporciones detalles claros para una
                    solución rápida y efectiva, ya que nos comprometemos a
                    garantizar tu satisfacción.
                  </T>
                </p>
              </div>
            </section>

            <section className="pt-6">
              <h2 className="mb-5 flex items-center gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                  06
                </span>
                <T>REEMBOLSOS</T>
              </h2>

              <div className="space-y-8 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-[#241a35]">
                    <T>Criterios de Reembolso</T>
                  </h3>

                  <div className="space-y-5">
                    <p>
                      <T>
                        Los reembolsos se procesarán tras recibir y evaluar los
                        servicios devueltos o verificar la elegibilidad del
                        servicio para reembolso. Nos reservamos el derecho de
                        negar un reembolso si los servicios devueltos no cumplen
                        con las condiciones mencionadas.
                      </T>
                    </p>

                    <p>
                      <T>
                        Una vez recibida e inspeccionada su devolución, le
                        informaremos por correo electrónico si su devolución ha
                        sido aprobada o rechazada. En caso de aprobación, su
                        reembolso se procesará y se aplicará automáticamente un
                        crédito a su tarjeta de crédito o al método de pago
                        original.
                      </T>
                    </p>

                    <p>
                      <T>
                        Para solicitar un reembolso, comuníquese con nuestro
                        equipo de atención al cliente dentro de un plazo máximo
                        de 15 días hábiles desde la fecha de entrega del
                        servicio.
                      </T>
                    </p>
                  </div>
                </div>

                <div className="rounded-[20px] border border-[#7b4dff]/12 bg-[#faf8ff] p-6">
                  <h3 className="mb-4 text-xl font-bold text-[#241a35]">
                    <T>Condiciones de Reembolso</T>
                  </h3>

                  <div className="space-y-5">
                    <p>
                      <T>
                        Los reembolsos están sujetos a evaluación y pueden
                        variar según el tipo de servicio adquirido. Para
                        servicios con pagos parciales o en etapas, los
                        reembolsos se basarán en las etapas completadas y
                        aprobadas.
                      </T>
                    </p>

                    <p>
                      <T>
                        No se realizarán reembolsos si el cliente ha violado los
                        términos del contrato o ha proporcionado información
                        incorrecta o insuficiente que afecte la prestación del
                        servicio.
                      </T>
                    </p>

                    <p>
                      <T>
                        Los servicios que hayan sido utilizados, modificados o
                        alterados después de la entrega no serán elegibles para
                        reembolso, a menos que exista un defecto inherente al
                        producto o servicio que lo haga inadecuado para su
                        propósito previsto.
                      </T>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-[#241a35]">
                    <T>Entregas</T>
                  </h3>

                  <div className="space-y-5">
                    <p>
                      <T>
                        Los tiempos de entrega de los proyectos se establecerán
                        de forma detallada con cada cliente al inicio de la
                        colaboración. Estos plazos se determinarán tras analizar
                        en profundidad la complejidad y el alcance del proyecto,
                        considerando aspectos como la disponibilidad de
                        recursos, la complejidad técnica y la colaboración
                        necesaria del cliente.
                      </T>
                    </p>

                    <p>
                      <T>
                        En caso de surgir imprevistos o cambios en los requisitos
                        del proyecto, informaremos de inmediato al cliente y
                        acordaremos ajustes en los plazos de entrega.
                        Trabajaremos para llegar a un acuerdo en caso de requerir
                        ajustes debido a circunstancias imprevistas, lo que
                        podría implicar reprogramar fechas límite o implementar
                        medidas correctivas para mitigar cualquier impacto en la
                        calidad y el resultado final del proyecto.
                      </T>
                    </p>

                    <p>
                      <T>
                        Además, los plazos acordados incluirán períodos
                        específicos para las revisiones por parte del cliente,
                        estableciendo claramente las fechas límite para recibir
                        comentarios y aprobaciones. Esto garantizará una
                        colaboración efectiva y un proceso de revisión
                        eficiente.
                      </T>
                    </p>

                    <p>
                      <T>
                        En casos excepcionales, como eventos de fuerza mayor o
                        situaciones fuera del control de ambas partes, los
                        plazos podrían necesitar ser reajustados. En tales
                        circunstancias,
                      </T>{" "}
                      <strong className="font-semibold text-[#5b32df]">
                        KERVIA DIGITAL
                      </strong>{" "}
                      <T>
                        y el cliente colaborarán de buena fe para adaptar los
                        plazos y minimizar cualquier impacto negativo.
                      </T>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-6">
              <h2 className="mb-5 flex items-center gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                  07
                </span>
                <T>CAMBIOS A LAS POLÍTICAS</T>
              </h2>

              <div className="space-y-5 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                <p>
                  <T>
                    La presente Política puede sufrir modificaciones, cambios o
                    actualizaciones derivadas de nuevos requerimientos legales;
                    de nuestras propias necesidades por los productos o
                    servicios que ofrecemos, de nuestras prácticas de
                    Privacidad, de cambios en nuestro modelo de negocio o por
                    otras causas.
                  </T>
                </p>

                <p>
                  <T>
                    Nos comprometemos a mantenerlo informado sobre los cambios
                    que pueda sufrir la presente Política por lo que le
                    recomendamos ingresar periódicamente a nuestro sitio web.
                  </T>
                </p>
              </div>
            </section>
          </div>
        </article>

        {/* Pie del documento */}
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