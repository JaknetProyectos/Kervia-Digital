import { T } from "@/components/shared/T";

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d0914] pb-24 pt-32 text-[#f6f2ff]">
      {/* Fondo limpio */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(59,44,245,0.18),transparent_28%),radial-gradient(circle_at_94%_82%,rgba(255,79,216,0.09),transparent_25%),linear-gradient(145deg,#0d0914_0%,#151020_50%,#0b0811_100%)]" />

      <div className="pointer-events-none absolute -left-52 top-20 h-[520px] w-[520px] rounded-full border border-[#7b4dff]/10" />

      <div className="pointer-events-none absolute -right-44 bottom-20 h-[460px] w-[460px] rounded-full border border-[#ff4fd8]/10" />

      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#3b2cf5] via-[#7b4dff] to-[#ff4fd8]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <header className="mb-10 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-[#7b4dff] to-[#ff4fd8]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff78df]">
                Kervia Digital
              </span>
            </div>

            <div className="inline-flex rounded-full border border-[#7b4dff]/25 bg-[#7b4dff]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.23em] text-[#c6bbff]">
              Legal · Privacidad
            </div>
          </div>

          <div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#f6f2ff] md:text-5xl lg:text-6xl">
              <T>Aviso de privacidad</T>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#aaa1bd]">
              <T>
                Información sobre el tratamiento, protección y uso de los datos
                personales proporcionados a través de nuestros servicios.
              </T>
            </p>
          </div>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[0.34fr_1fr]">
          {/* Panel lateral */}
          <aside className="relative overflow-hidden rounded-[30px] border border-[#7b4dff]/20 bg-[#171020]/95 p-7 shadow-[0_28px_75px_rgba(8,5,18,0.45)] backdrop-blur-xl lg:sticky lg:top-32">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#7b4dff]/22 blur-[85px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#ff4fd8]/10 blur-[80px]" />

            <div className="relative z-10">
              <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#ff78df]">
                Documento / 01
              </span>

              <h2 className="mb-5 text-2xl font-bold tracking-[-0.03em] text-[#f6f2ff]">
                Kervia Digital
              </h2>

              <p className="text-sm leading-relaxed text-[#aaa1bd]">
                <T>
                  Este documento describe las finalidades, mecanismos y medidas
                  relacionadas con el tratamiento de datos personales.
                </T>
              </p>

              <div className="my-7 h-px bg-gradient-to-r from-[#7b4dff]/40 via-[#ff4fd8]/25 to-transparent" />

              <div className="space-y-4">
                {[
                  "Identidad del responsable",
                  "Finalidades del tratamiento",
                  "Datos personales tratados",
                  "Derechos ARCO",
                  "Uso de cookies",
                  "Cambios al aviso",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] border border-[#7b4dff]/20 bg-[#7b4dff]/10 text-[9px] font-bold text-[#c6bbff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs text-[#bdb5c9]">
                      <T>{item}</T>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[18px] border border-white/[0.07] bg-[#100c19]/55 p-5">
                <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#a99cff]">
                  Contacto
                </span>

                <p className="break-all text-sm text-[#d6cfdf]">
                  ventas@kerviadigital.com
                </p>
              </div>
            </div>
          </aside>

          {/* Documento */}
          <article className="relative overflow-hidden rounded-[34px] border border-[#7b4dff]/15 bg-[#faf8ff] px-6 py-10 text-[#655d73] shadow-[0_32px_85px_rgba(8,5,18,0.35)] sm:px-9 md:px-12 md:py-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#7b4dff]/8 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#ff4fd8]/7 blur-[100px]" />

            <div className="relative z-10 space-y-6 text-justify leading-relaxed">
              <div className="rounded-[22px] border border-[#7b4dff]/12 bg-white/80 p-6">
                <p>
                  <T>
                    La presente política de privacidad se aplica al sitio web de
                  </T>{" "}
                  <strong className="font-semibold text-[#241a35]">
                    AYRANET S.A. DE C.V.
                  </strong>{" "}
                  <T>(en adelante “</T>
                  <strong className="font-semibold text-[#5b32df]">
                    KERVIA DIGITAL
                  </strong>
                  <T>
                    ”). Si no está de acuerdo, le pedimos que no utilice el sitio
                    web.
                  </T>
                </p>
              </div>

              {/* 01 */}
              <section className="pt-4">
                <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    01
                  </span>

                  <T>IDENTIDAD DE “EL RESPONSABLE”</T>
                </h2>

                <div className="border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  <p>
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      es responsable del tratamiento, confidencialidad, uso y
                      protección de los datos personales que nos proporcione y
                      le informamos que éstos serán utilizados única y
                      exclusivamente para los siguientes fines y conforme al
                      presente Aviso de Privacidad.
                    </T>
                  </p>
                </div>
              </section>

              {/* 02 */}
              <section className="pt-5">
                <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    02
                  </span>

                  <T>FINALIDADES DEL TRATAMIENTO DE DATOS PERSONALES</T>
                </h2>

                <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  <p>
                    <T>
                      Los datos personales que recabamos de Usted, los
                      utilizaremos para las siguientes finalidades principales
                      y/o primarias, las cuales son necesarias para
                      proporcionarle nuestros productos y/o servicios:
                    </T>
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Proporcionarle nuestros productos y/o servicios cuando Usted los solicita;",
                      "Adicionalmente, con su consentimiento expreso en cualquiera de nuestros formularios en nuestro sitio web, utilizaremos sus datos para ponernos en contacto con Usted;",
                      "Responder a sus dudas, comentarios y seguimiento a cualquier solicitud que nos haga a través de nuestro sitio web en el apartado de Contacto;",
                      "Contactarle para dar seguimiento a su solicitud en nuestros productos y/o servicios;",
                      "Llevar un Archivo de registros y expediente de la relación contractual para seguimiento de servicios futuros;",
                      "Atender sus llamadas y proporcionar soporte de nuestros servicios;",
                      "Procesar, completar, modificar, actualizar, cancelar los servicios contratados;",
                      "Gestionar y recibir pagos conforme a la relación jurídica que con usted se tenga o se llegase a tener;",
                      "Informar sobre nuevos servicios o productos relacionados con servicios prestados anteriormente;",
                      "Controlar el acceso de visitas.",
                    ].map((item, index) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-[8px] bg-[#eee9ff] text-[8px] font-bold text-[#5b32df]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>
                          <T>{item}</T>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-[22px] border border-[#7b4dff]/12 bg-white p-6">
                    <p className="mb-5 font-medium text-[#241a35]">
                      <T>
                        Adicionalmente, como Finalidades Secundarias o
                        Accesorias, es decir, que no son necesarias pero que nos
                        permiten brindarle un mejor servicio, sus datos
                        personales serán utilizados para:
                      </T>
                    </p>

                    <ul className="space-y-3">
                      {[
                        "Informarle sobre nuevos productos y/o servicios, cambios en los mismos y promociones;",
                        "Para enviarle publicidad generalizada y/o personalizada para fines de mercadotecnia y estadísticos;",
                        "Para invitarlo a participar en promociones, ofertas y campañas de publicidad propias o de terceros;",
                        "Elaborar estudios que son necesarios para determinar hábitos de uso y consumo;",
                        "Consultarle sobre la calidad de nuestro servicio y comprender las necesidades específicas de Usted, y así poderle prestar un mejor servicio.",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff4fd8]" />

                          <span>
                            <T>{item}</T>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    <T>
                      Sus Datos Personales serán tratados únicamente por el
                      tiempo necesario a fin de cumplir con las finalidades
                      descritas en el presente Aviso de Privacidad que se ponga
                      a su disposición, y en su caso conforme lo establecen las
                      disposiciones legales respectivas.
                    </T>
                  </p>

                  <p>
                    <T>
                      Seguridad y Protección de Datos Personales: Los datos
                      personales que proporcione a
                    </T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      se encontrarán debidamente protegidos a través de medidas
                      de seguridad tecnológicas, físicas y administrativas.
                    </T>
                  </p>

                  <p>
                    <T>
                      Sus datos personales sólo estarán disponibles al personal
                      autorizado por
                    </T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      para el procesamiento de la información y sólo para las
                      finalidades descritas en este aviso.
                    </T>
                  </p>

                  <p>
                    <T>
                      Cuando ya no sea necesario para los objetivos descritos
                      anteriormente, sus datos personales serán cancelados por
                    </T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>salvo que sean legalmente requeridos.</T>
                  </p>
                </div>
              </section>

              {/* 03 */}
              <section className="pt-5">
                <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    03
                  </span>

                  <T>
                    MECANISMO PARA QUE EL TITULAR PUEDA MANIFESTAR SU NEGATIVA
                    PARA FINALIDADES SECUNDARIAS O ACCESORIAS
                  </T>
                </h2>

                <div className="border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  <p>
                    <T>
                      En caso de que no desee que sus datos personales sean
                      tratados para todas o algunas de las finalidades
                      secundarias o accesorias, Usted puede negarnos su
                      consentimiento desde este momento enviando su solicitud al
                      correo de
                    </T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>que proporcionarnos en nuestro sitio web.</T>
                  </p>
                </div>
              </section>

              {/* 04 */}
              <section className="pt-5">
                <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    04
                  </span>

                  <T>LOS DATOS PERSONALES TRATADOS</T>
                </h2>

                <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  <p>
                    <T>
                      Los medios para recabar datos personales, con las
                      finalidades descritas en el presente aviso de privacidad
                      son:
                    </T>
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 rounded-[18px] border border-[#7b4dff]/10 bg-white p-5">
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#7b4dff]" />

                      <T>
                        De forma directa, cuando usted nos los proporciona por
                        medios electrónicos, ópticos, sonoros, visuales, vía
                        telefónica, por medio de nuestro portal de internet o
                        por medio de correo electrónico.
                      </T>
                    </li>

                    <li className="flex items-start gap-4 rounded-[18px] border border-[#7b4dff]/10 bg-white p-5">
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#ff4fd8]" />

                      <T>
                        De forma indirecta, a través de una fuente de acceso
                        público o una transferencia.
                      </T>
                    </li>
                  </ul>

                  <p>
                    <T>
                      Para llevar a cabo las finalidades descritas en el
                      presente Aviso de Privacidad, le informamos que podemos
                      recabar los siguientes datos personales: Nombre (s).
                      Apellido paterno, materno o razón social; Nombre (s).
                      Apellido paterno, materno del representante legal;
                      domicilio fiscal (calle, número interior, exterior;
                      colonia, delegación o municipio; código postal; Estado;
                      Ciudad y País); Registro Federal de Contribuyentes; Tax
                      ID, correo electrónico, teléfono fijo y/o móvil, Acta
                      constitutiva; sitio web o portal de Internet.
                    </T>
                  </p>

                  <p>
                    <T>
                      Respecto a los datos para realizar el pago a través del
                      sitio web de
                    </T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>
                    <T>
                      , la información que proporcione no constituye ni forma
                      parte de los Datos Personales sujetos a la protección de
                      este Aviso de Privacidad.
                    </T>
                  </p>
                </div>
              </section>

              {/* 05 */}
              <section className="pt-5">
                <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    05
                  </span>

                  <T>MENORES DE EDAD</T>
                </h2>

                <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  <p>
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      conoce la importancia que tiene la protección de los datos
                      personales de los menores de edad o de personas que se
                      encuentren en estado de interdicción o incapacidad
                      establecida por la ley, por lo que
                    </T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      no obtiene, usa, divulga o almacena información relacionada
                      con menores de edad o de personas que se encuentren en
                      estado de interdicción o incapacidad establecida por la
                      ley.
                    </T>
                  </p>

                  <p>
                    <T>
                      Si Usted es padre/madre o tutor y tiene noticia de que
                      algún menor de edad o de personas que se encuentren en
                      estado de interdicción o incapacidad establecida por la ley
                      haya proporcionado sus datos personales sin su
                      consentimiento, puede ejercer sus
                    </T>{" "}
                    <strong className="font-semibold text-[#241a35]">
                      <T>“Derechos ARCO”</T>
                    </strong>
                    <T>.</T>
                  </p>

                  <p>
                    <T>
                      Si Usted es menor de edad, por favor absténgase de utilizar
                      este sitio web, a menos que cuente con autorización de un
                      padre o tutor.
                    </T>
                  </p>
                </div>
              </section>

              {/* 06 */}
              <section className="pt-5">
                <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    06
                  </span>

                  <T>DATOS PERSONALES SENSIBLES</T>
                </h2>

                <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  <p>
                    <T>Le informamos que</T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      no recaba datos personales sensibles, entendiéndose por
                      ello, como aquellos datos personales que afecten a la
                      esfera más íntima del titular, o cuya utilización indebida
                      pueda dar origen a discriminación o conlleve un riesgo
                      grave para éste.
                    </T>
                  </p>

                  <p>
                    <T>
                      En particular, se consideran sensibles aquellos que puedan
                      revelar aspectos como origen racial o étnico, estado de
                      salud presente y futuro, información genética, creencias
                      religiosas, filosóficas y morales, afiliación sindical,
                      opiniones políticas, preferencia sexual.
                    </T>
                  </p>
                </div>
              </section>

              {/* 07 */}
              <section className="pt-5">
                <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    07
                  </span>

                  <T>TRANSFERENCIA DE DATOS PERSONALES</T>
                </h2>

                <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  <p>
                    <T>
                      Únicamente serán transferidos sus datos personales a
                      terceros nacionales o extranjeros, que estén relacionados
                      jurídica o comercialmente con
                    </T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      para cumplir con las finalidades descritas en el Aviso de
                      Privacidad y en sus actualizaciones puestas a su
                      disposición, por lo que
                    </T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      podrá transferir sus datos personales en los casos
                      previstos y autorizados por la ley conforme a lo
                      siguiente:
                    </T>
                  </p>

                  <ul className="space-y-4">
                    <li className="rounded-[18px] border border-[#7b4dff]/10 bg-white p-5">
                      <T>
                        (i) Al Servicio de Administración Tributaria, en virtud
                        de los procesos de emisión y envío de facturas
                        electrónicas por Internet;
                      </T>
                    </li>

                    <li className="rounded-[18px] border border-[#7b4dff]/10 bg-white p-5">
                      <T>
                        (ii) A las personas morales o cualquier Entidad que
                        formen parte del mismo grupo económico de control al que
                        pertenece
                      </T>{" "}
                      <strong className="font-semibold text-[#5b32df]">
                        KERVIA DIGITAL
                      </strong>
                    </li>

                    <li className="rounded-[18px] border border-[#7b4dff]/10 bg-white p-5">
                      <T>
                        (iii) A compañías afiliadas o no afiliadas que asisten,
                        apoyan o coadyuvan a
                      </T>{" "}
                      <strong className="font-semibold text-[#5b32df]">
                        KERVIA DIGITAL
                      </strong>
                      <T>;</T>
                    </li>

                    <li className="rounded-[18px] border border-[#7b4dff]/10 bg-white p-5">
                      <T>
                        (iv) A las diferentes autoridades para el desahogo de
                        requerimientos o contestación de éstos en algún tipo de
                        legislación o normatividad;
                      </T>
                    </li>

                    <li className="rounded-[18px] border border-[#7b4dff]/10 bg-white p-5">
                      <T>
                        (v) A su Banco en caso de realizar el cobro de nuestros
                        servicios;
                      </T>
                    </li>

                    <li className="rounded-[18px] border border-[#7b4dff]/10 bg-white p-5">
                      <T>
                        (vi) A Contadores y/o Abogados para el manejo, control y
                        registro conforme a la normativa aplicable de los
                        movimientos u operaciones económicos que hace la
                        empresa, así como para salvaguardar nuestros derechos y
                        de terceros.
                      </T>
                    </li>
                  </ul>

                  <p>
                    <T>
                      Le informamos que sus datos personales no serán
                      comercializados, cedidos, traspasados o informados a
                      terceros sin el consentimiento expreso y por escrito del
                      Titular.
                    </T>
                  </p>
                </div>
              </section>

              {/* 08 */}
              <section className="pt-5">
                <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    08
                  </span>

                  <T>“DERECHOS ARCO”</T>
                </h2>

                <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  <p>
                    <T>
                      Le informamos que Usted tiene derecho a conocer qué datos
                      personales tenemos de Usted, para qué los utilizamos y las
                      condiciones del uso que les damos (Acceso).
                    </T>
                  </p>

                  <p>
                    <T>
                      Asimismo, es su derecho solicitar la corrección de su
                      información personal en caso de que esté desactualizada,
                      sea inexacta o incompleta (Rectificación); que la
                      eliminemos de nuestros registros o bases de datos cuando
                      considere que la misma no está siendo utilizada conforme a
                      los principios, deberes y obligaciones previstas en la
                      normativa (Cancelación); así como oponerse al uso de sus
                      datos personales para fines específicos (Oposición). Estos
                      derechos se conocen como
                    </T>{" "}
                    <strong className="font-semibold text-[#241a35]">
                      <T>derechos ARCO</T>
                    </strong>
                    <T>.</T>
                  </p>

                  <p>
                    <T>Para el ejercicio de los</T>{" "}
                    <strong className="font-semibold text-[#241a35]">
                      <T>Derechos ARCO</T>
                    </strong>{" "}
                    <T>puede hacerlo directamente contactando a</T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      a través de los datos de contacto de nuestro sitio web para
                      iniciar el proceso.
                    </T>
                  </p>

                  <div className="rounded-[22px] border border-[#7b4dff]/12 bg-white p-6">
                    <h3 className="mb-5 text-xl font-bold text-[#241a35]">
                      <T>
                        Procedimiento y Requisitos para el Ejercicio de los
                        Derechos ARCO
                      </T>
                    </h3>

                    <p className="mb-5">
                      <T>
                        Para el ejercicio de los derechos referidos
                        anteriormente, su petición deberá ir acompañada por lo
                        menos de la siguiente información:
                      </T>
                    </p>

                    <ul className="space-y-3">
                      {[
                        "Nombre completo indicando si es Prospecto, cliente, visitante o proveedor, así como su domicilio completo.",
                        "Documentos que acrediten la identidad o la representación legal del titular de los datos personales.",
                        "Descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos mencionados por La Ley.",
                        "Cualquier otro elemento o documento que facilite la localización de los datos personales.",
                        "Aportar la documentación que sustente su petición.",
                      ].map((item, index) => (
                        <li key={item} className="flex items-start gap-4">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-[8px] bg-[#eee9ff] text-[8px] font-bold text-[#5b32df]">
                            {index + 1}
                          </span>

                          <span>
                            <T>{item}</T>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    <T>Para el ejercicio de los</T>{" "}
                    <strong className="font-semibold text-[#241a35]">
                      <T>derechos ARCO</T>
                    </strong>{" "}
                    <T>
                      de datos personales de menores de edad o de personas que
                      se encuentren en estado de interdicción o incapacidad
                      establecida por la ley, se estará a las reglas de
                      representación dispuestas en el Código Civil Federal.
                    </T>
                  </p>

                  <p>
                    <T>
                      En el caso de solicitudes de rectificación, el titular
                      deberá también indicar las modificaciones a realizarse y
                      aportar la documentación que sustente su petición.
                    </T>
                  </p>
                </div>
              </section>

              {/* 09 */}
              <section className="pt-5">
                <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    09
                  </span>

                  <T>
                    USO DE COOKIES, WEB BEACONS O CUALQUIER OTRA TECNOLOGÍA
                    ANÁLOGA
                  </T>
                </h2>

                <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  <p>
                    <T>Le informamos que</T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      podrá incorporar información del Portal al o en el equipo
                      de cómputo del Usuario y/o del Usuario Registrado (en
                      adelante
                    </T>{" "}
                    <strong className="font-semibold text-[#241a35]">
                      <T>“Cookies”</T>
                    </strong>
                    <T>
                      ) cuando éste o aquel acceda al Portal.
                    </T>
                  </p>

                  <p>
                    <strong className="font-semibold text-[#241a35]">
                      <T>Las Cookies</T>
                    </strong>{" "}
                    <T>
                      sólo contendrán información del navegador de la
                      computadora usada por el Usuario o por el Usuario
                      Registrado, según sea el caso, por lo que será anónimo, ya
                      que no se obtendrá ni se proporcionará nombre y apellidos
                      del Usuario o del Usuario Registrado a través de las
                    </T>{" "}
                    <strong className="font-semibold text-[#241a35]">
                      <T>Cookies</T>
                    </strong>
                    <T>.</T>
                  </p>

                  <p>
                    <strong className="font-semibold text-[#241a35]">
                      <T>Las Cookies</T>
                    </strong>{" "}
                    <T>facilitan a</T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>{" "}
                    <T>
                      la identificación de los navegadores previamente
                      registrados después de que éstos se hayan registrado por
                      primera vez, sin que tengan que registrarse en cada visita
                      para acceder a las áreas y servicios reservados
                      exclusivamente a ellos.
                    </T>
                  </p>

                  <p>
                    <T>
                      El Usuario o el Usuario Registrado tiene, en todo momento,
                      la opción de configurar su navegador para que éste le
                      notifique en pantalla la recepción de
                    </T>{" "}
                    <strong className="font-semibold text-[#241a35]">
                      <T>Cookies</T>
                    </strong>{" "}
                    <T>y, a su vez, impedir la instalación de</T>{" "}
                    <strong className="font-semibold text-[#241a35]">
                      <T>Cookies</T>
                    </strong>{" "}
                    <T>en el disco duro de su equipo de cómputo.</T>
                  </p>

                  <p>
                    <strong className="font-semibold text-[#241a35]">
                      <T>Las Cookies</T>
                    </strong>{" "}
                    <T>que sean utilizadas en el Portal podrán ser enviadas por</T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>
                    <T>
                      , en cuyo caso se enviarán desde los distintos servidores
                      operados por éste o, en su caso, desde los servidores de
                      determinados terceros que presten los servicios y envíen
                      las cookies por cuenta de
                    </T>{" "}
                    <strong className="font-semibold text-[#5b32df]">
                      KERVIA DIGITAL
                    </strong>
                    <T>.</T>
                  </p>
                </div>
              </section>

              {/* 10 */}
              <section className="pt-5">
                <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                    10
                  </span>

                  <T>CAMBIOS AL AVISO DE PRIVACIDAD</T>
                </h2>

                <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                  <p>
                    <T>
                      El presente Aviso de Privacidad puede sufrir
                      modificaciones, cambios o actualizaciones derivadas de
                      nuevos requerimientos legales; de nuestras propias
                      necesidades por los productos o servicios que ofrecemos;
                      de nuestras prácticas de Privacidad; de cambios en nuestro
                      modelo de negocio o por otras causas.
                    </T>
                  </p>

                  <p>
                    <T>
                      Nos comprometemos a mantenerlo informado sobre los cambios
                      que pueda sufrir el presente Aviso de Privacidad, por lo
                      que le recomendamos ingresar periódicamente a nuestro
                      sitio web.
                    </T>
                  </p>
                </div>
              </section>
            </div>
          </article>
        </div>

        {/* Pie del documento */}
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-[20px] border border-[#7b4dff]/18 bg-[#171020]/80 px-6 py-5 text-sm text-[#aaa1bd] backdrop-blur-xl sm:flex-row sm:items-center">
          <span>Kervia Digital</span>

          <span className="text-xs">
            kerviadigital.com · ventas@kerviadigital.com
          </span>
        </div>
      </div>
    </main>
  );
}