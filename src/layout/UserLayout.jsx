import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default UserLayout
