import React from 'react'
import Logo from './components/Logo/Logo'
import Nav from './components/Nav/Nav'
import Search from './components/Search/Search'
import UserAction from './components/UserAction/UserAction'

const NavBar = () => {
  return (
    <header className='fixed top-0 z-50 bg-gradient-to-r dark:from-indigo-500 from-cyan-400 dark:via-purple-500 via-lime-100 dark:to-pink-500 to-lime-100 w-full h-14 flex items-center '>
      <Logo></Logo>
      <Nav></Nav>
      <div className='flex gap-5 ml-auto w-100px mr-4 h-full items-center'>
        <Search></Search>
        <UserAction></UserAction>
      </div>
    </header>
  )
}

export default NavBar
