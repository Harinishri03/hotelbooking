import React from 'react'
import NavBar from '../../Components/NavBar'
import SideBar from '../../Components/hotelOwner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      {/* Top navigation bar */}
       <div className='fixed top-0 left-0 w-full z-20'>
        <NavBar />
      </div>

      {/* Main content area */}
      <div className='flex flex-1 h-full'>
        {/* Sidebar (fixed on left) */}
         <div className='fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 border-r border-gray-300 bg-white z-10'>
          <SideBar />
        </div>

        {/* Page content (renders AddRoom, ListRoom, etc.) */}
        <div className='flex-1 ml-64 p-6 overflow-y-auto bg-gray-50 min-h-[calc(100vh-4rem)]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
