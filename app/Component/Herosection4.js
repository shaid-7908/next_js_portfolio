import React from 'react'
import {motion} from 'framer-motion'
export default function Herosection4() {
    return (
        <div className='containerWrap2  mt-[40px] h-[80vh] md:shadow-lg flex flex-col md:flex-row'>
            <div className='flex-1 p-8 md:p-4 text-left flex flex-col justify-center items-start'>
                <motion.h1 
                initial={{opacity:0,translateY:40}} 
                whileInView={{opacity:1,translateY:0}} 
                transition={{duration:0.5}} 
                viewport={{once:true}} 
                className='text-3xl md:text-5xl font-extrabold my-4 text-[#4831d4]'>
                    I build &<br />design stuff
                    </motion.h1>
                <motion.p 
                initial={{opacity:0,translateY:40}} 
                whileInView={{opacity:1,translateY:0}} 
                transition={{duration:0.5}} 
                viewport={{once:true}} 
                className='text-sm lg:text-xl my-4 font-popins text-[#3d155f]'>
                    Open source<br/>
                    projects, web apps<br/>
                    and experimentals.</motion.p>
                
             <div className='text-sm border-[1px] 
                p-4 w-[100%] md:w-[50%] 
                my-4 text-center flex justify-center 
              border-[#4831d4] text-[#4831d4]
                tracking-[3px] font-semibold hover:bg-[#4831d4] duration-200 hover:text-white'>
                <span>SEE MY WORK</span> 
             </div>
            </div>
             <div className='flex-1 p-8 md:p-4 
            md:border-t-0 border-t-2 md:border-l-2 
            text-left flex flex-col justify-center items-start'>
                <motion.h1 
                initial={{opacity:0,translateY:40}} 
                whileInView={{opacity:1,translateY:0}} 
                transition={{duration:0.5}} 
                viewport={{once:true}} 
                className='text-3xl md:text-5xl 
                font-extrabold 
                my-4 text-[#4831d4] '>
                     I write,
                     <br/>  sometimes
                  </motion.h1>
                <motion.p 
                initial={{opacity:0,translateY:40}} 
                whileInView={{opacity:1,translateY:0}} 
                transition={{duration:0.5}} 
                viewport={{once:true}} 
                className='text-sm md:text-xl my-4 font-popins text-[#3d155f]'>
                      About design,<br/>
                      frontend dev,<br/>
                      learning and life.</motion.p>
                <div className='border-[1px] p-4 w-[100%] md:w-[50%] my-4 text-center flex justify-center border-[#4831d4] text-[#4831d4] tracking-[3px] font-semibold hover:bg-[#4831d4] duration-200 hover:text-white'><span>READ MY ARTICLE</span> </div>
            </div>
        </div>
    )
}
