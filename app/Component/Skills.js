import React from 'react'
import python from '../Images/python.png'
import aws from '../Images/aws.png'
import css from '../Images/css.png'
import fastapi from '../Images/fastapi.png'
import framermotion from '../Images/framermotion.png'
import javascript from '../Images/javascript.png'
import mysql from '../Images/mysql.png'
import nextjs from '../Images/nextjs.png'
import nodejs from '../Images/nodejs.png'
import reactjs from '../Images/reactjs.png'
import tailwind from '../Images/taiwind.webp'
import wordpress from '../Images/wordpress.png'
import {motion} from 'framer-motion'
import Image from 'next/image'

const ImageObj =[
         {img:python,imgName:'Python'},
         {img:aws,imgName:'AWS'},
         {img:css,imgName:'CSS'},
         {img:fastapi,imgName:'FastApi'},
         {img:framermotion,imgName:'Framer Motion'},
         {img:javascript,imgName:'JavaScript'},
         {img:mysql,imgName:'MySql'},
         {img:nextjs,imgName:'Next Js'},
         {img:nodejs,imgName:'Node Js'},
         {img:reactjs,imgName:'React Js'},
         {img:tailwind,imgName:'Tailwind'},
         {img:wordpress,imgName:'Word Press'},  
                ]

export default function Skills() {
  return (
    <div className='containerWrap2 flex justify-center items-center   text-center flex-col  p-6 '>
             <h1 className='text-5xl font-bold my-4 text-[#4831d4]'>Skills</h1>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.5}} viewport={{once:true}} className=' grid grid-rows-6 grid-cols-2 md:grid-rows-2 md:grid-cols-6 md:gap-x-8 md:gap-y-8 p-4 gap-y-3 gap-x-2 border-[#ccf381] '>
         {ImageObj.map((e)=>{
          return <>
         
          <div key={e.img} className=' hidden text-center bg-slate-50 shadow-md md:flex-row rounded-md md:flex items-center justify-center'>
            
          <Image
             alt='python-logo'
             src={e.img}
             width={60}
             height={60}
             />
      <h3 className='text-[#3d155f] font-popins  ml-2 font-semibold'>{e.imgName}</h3>
      
     </div>
     <div key={e.img} className='md:hidden bg-slate-50 shadow-sm flex-row rounded-md flex items-center justify-center'>
            <div className='overflow-hidden flex-1'>
            <Image
             alt='python-logo'
             src={e.img}
             width={40}
             height={40}
             />
            </div>
         
      <h3 className='text-[#3d155f]  text-left flex-1 font-popins   font-semibold'>{e.imgName}</h3>
      
     </div>
     </>
         })}
          
        </motion.div>
    </div>
  )
}
