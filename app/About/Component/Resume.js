import React from 'react'
import '../../globals.css'
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa'

export default function Resume() {
  return (
    <div className=' p-3 bg-slate-100'>
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
        <div className='col-span-1 '>l</div>
        <div className='col-span-3 flex flex-col items-start p-2'>
          <h1 className='text-7xl font-popins text-[#4831d4] font-bold'>Shahid Ali</h1>
          <span className='text-3xl font-popins my-[10px]'>Expert Full Stack Developer.</span>
          <p className='my-[20px] text-lg text-gray-500 font-popins'>Engineer valued for driving high-performance accessible web experiences. <br />I design quality, user-friendly and scalable products regardless of stack.</p>

          <h2 className='resumeHeader text-3xl font-popins text-[#4831d4] font-bold z-20 my-4'>Experience</h2>
          <p className='text-gray-500 text-lg font-popins'>I’ve worked on a handful of web projects over the years,<br /> some of which were for the following organizations:</p>
          <div className='my-4 flex justify-between items-center  w-[100%]'>
            <h2 className='text-3xl font-popins text-[#4831d4] font-bold'>
              Xanther
              <span className='text-gray-500 font-normal text-2xl'>-- Full Stack Dev
              </span>
            </h2>
            <span className='text-gray-500 text-lg font-popins'>Nov 2022 - Present</span>
          </div>
          <p className='text-lg text-gray-500 font-popins'>Wokred on both Ai and Web based applications using Technologies like <br/> <span className='text-[#4831d4]'>React Js </span>, <span className='text-[#4831d4]'>Next Js</span> , <span className='text-[#4831d4]'>Langchain</span> </p>
          <ul className='ml-10 text-gray-500 font-popins text-lg'>
            <li className='list-square'>Improved UI of an on going project </li>
            <li className='list-square'>Hvae built an UI from scratch for a project</li>
            <li className='list-square'>Fixed bugs on backed</li>
            <li className='list-square'>Have Build a backend on Node Js and Express</li>
            <li className='list-square'>Have Debugged issues on a python backend that uses machine learning</li>
            <li className='list-square'>Worked with AWS services like Lamda function , S3 , EC2 , Dynamo DB , Cloud Watch Log</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
