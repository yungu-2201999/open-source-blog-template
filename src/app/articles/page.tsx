import React from 'react'
import SiderBarLeft from './_layouts/UserSiderbar/SiderBarLeft'
import MarkDownMain from './_layouts/MarkdownMain/MarkDownMain'


export default async function page() {
  return (
    <div className='flex justify-center h-[calc(100vh-49px)] text-white overflow-hidden' >
      <SiderBarLeft></SiderBarLeft>
      <MarkDownMain></MarkDownMain>
    </div>
  )
}
