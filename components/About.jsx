import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const skillData = [
  {
    title: 'tools',
    data: [
      {
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
      },
      {
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" ,
      },
      {
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
      },
      {
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
      },
      {
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
      },
      {
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
      },
      {
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg",
      },
      {
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
      },
      {
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg",
      },
    ]

  }
]

const About = () => {
  const getData = (arr,title) => {
    return arr.find((item) => item.title === title)
  }
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto h-[580px] bg-[#D9F2E6] dark:bg-secondary rounded-xl m-12 p-9">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
        <div className="flex flex-col h-[400px] xl:flex-row">
          <div className="hidden xl:flex flex-1 relative justify-center items-center">
            <Image 
            src='/about/developer.JPG'
            priority 
            quality={100} 
            width={300}
            height={340}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="" 
            className='object-contain rounded-xl dark:mix-blend-lighten absolute'
            style={{border:"1px solid #111"}}
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className='w-full grid xl:grid-cols-2 xl:max-w-[420px] xl:border dark:border-none'>
                <TabsTrigger 
                className='w-[162px] xl:w-auto' 
                value='personal'>Personal Info</TabsTrigger>
                <TabsTrigger 
                className='w-[162px] xl:w-auto' 
                value='skills'>Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-4 xl:mt-8">
                {/* personal */}
                <TabsContent value='personal'>
                  <div className="text-center xl:text-left">
                    <p className="subtitle max-w-xl max-auto xl:max-0 text-justify">I'm a self-taught front-end developer who is passionate about building dynamic websites and applications. I have a strong preference for easy to use, intuitive UX/UI with fast loading times being one of my highest priorities. I'm constantly learning and experimenting with new technologies to stay updated in this ever-evolving field.<br /><br />
                    Bringing designs to life using React, Next.js is what I do best. I enjoy the process of translating static designs into dynamic and responsive websites.
              </p>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className="text-center xl:text-left">
                    <h4 className="h4 mb-8">Tools I use</h4>
                    <div>
                      {/* tools */}
                      <div className="flex gap-x-3 justify-center xl:justify-start">
                        {getData(skillData, 'tools').data.map((item, index)=>{
                          const {imgPath} = item;
                          return <div key={index}>
                            <Image 
                            src={imgPath}
                            width={40}
                            height={40}
                            alt=""
                            priority/>
                          </div>
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About