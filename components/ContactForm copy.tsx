"use client";
import React, { useState } from "react";

import { FormProvider, useForm } from "react-hook-form";
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
import { toast} from "sonner"
import { Spinner } from "./spinner";
//  const Input = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  // const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false)
  const currentDate = new Date().toISOString();

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      date: currentDate,
      privacyCheck: false,
    },
  });

  const {
    formState: { isSubmitting}
  } = form

  // function onSubmit(data: z.infer<typeof contactFormSchema>) {
  //   console.log(data)
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }
  // async function onSubmit(data: z.infer<typeof contactFormSchema>) {
     async function onSubmit(data: ContactFormProps) {

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if(result.status == 201){
        console.log("message was submitted")
        toast.success("Message was submitted")
      }
    } catch (error) {
      console.log(error);
      toast.error("Error")
    }
  }

  // function onSubmit(data: ContactFormProps) {
  //   alert(JSON.stringify(data, null, 4));
  //   console.log(data);
  // }

  return (
    <>
    
      <div className="px-11 mx-auto text-xl border-none">
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative space-y-3 overflow-x-hidden"
            noValidate
          >
            {/* name */}
            <InputField placeholder="Name*" name="name"  />
            {/* surname */}
            <InputField placeholder="Surname*" name="surname" />
            {/* phone */}
            <InputField placeholder="Phone*" name="phone" />
            {/* email */}
            <InputField placeholder="Email*" name="email" />
            {/* message */}
            <TextareaField placeholder="Message*" name="message" />
            {/* accept privacy terms */}
            <CheckboxField name="privacyCheck" label="He llegit i accepto la política de privacitat" />
            {/* <div>I have readed and accept privacy terms</div> */}
            <div>
              You can read in{" "}
              <Link href="/privacy-terms" target="_blank">
                privacy terms
              </Link>{" "}
              page.
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className={cn({})}
              >
                <span className="size-5">
                  {isSubmitting ? (
                      <Spinner className="size-5" />
                    ) : (<p></p>)}
                </span>
              Submit
            </Button>
          </form>
        </FormProvider>
      </div>
      {/* <Checkbox className="mx-auto" id="terms1" /> */}
    </>
  );
}
