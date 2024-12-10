import React from 'react'
import Logo from './components/Logo/Logo'
import Nav from './components/Nav/Nav'
import Search from './components/Search/Search'
import UserAction from './components/UserAction/UserAction'

const NavBar = () => {
  return (
    <header className='sticky bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-14 flex items-center '>
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
