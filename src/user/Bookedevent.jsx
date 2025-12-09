import React, { useEffect, useState } from 'react'
import { checkUserLoginAuth } from '../auth/authCheck'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getEventSeatById } from '../Slice/EventSlice';
import { store } from '../Slice/store';

function Bookedevent() {
    const eventid = useParams().eventid;
    const dispatch = useDispatch();
    const {eventSeatdataByid,error,loading}= useSelector((state)=>state.event)

    const navigate = useNavigate();
    const [flag,setFlag]=useState(true);
 
    useEffect(()=>{
         checkUserLoginAuth().then((result)=>{
              if(!result){
                  alert("Login First to Booked Event")
                  setFlag(false)
                  navigate('/login')         
              }
         })
         dispatch(getEventSeatById(eventid));
        
     },[flag])

  return (
    <div>
            {
                loading && <h1>Loading..........</h1>
            }
            {
                error && <p>
                    {error}
                </p>
            }
            <table>
                <thead>
                    <tr><th>Category</th>
                    <th>Availble seat</th>
                    <th>Price</th>
                    <th>action</th></tr>
                </thead>
                <tbody>
                       {
                          eventSeatdataByid &&
                          eventSeatdataByid.map((index)=>(
                             <tr>
                                    <td>{index.eventType}</td>
                                    <td>{index.noOfSeat}</td>
                                    <td>{index.seatPrice}</td>
                                    <td><button>Book Now</button></td>
                            </tr>
                          ))
                       }
                </tbody>
            </table>
    </div>
  )
}

export default Bookedevent