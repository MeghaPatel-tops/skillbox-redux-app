import React from "react"
import Swal from 'sweetalert2'
import { Route, Routes } from "react-router-dom"
import UserLayout from "./layout/UserLayout"
import Login from "./auth/Login"
import AutoScrollCards from "./cards/AutoScrollCards"
import Registration from "./auth/Registration"
import Events from "./user/Events"
import AdminLayout from "./Admin/AdminLayout"
import Category from "./Admin/Category"
import AddCategory from "./Admin/AddCategory"
import AddEvent from "./Admin/AddEvent"
import AdminEvent from "./Admin/AdminEvent"
import EditEvent from "./Admin/EditEvent"
import Profile from "./auth/Profile"





function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />} >
           <Route index element={<AutoScrollCards/>} />
           <Route path="/login" element={<Login></Login>}/>
           <Route path="/register" element={<Registration/>} />
           <Route path="/event" element={<Events/>}/>
           <Route path="/profile" element={<Profile/>}/>
           
        </Route>
         <Route path="/admin" element={<AdminLayout/>}>
          <Route path="/admin/category" element={<Category/>}/>
          <Route path="/admin/category/create" element={<AddCategory/>}/>
           <Route path="/admin/event/create" element={<AddEvent/>}/>
            <Route path="/admin/event/" element={<AdminEvent/>}/>
          <Route path="/admin/event/edit/:id" element={<EditEvent/>}/>

          </Route>
      </Routes>
    </>
  )
}

export default App
