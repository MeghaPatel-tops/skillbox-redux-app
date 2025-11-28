import React from 'react'
import AdminNavbar from '../common/AdminNavbar'
import { Outlet } from 'react-router-dom'


function AdminLayout() {
  return (
    <div>
        <AdminNavbar />
        <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayout