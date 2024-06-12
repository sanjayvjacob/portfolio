import Link from "next/link"
import { Button } from "./ui/button"
import { RiArrowDownSLine, RiDownloadLine } from 'react-icons/ri';
import Socials from "./Socials";
import DevImg from "./DevImg";

const Hero = () => {
  return (
    <section className="py-10 xl:py-22 h-full xl:pt-26 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="order-2 xl:order-none text-center xl:text-left">
        <h1 className="h1 mb-6">Hello, I'm<br /><span className="text-primary">Sanjay Jacob</span></h1>
        <p className="subtitle max-w-[490px] mx-auto xl:mx-0 mb-4"><span className="text-primary font-bold">Front-end Developer</span> | Passionate about designing intuitive web interfaces and developing user-friendly web applications.</p>

        {/* Button & Socials*/}
        <div className="flex flex-col items-center justify-start xl:flex-row gap-y-3 gap-x-3 mx-auto xl:mx-0">
              <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="border-2 border-background text-background text-lg" size="sm">CV<RiDownloadLine /></Button>
              </Link>
              <Socials 
                containerStyles='flex gap-x-4 justify-center md:justify-start'
                iconStyles='text-primary text-[30px] hover:text-foreground transition-all'
              />
            </div>
        
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