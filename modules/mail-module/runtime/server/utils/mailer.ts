import type { H3Event } from "h3";
import { phpApiFetch } from "@/server/utils/phpApi";

const LOGO_PATH = "https://vinozezajeci.cz/img/logo_white.svg";

async function sendPhpMail(
  event: H3Event,
  params: {
    template: string;
    to: string;
    subject: string;
    bcc?: string;
    [key: string]: string | undefined;
  },
) {
  const config = useRuntimeConfig();
  const query: Record<string, string> = {
    template: params.template,
    to: params.to,
    subject: params.subject,
    fromEmail: config.mailingFrom as string,
    fromName: config.mailingFromName as string,
    fromPhone: config.mailingFromPhone as string,
    logoPath: LOGO_PATH,
  };

  if (params.bcc) query.bcc = params.bcc;

  const skipKeys = new Set(["template", "to", "subject", "bcc"]);
  for (const [key, value] of Object.entries(params)) {
    if (!skipKeys.has(key) && value !== undefined) {
      query[key] = value;
    }
  }

  return phpApiFetch(event, "/mailer/", { query });
}

export function SEND_SIGNUP_MAIL(event: H3Event, to: string, password: string) {
  const config = useRuntimeConfig();
  return sendPhpMail(event, {
    template: "signup",
    to,
    subject: "Potvrzení registrace",
    email: to,
    password,
    bcc: config.mailingFrom as string,
  });
}

export function SEND_CONTACT_FORM_MAIL(event: H3Event, to: string) {
  return sendPhpMail(event, {
    template: "contact-form",
    to,
    subject: "Potvrzení přijetí vašeho e-mailu",
  });
}

export function SEND_CONTACT_FORM_ADMIN_MAIL(
  event: H3Event,
  to: string,
  email: string,
) {
  return sendPhpMail(event, {
    template: "contact-form-admin",
    to,
    subject: "Nová zpráva z kontaktního formuláře",
    email,
  });
}

export function SEND_RESET_PASSWORD_MAIL(
  event: H3Event,
  to: string,
  email: string,
  password: string,
) {
  return sendPhpMail(event, {
    template: "reset-password",
    to,
    subject: "Reset hesla",
    email,
    password,
  });
}
