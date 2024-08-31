import { useTranslations } from "next-intl";
import { footerData } from "@/lib/data";

export default function ContactInfoSimple() {
  const t = useTranslations("contactData");
  const { contact } = footerData;
  return (
    <>
      <div className="flex items-center gap-x-[10px]">
        <div>{contact.address.icon}</div>
        <div>{`${t("address")} (BCN)`}</div>
      </div>

      <div className="flex items-center gap-x-[10px]">
        <div>{contact.phone.icon}</div>
        <div>{t("phoneTabuled")}</div>
      </div>

      <div className="flex items-center gap-x-[10px]">
        <div>{contact.email.icon}</div>
        <div>{t("email")}</div>
      </div>
    </>
  );
}
