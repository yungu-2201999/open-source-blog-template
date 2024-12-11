"use client";
import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter, usePathname } from 'next/navigation'

const NavList = [
  {
    name: 'Articles',
    link: '/articles'
  },
  {
    name: 'About Me',
    link: '/about'
  }
]


export default function Nav() {
  const router = useRouter()
  const href = usePathname()
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
      <ul className='md:flex hidden gap-4 dark:text-yellow-100 text-black/70'>
        {
          NavList.map((item, index) => (
            <li key={index} className={[
              href.includes(item.link) && 'bg-white/20 font-bold dark:text-yellow-100 text-black',
              'hover:bg-white/20 p-1 rounded px-2 cursor-pointer'
            ].join(' ')}>
              <a href={item.link} target='self'>{item.name}</a>
            </li>
          ))
        }
      </ul>
      <div className='md:hidden mr-4 dark:text-white text-black p-2'
        onClick={() => {
          setIsOpen(true)
        }}
        data-mobile-nav='1'
      >
        <AiFillCaretDown />
      </div>
      <div className={[
        'fixed w-full p-0 bg-white left-0 top-[56px] md:hidden shadow ',
        isOpen ? 'h-[fit-content] p-1' : 'h-0 top-[-999999px] hidden'
      ].join(' ')}
        data-mobile-nav='1'
      >
        {
          NavList.map((item, index) => (
            <div key={index}
              data-mobile-nav='1'
              className={[
                href.includes(item.link) && 'bg-white/20 font-bold',
                'flex items-center gap-2 p-2 cursor-pointer hover:bg-white/20 text-black ',
              ].join(' ')} onPointerDown={() => {
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
