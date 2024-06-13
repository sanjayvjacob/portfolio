import Socials from "./Socials"

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
            Copyright &copy; Sanjay Jacob. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer