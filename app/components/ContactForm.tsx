'use client'

import React, { useRef, useState } from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'


export default function ContactForm() {

  const { register, handleSubmit} = useForm<ContactFormProps>()

  const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
    console.log(data)
  }
 

  return (
    <div className='mt-[150px]'>
        <form className='flex flex-col gap-5 ml-10' onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} type="text" placeholder="Nom" />
          <input {...register("surname")} type="text" placeholder="Cognoms" />
          <input {...register("phone")} type="text" placeholder="Telefon" />
          <input {...register("email")} type="text" placeholder="Email" />
         <button type="submit">Enviar</button>
        </form>
      </div>
   
  )
}
