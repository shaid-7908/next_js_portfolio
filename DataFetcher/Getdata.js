import fs from 'fs'
import matter from 'gray-matter'
export function getPostData(slug){
    const fileContents = fs.readFileSync(`POST/${slug}.md`,'utf-8')
    const matterResult = matter(fileContents)
    return matterResult
}