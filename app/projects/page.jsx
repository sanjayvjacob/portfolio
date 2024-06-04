'use client'
import React, {useState} from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    name: "UrbanAttire",
    description: "UrbanAttire is a dynamic and trendy React-based e-commerce website, designed to cater to the fashion-forward urban dwellers.",
    category: 'react js',
    link: "https://urban-attire-react.vercel.app/",
    github: "https://github.com/sanjayvjacob/UrbanAttire-react.git",
    image: '/work/urbanattire.png'
  },
  {
    name: "Hotely",
    description: "Hotely is a hotel booking platform intended for people who would like to book hotels all around the world. ",
    category: 'next js',
    link: "https://hotely-next.vercel.app/",
    github: "https://github.com/sanjayvjacob/Hotely-next.git",
    image: '/work/hotely.png'
  },
  {
    name: "Connect",
    description: "Connect is a Realtime Chat app build with React allows users to communicate with each other instantly over the internet.",
    category: 'react js',
    link: "https://connect-react-client.vercel.app/",
    github: "https://github.com/sanjayvjacob/Connect-react.git",
    image: '/work/connect.png'
  },
  {
    name: "Express Pizza",
    description: "Express Pizza is a dynamic and user-friendly online platform developed using React, designed to streamline the pizza ordering process for customers.",
    category: 'react js',
    link: "https://sanjayvjacob.github.io/express-pizza-react/",
    github: "https://github.com/sanjayvjacob/express-pizza-react.git",
    image: '/work/expresspizza.png'
  },
  {
    name: "Tesla Clone",
    description: "Tesla website homepage clone aims to replicate the look and functionality of the official Tesla website homepage.",
    category: 'JavaScript',
    link: "https://sanjayvjacob.github.io/tesla-clone-js/",
    github: "https://github.com/sanjayvjacob/tesla-clone-js.git",
    image: '/work/tesla.png'
  },
  {
    name: "Movie Hive",
    description: "Movie Hive is a React app using the TMDB API interacts with the movie database to fetch and display movie data. App allow users to search movies by keyword",
    category: 'react js',
    link: "https://sanjayvjacob.github.io/MovieHive-react/",
    github: "https://github.com/sanjayvjacob/MovieHive-react.git",
    image: '/work/movieHive.png'
  }
];

//remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item)=> item.category)),
]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all projects')

  const filteredProjects = projectData.filter(project =>{
    // if category is "all projects" return all else filter by category
    return category === 'all projects'
    ? project
    : project.category === category;
  })
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category,index)=>{
              return (
              <TabsTrigger
              onClick={()=> setCategory(category)} 
              value={category}
              key={index}
              className='capitalize w-[162px] md:w-auto'
              >
                {category}
                </TabsTrigger>
                )
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project,index)=>{
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}></ProjectCard>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects