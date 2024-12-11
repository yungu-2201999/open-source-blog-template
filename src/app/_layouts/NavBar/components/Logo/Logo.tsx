"use client";
import { useRouter } from 'next/navigation'
import React from 'react'


const Logo = () => {
  const router = useRouter()
  return (
    <div className='flex items-center justify-center w-[fit-content] h-full cursor-pointer px-2' 
      onClick={() => router.push('/')}
    >
      <a href="/"><h1 className='dark:text-white text-2xl font-bold text-nowrap text-black'>Vinson‘s Blog</h1></a>
    </div>
  )
}

export default Logo
