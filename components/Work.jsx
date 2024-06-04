'use client'
import Link from "next/link"
import { Button } from "./ui/button"

import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules'

import ProjectCard from "./ProjectCard"

const projectData = [
  {
    name: "UrbanAttire",
    description: "UrbanAttire is a dynamic and trendy React-based e-commerce website, designed to cater to the fashion-forward urban dwellers. UrbanAttire offers a seamless shopping experience for those seeking the latest in urban fashion trends.",
    category: 'react js',
    link: "https://urban-attire-react.vercel.app/",
    github: "https://github.com/sanjayvjacob/UrbanAttire-react.git",
    image: '/work/urbanattire.png'
  },
  {
    name: "Hotely",
    description: "Hotely is a hotel website where user can book hotel around the world",
    category: 'next js',
    link: "https://hotely-next.vercel.app/",
    github: "https://github.com/sanjayvjacob/Hotely-next.git",
    image: '/work/hotel.png'
  },
  {
    name: "Connect",
    description: "Connect is a Realtime Chat app build with React allows users to communicate with each other instantly over the internet. Users should be able to enter a chat room by entering their username & room ID",
    category: 'react js',
    link: "https://connect-react-client.vercel.app/",
    github: "https://github.com/sanjayvjacob/Connect-react.git",
    image: '/work/connect.png'
  },
  {
    name: "Express Pizza",
    description: "Express Pizza is a dynamic and user-friendly online platform developed using React, designed to streamline the pizza ordering process for customers to deliver an exceptional user experience.",
    category: 'react js',
    link: "https://sanjayvjacob.github.io/express-pizza-react/",
    github: "https://github.com/sanjayvjacob/express-pizza-react.git",
    image: '/work/pizzaexpress.png'
  },
  {
    name: "Tesla Clone",
    description: "Tesla website homepage clone aims to replicate the look and functionality of the official Tesla website’s homepage. Allows users to have a consistent experience with responsive design",
    category: 'HTML5, CSS3, JavaScript',
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
    <section>
      <div className="container mx-auto">
        <div>
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Work