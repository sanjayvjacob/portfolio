import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import { RiArrowDownSLine } from 'react-icons/ri';

import Socials from "./Socials";
import DevImg from "./DevImg";

const Hero = () => {
  return (
    <section className="py-10 xl:py-22 h-full xl:pt-26 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="order-2 xl:order-none text-center xl:text-left">
        <h1 className="h1 mb-4">Hello, I'm<br /><span className="text-primary">Sanjay Jacob</span></h1>
        <p className="subtitle max-w-[490px] mx-auto xl:mx-0"><span className="text-primary font-bold">Front-end Developer</span> | Passionate about crafting elegant solutions to complex problems.</p>
        {/* Buttons */}
        <div className="flex gap-y-3 gap-x-3 mx-auto xl:mx-0 mb-12 justify-center md:justify-start">
          <Link href='/contact'>
            <Button className="gap-x-2">Contact me<Send send={18}/>
            </Button>
          </Link >
          <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant='secondary' className="gap-x-2">Download CV<Download send={18}/>
          </Button>
          </Link>
        </div>
        {/* Socials */}
        <Socials 
        containerStyles='flex gap-x-6 mx-auto xl:mx-0 justify-center md:justify-start'
        iconStyles='text-foreground text-[26px] hover:text-primary transition-all'/>
        </div>
        {/* Image */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <DevImg 
          containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
          imgSrc='/hero/developer.png'
          />
        </div>
      </div>
      {/* Icons */}
      <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
      <RiArrowDownSLine className="text-3xl text-primary"/>
      </div>
    </div>
  </section>
  )
}

export default Hero