import React from 'react'
import {motion} from 'framer-motion'

export default function Herosection3() {
  return (
    <>
    <div className='containerWrap2 p-6 flex flex-col md:flex-row'>
        <motion.div initial={{opacity:0,translateY:40}} whileInView={{opacity:1,translateY:0}} viewport={{once:true}} transition={{ duration: 0.5 ,delay:0.9}} className='flex-1  md:p-4 text-left'>
            <h1 className='text-3xl md:text-5xl font-extrabold my-4 text-[#ccf381]'>Over the years</h1>
            <p className='my-4 font-popins text-white text-sm md:text-base'>I&apos;ve built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>

<p className='my-4 font-popins text-white text-sm md:text-base'>Currently, I work at Shopify as a Senior Frontend Engineer crafting thoughtful and inclusive experiences that adhere to web standards for over 3 million merchants across the world.</p>

<p className='my-4 font-popins text-white text-sm md:text-base'>Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services tailored towards automated VAT compliance for multi-channel sellers in Europe.</p>

<p className='my-4 font-popins text-white text-sm md:text-base'>Prior to hellotax, I was Senior frontend engineering consultant with Pixel2HTML, building JavaScript applications and interfaces for orgs and individuals.</p>

<p className='my-4 font-popins text-white text-sm md:text-base'>I once also led the frontend team at Conectar, an e-learning startup through building multiple React applications into a single robust learning platform.</p>
        </motion.div>
        <div className='flex-1 p-8 border-4 border-[#ccf381]'>
            <img className='text-center' src="https://camo.githubusercontent.com/5ddf73ad3a205111cf8c686f687fc216c2946a75005718c8da5b837ad9de78c9/68747470733a2f2f7468756d62732e6766796361742e636f6d2f4576696c4e657874446576696c666973682d736d616c6c2e676966" alt="coding"/>
        </div>
    </div>
    </>
  )
}
