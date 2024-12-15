import React from 'react'
import ResolveCtx from './components/ResolveCtx'
import fs from 'fs'
import path from 'path'

const articlePath = path.join(process.cwd(), './src/articles/README.md');

export default async function MarkDownMain() {
const md = await fs.readFileSync(articlePath, 'utf-8')
return (
    <div className='md:w-[80%] w-[80%] h-full flex-1 md:mx-[10%] text-center md:text-left pt-10 dark:text-white text-black p-1 overflow-y-auto overflow-x-hidden text-pretty'>
      <ResolveCtx source={md}></ResolveCtx>
    </div>
  )
}
