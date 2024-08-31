import { useTranslations } from "next-intl";
import ExternalLink from "./ExternalLink";


export  function ContactInfoNavbar() {
    const t = useTranslations("contactData");
  return (
    <>
    <p className=" ">
    {t("phoneTabuled")}
  </p>
  <ExternalLink href='mailto:cconstanseu@gmail.com' title={t("email")}  />
  </>
  )
}
