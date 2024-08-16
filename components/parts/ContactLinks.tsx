import { contactInfo } from "@/lib/data";
import Link from "next/link";

export function EmailLink() {
  return (
    <Link
      href={contactInfo.emailHref}
      className="bg-red-500 rounded-full p-2 md:p-3 border-2 border-slate-600"
      passHref
    >
      {contactInfo.emailIcon}
    </Link>
  );
}

export function PhoneLink() {
  return (
    <Link
      href={contactInfo.phoneHref}
      className="bg-blue-500 rounded-full p-2 md:p-3 border-2 border-slate-600"
    >
      {contactInfo.phoneIcon}
    </Link>
  );
}

export function WhatsappLink() {
  return (
    <Link
      href={contactInfo.whatsappHref}
      className="bg-[#25D366] rounded-full p-2 md:p-3 border-2 border-slate-600"
    >
      {contactInfo.whatsappIcon}
    </Link>
  );
}
