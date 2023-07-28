import Image from 'next/image'
import Herosection from './Component/Herosection'
import Herosection2 from './Component/Herosection2'

export default function Home() {
  return (
    <>
    <div className='w-screen h-screen'>

    <Herosection/>
    </div>
    <div className='w-screen h-[80vh]'>
      <Herosection2/>
    </div>
    </>
    // <div className=' mx-auto bg-dBlue'>

    //   <div className='container mx-auto h-screen' style={{background:'linear-gradient(90deg, #4831d4 67%, #ccf381 33%'}}>h</div>
    // </div>
  )
}
