'use client'
import React from 'react'
import '../globals.css'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Resume from './Component/Resume'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AnimatePresence,motion } from 'framer-motion'
import TransitionPage from '../Component/TransitionPage'

export default function page() {
  const router = useRouter()
  return (<>
  <AnimatePresence mode='wait'>

 
    <motion.div key={router.route} className='w-screen max-h-fit relative'>
      <TransitionPage/>
        <div className='containerWrap2'>
           <div className='p-3 flex justify-start items-center font-popins relative '>
                <h1 className='text-2xl text-[#4831d4] font-bold tracking-wider '>BengaliCoder</h1>
               <Navbar barcolor='#4831d4'/>
                <div className='hidden lg:block'>
                    <ul className='flex justify-around text-lgn tracking-wider font-semibold '>
                        <Link href='/' className='mx-4 text-[#4831d4]'>Home</Link>
                        <Link href='/About' className='mx-4 text-[#4831d4]'>About</Link>
                        <li className='mx-4 text-[#4831d4]'>Blog</li>
                        <li className='mx-4 text-[#4831d4]'>Conatct</li>
                        <li className='mx-4 text-[#4831d4]'>Project</li>
                    </ul>
                </div>
            </div>

          <Resume/>
        </div>
      

    </motion.div>
    </AnimatePresence>
    <div className='w-screen h-[70vh] bg-[#3D155F]'>
      <Footer/>
    </div>
  </>
  )
}
