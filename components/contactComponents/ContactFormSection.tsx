import { contactFormData } from "@/lib/data"
import ContactForm from "../ContactForm"

const ContactFormSection = () => {
  return (
    <div className="w-full section-xs flex flex-col subcontainerXl ">
         <h2 className="h3 mb-10 text-green2">{contactFormData.title}</h2>
         <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className=" w-full flex flex-col">
          <ContactForm />
        </div>
        <div className=" md:max-w-[300px] lg:max-w-[368px]">
          <p className="prose-custom">{contactFormData.p}</p>
        </div>
        </div>
      </div>
  )
}

export default ContactFormSection