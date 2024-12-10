import React from 'react'
import Tools from './components/Tools'
import UserInfo from './components/UserInfo'

export default function UserAction() {
  return (
    <div className="flex items-center gap-4">
      <Tools/>
      <UserInfo></UserInfo>
    </div>
  )
}
