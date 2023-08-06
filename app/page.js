'use client'
import Image from 'next/image'
import Herosection from './Component/Herosection'
import Herosection2 from './Component/Herosection2'
import Herosection3 from './Component/Herosection3'
import Herosection4 from './Component/Herosection4'
import Contactform from './Component/Contactform'

export default function Home() {
  return (
    <>
    <div className='w-screen h-screen'>

    <Herosection/>
    </div>
    <div className='w-screen max-h-fit'>
      <Herosection2/>
    </div>
    <div className='w-screen max-h-fit bg-[#4831d4] '>
      <Herosection3/>
    </div>
    <div className='w-screen h-[90vh]'>
    <Herosection4/>
    </div>
    <div className='w-screen h-[90vh]'>
     <Contactform/>
    </div>
    </>
    // <div className=' mx-auto bg-dBlue'>

    //   <div className='container mx-auto h-screen' style={{background:'linear-gradient(90deg, #4831d4 67%, #ccf381 33%'}}>h</div>
    // </div>
  )
}
