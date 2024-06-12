'use client'

import {
  RiTwitterXFill,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMailLine,
} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    path: 'https://github.com/sanjayvjacob',
    name: <RiGithubFill/>,
  },
  {
    path: 'https://linkedin.com/in/sanjayvjacob',
    name: <RiLinkedinBoxFill/>,
  },
  {
    path: 'https://twitter.com/sanjayvjacob',
    name: <RiTwitterXFill/>,
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
      <Link href='/contact'><div className={`${iconStyles}`}><RiMailLine /></div></Link>
    </div>
  )
}

export default Socials