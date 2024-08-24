import { z } from "zod";
import { contactFormData } from "@/lib/data";

const {name, email, message, privacy, phone} = contactFormData.formSchema

//TODO i18n ?

// const phoneRegex = new RegExp(
//   /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
// );

export const ContactFormSchema = z
.object({
    name: z
    .string()
    .min(1, `${name.required}`)
    .min(3, `${name.min}`)
    .max(300, `${name.max}`)
    .regex(
      /^[a-zA-Z0-9_\s]+$/,
      `${name.invalid}`
    )
    .regex(/^[a-zA-Z][a-zA-Z0-9_\s]*$/, `${name.start}`),

    phone: z
    .string(),
   
  email: z.string().min(1, `${email.required}`).email(`${email.invalid}`),
  message: z
  .string()
  .min(1, `${message.required}`)
  .max(3000, `${message.max}`),
  
  // date: z.string(),
  
  privacyConsent: z.boolean().default(false).refine((val) => val === true, {
    message: `${privacy}`,
  })
  
})