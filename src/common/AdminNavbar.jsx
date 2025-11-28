import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function AdminNavbar() {
const [open, setOpen] = useState(false)
    
  return (
    <div>
          <div>
              <nav className="bg-white p-4 text-white flex justify-between items-center shadow-md">
                <h1 className="text-3xl font-bold text-black font-mono uppercase">skillbox</h1>
        
               
                <button 
                  className="text-black text-3xl md:hidden"
                  onClick={() => setOpen(!open)}
                >
                  ☰
                </button>
        
                {/* Desktop Menu */}
                <div className="hidden md:flex mt-2 gap-4 items-center">
                  <NavLink to="/admin/category" className="text-black mr-4 hover:rounded-full hover:bg-gray-100 hover:px-5 hover:py-2 text-xl">Category</NavLink>
                  <NavLink to="/admin/event/" className="text-black mr-4 hover:rounded-full text-xl hover:bg-gray-100 hover:px-5 hover:py-2">Events</NavLink>
                  <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-full px-4 py-2 pl-10 h-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5 absolute left-3 top-2.5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.4 5.4a7.5 7.5 0 0011.25 11.25z"
                    />
                  </svg>
                </div>
        
                  <NavLink to="/login" className="text-xl ml-6 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-200 hover:text-black">Login</NavLink>
                </div>
              </nav>
        
              {/* Mobile Menu */}
              {open && (
                <div className="flex flex-col gap-4 bg-white p-4 md:hidden">
                  <a href="#" className="text-black hover:rounded-full hover:bg-gray-100 hover:px-5 hover:py-2 text-xl">Home</a>
                  <a href="#" className="text-black hover:rounded-full text-xl hover:bg-gray-100 hover:px-5 hover:py-2">About</a>
                  <button className="text-xl bg-black text-white px-5 py-2 rounded-full hover:bg-gray-200 hover:text-black">Login</button>
                </div>
              )}
            </div>
    </div>
  )
}

export default AdminNavbar