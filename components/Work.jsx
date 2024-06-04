'use client'
import Link from "next/link"
import { Button } from "./ui/button"

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules'

import ProjectCard from "./ProjectCard"

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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
         <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
          </div>
          {/* slider */}
          <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
            <Swiper 
            className="h-[480px] bg-pink-100"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{clickable: true}}
            >
              {projectData.slice(0,4).map((project,index)=>{
                return (
                  <SwiperSlide key={index}>
                    <ProjectCard project={project}/>
                  </SwiperSlide>
                )
              })}
            </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work