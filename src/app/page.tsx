import React from 'react'
import NavBar from './_layouts/NavBar/NavBar'
import SiderBarLeft from './_layouts/SiderBar-l/SiderBarLeft'

const page = () => {
  return (
    <>
      <NavBar />
      <main>
        <SiderBarLeft></SiderBarLeft>
      </main>
    </>
  )
}

export default page
