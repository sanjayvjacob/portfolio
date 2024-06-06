'use client'
import Link from "next/link"
import { Button } from "./ui/button"

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules'
import { SquareArrowOutUpRight } from "lucide-react"

import ProjectCard from "./ProjectCard"
import projectData from "./ProjectData"

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center ">
         <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">View all of my completed work here</p>
          <Link href='/projects'>
            <Button
            className='flex items-center gap-x-1 max-w-[166px]'>
              All projects<SquareArrowOutUpRight size={20}/></Button>
          </Link>
          </div>
          {/* slider */}
          <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
            <Swiper 
            className="h-[480px] bg-[#D9F2E6] dark:bg-secondary rounded-md"
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