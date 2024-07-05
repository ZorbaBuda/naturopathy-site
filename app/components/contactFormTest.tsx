// https://www.youtube.com/watch?v=cc_xmawJ8Kg
'use client'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from '@/schemas/contact-form-schema';
import { toast} from 'sonner'
import { TextareaField } from './form-fields/textarea-field';
import { Spinner } from './spinner';
import { InputField } from './form-fields/input-field';
import { CheckboxField } from './form-fields/checkbox-field';
// https://www.youtube.com/watch?v=_XQ_9qaQsQU

export default function ContactFormTest() {

    const currentDate = new Date().toDateString();

    const defaultValues = {
        name: "",
        surname: "",
        phone: "",
        email: "",
        message: "",
        date: currentDate,
        privacyCheck: false,
        // newsletterCheck: false
       };


    const form = useForm<ContactFormProps>({
        defaultValues,
        resolver: zodResolver(contactFormSchema)
    })

    const {
        watch,
        setError,
        formState: { isSubmitting, errors },
        setValue,
      } = form;

      const privacyCheck = watch("privacyCheck")

      useEffect(() => {
       
        if (privacyCheck) {
           console.log("privacyCheck ", privacyCheck)
        }
      }), []

      const onSubmit = async (values: ContactFormProps) => {
        console.log("what?")
         console.log("values", values);
    
        // const result = await sendToNotion({ values });
        const result = "result"
    
        console.log("result ❤", result);
    
    //     if (result.success) {
    //       toast.success(result.success);
         
    //     } else if (result.error) {
    //       toast.error(result.error);
    
    //       const errorType = result?.errorType as "title" | "slug";
    
    //       errorType &&
    //         setError(errorType, { message: result.error }, { shouldFocus: true });
    //     } else {
    //       toast.error("Error");
    //     }
      };
    

  return (
    <div>contactFormTest
    <FormProvider { ...form}>
    <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-[130px] flex flex-col gap-9"
          noValidate
        >
           <InputField
                label="Nom*:"
                placeholder="Ej: Marcos"
                name="name"
              />
                <InputField
                label="Cognoms*:"
                placeholder="Ej: Garcia"
                name="surname"
              />
                <InputField
                label="Telefon*:"
                placeholder="XXXXXXXXX"
                name="phone"
              />
                <InputField
                label="Email*:"
                placeholder="Ej: marcos.garcia@exemple.com"
                name="email"
              />
          <TextareaField
            name="message"
            label="Your message:"
            placeholder="Enter message"
          />
           <CheckboxField
                        label={"He llegit i accepto..."}
                        name="privacyCheck"
                       
                        // value={category.categoryName}
                      />
            {/* <CheckboxField
                        label={"donde va label"}
                        name="categories"
                        // value={category.categoryName}
                      /> */}
          <div className="mt-10">
            <button
              type="submit"
              className="relative w-full"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span className="absolute flex items-center left-24 2xl:left-32">
                  <Spinner />
                </span>
              )}
              Enviar
            </button>

           
          </div>
        </form>
    </FormProvider>
    </div>
  )
}
