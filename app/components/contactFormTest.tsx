'use client'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from '@/schemas/contact-form-schema';
import { toast} from 'sonner'
import { UsernameField } from './form-fields/username-field';
import { EmailField } from './form-fields/email-field';
import { TextareaField } from './form-fields/textarea-field';
import { Spinner } from './spinner';
import { CheckboxField } from './form-fields/checkbox-field';

export default function ContactFormTest() {

    const currentDate = new Date().toDateString();

    const defaultValues = {
        name: "",
        phone: "",
        email: "",
        message: "",
        date: currentDate,
        privacyCheck: false,
        newsletterCheck: false
       };

    const form = useForm<FormDataProps>({
        defaultValues,
        resolver: zodResolver(contactFormSchema)
    })

    const {
        watch,
        setError,
        formState: { isSubmitting, errors },
        setValue,
      } = form;

      const onSubmit = async (values: FormDataProps) => {
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
          className="mt-[54px] space-y-9"
          noValidate
        >
          <UsernameField placeholder="Username" name="name" />
          {/* <PhoneField placeholder="Phone" name="phone" /> */} 
          <EmailField placeholder="Email" name="email" />
          <TextareaField
            name="message"
            label="Your message:"
            placeholder="Enter message"
          />
           <CheckboxField
                        label={"donde va label"}
                        name="categories"
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
