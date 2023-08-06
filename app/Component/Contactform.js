import React from 'react'

export default function Contactform() {
  return (
    <div className='containerWrap2 h-[100%] flex flex-col justify-start'>
        <div className='text-center'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-[#4831d4] my-9'>
                Send Me Message!
            </h1>
            <p className='my-4 text-xl md:text-2xl text-[#3d155f]'>
                  Got a question or proposal, or just want<br/>
                  to say hello? Go ahead.
            </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center'>
            <div className='w-[90%] md:w-[30%] font-popins'>
                <div className='flex-1 my-4  
                                border-b-[1px] 
                                border-gray-500  ml-4'>
                    <h3>Your Name</h3>
                    <input className='py-2 outline-none'  type='text' placeholder='Enter Your name'/>
                </div>
            </div>
            <div className='w-[90%] md:w-[30%] font-popins'>
                <div className='flex-1 my-4  
                                border-b-[1px] border-gray-500  
                                ml-4'>
                      <h3>Email Address</h3>
                      <input className='py-2 outline-none' type='text' placeholder='Email Address'/>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
             
            <div className='w-[90%] md:w-[60%] 
                            border-b-[1px] border-gray-500 
                            font-popins my-8  py-2 '>
                  <h3 className='py-2'>
                     Your Message
                  </h3>
             <input type='text' className='outline-none' placeholder='Your Message'/>
            </div>
            
            </div>
        <div className='flex justify-center py-2'>
            <div className='w-[90%] md:w-[30%] border-[1px] 
                          border-[#3d155f] text-[#3d155f] 
                            text-center p-4 text-2xl 
                            font-popins hover:bg-[#3d155f] 
                            hover:text-white duration-200'>
                
                 Shoot Message
            </div>

        </div>
    </div>
  )
}
