import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addSeatByEvent, getEventWithCtaegory } from '../Slice/EventSlice';

function Addseat() {
    const [formData,setFormData] = useState({})
    const eventId = useParams().eventid;
    const dispatch = useDispatch();
    const {eventData,msg,loading} = useSelector((state)=>state.event)

    useEffect(()=>{
        dispatch(getEventWithCtaegory())
    },[])

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit=()=>{
        console.log(formData);
        dispatch(addSeatByEvent(formData))
    }
    
  return (
    
    <div>
         {
            msg && <p className='bg-green-100 text-green-700'>{msg}</p>
        }
         <div>  <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] p-6">
       
      <form
       method='post'
        className="w-full max-w-xl bg-[#fafafa] p-8 border border-black/30 rounded-2xl shadow-xl border border-white/10"
      >
       
        <h2 className="text-2xl font-bold mb-6 text-black uppercase tracking-wider text-center">
          Manage Seat
        </h2>

        {/* Category */}
        <div className="mb-4">
          <label className="text-black mb-1 block">Events</label>
          {loading && <h2>Loading.....</h2>}
          <select
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#fafafa] text-black border border-black/30 "
          >

            <option value="">-----Select Event-----</option>
              {
                eventData &&
                 eventData.map((event) => (
              <option key={event.id} value={event.id}>
                {event.event_title}
              </option>
            ))
              }
          </select>
        </div>

       

        {/* Event Title */}
        <div className="mb-4">
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#fafafa] text-black border border-black/30 "
          >
            <option value="">Select Category of Seat</option>
              
               
              <option  value="VIP">VIP</option>
              <option  value="V-VIP">V-VIP</option>
              <option  value="Economy">Economy</option>
           
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-black mb-1 block">Total Seat</label>
           <input
            type="text"
            name="noOfSeat"
            value={formData.noOfSeat}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#fafafa] text-black border border-black/30 "
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="text-black mb-1 block">Price</label>
          <input
            type="text"
            name="seatPrice"
            value={formData.seatPrice}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#fafafa] text-black border border-black/30 "
          />
        </div>



        <button
          type="button"
          className="w-full p-3 bg-black text-white font-semibold rounded hover:bg-black/80 transition" onClick={handleSubmit}
        >
          Submit Event
        </button>
      </form>
    </div></div>
       
    </div>
  )
}

export default Addseat