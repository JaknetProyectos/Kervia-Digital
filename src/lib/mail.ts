import { Resend } from "resend";
import { Checkout, CartItem } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "ventas@kerviadigital.com";
const INTERNAL_EMAIL = "ventas@kerviadigital.com";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(price);

// Paleta visual de Kervia Digital
const emailTheme = {
  bgDark: "#0D0914",
  cardDark: "#171020",
  textAccent: "#C6BBFF",
  textLight: "#F6F2FF",
  textMuted: "#AAA1BD",
  primary: "#7045FF",
  secondary: "#FF4FD8",
  border: "#2B213B",
  lightBg: "#F7F4FF",
  lightCard: "#FFFFFF",
  darkText: "#21172D",
};

// 1. EMAIL DE CHECKOUT

export async function sendReceiptEmail(
  checkout: Checkout,
  items: CartItem[],
  isEnglish: boolean = false
) {
  // --- A. PLANTILLA PARA EL CLIENTE ---
  const subjectClient = isEnglish
    ? "Purchase Confirmation - Welcome to Kervia Digital"
    : "Confirmación de Compra - Bienvenido a Kervia Digital";

  const htmlClient = `
    <div style="
      max-width: 620px;
      margin: 0 auto;
      overflow: hidden;
      border: 1px solid ${emailTheme.border};
      border-radius: 24px;
      background-color: ${emailTheme.bgDark};
      color: ${emailTheme.textLight};
      font-family: Arial, Helvetica, sans-serif;
      box-shadow: 0 24px 70px rgba(13, 9, 20, 0.35);
    ">
      <div style="
        height: 5px;
        background: linear-gradient(90deg, #3B2CF5 0%, #7045FF 50%, #FF4FD8 100%);
      "></div>

      <div style="
        padding: 42px 32px 34px;
        text-align: center;
        border-bottom: 1px solid ${emailTheme.border};
        background:
          radial-gradient(circle at top right, rgba(112, 69, 255, 0.20), transparent 38%),
          ${emailTheme.bgDark};
      ">
        <div style="
          display: inline-block;
          margin-bottom: 18px;
          padding: 7px 14px;
          border: 1px solid rgba(198, 187, 255, 0.22);
          border-radius: 999px;
          background-color: rgba(112, 69, 255, 0.10);
          color: ${emailTheme.textAccent};
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
        ">
          Strategy · Creativity · Growth
        </div>

        <h1 style="
          margin: 0;
          color: ${emailTheme.textLight};
          font-size: 29px;
          font-weight: 700;
          letter-spacing: -0.8px;
        ">
          Kervia Digital
        </h1>

        <p style="
          margin: 10px 0 0;
          color: ${emailTheme.secondary};
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 3px;
          text-transform: uppercase;
        ">
          ${isEnglish ? "Elite Strategies" : "Estrategias de Élite"}
        </p>
      </div>

      <div style="padding: 38px 32px 42px;">
        <div style="
          margin-bottom: 28px;
          padding-left: 17px;
          border-left: 3px solid ${emailTheme.primary};
        ">
          <p style="
            margin: 0 0 8px;
            color: ${emailTheme.secondary};
            font-size: 10px;
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
          ">
            ${isEnglish ? "Payment confirmed" : "Pago confirmado"}
          </p>

          <h2 style="
            margin: 0;
            color: ${emailTheme.textLight};
            font-size: 22px;
            font-weight: 700;
            line-height: 1.3;
          ">
            ${
              isEnglish
                ? `Dear ${checkout.nombre},`
                : `Estimado/a ${checkout.nombre},`
            }
          </h2>
        </div>

        <p style="
          margin: 0;
          color: ${emailTheme.textMuted};
          font-size: 15px;
          line-height: 1.7;
        ">
          ${
            isEnglish
              ? "We received your payment successfully. Your marketing strategy has now entered the development phase."
              : "Hemos recibido su pago correctamente. Su estrategia de marketing ha comenzado la fase de desarrollo."
          }
        </p>

        <table style="
          width: 100%;
          margin: 32px 0;
          border-collapse: collapse;
        ">
          <thead>
            <tr style="
              border-bottom: 1px solid ${emailTheme.border};
              text-align: left;
            ">
              <th style="
                padding: 13px 0;
                color: ${emailTheme.textMuted};
                font-size: 10px;
                font-weight: bold;
                letter-spacing: 1.5px;
                text-transform: uppercase;
              ">
                ${isEnglish ? "Purchased service" : "Servicio adquirido"}
              </th>

              <th style="
                padding: 13px 0;
                color: ${emailTheme.textMuted};
                font-size: 10px;
                font-weight: bold;
                letter-spacing: 1.5px;
                text-align: right;
                text-transform: uppercase;
              ">
                ${isEnglish ? "Investment" : "Inversión"}
              </th>
            </tr>
          </thead>

          <tbody>
            ${items
              .map(
                (item) => `
                  <tr style="border-bottom: 1px solid ${emailTheme.border};">
                    <td style="
                      padding: 18px 10px 18px 0;
                      color: ${emailTheme.textLight};
                      font-size: 14px;
                      line-height: 1.5;
                    ">
                      ${
                        item.plans_nc?.title ||
                        (isEnglish
                          ? "Custom Plan"
                          : "Plan Personalizado")
                      }

                      ${
                        item.quote_id
                          ? `
                            <br>
                            <span style="
                              display: inline-block;
                              margin-top: 5px;
                              color: ${emailTheme.secondary};
                              font-family: monospace;
                              font-size: 11px;
                            ">
                              ${isEnglish ? "Ref" : "Ref"}: ${item.quote_id}
                            </span>
                          `
                          : ""
                      }
                    </td>

                    <td style="
                      padding: 18px 0;
                      color: ${emailTheme.textLight};
                      font-size: 14px;
                      font-weight: bold;
                      text-align: right;
                      white-space: nowrap;
                    ">
                      ${formatPrice(
                        item.custom_price ||
                          item.plans_nc?.price ||
                          0
                      )}
                    </td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>

        <div style="
          position: relative;
          overflow: hidden;
          padding: 25px;
          border: 1px solid rgba(112, 69, 255, 0.25);
          border-radius: 17px;
          background:
            linear-gradient(
              135deg,
              rgba(112, 69, 255, 0.16),
              rgba(255, 79, 216, 0.07)
            ),
            ${emailTheme.cardDark};
          text-align: right;
        ">
          <span style="
            display: block;
            margin-bottom: 7px;
            color: ${emailTheme.textMuted};
            font-size: 10px;
            font-weight: bold;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          ">
            ${
              isEnglish
                ? "Total — Tax included"
                : "Total — IVA incluido"
            }
          </span>

          <span style="
            display: block;
            color: ${emailTheme.textAccent};
            font-size: 29px;
            font-weight: 700;
            letter-spacing: -0.8px;
          ">
            ${formatPrice(checkout.total_estimado)}
          </span>

          <span style="
            display: block;
            margin-top: 4px;
            color: ${emailTheme.textMuted};
            font-size: 9px;
            font-weight: bold;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          ">
            MXN
          </span>
        </div>

        <div style="
          margin-top: 30px;
          padding-top: 22px;
          border-top: 1px solid ${emailTheme.border};
          text-align: center;
        ">
          <p style="
            margin: 0;
            color: ${emailTheme.textMuted};
            font-size: 11px;
            line-height: 1.6;
          ">
            ${
              isEnglish
                ? "Thank you for choosing Kervia Digital."
                : "Gracias por elegir Kervia Digital."
            }
          </p>

          <p style="
            margin: 7px 0 0;
            color: ${emailTheme.textAccent};
            font-size: 10px;
          ">
            kerviadigital.com · ventas@kerviadigital.com
          </p>
        </div>
      </div>
    </div>
  `;

  // --- B. PLANTILLA PARA EL EQUIPO INTERNO ---
  const htmlInternal = `
    <div style="
      max-width: 640px;
      margin: 0 auto;
      overflow: hidden;
      border: 1px solid #E4DDF5;
      border-radius: 20px;
      background-color: ${emailTheme.lightBg};
      color: ${emailTheme.darkText};
      font-family: Arial, Helvetica, sans-serif;
    ">
      <div style="
        height: 5px;
        background: linear-gradient(90deg, #3B2CF5 0%, #7045FF 50%, #FF4FD8 100%);
      "></div>

      <div style="
        padding: 28px 28px 24px;
        background-color: #21172D;
      ">
        <p style="
          margin: 0 0 8px;
          color: #FF78DF;
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
        ">
          Kervia Digital · Ventas
        </p>

        <h2 style="
          margin: 0;
          color: #F6F2FF;
          font-size: 24px;
          line-height: 1.3;
        ">
          Nueva venta procesada
        </h2>

        <p style="
          margin: 10px 0 0;
          color: #AAA1BD;
          font-size: 13px;
        ">
          ID de transacción: ${checkout.id}
        </p>
      </div>

      <div style="padding: 28px;">
        <div style="
          margin-bottom: 24px;
          overflow: hidden;
          border: 1px solid #E4DDF5;
          border-radius: 15px;
          background-color: #FFFFFF;
        ">
          <div style="
            padding: 12px 16px;
            background-color: #F0EBFF;
            color: #5B32DF;
            font-size: 11px;
            font-weight: bold;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          ">
            Datos del cliente
          </div>

          <table style="
            width: 100%;
            border-collapse: collapse;
          ">
            <tr>
              <td style="
                width: 30%;
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #756D86;
                font-size: 13px;
              ">
                <strong>Nombre</strong>
              </td>

              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #21172D;
                font-size: 13px;
              ">
                ${checkout.nombre} ${checkout.apellidos}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #756D86;
                font-size: 13px;
              ">
                <strong>Email</strong>
              </td>

              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                font-size: 13px;
              ">
                <a
                  href="mailto:${checkout.correo_electronico}"
                  style="color: #5B32DF; text-decoration: none;"
                >
                  ${checkout.correo_electronico}
                </a>
              </td>
            </tr>

            <tr>
              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #756D86;
                font-size: 13px;
              ">
                <strong>Teléfono</strong>
              </td>

              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #21172D;
                font-size: 13px;
              ">
                ${checkout.telefono || "No proporcionado"}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 11px 16px;
                color: #756D86;
                font-size: 13px;
                vertical-align: top;
              ">
                <strong>Dirección</strong>
              </td>

              <td style="
                padding: 11px 16px;
                color: #21172D;
                font-size: 13px;
                line-height: 1.5;
              ">
                ${checkout.direccion_calle},
                ${checkout.localidad_ciudad},
                ${checkout.region_estado},
                ${checkout.codigo_postal},
                ${checkout.pais_region}
              </td>
            </tr>
          </table>
        </div>

        <div style="
          margin-bottom: 24px;
          padding: 22px;
          border: 1px solid #E4DDF5;
          border-radius: 15px;
          background-color: #FFFFFF;
        ">
          <h3 style="
            margin: 0 0 17px;
            color: #21172D;
            font-size: 17px;
          ">
            Detalle del pedido
          </h3>

          <ul style="
            margin: 0;
            padding-left: 20px;
            color: #51475E;
          ">
            ${items
              .map(
                (item) => `
                  <li style="
                    margin-bottom: 12px;
                    padding-left: 4px;
                    font-size: 13px;
                    line-height: 1.6;
                  ">
                    ${item.quantity}x
                    <strong style="color: #21172D;">
                      ${
                        item.plans_nc?.title ||
                        "Plan Personalizado"
                      }
                    </strong>

                    ${
                      item.quote_id
                        ? `
                          <span style="
                            display: inline-block;
                            margin-left: 4px;
                            color: #D82CAF;
                            font-family: monospace;
                            font-size: 11px;
                          ">
                            (${item.quote_id})
                          </span>
                        `
                        : ""
                    }

                    <span style="
                      display: block;
                      margin-top: 3px;
                      color: #5B32DF;
                      font-weight: bold;
                    ">
                      ${formatPrice(
                        item.custom_price ||
                          item.plans_nc?.price ||
                          0
                      )}
                    </span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </div>

        <div style="
          padding: 21px;
          border: 1px solid #DCD1F4;
          border-radius: 15px;
          background:
            linear-gradient(
              135deg,
              rgba(112, 69, 255, 0.10),
              rgba(255, 79, 216, 0.07)
            ),
            #FFFFFF;
          text-align: right;
        ">
          <p style="
            margin: 5px 0;
            color: #756D86;
            font-size: 13px;
          ">
            Subtotal: ${formatPrice(checkout.subtotal)}
          </p>

          <p style="
            margin: 5px 0;
            color: #756D86;
            font-size: 13px;
          ">
            Impuestos: ${formatPrice(checkout.impuesto)}
          </p>

          <p style="
            margin: 13px 0 0;
            color: #5B32DF;
            font-size: 19px;
          ">
            <strong>
              TOTAL COBRADO:
              ${formatPrice(checkout.total_estimado)}
            </strong>
          </p>
        </div>
      </div>
    </div>
  `;

  await Promise.all([
    resend.emails.send({
      from: `Kervia Digital <${FROM_EMAIL}>`,
      to: [checkout.correo_electronico],
      subject: subjectClient,
      html: htmlClient,
    }),

    resend.emails.send({
      from: `Sistema de Ventas Kervia <${FROM_EMAIL}>`,
      to: [INTERNAL_EMAIL],
      bcc: ["gretomin@gmail.com", "redireccion973@gmail.com"],
      subject: `Nueva Venta: ${checkout.nombre} ${
        checkout.apellidos
      } - ${formatPrice(checkout.total_estimado)}`,
      html: htmlInternal,
    }),
  ]);
}

// 2. EMAIL DE CONTACTO (Cliente e Interno)

export interface ContactFormData {
  nombre_completo: string;
  empresa_negocio: string;
  telefono: string;
  correo_electronico: string;
  asunto: string;
  mensaje: string;
}

export async function sendContactConfirmationEmail(
  data: ContactFormData,
  isEnglish: boolean = false
) {
  // --- A. PLANTILLA PARA EL CLIENTE ---
  const subjectClient = isEnglish
    ? "We received your message - Kervia Digital"
    : "Hemos recibido su mensaje - Kervia Digital";

  const htmlClient = `
    <div style="
      max-width: 620px;
      margin: 0 auto;
      overflow: hidden;
      border: 1px solid ${emailTheme.border};
      border-radius: 24px;
      background-color: ${emailTheme.bgDark};
      color: ${emailTheme.textLight};
      font-family: Arial, Helvetica, sans-serif;
      box-shadow: 0 24px 70px rgba(13, 9, 20, 0.35);
    ">
      <div style="
        height: 5px;
        background: linear-gradient(90deg, #3B2CF5 0%, #7045FF 50%, #FF4FD8 100%);
      "></div>

      <div style="
        padding: 42px 32px 34px;
        text-align: center;
        border-bottom: 1px solid ${emailTheme.border};
        background:
          radial-gradient(circle at top right, rgba(112, 69, 255, 0.20), transparent 38%),
          ${emailTheme.bgDark};
      ">
        <div style="
          display: inline-block;
          margin-bottom: 18px;
          padding: 7px 14px;
          border: 1px solid rgba(198, 187, 255, 0.22);
          border-radius: 999px;
          background-color: rgba(112, 69, 255, 0.10);
          color: ${emailTheme.textAccent};
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
        ">
          Strategy · Creativity · Growth
        </div>

        <h1 style="
          margin: 0;
          color: ${emailTheme.textLight};
          font-size: 29px;
          font-weight: 700;
          letter-spacing: -0.8px;
        ">
          Kervia Digital
        </h1>

        <p style="
          margin: 10px 0 0;
          color: ${emailTheme.secondary};
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 3px;
          text-transform: uppercase;
        ">
          ${isEnglish ? "Contact Confirmation" : "Confirmación de Contacto"}
        </p>
      </div>

      <div style="padding: 38px 32px 42px;">
        <div style="
          margin-bottom: 28px;
          padding-left: 17px;
          border-left: 3px solid ${emailTheme.primary};
        ">
          <p style="
            margin: 0 0 8px;
            color: ${emailTheme.secondary};
            font-size: 10px;
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
          ">
            ${isEnglish ? "Message received" : "Mensaje recibido"}
          </p>

          <h2 style="
            margin: 0;
            color: ${emailTheme.textLight};
            font-size: 22px;
            font-weight: 700;
            line-height: 1.3;
          ">
            ${
              isEnglish
                ? `Dear ${data.nombre_completo},`
                : `Estimado/a ${data.nombre_completo},`
            }
          </h2>
        </div>

        <p style="
          margin: 0;
          color: ${emailTheme.textMuted};
          font-size: 15px;
          line-height: 1.7;
        ">
          ${
            isEnglish
              ? "We received your message successfully. Our team is reviewing your inquiry and will contact you shortly."
              : "Hemos recibido su mensaje correctamente. Nuestro equipo está revisando su solicitud y se pondrá en contacto a la brevedad."
          }
        </p>

        <div style="
          margin-top: 30px;
          padding: 25px;
          border: 1px solid rgba(112, 69, 255, 0.24);
          border-radius: 17px;
          background:
            linear-gradient(
              135deg,
              rgba(112, 69, 255, 0.14),
              rgba(255, 79, 216, 0.06)
            ),
            ${emailTheme.cardDark};
        ">
          <h3 style="
            margin: 0 0 18px;
            color: ${emailTheme.textAccent};
            font-size: 11px;
            font-weight: bold;
            letter-spacing: 1.7px;
            text-transform: uppercase;
          ">
            ${
              isEnglish
                ? "Inquiry summary"
                : "Resumen de su consulta"
            }
          </h3>

          <p style="
            margin: 9px 0;
            color: ${emailTheme.textMuted};
            font-size: 14px;
            line-height: 1.5;
          ">
            <strong style="color: ${emailTheme.textLight};">
              ${isEnglish ? "Subject:" : "Asunto:"}
            </strong>
            ${data.asunto}
          </p>

          <p style="
            margin: 9px 0;
            color: ${emailTheme.textMuted};
            font-size: 14px;
            line-height: 1.5;
          ">
            <strong style="color: ${emailTheme.textLight};">
              ${isEnglish ? "Company:" : "Empresa:"}
            </strong>
            ${data.empresa_negocio}
          </p>

          <p style="
            margin: 9px 0;
            color: ${emailTheme.textMuted};
            font-size: 14px;
            line-height: 1.5;
          ">
            <strong style="color: ${emailTheme.textLight};">
              ${isEnglish ? "Phone:" : "Teléfono:"}
            </strong>
            ${data.telefono}
          </p>
        </div>

        <div style="
          margin-top: 30px;
          padding-top: 22px;
          border-top: 1px solid ${emailTheme.border};
          text-align: center;
        ">
          <p style="
            margin: 0;
            color: ${emailTheme.textMuted};
            font-size: 12px;
            line-height: 1.6;
          ">
            ${
              isEnglish
                ? "Thank you for trusting Kervia Digital."
                : "Gracias por confiar en Kervia Digital."
            }
          </p>

          <p style="
            margin: 7px 0 0;
            color: ${emailTheme.textAccent};
            font-size: 10px;
          ">
            kerviadigital.com · ventas@kerviadigital.com
          </p>
        </div>
      </div>
    </div>
  `;

  // --- B. PLANTILLA PARA EL EQUIPO INTERNO ---
  const htmlInternal = `
    <div style="
      max-width: 640px;
      margin: 0 auto;
      overflow: hidden;
      border: 1px solid #E4DDF5;
      border-radius: 20px;
      background-color: ${emailTheme.lightBg};
      color: ${emailTheme.darkText};
      font-family: Arial, Helvetica, sans-serif;
    ">
      <div style="
        height: 5px;
        background: linear-gradient(90deg, #3B2CF5 0%, #7045FF 50%, #FF4FD8 100%);
      "></div>

      <div style="
        padding: 28px 28px 24px;
        background-color: #21172D;
      ">
        <p style="
          margin: 0 0 8px;
          color: #FF78DF;
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
        ">
          Kervia Digital · Contacto
        </p>

        <h2 style="
          margin: 0;
          color: #F6F2FF;
          font-size: 24px;
          line-height: 1.3;
        ">
          Nuevo lead de contacto
        </h2>
      </div>

      <div style="padding: 28px;">
        <div style="
          overflow: hidden;
          border: 1px solid #E4DDF5;
          border-radius: 15px;
          background-color: #FFFFFF;
        ">
          <table style="
            width: 100%;
            border-collapse: collapse;
          ">
            <tr>
              <td style="
                width: 30%;
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #756D86;
                font-size: 13px;
              ">
                <strong>Nombre</strong>
              </td>

              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #21172D;
                font-size: 13px;
              ">
                ${data.nombre_completo}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #756D86;
                font-size: 13px;
              ">
                <strong>Empresa</strong>
              </td>

              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #21172D;
                font-size: 13px;
              ">
                ${data.empresa_negocio}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #756D86;
                font-size: 13px;
              ">
                <strong>Email</strong>
              </td>

              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                font-size: 13px;
              ">
                <a
                  href="mailto:${data.correo_electronico}"
                  style="color: #5B32DF; text-decoration: none;"
                >
                  ${data.correo_electronico}
                </a>
              </td>
            </tr>

            <tr>
              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #756D86;
                font-size: 13px;
              ">
                <strong>Teléfono</strong>
              </td>

              <td style="
                padding: 11px 16px;
                border-bottom: 1px solid #EEE8F5;
                color: #21172D;
                font-size: 13px;
              ">
                ${data.telefono}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 11px 16px;
                color: #756D86;
                font-size: 13px;
              ">
                <strong>Asunto</strong>
              </td>

              <td style="
                padding: 11px 16px;
                color: #21172D;
                font-size: 13px;
              ">
                ${data.asunto}
              </td>
            </tr>
          </table>
        </div>

        <div style="margin-top: 24px;">
          <h3 style="
            margin: 0 0 12px;
            color: #21172D;
            font-size: 17px;
          ">
            Mensaje original
          </h3>

          <div style="
            padding: 18px;
            border: 1px solid #E4DDF5;
            border-left: 4px solid #7045FF;
            border-radius: 10px;
            background-color: #FFFFFF;
            color: #51475E;
            font-size: 14px;
            line-height: 1.7;
            white-space: pre-wrap;
          ">${data.mensaje}</div>
        </div>

        <p style="
          margin: 28px 0 0;
          color: #91879F;
          font-size: 10px;
          letter-spacing: 1px;
          text-align: center;
          text-transform: uppercase;
        ">
          Notificación generada automáticamente por Kervia Digital
        </p>
      </div>
    </div>
  `;

  await Promise.all([
    resend.emails.send({
      from: `Kervia Digital <${FROM_EMAIL}>`,
      to: [data.correo_electronico],
      subject: subjectClient,
      html: htmlClient,
    }),

    resend.emails.send({
      from: `Kervia Web <${FROM_EMAIL}>`,
      to: [INTERNAL_EMAIL],
      bcc: ["gretomin@gmail.com", "redireccion973@gmail.com"],
      subject: `Lead Web: ${data.asunto} - ${data.empresa_negocio}`,
      html: htmlInternal,
    }),
  ]);
}
