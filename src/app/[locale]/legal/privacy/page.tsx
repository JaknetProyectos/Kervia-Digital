"use client";

import { useLocale } from "next-intl";

export default function PrivacyPage() {
  const locale = useLocale();
  const isEs = locale === "es";

  // Diccionario de traducciones integrado en el mismo archivo
  const t = {
    header: {
      tag: "Legal · " + (isEs ? "Privacidad" : "Privacy"),
      title: isEs ? "Aviso de privacidad[cite: 1]" : "Privacy Policy[cite: 1]",
      subtitle: isEs
        ? "Información sobre el tratamiento, protección y uso de los datos personales proporcionados a través de nuestros servicios.[cite: 1]"
        : "Information on the processing, protection, and use of personal data provided through our services.[cite: 1]",
    },
    sidebar: {
      docNum: isEs ? "Documento / 01" : "Document / 01",
      desc: isEs
        ? "Este documento describe las finalidades, mecanismos y medidas relacionadas con el tratamiento de datos personales.[cite: 1]"
        : "This document describes the purposes, mechanisms, and measures related to the processing of personal data.[cite: 1]",
      contactTag: isEs ? "Contacto" : "Contact",
      items: isEs
        ? [
            "Identidad del responsable[cite: 1]",
            "Finalidades del tratamiento[cite: 1]",
            "Mecanismo de negativa[cite: 1]",
            "Datos personales tratados[cite: 1]",
            "Menores de edad[cite: 1]",
            "Datos personales sensibles[cite: 1]",
            "Transferencia de datos[cite: 1]",
            "Derechos ARCO[cite: 1]",
            "Uso de cookies[cite: 1]",
            "Cambios al aviso[cite: 1]",
          ]
        : [
            "Identity of the controller[cite: 1]",
            "Processing purposes[cite: 1]",
            "Refusal mechanism[cite: 1]",
            "Processed personal data[cite: 1]",
            "Minors[cite: 1]",
            "Sensitive personal data[cite: 1]",
            "Data transfer[cite: 1]",
            "ARCO Rights[cite: 1]",
            "Use of cookies[cite: 1]",
            "Changes to the notice[cite: 1]",
          ],
    },
    intro: isEs
      ? "La presente política de privacidad se aplica al sitio web de AYRANET S.A. DE C.V. (en adelante “KERVIA DIGITAL”). Si no está de acuerdo, le pedimos que no utilice el sitio web.[cite: 1]"
      : "This privacy policy applies to the website of AYRANET S.A. DE C.V. (hereinafter “KERVIA DIGITAL”). If you do not agree, we ask that you do not use the website.[cite: 1]",
    
    // Secciones del documento
    sections: [
      {
        id: "01",
        title: isEs ? "IDENTIDAD DE “EL RESPONSABLE”[cite: 1]" : "IDENTITY OF “THE CONTROLLER”[cite: 1]",
        content: isEs
          ? "KERVIA DIGITAL es responsable del tratamiento, confidencialidad, uso y protección de los datos personales que nos proporcione y le informamos que éstos serán utilizados única y exclusivamente para los siguientes fines y conforme al presente Aviso de Privacidad.[cite: 1]"
          : "KERVIA DIGITAL is responsible for the processing, confidentiality, use, and protection of the personal data you provide us, and we inform you that these will be used solely and exclusively for the following purposes and in accordance with this Privacy Notice.[cite: 1]",
      },
      {
        id: "02",
        title: isEs ? "FINALIDADES DEL TRATAMIENTO DE DATOS PERSONALES[cite: 1]" : "PURPOSES OF PERSONAL DATA PROCESSING[cite: 1]",
        content: isEs
          ? "Los datos personales que recabamos de Usted, los utilizaremos para las siguientes finalidades principales y/o primarias, las cuales son necesarias para proporcionarle nuestros productos y/o servicios:[cite: 1]"
          : "The personal data we collect from you will be used for the following main and/or primary purposes, which are necessary to provide our products and/or services:[cite: 1]",
        bullets: isEs
          ? [
              "Proporcionarle nuestros productos y/o servicios cuando Usted los solicita;[cite: 1]",
              "Adicionalmente, con su consentimiento expreso en cualquiera de nuestros formularios en nuestro sitio web, utilizaremos sus datos para ponernos en contacto con Usted;[cite: 1]",
              "Responder a sus dudas, comentarios y seguimiento a cualquier solicitud que nos haga a través de nuestro sitio web en el apartado de Contacto;[cite: 1]",
              "Contactarle para dar seguimiento a su solicitud en nuestros productos y/o servicios;[cite: 1]",
              "Llevar un Archivo de registros y expediente de la relación contractual para seguimiento de servicios futuros;[cite: 1]",
              "Atender sus llamadas y proporcionar soporte de nuestros servicios;[cite: 1]",
              "Procesar, completar, modificar, actualizar, cancelar los servicios contratados;[cite: 1]",
              "Gestionar y recibir pagos conforme a la relación jurídica que con usted se tenga o se llegase a tener;[cite: 1]",
              "Informar sobre nuevos servicios o productos relacionados con servicios prestados anteriormente;[cite: 1]",
              "Controlar el acceso de visitas.[cite: 1]",
            ]
          : [
              "Provide our products and/or services when you request them;[cite: 1]",
              "Additionally, with your express consent on any of our website forms, we will use your data to contact you;[cite: 1]",
              "Respond to your questions, comments, and follow up on any request made through our website's Contact section;[cite: 1]",
              "Contact you to follow up on your request regarding our products and/or services;[cite: 1]",
              "Keep a record archive and contractual relationship file to track future services;[cite: 1]",
              "Answer your calls and provide support for our services;[cite: 1]",
              "Process, complete, modify, update, and cancel contracted services;[cite: 1]",
              "Manage and receive payments according to the legal relationship established with you;[cite: 1]",
              "Inform about new services or products related to previously provided services;[cite: 1]",
              "Control visitor access.[cite: 1]",
            ],
        secondaryIntro: isEs
          ? "Adicionalmente, como Finalidades Secundarias o Accesorias, es decir, que no son necesarias pero que nos permiten brindarle un mejor servicio, sus datos personales serán utilizados para:[cite: 1]"
          : "Additionally, as Secondary or Accessory Purposes, meaning those not strictly necessary but that allow us to provide better service, your personal data will be used to:[cite: 1]",
        secondaryBullets: isEs
          ? [
              "Informarle sobre nuevos productos y/o servicios, cambios en los mismos y promociones;[cite: 1]",
              "Para enviarle publicidad generalizada y/o personalizada para fines de mercadotecnia y estadísticos;[cite: 1]",
              "Para invitarlo a participar en promociones, ofertas y campañas de publicidad propias o de terceros;[cite: 1]",
              "Elaborar estudios que son necesarios para determinar hábitos de uso y consumo;[cite: 1]",
              "Consultarle sobre la calidad de nuestro servicio y comprender las necesidades específicas de Usted, y así poderle prestar un mejor servicio.[cite: 1]",
            ]
          : [
              "Inform you about new products and/or services, changes to them, and promotions;[cite: 1]",
              "Send you generalized and/or personalized advertising for marketing and statistical purposes;[cite: 1]",
              "Invite you to participate in our own or third-party promotions, offers, and advertising campaigns;[cite: 1]",
              "Conduct studies necessary to determine usage and consumption habits;[cite: 1]",
              "Consult you on the quality of our service and understand your specific needs to provide better service.[cite: 1]",
            ],
        footerText: isEs
          ? [
              "Sus Datos Personales serán tratados únicamente por el tiempo necesario a fin de cumplir con las finalidades descritas en el presente Aviso de Privacidad que se ponga a su disposición, y en su caso conforme lo establecen las disposiciones legales respectivas.[cite: 1]",
              "Seguridad y Protección de Datos Personales: Los datos personales que proporcione a KERVIA DIGITAL se encontrarán debidamente protegidos a través de medidas de seguridad tecnológicas, físicas y administrativas.[cite: 1]",
              "Sus datos personales sólo estarán disponibles al personal autorizado por KERVIA DIGITAL para el procesamiento de la información y sólo para las finalidades descritas en este aviso.[cite: 1]",
              "Cuando ya no sea necesario para los objetivos descritos anteriormente, sus datos personales serán cancelados por KERVIA DIGITAL salvo que sean legalmente requeridos.[cite: 1]",
            ]
          : [
              "Your Personal Data will be processed only for the time necessary to fulfill the purposes described in this Privacy Notice, and where appropriate, as established by respective legal provisions.[cite: 1]",
              "Security and Protection of Personal Data: The personal data you provide to KERVIA DIGITAL will be duly protected through technological, physical, and administrative security measures.[cite: 1]",
              "Your personal data will only be available to authorized KERVIA DIGITAL personnel for information processing and only for the purposes described in this notice.[cite: 1]",
              "When no longer necessary for the objectives described above, your personal data will be canceled by KERVIA DIGITAL unless legally required.[cite: 1]",
            ],
      },
      {
        id: "03",
        title: isEs 
          ? "MECANISMO PARA QUE EL TITULAR PUEDA MANIFESTAR SU NEGATIVA PARA FINALIDADES SECUNDARIAS O ACCESORIAS[cite: 1]" 
          : "MECHANISM FOR THE HOLDER TO EXPRESS REFUSAL FOR SECONDARY OR ACCESSORY PURPOSES[cite: 1]",
        content: isEs
          ? "En caso de que no desee que sus datos personales sean tratados para todas o algunas de las finalidades secundarias o accesorias, Usted puede negarnos su consentimiento desde este momento enviando su solicitud al correo de KERVIA DIGITAL que proporcionarnos en nuestro sitio web.[cite: 1]"
          : "In case you do not wish your personal data to be processed for all or some of the secondary or accessory purposes, you may deny us your consent from this moment by sending your request to the KERVIA DIGITAL email provided on our website.[cite: 1]",
      },
      {
        id: "04",
        title: isEs ? "LOS DATOS PERSONALES TRATADOS[cite: 1]" : "PROCESSED PERSONAL DATA[cite: 1]",
        content: isEs
          ? "Los medios para recabar datos personales, con las finalidades descritas en el presente aviso de privacidad son:[cite: 1]"
          : "The means to collect personal data, for the purposes described in this privacy notice, are:[cite: 1]",
        bullets: isEs
          ? [
              "De forma directa, cuando usted nos los proporciona por medios electrónicos, ópticos, sonoros, visuales, vía telefónica, por medio de nuestro portal de internet o por medio de correo electrónico.[cite: 1]",
              "De forma indirecta, a través de una fuente de acceso público o una transferencia.[cite: 1]",
            ]
          : [
              "Directly, when you provide them to us by electronic, optical, sound, visual means, by phone, through our internet portal, or via email.[cite: 1]",
              "Indirectly, through a public access source or a transfer.[cite: 1]",
            ],
        footerText: isEs
          ? [
              "Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, le informamos que podemos recabar los siguientes datos personales: Nombre (s). Apellido paterno, materno o razón social; Nombre (s). Apellido paterno, materno del representante legal; domicilio fiscal (calle, número interior, exterior; colonia, delegación o municipio; código postal; Estado; Ciudad y País); Registro Federal de Contribuyentes; Tax ID, correo electrónico, teléfono fijo y/o móvil, Acta constitutiva; sitio web o portal de Internet.[cite: 1]",
              "Respecto a los datos para realizar el pago a través del sitio web de KERVIA DIGITAL, la información que proporcione no constituye ni forma parte de los Datos Personales sujetos a la protección de este Aviso de Privacidad.[cite: 1]"
            ]
          : [
              "To carry out the purposes described in this Privacy Notice, we inform you that we may collect the following personal data: Name(s). Paternal, maternal surname or business name; Name(s). Paternal, maternal surname of the legal representative; tax address (street, interior/exterior number; neighborhood, delegation or municipality; zip code; State; City and Country); Federal Taxpayer Registry (RFC); Tax ID, email, landline and/or mobile phone, Articles of Incorporation; website or internet portal.[cite: 1]",
              "Regarding the data to make payments through the KERVIA DIGITAL website, the information you provide does not constitute nor form part of the Personal Data subject to protection under this Privacy Notice.[cite: 1]"
            ]
      },
      {
        id: "05",
        title: isEs ? "MENORES DE EDAD[cite: 1]" : "MINORS[cite: 1]",
        footerText: isEs
          ? [
              "KERVIA DIGITAL conoce la importancia que tiene la protección de los datos personales de los menores de edad o de personas que se encuentren en estado de interdicción o incapacidad establecida por la ley, por lo que KERVIA DIGITAL no obtiene, usa, divulga o almacena información relacionada con menores de edad o de personas que se encuentren en estado de interdicción o incapacidad establecida por la ley.[cite: 1]",
              "Si Usted es padre/madre o tutor y tiene noticia de que algún menor de edad o de personas que se encuentren en estado de interdicción o incapacidad establecida por la ley haya proporcionado sus datos personales sin su consentimiento, puede ejercer sus “Derechos ARCO”.[cite: 1]",
              "Si Usted es menor de edad, por favor absténgase de utilizar este sitio web, a menos que cuente con autorización de un padre o tutor.[cite: 1]"
            ]
          : [
              "KERVIA DIGITAL recognizes the importance of protecting the personal data of minors or persons in a state of interdiction or incapacity established by law, which is why KERVIA DIGITAL does not obtain, use, disclose, or store information related to minors or persons in a state of interdiction or incapacity established by law.[cite: 1]",
              "If you are a parent or guardian and become aware that a minor or a person in a state of interdiction or incapacity established by law has provided their personal data without your consent, you may exercise your “ARCO Rights”.[cite: 1]",
              "If you are a minor, please refrain from using this website unless you have authorization from a parent or guardian.[cite: 1]"
            ]
      },
      {
        id: "06",
        title: isEs ? "DATOS PERSONALES SENSIBLES[cite: 1]" : "SENSITIVE PERSONAL DATA[cite: 1]",
        footerText: isEs
          ? [
              "Le informamos que KERVIA DIGITAL no recaba datos personales sensibles, entendiéndose por ello, como aquellos datos personales que afecten a la esfera más íntima del titular, o cuya utilización indebida pueda dar origen a discriminación o conlleve un riesgo grave para éste.[cite: 1]",
              "En particular, se consideran sensibles aquellos que puedan revelar aspectos como origen racial o étnico, estado de salud presente y futuro, información genética, creencias religiosas, filosóficas y morales, afiliación sindical, opiniones políticas, preferencia sexual.[cite: 1]"
            ]
          : [
              "We inform you that KERVIA DIGITAL does not collect sensitive personal data, understood as those personal data that affect the most intimate sphere of the owner, or whose improper use could give rise to discrimination or entail a serious risk to them.[cite: 1]",
              "In particular, data that may reveal aspects such as racial or ethnic origin, present and future health status, genetic information, religious, philosophical and moral beliefs, union affiliation, political opinions, and sexual preference are considered sensitive.[cite: 1]"
            ]
      },
      {
        id: "07",
        title: isEs ? "TRANSFERENCIA DE DATOS PERSONALES[cite: 1]" : "TRANSFER OF PERSONAL DATA[cite: 1]",
        content: isEs
          ? "Únicamente serán transferidos sus datos personales a terceros nacionales o extranjeros, que estén relacionados jurídica o comercialmente con KERVIA DIGITAL para cumplir con las finalidades descritas en el Aviso de Privacidad y en sus actualizaciones puestas a su disposición, por lo que KERVIA DIGITAL podrá transferir sus datos personales en los casos previstos y autorizados por la ley conforme a lo siguiente:[cite: 1]"
          : "Your personal data will only be transferred to national or foreign third parties legally or commercially related to KERVIA DIGITAL to fulfill the purposes described in the Privacy Notice and its updates, whereby KERVIA DIGITAL may transfer your personal data in cases provided for and authorized by law according to the following:[cite: 1]",
        bullets: isEs
          ? [
              "(i) Al Servicio de Administración Tributaria, en virtud de los procesos de emisión y envío de facturas electrónicas por Internet;[cite: 1]",
              "(ii) A las personas morales o cualquier Entidad que formen parte del mismo grupo económico de control al que pertenece KERVIA DIGITAL[cite: 1]",
              "(iii) A compañías afiliadas o no afiliadas que asisten, apoyan o coadyuvan a KERVIA DIGITAL;[cite: 1]",
              "(iv) A las diferentes autoridades para el desahogo de requerimientos o contestación de éstos en algún tipo de legislación o normatividad;[cite: 1]",
              "(v) A su Banco en caso de realizar el cobro de nuestros servicios;[cite: 1]",
              "(vi) A Contadores y/o Abogados para el manejo, control y registro conforme a la normativa aplicable de los movimientos u operaciones económicos que hace la empresa, así como para salvaguardar nuestros derechos y de terceros.[cite: 1]"
            ]
          : [
              "(i) To the Tax Administration Service, due to the electronic invoice issuance and sending processes via the Internet;[cite: 1]",
              "(ii) To legal entities or any Entity forming part of the same economic control group to which KERVIA DIGITAL belongs;[cite: 1]",
              "(iii) To affiliated or non-affiliated companies that assist, support, or cooperate with KERVIA DIGITAL;[cite: 1]",
              "(iv) To various authorities for the fulfillment of requirements or responses to them under any type of legislation or regulation;[cite: 1]",
              "(v) To your Bank in case of charging for our services;[cite: 1]",
              "(vi) To Accountants and/or Lawyers for the management, control, and registration according to applicable regulations of economic movements or operations made by the company, as well as to safeguard our rights and those of third parties.[cite: 1]"
            ],
        footerText: isEs
          ? ["Le informamos que sus datos personales no serán comercializados, cedidos, traspasados o informados a terceros sin el consentimiento expreso y por escrito del Titular.[cite: 1]"]
          : ["We inform you that your personal data will not be commercialized, assigned, transferred, or reported to third parties without the express written consent of the Owner.[cite: 1]"]
      },
      {
        id: "08",
        title: isEs ? "“DERECHOS ARCO”[cite: 1]" : "“ARCO RIGHTS”[cite: 1]",
        footerText: isEs
          ? [
              "Le informamos que Usted tiene derecho a conocer qué datos personales tenemos de Usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.[cite: 1]",
              "Para el ejercicio de los Derechos ARCO puede hacerlo directamente contactando a KERVIA DIGITAL a través de los datos de contacto de nuestro sitio web para iniciar el proceso.[cite: 1]",
              "Procedimiento y Requisitos para el Ejercicio de los Derechos ARCO: Para el ejercicio de los derechos referidos anteriormente, su petición deberá ir acompañada por lo menos de la siguiente información: Nombre completo indicando si es Prospecto, cliente, visitante o proveedor, así como su domicilio completo. Documentos que acrediten la identidad o la representación legal del titular de los datos personales. Descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos mencionados por La Ley. Cualquier otro elemento o documento que facilite la localización de los datos personales. Aportar la documentación que sustente su petición.[cite: 1]",
              "Para el ejercicio de los derechos ARCO de datos personales de menores de edad o de personas que se encuentren en estado de interdicción o incapacidad establecida por la ley, se estará a las reglas de representación dispuestas en el Código Civil Federal.[cite: 1]",
              "En el caso de solicitudes de rectificación, el titular deberá también indicar las modificaciones a realizarse y aportar la documentación que sustente su petición.[cite: 1]"
            ]
          : [
              "We inform you that you have the right to know what personal data we have about you, what we use it for, and the conditions of its use (Access). Likewise, it is your right to request the correction of your personal information if it is outdated, inaccurate, or incomplete (Rectification); that we delete it from our records or databases when you consider that it is not being used in accordance with the principles, duties, and obligations provided by regulations (Cancellation); as well as to oppose the use of your personal data for specific purposes (Opposition). These rights are known as ARCO rights.[cite: 1]",
              "To exercise your ARCO Rights, you may do so directly by contacting KERVIA DIGITAL through our website's contact details to start the process.[cite: 1]",
              "Procedure and Requirements to Exercise ARCO Rights: Your request must be accompanied by at least the following information: Full name indicating whether you are a Prospect, client, visitor, or supplier, along with full address. Documents verifying identity or legal representation. Clear description of personal data for which rights are exercised. Any other element facilitating data location. Documentation supporting the request.[cite: 1]",
              "For exercising ARCO rights concerning personal data of minors or legally incapacitated persons, the representation rules set in the Federal Civil Code will apply.[cite: 1]",
              "For rectification requests, the owner must indicate the modifications and provide supporting documentation.[cite: 1]"
            ]
      },
      {
        id: "09",
        title: isEs ? "USO DE COOKIES, WEB BEACONS O CUALQUIER OTRA TECNOLOGÍA ANÁLOGA[cite: 1]" : "USE OF COOKIES, WEB BEACONS, OR ANY ANALOGOUS TECHNOLOGY[cite: 1]",
        footerText: isEs
          ? [
              "Le informamos que KERVIA DIGITAL podrá incorporar información del Portal al o en el equipo de cómputo del Usuario y/o del Usuario Registrado (en adelante “Cookies”) cuando éste o aquel acceda al Portal.[cite: 1]",
              "Las Cookies sólo contendrán información del navegador de la computadora usada por el Usuario o por el Usuario Registrado, según sea el caso, por lo que será anónimo, ya que no se obtendrá ni se proporcionará nombre y apellidos del Usuario o del Usuario Registrado a través de las Cookies. Las Cookies facilitan a KERVIA DIGITAL la identificación de los navegadores previamente registrados después de que éstos se hayan registrado por primera vez, sin que tengan que registrarse en cada visita para acceder a las áreas y servicios reservados exclusivamente a ellos.[cite: 1]",
              "El Usuario o el Usuario Registrado tiene, en todo momento, la opción de configurar su navegador para que éste le notifique en pantalla la recepción de Cookies y, a su vez, impedir la instalación de Cookies en el disco duro de su equipo de cómputo.[cite: 1]",
              "Las Cookies que sean utilizadas en el Portal podrán ser enviadas por KERVIA DIGITAL, en cuyo caso se enviarán desde los distintos servidores operados por éste o, en su caso, desde los servidores de determinados terceros que presten los servicios y envíen las cookies por cuenta de KERVIA DIGITAL.[cite: 1]"
            ]
          : [
              "We inform you that KERVIA DIGITAL may incorporate Portal information into the User's and/or Registered User's computer equipment (hereinafter “Cookies”) upon access.[cite: 1]",
              "Cookies will only contain browser information and remain anonymous. They facilitate KERVIA DIGITAL in identifying previously registered browsers so users do not need to register on every visit to access reserved areas.[cite: 1]",
              "The User has the option at all times to configure their browser to notify them of Cookie reception and prevent their installation on their hard drive.[cite: 1]",
              "Cookies used on the Portal may be sent by KERVIA DIGITAL or from servers of specific third parties providing services on its behalf.[cite: 1]"
            ]
      },
      {
        id: "10",
        title: isEs ? "CAMBIOS AL AVISO DE PRIVACIDAD[cite: 1]" : "CHANGES TO THE PRIVACY NOTICE[cite: 1]",
        footerText: isEs
          ? [
              "El presente Aviso de Privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de Privacidad; de cambios en nuestro modelo de negocio o por otras causas.[cite: 1]",
              "Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente Aviso de Privacidad, por lo que le recomendamos ingresar periódicamente a nuestro sitio web.[cite: 1]"
            ]
          : [
              "This Privacy Notice may undergo modifications, changes, or updates derived from new legal requirements; our own needs for the products or services we offer; our Privacy practices; changes in our business model, or other causes.[cite: 1]",
              "We commit to keeping you informed about the changes this Privacy Notice may undergo, so we recommend that you periodically visit our website.[cite: 1]"
            ]
      }
    ]
  };

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
              {t.header.tag}
            </div>
          </div>

          <div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#f6f2ff] md:text-5xl lg:text-6xl">
              {t.header.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#aaa1bd]">
              {t.header.subtitle}
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
                {t.sidebar.docNum}
              </span>
              <h2 className="mb-5 text-2xl font-bold tracking-[-0.03em] text-[#f6f2ff]">
                Kervia Digital
              </h2>
              <p className="text-sm leading-relaxed text-[#aaa1bd]">
                {t.sidebar.desc}
              </p>

              <div className="my-7 h-px bg-gradient-to-r from-[#7b4dff]/40 via-[#ff4fd8]/25 to-transparent" />

              <div className="space-y-4">
                {t.sidebar.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] border border-[#7b4dff]/20 bg-[#7b4dff]/10 text-[9px] font-bold text-[#c6bbff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-[#bdb5c9]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[18px] border border-white/[0.07] bg-[#100c19]/55 p-5">
                <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#a99cff]">
                  {t.sidebar.contactTag}
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
                <p>{t.intro}</p>
              </div>

              {/* Renderizado dinámico de las secciones */}
              {t.sections.map((sec) => (
                <section key={sec.id} className="pt-5">
                  <h2 className="mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#171020]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#eee9ff] text-[10px] font-bold text-[#5b32df]">
                      {sec.id}
                    </span>
                    {sec.title}
                  </h2>

                  <div className="space-y-6 border-l border-[#7b4dff]/15 pl-6 sm:pl-8">
                    {/* Renderiza el contenido inicial si existe */}
                    {sec.content && <p>{sec.content}</p>}

                    {/* Renderiza los bullets principales si existen (ej. sección 2, 4, 7) */}
                    {sec.bullets && (
                      <ul className="space-y-4">
                        {sec.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-4 rounded-[18px] border border-[#7b4dff]/10 bg-white p-5">
                            <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#7b4dff]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Bloque especial para finalidades secundarias (sección 2) */}
                    {sec.secondaryIntro && (
                      <div className="rounded-[22px] border border-[#7b4dff]/12 bg-white p-6">
                        <p className="mb-5 font-medium text-[#241a35]">
                          {sec.secondaryIntro}
                        </p>
                        <ul className="space-y-3">
                          {sec.secondaryBullets.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff4fd8]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Párrafos adicionales/finales de cada sección */}
                    {sec.footerText && sec.footerText.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                </section>
              ))}
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