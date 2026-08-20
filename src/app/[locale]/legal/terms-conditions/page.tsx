"use client";

import { useLocale } from "next-intl";

export default function TermsConditionsPage() {
  const locale = useLocale();
  const isEs = locale === "es";

  const sectionTitle =
    "mt-12 mb-5 flex items-start gap-4 text-2xl font-bold tracking-[-0.025em] text-[#23152d]";
  const sectionNumber =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#f1e7f8] text-[10px] font-bold text-[#743aa2]";
  const sectionContent =
    "space-y-6 border-l border-[#743aa2]/15 pl-6 sm:pl-8";
  const legalList =
    "space-y-3 rounded-[22px] border border-[#743aa2]/10 bg-[#fffdfb] p-6";

  const t = {
    header: {
      tag: isEs ? "Documento contractual" : "Contractual Document",
      title: isEs ? "Términos y Condiciones" : "Terms and Conditions",
      subtitle: isEs
        ? "Condiciones aplicables al acceso, navegación, contratación y utilización de nuestros servicios."
        : "Conditions applicable to access, navigation, contracting, and use of our services.",
      badge: isEs
        ? "Claridad · Responsabilidad · Cumplimiento"
        : "Clarity · Responsibility · Compliance",
    },
    intro: isEs
      ? [
          "Los presentes términos y condiciones se aplican al sitio web de AYRANET S.A. DE C.V. (en adelante “KERVIA DIGITAL”).",
          "Estos Términos y Condiciones se establecen entre el Cliente y KERVIA DIGITAL. Los términos y condiciones detallados a continuación constituyen la totalidad del acuerdo entre el Cliente y KERVIA DIGITAL respecto a la prestación de servicios.",
          "Estos Términos de uso del sitio web le informan de los términos y condiciones según los cuales puede hacer uso de nuestro sitio web, o cualquier otro de nuestros sitios desde los que ha vinculado (colectivamente, nuestro “Sitio”), ya sea como invitado o como usuario autorizado. El uso de nuestro sitio incluye acceder, navegar o registrarse para usar nuestro sitio.",
          "Lea estos Términos detenidamente antes de comenzar a utilizar nuestro Sitio, ya que se aplicarán a su uso de nuestro Sitio.",
          "Al acceder, navegar o usar este Sitio, usted reconoce que ha leído, entendido y acepta estar sujeto a estos Términos. Si por cualquier motivo no está de acuerdo con los términos y condiciones aquí establecidos, le sugerimos no utilizar este Sitio, ya que por el sólo hecho de acceder y hacer uso de este, Usted se adhiere de forma inmediata a todos y cada uno de los siguientes Términos.",
        ]
      : [
          "These terms and conditions apply to the website of AYRANET S.A. DE C.V. (hereinafter “KERVIA DIGITAL”).",
          "These Terms and Conditions are established between the Client and KERVIA DIGITAL. The terms and conditions detailed below constitute the entire agreement between the Client and KERVIA DIGITAL regarding the provision of services.",
          "These website Terms of Use inform you of the terms and conditions under which you may make use of our website, or any other of our sites you have linked from (collectively, our “Site”), whether as a guest or an authorized user. The use of our site includes accessing, browsing, or registering to use our site.",
          "Please read these Terms carefully before starting to use our Site, as they will apply to your use of our Site.",
          "By accessing, browsing, or using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms. If for any reason you do not agree with the terms and conditions set forth herein, we suggest you do not use this Site, since by the mere fact of accessing and using it, you immediately adhere to each and every one of the following Terms.",
        ],
    sections: [
      {
        id: "01",
        title: isEs ? "PROPÓSITO DEL SITIO" : "PURPOSE OF THE SITE",
        content: isEs
          ? ["El propósito del Sitio es brindar información y noticias, así como poner a la venta servicios relacionados con KERVIA DIGITAL."]
          : ["The purpose of the Site is to provide information and news, as well as to offer services related to KERVIA DIGITAL for sale."],
      },
      {
        id: "02",
        title: isEs ? "PRIVACIDAD" : "PRIVACY",
        content: isEs
          ? ["Su información personal se utilizará de acuerdo con nuestra política de privacidad. Puede acceder a este documento en nuestro sitio web."]
          : ["Your personal information will be used in accordance with our privacy policy. You can access this document on our website."],
      },
      {
        id: "03",
        title: isEs ? "SERVICIOS" : "SERVICES",
        content: isEs
          ? [
              "KERVIA DIGITAL proporcionará al Cliente los servicios descritos en el Pedido (los “Servicios”) según lo descrito en los presentes Términos y Condiciones.",
              "El pedido contratado comienza a correr desde el día que se realiza el pago.",
              "El pedido sólo podrá ser utilizado en un mismo negocio. Si el Cliente desea impulsar negocios adicionales, deberá realizar una contratación de servicios independiente para cada uno de ellos.",
            ]
          : [
              "KERVIA DIGITAL will provide the Client with the services described in the Order (the “Services”) as described in these Terms and Conditions.",
              "The contracted order starts running from the day the payment is made.",
              "The order can only be used for the same business. If the Client wishes to promote additional businesses, an independent service contracting must be made for each of them.",
            ],
      },
      {
        id: "04",
        title: isEs ? "OBLIGACIONES DEL CLIENTE" : "CLIENT OBLIGATIONS",
        content: isEs
          ? ["El Cliente se compromete a lo siguiente:"]
          : ["The Client agrees to the following:"],
        bullets: isEs
          ? [
              "Cooperar con KERVIA DIGITAL y a responder con prontitud todo lo relacionado con los Servicios.",
              "Proporcionar a KERVIA DIGITAL los materiales e información que pueda solicitar razonablemente para llevar a cabo los Servicios.",
              "Obtener y mantener todas las licencias y consentimientos necesarios y cumplir con todas las leyes aplicables en relación con los Servicios antes de la fecha de inicio de los Servicios.",
            ]
          : [
              "Cooperate with KERVIA DIGITAL and respond promptly to everything related to the Services.",
              "Provide KERVIA DIGITAL with the materials and information it may reasonably request to carry out the Services.",
              "Obtain and maintain all necessary licenses and consents and comply with all applicable laws regarding the Services before the start date of the Services.",
            ],
        footerText: isEs
          ? ["Si el cumplimiento de las obligaciones de KERVIA DIGITAL bajo este Acuerdo es impedido o retrasado por cualquier acto u omisión del Cliente o sus empleados, agentes, subcontratistas o consultores, KERVIA DIGITAL no será considerada en incumplimiento de sus obligaciones o responsable por cualquier costo, cargo o pérdidas que surjan directa o indirectamente de dicha demora."]
          : ["If KERVIA DIGITAL's fulfillment of obligations under this Agreement is prevented or delayed by any act or omission of the Client or its employees, agents, subcontractors, or consultants, KERVIA DIGITAL shall not be considered in breach of its obligations or liable for any cost, charge, or losses arising directly or indirectly from such delay."],
      },
      {
        id: "05",
        title: isEs ? "CUOTAS Y GASTOS" : "FEES AND EXPENSES",
        content: isEs
          ? [
              "El Cliente, en consideración de los Servicios que KERVIA DIGITAL proporciona en virtud del Pedido, deberá: (a) pagar las tarifas establecidas en el Pedido; y (b) pagar a KERVIA DIGITAL todos los gastos incurridos por KERVIA DIGITAL a solicitud del Cliente en relación con la prestación de los Servicios.",
              "Los precios mostrados en el Sitio podrán ser corregidos en cualquier momento en el supuesto de que por un error involuntario llegara a aparecer un precio en $0.00 (cero pesos 00/100 M.N.) o un precio en blanco, dicho precio no representa un precio de compraventa final, por lo que deberá consultar el precio final directamente con KERVIA DIGITAL a través de nuestra información de contacto, o llenando el formulario de contacto en nuestro sitio.",
            ]
          : [
              "The Client, in consideration of the Services KERVIA DIGITAL provides under the Order, shall: (a) pay the fees set forth in the Order; and (b) pay KERVIA DIGITAL all expenses incurred by KERVIA DIGITAL at the Client's request regarding the provision of the Services.",
              "Prices shown on the Site may be corrected at any time in the event that due to an involuntary error a price of $0.00 or a blank price appears, such price does not represent a final sale price, so you must consult the final price directly with KERVIA DIGITAL through our contact information, or by filling out the contact form on our site.",
            ],
      },
      {
        id: "06",
        title: isEs ? "PROPIEDAD INTELECTUAL" : "INTELLECTUAL PROPERTY",
        content: isEs
          ? ["Todos los derechos de propiedad intelectual, incluidos los derechos de autor, patentes, divulgaciones de patentes e invenciones (patentables o no), marcas comerciales, marcas de servicio, secretos comerciales, conocimientos técnicos y otra información confidencial, imagen comercial, nombres comerciales, logotipos, nombres corporativos y nombres de dominio, junto con todo el fondo de comercio asociado, los trabajos derivados y todos los demás derechos (colectivamente, “Derechos de propiedad intelectual”) en y para todos los documentos, productos de trabajo y otros materiales que se entregan al Cliente en virtud de estos Términos o preparados por o en nombre de KERVIA DIGITAL en el curso de la prestación de los Servicios, incluidos los elementos identificados como tales en el Pedido (colectivamente, los “Entregables”), excepto la Información Confidencial del Cliente o los materiales del cliente, serán propiedad de KERVIA DIGITAL."]
          : ["All intellectual property rights, including copyrights, patents, patent disclosures and inventions (whether patentable or not), trademarks, service marks, trade secrets, know-how and other confidential information, trade dress, trade names, logos, corporate names and domain names, together with all associated goodwill, derivative works and all other rights (collectively, “Intellectual Property Rights”) in and to all documents, work products and other materials delivered to the Client under these Terms or prepared by or on behalf of KERVIA DIGITAL in the course of providing the Services, including items identified as such in the Order (collectively, the “Deliverables”), except the Client's Confidential Information or materials, will be owned by KERVIA DIGITAL."],
      },
      {
        id: "07",
        title: isEs ? "ACCESO A NUESTRO SITIO" : "ACCESS TO OUR SITE",
        content: isEs
          ? [
              "Intentaremos que nuestro Sitio esté disponible, pero no podemos garantizar que nuestro Sitio funcione de manera continua o sin interrupciones o que esté libre de errores o virus, y no podemos aceptar ninguna responsabilidad por falta de disponibilidad, interrupciones, errores o virus.",
              "No debe intentar interferir con el funcionamiento adecuado de nuestro Sitio y, en particular, no debe intentar eludir la seguridad, manipular, piratear o interrumpir de cualquier otro modo cualquier sistema informático, servidor, sitio web, enrutador o cualquier otro dispositivo conectado a Internet. Usted es responsable de hacer todos los arreglos necesarios para tener acceso a nuestro Sitio.",
              "También es responsable de asegurarse de que todas las personas que accedan a nuestro Sitio a través de su conexión a Internet conozcan estos Términos y otros términos y condiciones aplicables, y que los cumplan.",
            ]
          : [
              "We will try to make our Site available, but we cannot guarantee that our Site will operate continuously or without interruptions or that it will be free from errors or viruses, and we cannot accept any liability for unavailability, interruptions, errors, or viruses.",
              "You must not attempt to interfere with the proper working of our Site and, in particular, you must not attempt to circumvent security, tamper with, hack into, or otherwise disrupt any computer system, server, website, router, or any other Internet-connected device. You are responsible for making all arrangements necessary for you to have access to our Site.",
              "You are also responsible for ensuring that all persons who access our Site through your internet connection are aware of these Terms and other applicable terms and conditions, and that they comply with them.",
            ],
      },
      {
        id: "08",
        title: isEs ? "USO Y RESTRICCIONES" : "USE AND RESTRICTIONS",
        content: isEs
          ? [
              "Usted acepta no descompilar, realizar ingeniería inversa, desmontar, alquilar, arrendar, prestar, sublicenciar ni crear trabajos derivados de ningún producto o servicio de KERVIA DIGITAL, incluida la información y el software disponibles para su uso. A menos que KERVIA DIGITAL especifique lo contrario, no puede copiar, guardar, descargar, modificar, reproducir, volver a publicar, distribuir, transmitir o utilizar para ningún propósito, ya sea comercial o no comercial, los sitios web de KERVIA DIGITAL o cualquier información contenida en ellos, excepto para el grado necesario para que utilice y navegue por los sitios web de KERVIA DIGITAL y los productos y servicios de KERVIA DIGITAL.",
              "No puede publicar, distribuir, extraer, reutilizar o reproducir ninguna parte del Sitio en ninguna forma (incluida la fotocopiadora o el almacenamiento en cualquier medio por medios electrónicos) que no sea (i) según lo permita específicamente la ley aplicable, y (ii) haciendo copias como parte de cualquier acto incidental necesario durante su visualización del Sitio o con fines exclusivamente educativos y no comerciales.",
              "En particular, pero no sin limitación, acepta no:",
            ]
          : [
              "You agree not to decompile, reverse engineer, disassemble, rent, lease, loan, sublicense, or create derivative works from any KERVIA DIGITAL product or service, including information and software available for use. Unless KERVIA DIGITAL specifies otherwise, you may not copy, save, download, modify, reproduce, republish, distribute, transmit, or use for any purpose, whether commercial or non-commercial, KERVIA DIGITAL websites or any information contained therein, except to the extent necessary for you to use and navigate KERVIA DIGITAL websites and products and services.",
              "You may not publish, distribute, extract, reuse, or reproduce any part of the Site in any form (including photocopying or storage on any medium by electronic means) other than (i) as specifically permitted by applicable law, and (ii) making copies as part of any necessary incidental act during your viewing of the Site or for exclusively educational and non-commercial purposes.",
              "In particular, but without limitation, you agree not to:",
            ],
        bullets: isEs
          ? [
              "Descargar o extraer cantidades sustanciales de información sobre los usuarios registrados o sus empresas.",
              "Poner cualquier información de los productos de KERVIA DIGITAL a disposición de terceros que de otro modo no tendrían acceso a dicha información.",
            ]
          : [
              "Download or extract substantial amounts of information about registered users or their companies.",
              "Make any information from KERVIA DIGITAL products available to third parties who otherwise would not have access to such information.",
            ],
        footerText: isEs
          ? [
              "Usted reconoce que al enviar su información personal y de la empresa a un sitio web de KERVIA DIGITAL o cualquier servicio de KERVIA DIGITAL, la otorga a KERVIA DIGITAL y a sus respectivos licenciatarios, y asigna una licencia libre de regalías para usar esa información dentro de sus sitios web y en las formas necesarias para el funcionamiento de los productos y servicios de KERVIA DIGITAL. La información de uso generada por el uso de los sistemas (incluidos los mensajes y las invitaciones a reuniones) también pueden ser visibles para sus colegas que utilizan la misma plataforma, así como para todos los colegas de la empresa con los que ha compartido mensajes.",
              "Usted reconoce que al utilizar cualquier sistema de red o cualquier plataforma comunitaria disponible en este sitio web, estará sujeto a las siguientes condiciones de comportamiento de KERVIA DIGITAL.",
              "Usted acepta que cualquier información que ingrese es verdadera y precisa a su leal saber y entender; (b) acepta respetar a otros usuarios de los servicios y se abstendrá de contactar a otros usuarios con anuncios o solicitudes no dirigidas; (c) no enviará mensajes, cargará ni vinculará ningún contenido difamatorio, ofensivo, acosador, engañoso o ilegal; (d) no cargará ni vinculará contenido que viole los derechos de propiedad intelectual o los derechos de privacidad de un tercero.",
              "KERVIA DIGITAL se reserva el derecho de eliminar cualquier mensaje, contenido o hipervínculo que crea, a su sola discreción, que infringe estas condiciones y de bloquear temporal o permanentemente a los usuarios que incumplen persistentemente estas condiciones. KERVIA DIGITAL no aceptará responsabilidad por la exactitud o confiabilidad de la información enviada por otros usuarios y no será responsable de ningún mensaje o contenido enviado o publicado por un usuario de cualquier servicio de KERVIA DIGITAL.",
            ]
          : [
              "You acknowledge that by submitting your personal and company information to a KERVIA DIGITAL website or service, you grant it to KERVIA DIGITAL and its respective licensees, and assign a royalty-free license to use that information within its websites and in manners necessary for the operation of KERVIA DIGITAL products and services. Usage information generated by system use (including messages and meeting invitations) may also be visible to your colleagues using the same platform, as well as all company colleagues with whom you have shared messages.",
              "You acknowledge that by using any network system or community platform available on this website, you will be subject to the following behavior conditions of KERVIA DIGITAL.",
              "You agree that any information you enter is true and accurate to the best of your knowledge; (b) you agree to respect other users of the services and refrain from contacting other users with unaddressed ads or requests; (c) you will not send messages, upload, or link any defamatory, offensive, harassing, misleading, or illegal content; (d) you will not upload or link content that violates intellectual property rights or privacy rights of a third party.",
              "KERVIA DIGITAL reserves the right to remove any message, content, or hyperlink it believes, in its sole discretion, violates these conditions and to temporarily or permanently block users who persistently breach these conditions. KERVIA DIGITAL will not accept liability for the accuracy or reliability of information submitted by other users and will not be responsible for any message or content sent or posted by a user of any KERVIA DIGITAL service.",
            ],
      },
      {
        id: "09",
        title: isEs ? "ENLACES A OTROS SITIOS WEB" : "LINKS TO OTHER WEBSITES",
        content: isEs
          ? ["KERVIA DIGITAL no es responsable del contenido de sitios web externos. Este sitio puede incluir enlaces a otros sitios web de vez en cuando y, por lo tanto, cuando accede a ciertos enlaces en este sitio, puede abandonar el sitio. Estos enlaces se proporcionan para su conveniencia. Los sitios web externos no forman parte de este Sitio y no respaldamos ni aceptamos ninguna responsabilidad por el contenido de esos sitios web (ni los productos o servicios en ellos), no somos responsables de la disponibilidad de los sitios web y no seremos responsables de ninguna manera por cualquier pérdida o daño que pueda sufrir al utilizar esos sitios web. Si decide acceder a sitios web vinculados, lo hace bajo su propio riesgo."]
          : ["KERVIA DIGITAL is not responsible for the content of external websites. This site may include links to other websites from time to time and, therefore, when you access certain links on this site, you may leave the site. These links are provided for your convenience. External websites are not part of this Site and we do not endorse or accept any responsibility for the content of those websites (or the products or services on them), we are not responsible for the availability of the websites and we will not be liable in any way for any loss or damage you may suffer by using those websites. If you decide to access linked websites, you do so at your own risk."],
      },
      {
        id: "10",
        title: isEs ? "VIRUS" : "VIRUSES",
        content: isEs
          ? [
              "No garantizamos que nuestro sitio sea seguro o esté libre de errores o virus.",
              "Usted es responsable de configurar su tecnología de la información, programas informáticos y plataforma para acceder a nuestro Sitio. Debe utilizar su propio software de protección antivirus.",
              "No debe hacer un mal uso de nuestro Sitio introduciendo virus, troyanos, gusanos, bombas lógicas u otro material que sea malicioso o tecnológicamente dañino. No debe intentar obtener acceso no autorizado a nuestro Sitio, el servidor en el que se almacena nuestro Sitio o cualquier servidor, computadora o base de datos conectada a nuestro Sitio. No debe atacar nuestro Sitio mediante un ataque de denegación de servicio o un ataque distribuido de denegación de servicio.",
              "Al infringir esta disposición, cometería un delito y podría estar sujeto a sanciones civiles y penales. Informaremos de dicha infracción a las autoridades policiales pertinentes y cooperaremos con esas autoridades revelándoles su identidad.",
              "En caso de tal incumplimiento, su derecho a utilizar nuestro Sitio cesará de inmediato.",
            ]
          : [
              "We do not guarantee that our site will be secure or free from errors or viruses.",
              "You are responsible for configuring your information technology, computer programs, and platform to access our Site. You should use your own virus protection software.",
              "You must not misuse our Site by introducing viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful. You must not attempt to gain unauthorized access to our Site, the server on which our Site is stored, or any server, computer, or database connected to our Site. You must not attack our Site via a denial-of-service attack or a distributed denial-of-service attack.",
              "By breaching this provision, you would commit a criminal offense and could be subject to civil and criminal penalties. We will report any such breach to the relevant law enforcement authorities and will co-operate with those authorities by disclosing your identity to them.",
              "In the event of such a breach, your right to use our Site will cease immediately.",
            ],
      },
      {
        id: "11",
        title: isEs ? "INDEMNIZACIÓN" : "INDEMNIFICATION",
        content: isEs
          ? [
              "El Cliente reconoce y acepta en indemnizar y eximir a KERVIA DIGITAL, sus socios, colaboradores, proveedores, administradores, directores, contratantes, agentes, abogados, empleados, prestadores de servicios y terceros autorizados por éste, de cualquier incumplimiento a los presente Términos y Condiciones y que derivado de dicho incumplimiento, le genere un detrimento en su patrimonio a KERVIA DIGITAL, un perjuicio o cualquier otro daño causado, debiendo ser responsabilidad del Cliente del pago de todos los costos y gastos que se generen con motivo de dicho incumplimiento.",
              "El Cliente reconoce y acepta que es el único responsable por la defensa de cualquier reclamación, sea judicial o extrajudicial, contra KERVIA DIGITAL (sin perjuicio del derecho de KERVIA DIGITAL de participar con el abogado de su propia elección), y que el Cliente será el único responsable por el pago de daños y perjuicios, resultantes de las reclamaciones antes mencionadas, en contra de terceros, siendo que el Cliente no deberá aceptar ningún acuerdo que imponga cualquier obligación o responsabilidad a KERVIA DIGITAL, sin el consentimiento previo y por escrito de KERVIA DIGITAL.",
            ]
          : [
              "The Client acknowledges and agrees to indemnify and hold harmless KERVIA DIGITAL, its partners, collaborators, suppliers, administrators, directors, contractors, agents, lawyers, employees, service providers, and third parties authorized by it, from any breach of these Terms and Conditions and that deriving from such breach, causes a detriment to KERVIA DIGITAL's assets, harm, or any other damage caused, being the Client's responsibility to pay all costs and expenses generated as a result of said breach.",
              "The Client acknowledges and agrees that they are solely responsible for defending any claim, whether judicial or extrajudicial, against KERVIA DIGITAL (without prejudice to KERVIA DIGITAL's right to participate with counsel of its own choosing), and that the Client shall be solely responsible for the payment of damages, resulting from the aforementioned claims, against third parties, provided that the Client shall not accept any settlement that imposes any obligation or liability on KERVIA DIGITAL, without the prior written consent of KERVIA DIGITAL.",
            ],
      },
      {
        id: "12",
        title: isEs ? "NOTIFICACIONES" : "NOTIFICATIONS",
        content: isEs
          ? ["Todas las notificaciones u otras comunicaciones que hayan de realizarse bajo el presente se deberán realizar por escrito al correo electrónico de KERVIA DIGITAL y de El Cliente."]
          : ["All notifications or other communications to be made hereunder must be made in writing to the email address of KERVIA DIGITAL and The Client."],
      },
      {
        id: "13",
        title: isEs ? "CONSENTIMIENTO" : "CONSENT",
        content: isEs
          ? ["Al adquirir cualquier servicio con KERVIA DIGITAL el Cliente afirma que ha leído y comprendido íntegramente los presentes Términos y Condiciones, aceptando la veracidad, legitimación y lineamientos por los cuales se regirá la prestación de servicios, habiendo de su parte revisado satisfactoriamente la información descrita anteriormente, la cual se considera adecuada y suficiente."]
          : ["By acquiring any service with KERVIA DIGITAL, the Client affirms that they have read and fully understood these Terms and Conditions, accepting the veracity, legitimation, and guidelines by which the provision of services will be governed, having on their part satisfactorily reviewed the information described above, which is considered adequate and sufficient."],
      },
      {
        id: "14",
        title: isEs ? "ATENCIÓN AL CLIENTE" : "CUSTOMER SERVICE",
        content: isEs
          ? ["Para cualquier duda, comentario y aclaración de algún pago y/o reembolso, así como para solicitar información sobre los servicios y/o para presentar quejas, reclamaciones, peticiones y cualquier incidencia contractual relacionada con la prestación de los servicios, el Cliente podrá dirigirse a la sección de contacto en nuestro sitio web."]
          : ["For any doubt, comment, and clarification of any payment and/or refund, as well as to request information about the services and/or to file complaints, claims, petitions, and any contractual incident related to the provision of services, the Client may contact the contact section on our website."],
      },
      {
        id: "15",
        title: isEs ? "CAMBIOS A LOS TÉRMINOS Y CONDICIONES" : "CHANGES TO TERMS AND CONDITIONS",
        content: isEs
          ? [
              "Los presentes términos y condiciones pueden sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos, de nuestras prácticas, de cambios en nuestro modelo de negocio o por otras causas.",
              "Nos comprometemos a mantenerlo informado sobre los cambios que puedan sufrir los presentes términos y condiciones, por lo que le recomendamos ingresar periódicamente a nuestro sitio web.",
            ]
          : [
              "These terms and conditions may undergo modifications, changes, or updates derived from new legal requirements; our own needs for the products or services we offer, our practices, changes in our business model, or other causes.",
              "We commit to keeping you informed about the changes these terms and conditions may undergo, so we recommend that you periodically visit our website.",
            ],
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f2ec] pb-24 pt-32 text-[#23152d]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_10%,rgba(116,58,162,0.12),transparent_27%),radial-gradient(circle_at_95%_84%,rgba(229,91,145,0.10),transparent_25%),linear-gradient(180deg,#fbf8f4_0%,#f2ebe4_100%)]" />
      <div className="pointer-events-none absolute -left-52 top-24 h-[520px] w-[520px] rounded-full border border-[#743aa2]/10" />
      <div className="pointer-events-none absolute -right-44 bottom-20 h-[460px] w-[460px] rounded-full border border-[#e55b91]/10" />
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#55226f] via-[#913f94] to-[#e55b91]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="relative mb-10 overflow-hidden rounded-[38px] bg-[#281530] px-7 py-12 text-white shadow-[0_34px_90px_rgba(50,24,57,0.24)] sm:px-10 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#913f94]/30 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#e55b91]/16 blur-[110px]" />
          <div className="pointer-events-none absolute right-12 top-12 hidden h-44 w-44 rounded-full border border-white/10 lg:block" />
          <div className="pointer-events-none absolute right-24 top-24 hidden h-20 w-20 rounded-full border border-[#f3a6c4]/20 lg:block" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-[#b879d0] to-[#f077aa]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f3a6c4]">
                  Kervia Digital · Legal
                </span>
              </div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.23em] text-[#ddc7e8]">
                {t.header.tag}
              </span>
            </div>

            <div>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-white md:text-5xl lg:text-6xl">
                {t.header.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#cfc1d4]">
                {t.header.subtitle}
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-12 flex flex-col justify-between gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#f077aa] shadow-[0_0_14px_rgba(240,119,170,0.8)]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#caa7d7]">
                {t.header.badge}
              </span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9e8aa5]">
              Terms / 01
            </span>
          </div>
        </header>

        <article className="relative overflow-hidden rounded-[34px] border border-[#743aa2]/12 bg-[#fffaf5]/95 px-6 py-10 shadow-[0_30px_80px_rgba(65,37,72,0.11)] sm:px-9 md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#743aa2]/7 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#e55b91]/7 blur-[100px]" />

          <div className="relative z-10 space-y-6 text-justify leading-relaxed text-[#685b6d]">
            <div className="space-y-6 rounded-[24px] border border-[#743aa2]/10 bg-white/75 p-6 sm:p-8">
              {t.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {t.sections.map((sec) => (
              <section key={sec.id}>
                <h2 className={sectionTitle}>
                  <span className={sectionNumber}>{sec.id}</span>
                  {sec.title}
                </h2>
                <div className={sectionContent}>
                  {sec.content && sec.content.map((p, i) => <p key={i}>{p}</p>)}

                  {sec.bullets && (
                    <ul className={legalList}>
                      {sec.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#743aa2]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.footerText && sec.footerText.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>
            ))}
          </div>
        </article>

        <div className="mt-8 flex flex-col justify-between gap-4 rounded-[22px] border border-[#743aa2]/12 bg-[#fffaf5]/80 px-6 py-5 text-sm text-[#716474] shadow-[0_16px_40px_rgba(65,37,72,0.06)] sm:flex-row sm:items-center">
          <div>
            <span className="font-semibold text-[#2c1c32]">Kervia Digital</span>
            <span className="ml-2 text-xs text-[#96899a]">
              {isEs ? "Términos y Condiciones" : "Terms and Conditions"}
            </span>
          </div>
          <span className="text-xs">
            kerviadigital.com · ventas@kerviadigital.com
          </span>
        </div>
      </div>
    </main>
  );
}