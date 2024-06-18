import Image from "next/image"

const skillData = [
  {
    title: 'tools',
    data: [
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
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
      },
      {
        imgPath: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
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
      <div className="container mx-auto bg-[#D9F2E6] dark:bg-secondary rounded-xl m-12 p-9">
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
          <div className="flex-1">
          <p className="subtitle max-w-xl mx-auto xl:max-0 text-justify">Hi, I'm Sanjay. I hail from London. I have a background in Web Development, Finance and Business. My path in Front-End Web Development came from wanting the freedom to channel my technical capabilities into a more creative, lasting and practical form. <br /><br />  I'm constantly learning and experimenting with new technologies to stay updated in this ever-evolving field. Bringing designs to life using React, Next.js is what I do best. I enjoy the process of translating static designs into dynamic and responsive websites.</p>
          <div className="flex gap-x-3 justify-center xl:justify-start">
          <p className="xl:text-2xl text-[20px] mr-1 dark:text-white/70">Tech Stack | </p>
                       {getData(skillData, 'tools').data.map((item, index)=>{
                          const {imgPath} = item;
                          return <div key={index}>
                            <Image
                            src={imgPath}
                            width={35}
                            height={35}
                            alt=""
                            priority
                            className="w-8 h-8 xl:w-9 xl:h-9"
                            />
                          </div>
                        })}
                      </div>
                  </div>
                  </div>
                  </div>
    </section>
  )
}

export default About