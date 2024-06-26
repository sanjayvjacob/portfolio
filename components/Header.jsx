'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import ThemeToggler from "./ThemeToggler"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { usePathname } from "next/navigation"
const Header = () => {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()

  useEffect(()=>{
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })
  })
  return (
    <header
    className={`${
      header 
      ? 'py-4 b-accent shadow-lg dark:bg-accent' 
      : 'py-6 dark:bg-transparent'
    } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#D9F2E6]'}`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
        <Link href="/">
          <h1 className='text-4xl md:text-4xl lg:text-4xl font-semibold'>SJ<span className='text-primary'>.</span></h1>
        </Link>
        <div className="flex items-center gap-x-6">
          <Nav 
          containerStyles='hidden xl:flex gap-x-8 items-center'
          linkStyles='relative hover:text-primary transition-all text-xl'
          underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'/>
        <ThemeToggler/>
        <div className="xl:hidden">
          <MobileNav/>
        </div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header