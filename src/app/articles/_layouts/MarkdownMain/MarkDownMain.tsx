import React from 'react'
import ResolveCtx from './ResolveCtx'

export default function MarkDownMain() {
  return (
    <div className='w-[100%] h-full flex-1 flex justify-center dark:text-white text-black p-1 overflow-y-auto overflow-x-hidden text-pretty'>
      <ResolveCtx></ResolveCtx>
    </div>
  )
}
