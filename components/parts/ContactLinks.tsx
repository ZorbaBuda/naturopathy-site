import { contactInfo } from "@/lib/data";
import { useTranslations } from "next-intl";

export function EmailLink() {
  const t= useTranslations("contactData")
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={`mailto:${t("email")}`}
      className="bg-red-500 rounded-full p-2 md:p-3 border-2 border-slate-600"
    >
      {contactInfo.emailIcon}
    </a>
  );
}

export function PhoneLink() {
  const t= useTranslations("contactData")
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={`tel: +34${t("phone")}`}
      className="bg-blue-500 rounded-full p-2 md:p-3 border-2 border-slate-600"
    >
      {contactInfo.phoneIcon}
    </a>
  );
}

export function WhatsappLink() {
  const t= useTranslations("contactData")
  const  whatsappHref =`https://api.whatsapp.com/send/?phone=34${t("phone")}&text&type=phone_number&app_absent=0`
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={whatsappHref}
      className="bg-[#25D366] rounded-full p-2 md:p-3 border-2 border-slate-600"
    >
      {contactInfo.whatsappIcon}
    </a>
  );
}

export function TelegramLink() {
  const t= useTranslations("contactData")
  const  telegramHref = `https://t.me/${t("telegramUser")}`
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={telegramHref}
      className="cursor-pointer"
    >
      <div className="bg-telegram rounded-full p-2 md:p-3 border-2 border-slate-600">
        {contactInfo.telegramIcon}
      </div>
    </a>
  );
}
