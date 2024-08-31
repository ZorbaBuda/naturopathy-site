"use client";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { z } from "zod";
import { ContactFormSchema } from "@/schemas/contact-form-schema";
// import { useToast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { Spinner } from "./spinner";
import { FormFieldType } from "@/constants";
import CustomFormField from "./form-fields/CustomFormField";
import SubmitButton from "./ui/SubmitButton";
import { sendMessage } from "@/lib/actions/contactForm.actionsGSheets";
import { useRouter } from "next/navigation";
// import { contactFormData } from "@/lib/data";
import Link from "next/link";
import { NavigationLink } from "./NavigationLink";

type ContactFormParams = {
  name: string,
  phone: string,
  email: string,
  message: string,
  privacitat: string,
  privacyLink: string,
}

export default function ContactForm({contactFormParams} : { contactFormParams: ContactFormParams}) {
 
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {name, phone, email, message, privacitat, privacyLink} = contactFormParams
  
  const currentDate = new Date().toISOString();

  //TODO reset after submit https://react-hook-form.com/docs/useform/reset

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      // date: new Date().toISOString(),
      privacyConsent: false,
    },
  });

  // async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    setIsLoading(true);

    try {
      const message = {
        ...values,
        date: new Date().toISOString(),
      };

      // @ts-ignore
      // const result = await sendMessage(message);
      const result = await sendMessage(message)
      if (result === "ok") {
        toast("Ok! 👌");
        router.push("/");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  //    async function onSubmit(data: ContactFormProps) {

  //   try {
  //     const result = await fetch("/api/contact", {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     });
  //     if(result.status == 201){
  //       console.log("message was submitted")
  //       toast.success("Message was submitted")
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error")
  //   }
  // }

  // function onSubmit(data: ContactFormProps) {
  //   alert(JSON.stringify(data, null, 4));
  //   console.log(data);
  // }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          placeholder={name}
        />
           <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="phone"
          placeholder={phone}
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          placeholder={email}
        />

        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="message"
          placeholder={message}
        />
       
       <div className="mt-5">
        <CustomFormField
          fieldType={FormFieldType.CHECKBOX}
          control={form.control}
          name="privacyConsent"
          label={privacitat}
          
        /></div>
        <NavigationLink href="/privacy" className="transition-all duration-300 underline font-semibold hover:text-orange2">{privacyLink}</NavigationLink>
        <div className="mt-10">
          <SubmitButton isLoading={isLoading}>Enviar</SubmitButton>
        </div>

        {/* <Button 
              type="submit" 
              disabled={isLoading}
              className={cn({})}
              >
                <span className="size-5">
                  {isLoading ? (
                      <Spinner className="size-5" />
                    ) : (<p></p>)}
                </span>
              Submit
            </Button> */}
      </form>
    </Form>
  );
}
