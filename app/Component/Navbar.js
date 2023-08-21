'use client'
import React from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faX} from "@fortawesome/free-solid-svg-icons";

import {motion} from 'framer-motion'
export default function Navbar({barcolor}) {
   
  const [menuState,setMenuState]=useState(false)
  return (
    <div className='md:hidden absolute flex flex-col items-end right-0 top-[10px] '>
      <span className={`text-[${barcolor}] text-3xl p-2`} onClick={()=>{setMenuState(!menuState)
     console.log(menuState)   
   }
   }>
        {menuState ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars}/>}
        </span>
        <div className={`w-screen h-[35vh] bg-white  mt-3 ${menuState ? 'translate-x-0 block' : 'translate-x-[100%] hidden' } transition duration-1000 ease-in-out `}>
           <div className='w-[80%] h-[100%] mx-auto flex'>
                 <ul className='flex-1'>
                  <motion.li 
                     initial={{opacity:0,translateY:20}}
                     whileInView={{opacity:1,translateY:0}}
                     transition={{duration:0.5}}
                     className='my-4 text-[#4831d4] font-popins tracking-widest'>Home</motion.li>
                  <motion.li 
                     initial={{opacity:0,translateY:20}}
                     whileInView={{opacity:1,translateY:0}}
                     transition={{duration:0.5}}
                     className='my-4 text-[#4831d4] font-popins tracking-widest'>About</motion.li>
                  <motion.li 
                     initial={{opacity:0,translateY:20}}
                     whileInView={{opacity:1,translateY:0}}
                     transition={{duration:0.5}}
                     className='my-4 text-[#4831d4] font-popins tracking-widest'>Blog</motion.li>
                  <motion.li 
                     initial={{opacity:0,translateY:20}}
                     whileInView={{opacity:1,translateY:0}}
                     transition={{duration:0.5}}
                     className='my-4 text-[#4831d4] font-popins tracking-widest'>Contact</motion.li>
                  <motion.li 
                     initial={{opacity:0,translateY:20}}
                     whileInView={{opacity:1,translateY:0}}
                     transition={{duration:0.5}}
                     className='my-4 text-[#4831d4] font-popins tracking-widest'>Project</motion.li>
                 </ul>
                 <div className='flex-1 my-4 border-l-[1px] px-2 flex flex-col'>
                  <motion.h1 
                  initial={{opacity:0,translateY:20}}
                  whileInView={{opacity:1,translateY:0}}
                  transition={{duration:0.5}}
                  className='text-slate-500 tracking-widest'>SAY HELLO</motion.h1>
                  <motion.span
                      initial={{opacity:0,translateY:20}}
                      whileInView={{opacity:1,translateY:0}}
                      transition={{duration:0.5}} 
                      className='text-[#4831d4] font-popins '>
                   <a href='mailto:shahid451998@gmail.com'>Email</a>
                  </motion.span>
                  <motion.span 
                    initial={{opacity:0,translateY:20}}
                    whileInView={{opacity:1,translateY:0}}
                    transition={{duration:0.5}}
                    className='text-[#4831d4] font-popins my-2 '>
                   <a href='mailto:shahid451998@gmail.com'>Linkedin</a>
                  </motion.span>
                 </div>
           </div>
        </div>
    </div>
  )
}
