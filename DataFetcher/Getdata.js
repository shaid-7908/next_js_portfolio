import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
export function getPostData(slug){
    const fileContents = fs.readFileSync(path.join('POST',slug + '.md'),'utf-8')
    const matterResult = matter(fileContents)
    return matterResult
}