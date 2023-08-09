import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import matter  from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import fs from "fs";

const getPostContent = () => {
  const folder = "POST/";
  const file = `POST/my.md`;
  const content = fs.readFileSync(file, "utf8");
  return content
};

export default function page({source}) {
  const post=getPostContent()
  return (
    <>
    <Navbar barcolor={"#4831d4"}/>
    <div  className='w-screen max-h-fit'>
    <article className="prose lg:prose-xl">

     <Markdown>{post}</Markdown>
    </article>
    </div>
    <div className='w-screen h-[70vh] bg-[#3D155F]'>
     <Footer/>
    </div>
    </>
  )
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}