"use client";
import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from 'next/navigation'

const NavList = [
  {
    name: 'Home',
    link: '/home'
  },
  {
    name: 'About',
    link: '/about'
  }
]

function MobileClick() {

}

export default function Nav() {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    const handlerPointer = (e: PointerEvent) => {
      if ((e.target as HTMLElement)!.getAttribute('data-mobile-nav')) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }
    window.addEventListener('pointerdown', handlerPointer)
    return () => {
      window.removeEventListener('pointerdown', handlerPointer)
    }
  })
  return (
    <div>
      <ul className='md:flex hidden gap-4 text-yellow-100'>
        {
          NavList.map((item, index) => (
            <li key={index} className='hover:bg-white/20 p-1 rounded px-2 cursor-pointer'>
              <a href={item.link} target='self'>{item.name}</a>
            </li>
          ))
        }
      </ul>
      <div className='md:hidden mr-4 text-white p-2'
        onClick={() => {
          setIsOpen(true)
        }}
        data-mobile-nav='1'
      >
        <AiFillCaretDown />
      </div>
      <div className={[
        'fixed w-full p-0 bg-white left-0 top-[56px] md:hidden ',
        isOpen ? 'h-[fit-content] p-1' : 'h-0 top-[-999999px] hidden'
      ].join(' ')}
        data-mobile-nav='1'
      >
        {
          NavList.map((item, index) => (
            <div key={index}
              data-mobile-nav='1'
              className='flex items-center gap-2 p-2 cursor-pointer hover:bg-white/20' onPointerDown={() => {
                router.push(item.link);
                setIsOpen(false);
              }}>
              <span
                data-mobile-nav='1'
              >{item.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
