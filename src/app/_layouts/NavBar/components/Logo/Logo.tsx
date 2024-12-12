"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

const Logo = () => {
  const router = useRouter()
  return (
    <div className='flex items-center justify-center w-[fit-content] h-full cursor-pointer px-2' 
      onClick={() => router.push('/')}
    >
      <Link href="/"><h1 className='dark:text-white text-2xl font-bold text-nowrap text-black'>Vinson‘s Blog</h1></Link>
    </div>
  )
}

export default Logo
