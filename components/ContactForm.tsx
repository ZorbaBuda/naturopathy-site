"use client";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { z } from "zod";
import { ContactFormSchema } from "@/schemas/contact-form-schema";
// import { useToast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { InputField } from "./form-fields/input-field";
import { TextareaField } from "./form-fields/textarea-field";
import { CheckboxField } from "./form-fields/checkbox-field";
import { toast } from "sonner";
import { Spinner } from "./spinner";
import { FormFieldType } from "@/constants";
import CustomFormField from "./form-fields/CustomFormField";
import SubmitButton from "./ui/SubmitButton";
import { sendMessage } from "@/lib/actions/contactForm.actions";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  // const { toast } = useToast();
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const currentDate = new Date().toISOString();

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      surname: "",
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
      const result = await sendMessage(message);
      if (result === "ok") {
        toast("Missatge enviat.")
        router.push("/")
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative space-y-3 overflow-x-hidden"
      >
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          placeholder="Name*"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="surname"
          placeholder="Surname*"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="phone"
          placeholder="Phone*"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          placeholder="Email*"
        />

        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="message"
          placeholder="Message*"
        />

        <CustomFormField
          fieldType={FormFieldType.CHECKBOX}
          control={form.control}
          name="privacyConsent"
          label="He llegit i accepto la política de privacitat"
        />

        {/* <CheckboxField name="privacyCheck" label="He llegit i accepto la política de privacitat" />
          
            <div>
              You can read in{" "}
              <Link href="/privacy-terms" target="_blank">
                privacy terms
              </Link>{" "}
              page.
            </div> */}

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>

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
