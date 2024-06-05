'use client'

import React, {useRef, useState} from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"

const Form = () => {
  const formRef = useRef();
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v3uuu28', 'template_x0vt4kr', formRef.current, {
        publicKey: 'tQDCnVzudAFJx2gFc',
      })
      .then((result) => {
          setSuccess(true);
        },(error) => {
          setError(true);
        },
      );
  };

  return (
    <form className="flex flex-col gap-y-4" ref={formRef} onSubmit={sendEmail}>
      {/* input */}
      <div className="relative flex items-center">
        <Input type='text' id='name' placeholder='Name' name="name" className='border border-solid border-primary p-4'/>
        <User className="absolute right-6 size={28}"/>
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type='email' id='email' placeholder='Email' name="email" className='border border-solid border-primary p-4'/>
        <MailIcon className="absolute right-6 size={28}"/>
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea placeholder='Message' name="message" className='border border-solid border-primary p-4'/>
        <MessageSquare className="absolute top-4 right-6 size={28}"/>
      </div>
      <Button className='flex items-center gap-x-1 max-w-[166px]'>Send
      <ArrowRightIcon size={20}/></Button>
      {error && "Error"}
      {success && "Success"}
    </form>
  )
}

export default Form