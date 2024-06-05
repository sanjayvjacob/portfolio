import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import { usePathname } from "next/navigation"

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
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer text-primary'/>
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
      <div className="mt-32 mb-40 text-center text-2xl"><Link href="/">
          <h1 className="text-4xl font-semibold">
            SanjayJacob<span className="text-primary">.</span></h1></Link></div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link,index)=>{
            return (
            <Link 
            href={link.path} 
            key={index} 
            className={`${link.path === pathname && "text-primary border-b-2 border-primary"}text-xl capitalize hover:text-primary transition-all`}>{link.name}</Link>
          )
          })}
        </nav>
        {/* <Socials 
        containerStyles='flex gap-x-4' iconStyles='text-2xl'/> */}
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav