import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../Slice/store';
import {  deleteEvent, getEventWithCtaegory,  } from '../Slice/EventSlice';
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom';


function AdminEvent() {
    const dispatch = useDispatch();
    const {loading,error,eventData} = useSelector((state)=>state.event)

   //======================delete event code====================
   const delEvent = (id)=>{
       dispatch(deleteEvent(id));
       Swal.fire({
            title: 'Success!',
            text: 'Delete Successfully',
            icon: 'success',
            confirmButtonText: 'Done'
            })
       dispatch(getEventWithCtaegory())
   }

    useEffect(()=>{
       dispatch(getEventWithCtaegory());
      
    },[])
  return (
    <div>
        <NavLink to={'/admin/event/create'} >Add new</NavLink>
        <h1>Events Data</h1>
        {
            loading &&  <h2>Loadding......</h2> 
        }
        {
             error && <p>{error}</p>
        }
         <table className="border-collapse border border-gray-400">
                    <thead>
                        <tr>
                        <th>Event Title</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             eventData &&
                            eventData.map((index,i)=>(
                                <tr key={i}>
                                    <td>{index.event_title}</td>
                                    <td>{index.catname}</td>
                                    <td><img src={index.image} alt="" height={"100px"} width={"100px"}/></td>
                                    <td>{index.time}</td>
                                    <td>{index.location}</td>
                                    <td><button onClick={()=>{
                                        delEvent(index.id)
                                    }}>Delete</button></td>
                                    <td>
                                        <NavLink to={`edit/${index.id}`}>Edit</NavLink>
                                    </td>
                                    <td>
                                          <NavLink to={`addseat/${index.id}`}>Manage Seat Arrangement</NavLink>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
        </table>
    </div>
  )
}

export default AdminEvent