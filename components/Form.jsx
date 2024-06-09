'use client'

import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, Mail, ArrowRight, MessageSquare } from "lucide-react"

const Form = () => {
  const formRef = useRef(null);
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v3uuu28', 'template_x0vt4kr', formRef.current, {
        publicKey: 'tQDCnVzudAFJx2gFc',
      })
      .then(
        (result) => {
          setSuccess(true);
          setError(false); // Reset error state
          formRef.current.reset(); // Clear the form fields
          setTimeout(() => setSuccess(false), 3000); // Reset success message after 3 seconds
        },
        (error) => {
          setError(true);
          setSuccess(false); // Reset error state
          setTimeout(() => setError(false), 3000); // Reset error message after 3 seconds
        },
      );
  };

  return (
    <form className="flex flex-col gap-y-4" ref={formRef} onSubmit={sendEmail}>
      {/* input */}
      <div className="relative flex items-center">
        <Input type='text' id='name' placeholder='Name' name="name" className='border border-solid border-primary p-4'/>
        <User className="absolute right-6"/>
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type='email' id='email' placeholder='Email' name="email" className='border border-solid border-primary p-4'/>
        <Mail className="absolute right-6"/>
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea placeholder='Message' name="message" className='border border-solid border-primary p-4'/>
        <MessageSquare className="absolute top-4 right-6"/>
      </div>
      <Button className='flex items-center gap-x-1 max-w-[166px]'>Send
      <ArrowRight size={20}/></Button>
      {error && "Error"}
      {success && "Success"}
    </form>
  )
}

export default Form