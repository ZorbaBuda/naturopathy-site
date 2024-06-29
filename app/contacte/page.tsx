import React from 'react'
import { Contact  } from '../components'
import ContactForm from '../components/ContactForm'
import ContactFormTest from '../components/ContactFormTest'

export default function page() {
  return (
    <>
    <ContactFormTest />
    <ContactForm />
    <Contact/>
    </>
  )
}
