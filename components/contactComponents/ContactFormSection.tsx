import ContactForm from "../ContactForm"
import { useTranslations } from "next-intl"

const ContactFormSection = () => {
  const t = useTranslations("contactFormData")
  const contactFormParams = {
     name : t("formFields.name"),
     phone: t("formFields.phone"),
     email: t("formFields.email"),
     message: t("formFields.message"),
     privacitat: t("formFields.privacitat"),
     privacyLink: t("formFields.privacyLink")
  }
  return (
    <div className="w-full section-xs flex flex-col subcontainerXl ">
         <h2 className="h3 mb-10 text-green2">{t("title")}</h2>
         <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className=" w-full flex flex-col">
          <ContactForm contactFormParams = {contactFormParams} />
        </div>
        <div className=" md:max-w-[300px] lg:max-w-[368px]">
          <p className="prose-custom">{t("text")}</p>
        </div>
        </div>
      </div>
  )
}

export default ContactFormSection