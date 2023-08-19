'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Navbar from './Navbar'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import TransitionPage from './TransitionPage'
import { useRouter } from 'next/navigation'
import Particles1 from './Particles'

export default function Herosection() {
    const [show,setShow] = useState(false)
    const router = useRouter()
  return (
        <AnimatePresence mode='wait'>

      <motion.div key={router.route} className='herosectionBg '>
        <TransitionPage/>
        <div className='containerWrap2'>
            {/*Nav */}
            <div className='p-3 flex justify-start items-center font-popins relative '>
                <h1 className='text-2xl text-[#ccf381] font-bold tracking-wider mx-4'>BengaliCoder</h1>
               <Navbar barcolor="#ccf381"/>
                <div className='hidden lg:block'>
                    <ul className='flex justify-around text-lgn tracking-wider font-semibold '>
                        <Link href='/' className='mx-4 text-[#ccf381]'>Home</Link>
                        <Link href='/About' className='mx-4 text-[#ccf381]'>About</Link>
                        <li className='mx-4 text-[#ccf381]'>Blog</li>
                        <li className='mx-4 text-[#ccf381]'>Conatct</li>
                        <li className='mx-4 text-[#ccf381]'>Project</li>
                    </ul>
                </div>
            </div>
            {/*Section2 */}
            <div className='flex flex-col lg:flex-row'>
                <motion.div initial={{opacity:0,translateX:-40}} whileInView={{opacity:1,translateX:-0}} viewport={{once:true}} transition={{duration:0.5}} className=' flex-1 p-3 '>
                    <div className='text-5xl lg:text-7xl font-bold my-4 text-[#ccf381] p-3'>
                        <h1>Full Stack</h1>
                        <h1>Developer</h1>
                    </div>
                    <div className='text-slate-200 text-md md:text-lg my-4 p-3 font-popins'>
                        <p>I like to craft solid and scalable frontend products <br/> with great user experiences.</p>
                    </div>
                    
                </motion.div>
                <div className=' flex-1 p-3 relative'>
                    <Particles1/>
                                       
                    {/*for mid screen */}
                    
                    <motion.div
                    initial={{opacity:0,translateX:-40}} whileInView={{opacity:1,translateX:0}} viewport={{once:true}} transition={{duration:0.5}}
                    className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border-2 m-4  '>
                        <img className='object-cover translate-y-4  translate-x-4' src='https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/1/0/e/10e6c0a439e17280a6f3fa6ae059819af5517efd.png' alt='na'/>
                    </motion.div>
                </div>

            </div>
            {/*Section 3 */}
            <div className='section_hero hidden  md:flex lg:flex-row'>
                <motion.div initial={{opacity:0,translateX:-40}} whileInView={{opacity:1,translateX:0}} viewport={{once:true}} transition={{duration:0.5}} className='flex-1 text-xs md:text-base flex p-6 text-[#4831d4] lg:text-[#ccf381] font-popins'>
                    <div>Highly skilled at progressive enhancement, design systems & UI Engineering.</div>
                    <div>Highly skilled at progressive enhancement, design systems & UI Engineering.</div>
                </motion.div>
                <div className='flex-1'></div>
            </div>
        </div>
    </motion.div>
        </AnimatePresence>
  )
}
