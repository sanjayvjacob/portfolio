import Socials from "./Socials"
import { RiNextjsFill, RiTailwindCssFill, RiGithubFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiFramer, SiShadcnui } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-accent dark:bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}
          <Socials
          containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
          iconStyles='text-primary dark:text-white/70 text-[25px] hover:text-white dark:hover:text-primary transition-all'
          />
          {/* copyright */}
          <div className="text-muted-foreground">
          &copy; 2024 Sanjay Jacob  <span className="ml-2">•</span>
          <span className="relative inline-block hover:text-[#53c28b] group ml-3">
          Colophon
          <span className="invisible w-[270px] bg-[#bbb] text-[#111] text-left rounded-[5px] p-[15px_25px] absolute z-10 bottom-[125%] 
          xl:left-full xl:transform xl:translate-x-[-15px] 
          right-full transform -translate-x-[-80px]
          opacity-0 transition-opacity duration-300 text-[16px] leading-[1.5] group-hover:visible group-hover:opacity-100">
          <div className="flex items-center mb-1">
          <RiNextjsFill className="mr-[10px] text-[25px]"/>NextJS for code</div>
          <div className="flex items-center mb-1">
          <RiTailwindCssFill className="mr-[10px] text-[25px]"/>Tailwind CSS for styles</div>
          <div className="flex items-center mb-1">
          <SiFramer className="mr-[15px] text-[20px]"/>Framer for animation</div>
          <div className="flex items-center mb-1">
          <SiShadcnui className="mr-[16px] text-[17px]"/>Shadcn UI for components</div>
          <div className="flex items-center mb-1">
          <RiGithubFill className="mr-[10px] text-[25px]"/>GitHub for versions</div>
          <div className="flex items-center">
          <IoLogoVercel className="mr-[15px] text-[20px]"/>Vercel for launch</div>
          </span>
          </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer