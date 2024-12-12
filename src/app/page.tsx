import React from 'react'
import Footer from './_layouts/Footer/Footer'

const page = () => {
  return (
    <>
      <div className='flex flex-col h-full pt-10'>
        <main className='flex-1 text-center mx-10'>
          <h2 className='text-4xl font-bold'> Vinson Go</h2>
          <p>This is Vison Go Home！</p>
        </main>
          <Footer />
      </div>
    </>
  )
}

export default page
