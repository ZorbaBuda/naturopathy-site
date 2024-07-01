'use client'

import React, { useRef, useState } from 'react'

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [submitted, setSubmitted] = useState(false);
  
    const formRef = useRef()
  
//     async function handleSubmit(event) {
//       event.preventDefault();
//     }

//     const formData = new FormData(event.target);
//     const res = await sendContactForm({
//       name: name,
//       email: email,
//       subject: subject,
//       message: message,
//     });
//     if (res == 0) {
//       setMessage("Thank you for your valuable comment!");
//       //formRef.current.reset();
//       setName(''),
//       setName(''),
//       setEmail(''),
//       setMessage('')
//     } else {
//       setMessage("Something went wrong! Please try again");
//     }
  

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     try {
//       const response = await fetch("api/contact", {
//         method: "post",
//         body: formData,
//       });

//       if (!response.ok) {
  
//         throw new Error(`response status: ${response.status}`);
//       }
//       const responseData = await response.json();
      
//       alert("Message successfully sent");
//     } catch (err) {
//       console.error(err);
//       alert("Error, please try resubmitting the form");
//     }
//   }


  return (
    <div>
         
      </div>
   
  )
}
