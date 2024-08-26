import { contactInfo } from "@/lib/data";
import Link from "next/link";

export function EmailLink() {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={contactInfo.emailHref}
      className="bg-red-500 rounded-full p-2 md:p-3 border-2 border-slate-600"
    >
      {contactInfo.emailIcon}
    </a>
  );
}

export function PhoneLink() {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={contactInfo.phoneHref}
      className="bg-blue-500 rounded-full p-2 md:p-3 border-2 border-slate-600"
    >
      {contactInfo.phoneIcon}
    </a>
  );
}

export function WhatsappLink() {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={contactInfo.whatsappHref}
      className="bg-[#25D366] rounded-full p-2 md:p-3 border-2 border-slate-600"
    >
      {contactInfo.whatsappIcon}
    </a>
  );
}

export function TelegramLink() {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={contactInfo.telegramHref}
      className="cursor-pointer"
    >
      <div className="bg-telegram rounded-full p-2 md:p-3 border-2 border-slate-600">
        {contactInfo.telegramIcon}
      </div>
    </a>
  );
}
