import React from 'react'
import { NavLink } from 'react-router-dom'

function Registration() {
  return (
    <div>
       <div class="min-h-screen bg-gray-100 flex justify-center items-center">
          <div class="bg-white w-full max-w-sm p-8 rounded-xl shadow-xl">
              <h2 class="text-2xl font-bold text-center text-black mb-6">Rugisration</h2>
      
              <form>

               <div class="mb-4">
                  <label class="block text-black mb-1">Name</label>
                  <input 
                  type="text" 
                  class="w-full rounded border border-black p-2 focus:outline-none"
                  placeholder="Enter your Name"
                  />
              </div>  
                
              <div class="mb-4">
                  <label class="block text-black mb-1">Email</label>
                  <input 
                  type="email" 
                  class="w-full rounded border border-black p-2 focus:outline-none"
                  placeholder="Enter your email"
                  />
              </div>
      
              <div class="mb-4">
                  <label class="block text-black mb-1">Password</label>
                  <input 
                  type="password" 
                  class="w-full  rounded border border-black p-2 focus:outline-none"
                  placeholder="Enter your password"
                  />
              </div>
      
              <button 
                  type="submit" 
                  class="w-full rounded bg-black text-white py-2 font-semibold hover:bg-gray-800"
              >
                  Rugistr Now
              </button>
              </form>
      
              <p class="text-center text-black text-sm mt-4">
              Already have Account ? <NavLink to='/login' class="underline">Sign in</NavLink>
              </p>
          </div>
             </div>
    </div>
  )
}

export default Registration
