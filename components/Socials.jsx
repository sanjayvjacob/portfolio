'use client'

import {
  RiTwitterXFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    path: 'https://github.com/sanjayvjacob',
    name: <RiGithubFill/>,
  },
  {
    path: 'https://linkedin.com/in/sanjayvjacob',
    name: <RiLinkedinFill/>,
  },
  {
    path: 'https://twitter.com/sanjayvjacob',
    name: <RiTwitterXFill/>,
  },
  {
    path: 'https://instagram.com/sanjayvjacob',
    name: <RiInstagramFill/>,
  },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=>{
        return (
          <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer">
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials