import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"

const infoData = [
  {
    icon: <User2 size={20}/>,
    text: 'Riyan Davis',
  },
  {
    icon: <PhoneCall size={20}/>,
    text: '+44 12345 67890', 
  },
  {
    icon: <MailIcon size={20}/>,
    text: 'sanjay@gmail.com',
  },
  {
    icon: <Calendar size={20}/>,
    text: 'Born on 13 Aug 1997',
  },
  {
    icon: <GraduationCap size={20}/>,
    text: 'Master on Management',
  },
  {
    icon: <HomeIcon size={20}/>,
    text: '321 Blue Avenue, UK',
  },
]

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: "University of Hertfordshire",
        qualification: 'Master of Science',
        years: '2022 - 2023'
      },
      {
        university: "University of Bedfordshire",
        qualification: 'Bachelor of Science',
        years: '2021 - 2022'
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: "Amazon, UK",
        qualification: 'Software Engineer',
        years: '2024 - 2025'
      },
      {
        university: "Microsoft, UK",
        qualification: 'Software Engineer',
        years: '2022 - 2023'
      },
    ],
  }
]

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'JavaScript, PHP',
      },
      {
        name: 'Back-end Development',
      },
    ]

  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
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
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg 
            containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px]
            bg-no-repeat relative'
            imgSrc='/about/developer.png'/>
          </div>
          {/* tabs */}
          <div className="flex-1 ">
            <Tabs defaultValue="personal">
              <TabsList className='w-full grid xl:grid-cols-2 xl:max-w-[420px] xl:border dark:border-none'>
                <TabsTrigger 
                className='w-[162px] xl:w-auto' 
                value='personal'>Personal Info</TabsTrigger>
                <TabsTrigger 
                className='w-[162px] xl:w-auto' 
                value='skills'>Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value='personal'>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing</h3>
                    <p className="subtitle max-w-xl max-auto xl:max-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem harum dolores dolore at laborum deleniti vero?</p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index)=>{
                        return (
                          <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-4xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skills list */}
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item,index)=> {
                            const {name} = item;
                            return (
                              <div 
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" 
                              key={index}>
                                <div className="font-medium">{name}</div>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, 'tools').data.map((item, index)=>{
                          const {imgPath} = item;
                          return <div key={index}>
                            <Image 
                            src={imgPath}
                            width={48}
                            height={48}
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