import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Navbar />
        <Search />
        <div className="chatMain">
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        </div>
    </div>
  )
}

export default Sidebar