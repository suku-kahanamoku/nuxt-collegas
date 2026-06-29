import {
  SEND_CONTACT_FORM_MAIL,
  SEND_CONTACT_FORM_ADMIN_MAIL,
} from "@/modules/mail-module/runtime/server/utils/mailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  await SEND_CONTACT_FORM_MAIL(
    event,
    body.email,
    body.interest,
    body.message,
    body.name,
    body.phone,
  );
  await SEND_CONTACT_FORM_ADMIN_MAIL(
    event,
    config.mailingFrom as string,
    body.email,
    body.interest,
    body.message,
    body.name,
    body.phone,
  );

  return { message: "Email sent" };
});
