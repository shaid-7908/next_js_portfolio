import React from 'react'
import '../../globals.css'
import python from '../../Images/python.png'
import aws from '../../Images/aws.png'
import css from '../../Images/css.png'
import fastapi from '../../Images/fastapi.png'
import framermotion from '../../Images/framermotion.png'
import javascript from '../../Images/javascript.png'
import mysql from '../../Images/mysql.png'
import nextjs from '../../Images/nextjs.png'
import nodejs from '../../Images/nodejs.png'
import reactjs from '../../Images/reactjs.png'
import tailwind from '../../Images/taiwind.webp'
import wordpress from '../../Images/wordpress.png'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa'


const ImageObj =[
  {img:reactjs,imgName:'React Js'},
  {img:nextjs,imgName:'Next Js'},
  {img:nodejs,imgName:'Node Js'},
  {img:tailwind,imgName:'Tailwind'},
  {img:javascript,imgName:'JavaScript'},
  {img:framermotion,imgName:'Framer Motion'},
  {img:css,imgName:'CSS'},
  {img:mysql,imgName:'MySql'},
  {img:python,imgName:'Python'},
  {img:fastapi,imgName:'FastApi'},
  {img:aws,imgName:'AWS'},
  {img:wordpress,imgName:'Word Press'},  
         ]

export default function Resume() {
  return (
    <div className=' p-3 bg-slate-100 mb-8'>
      {/* Download Section */}
      <div className='flex items-center justify-end'>
        <span className='text-2xl mx-1'><FaGithub /></span>
        <span className='text-2xl mx-1 text-[#0077b5]'><FaLinkedin /></span>
        <div className='flex px-1 text-[#4831d4] items-center rounded-md border-[1px] border-[#4831d4]'>
          <FaDownload /><span className='mx-2'>Download</span>
        </div>
      </div>
      {/*Information section */}
      <div className='grid md:grid-cols-4 mt-[20px]'>
        <div className='col-span-1 flex flex-col items-start my-8 p-2'>
        <span className='resumeHeader2 text-[#4831d4] font-bold text-[1.175rem] z-20'>Bengalicoder.com</span>
        <span className='font-popins my-1 tracking-wide text-[1.175rem]'>Hooghly,West Bengal</span>
        <span className='resumeHeader2 text-[#4831d4] font-bold text-[1.175rem] z-20'>shahid451998@gmail.com</span>
        <h2 className='text-[#4831d4] mt-8 mb-4 font-bold text-[1.275rem]'>Core Technologies :</h2>
         {ImageObj.map((e)=>{
          return  <div className='flex items-center justify-center my-2' key={e.img}>
                        <Image alt='img' src={e.img} height={30} width={30} className='mr-2'/>
                       <h3 className='text-gray-500 font-popins font-semibold tracking-widest ml-1'>{e.imgName}</h3>
                   </div>
         }
         )}
       

        </div>
        <div className='col-span-3 flex flex-col items-start p-2 my-8'>
          <h1 className='text-7xl font-popins text-[#4831d4] font-bold'>Shahid Ali</h1>
          <span className='text-3xl font-popins my-[10px]'>Expert Full Stack Developer.</span>
          <p className='my-[20px] text-[1.175rem] text-gray-500 font-popins'>Engineer valued for driving high-performance accessible web experiences. <br />I design quality, user-friendly and scalable products regardless of stack.</p>

          <h2 className='resumeHeader text-3xl font-popins text-[#4831d4] font-bold z-20 my-4'>Experience</h2>
          <p className='text-gray-500 text-[1.175rem] font-popins'>I’ve worked on a handful of web projects over the years,<br /> some of which were for the following organizations:</p>
          <div className='my-4 flex justify-between items-center  w-[100%]'>
            <h2 className='text-3xl font-popins text-[#4831d4] font-bold'>
              Xanther
              <span className='text-gray-500 font-normal text-2xl'>-- Full Stack Dev
              </span>
            </h2>
            <span className='text-gray-500 text-[1.175rem] font-popins'>Nov 2022 - Present</span>
          </div>
          <p className='text-[1.175rem] text-gray-500 font-popins'>Wokred on both Ai and Web based applications using Technologies like <br/> <span className='text-[#4831d4]'>React Js </span>, <span className='text-[#4831d4]'>Next Js</span> , <span className='text-[#4831d4]'>Langchain</span> </p>
          <ul className='ml-10 text-gray-500 font-popins text-[1.175rem]'>
            <li className='list-square'>Improved UI of an on going project </li>
            <li className='list-square'>Hvae built an UI from scratch for a project</li>
            <li className='list-square'>Fixed bugs on backed</li>
            <li className='list-square'>Have Build a backend on Node Js and Express</li>
            <li className='list-square'>Have Debugged issues on a python backend that uses machine learning</li>
            <li className='list-square'>Worked with AWS services like Lamda function , S3 , EC2 , Dynamo DB , Cloud Watch Log</li>
          </ul>
          <h2 className='resumeHeader text-3xl font-popins text-[#4831d4] font-bold z-20 my-4'>Education</h2>
          <span className='text-gray-500 text-[1.175rem] font-popins my-1'>H.S - 2015(71%)</span>
          <span className='text-gray-500 text-[1.175rem] font-popins my-1'>Diploma in ETCE - 2020</span>
          <span className='text-gray-500 text-[1.175rem] font-popins my-1'>B.Tech in ECE - 2023</span>
          <h2 className='resumeHeader text-3xl font-popins text-[#4831d4] font-bold z-20 my-4'>Projects</h2>
          <p className='text-[1.175rem] font-popins text-gray-500'>
          Links to some of my work can be found on <span className='resumeHeader2 text-[#4831d4] font-bold text-xl z-20'>bengalicoder.com/Project</span> <br/> and details can be provided upon request via a scheduled demo call.
          </p>
        </div>

      </div>
    </div>
  )
}
