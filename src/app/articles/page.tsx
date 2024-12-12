import React from 'react'
import SiderBarLeft from './_layouts/UserSiderbar/SiderBarLeft'
import MarkDownMain from './_layouts/MarkdownMain/MarkDownMain'
import './_utils/readlocal'




export default async function page() {
  const data = await fetch(`${process.env.BASE_URL}/api/getCatalogue`).then(res => res.json())
  return (
    <div className='flex justify-center h-[calc(100vh-49px)] text-white overflow-hidden' >
      <SiderBarLeft></SiderBarLeft>
      <MarkDownMain></MarkDownMain>
    </div>
  )
}