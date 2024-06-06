import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import { usePathname } from "next/navigation"
import Socials from './Socials'

const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'projects',
    path: '/projects'
  },
  {
    name: 'contact',
    path: '/contact'
  },
]

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <AlignJustify className='cursor-pointer text-primary'/>
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-between h-full'>
        <div>
      <div className="mt-32 mb-40 text-center text-2xl">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            SanjayJacob<span className="text-primary">.</span></h1>
            </Link>
            </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link,index)=>{
            return (
            <Link 
            href={link.path} 
            key={index} 
            className={`text-xl capitalize hover:text-primary transition-all ${
              link.path === pathname ? "text-primary border-b-2 border-white" : ""
            }`}>{link.name}</Link>
          )
          })}
        </nav>
        </div>
        <div className="mb-8">
          <Socials containerStyles='flex gap-x-4 justify-center' iconStyles='text-2xl'/>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav