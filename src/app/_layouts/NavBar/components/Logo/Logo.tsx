"use client";
import { useRouter } from 'next/navigation'
import React from 'react'


const Logo = () => {
  const router = useRouter()
  return (
    <div className='flex items-center justify-center w-[100px] h-full cursor-pointer'
      onClick={() => router.push('/')}
    >
      <a href="/"><h1 className='text-white text-2xl font-bold'>Blog</h1></a>
    </div>
  )
}

export default Logo
