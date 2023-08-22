import React from 'react'
import fs from 'fs'
import path from 'path'
import matter  from 'gray-matter'
import Navbar from '@/app/Component/Navbar'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa'
import Footer from '@/app/Component/Footer'

const getPostContent =(slug)=>{
const fileContents = fs.readFileSync(`POST/${slug}.md`,'utf-8')
const matterResult = matter(fileContents)

return matterResult
}

export default function SingleBlog({params}) {
    
    const post = getPostContent(params.slug)
  return (
    <>
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

        
        <div className='flex justify-center my-5'>
        <article className="prose md:prose-lg prose-h1:text-[#4831d4] 
        prose-h1:text-3xl 
        prose-h1:font-bold
        prose-headings:text-gray-800 
        prose-p:text-gray-600 prose-p:leading-[1.5rem] prose-a:text-[#4831d4] prose-p:font-popins">
        <h1>{post.data.title}</h1>
        <div>{post.data.date}
        </div>
        <div className='flex'>
        <span className='text-2xl mx-1'><FaGithub /></span>
        <span className='text-2xl mx-1 text-[#0077b5]'><FaLinkedin /></span>
        </div>

          <Markdown>{post.content}</Markdown>
       </article>
       </div>


       
    </div>
    <div className='w-screen h-[70vh] bg-[#3D155F]'>
     <Footer/>
    </div>
    <div>{params.slug}</div>
    </>
 
  )
}

// export const getStaticPaths = async () =>{
// const files = fs.readdirSync(path.join('POST'))
// const paths = files.map((filename)=>({
//     params:{
//         slug:filename.replace('.md','')
//     }
// }))

// return {
//     paths,
//     fallback: false
// }
// }

// export const getStaticProps = async ({params:{slug}}) =>{
// console.log(slug)


//     return {props:{}}
// }

