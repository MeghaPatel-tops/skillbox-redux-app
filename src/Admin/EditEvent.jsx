import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { geteventById, updateEventByID } from '../Slice/EventSlice';
import { store } from '../Slice/store';
import { getCategory } from '../Slice/Category';

function EditEvent() {
    const dispatch = useDispatch();
    const {loading,error,singleEvent,msg} = useSelector((state)=>state.event)
    const {data} =useSelector((state)=>state.category)
    const [formData,setFormData]=useState({});
    const eventId = useParams().id;
    const [base64, setBase64] = useState("");
    const navigate = useNavigate();




const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
 const handleFile = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const base64String = await toBase64(file);
    setBase64(base64String);
    console.log("Base64 Output:", base64String);
  };

useEffect(()=>{
        dispatch(getCategory());
         dispatch(geteventById(eventId));
         
},[dispatch,eventId])

useEffect(() => {
    if (singleEvent) {
        setFormData({...singleEvent});
    }
}, [singleEvent]);  

  const handleChange = (e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
useEffect(() => {
   if(msg){
      alert(msg);
   }
}, [msg]);
  const handleSubmit =(e)=>{
        
           //formData['image']=base64;
           const finalData ={
               ...formData,
               image:base64
           }
            console.log(finalData);

         dispatch(updateEventByID({id:eventId,data:finalData}))
         navigate('/admin/event')
            
    }

  return (
    <div>
        {
            loading &&  <h1>Loading......</h1>
        }
        {
            error &&   <p> {error}</p>
        }
        {
            singleEvent &&
              <form
       method='post'
        className="w-full max-w-xl bg-[#fafafa] p-8 border border-black/30 rounded-2xl shadow-xl border border-white/10"
      >
       
        <h2 className="text-2xl font-bold mb-6 text-black uppercase tracking-wider text-center">
          Create Event
        </h2>

        {/* Category */}
        <div className="mb-4">
          <label className="text-black mb-1 block">Category</label>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#fafafa] text-black border border-black/30 "
          >
            <option value="">Select Category</option>
              {
                data &&
                 data.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.catname}
              </option>
            ))
              }
          </select>
        </div>

       

        {/* Event Title */}
        <div className="mb-4">
          <label className="text-black mb-1 block">Event Title</label>
          <input
            type="text"
            name="event_title"
            value={formData.event_title}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#fafafa] text-black border border-black/30 "
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-black mb-1 block">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#fafafa] text-black border border-black/30 h-24 "
          ></textarea>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="text-black mb-1 block">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#fafafa] text-black border border-black/30 "
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="text-black mb-1 block">Date</label>
          <input
            type="date" name="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className="w-full p-3 rounded bg-[#fafafa] text-black border border-black/30 "
          />
        </div>

        {/* Time */}
        <div className="mb-6">
          <label className="text-black mb-1 block">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#fafafa] text-black border border-black/30 "
          />
        </div>

        {/* Poster */}
        <div className="mb-6">
          <label className="text-black mb-2 block font-semibold">Poster</label>

          <input
            type="file"
            accept="image/*"
            name="poster_file"
            onChange={handleFile}
            className="w-full p-3 mb-3 rounded bg-[#fafafa] text-black border border-black/30 "
          />

          <div className="text-center text-black/60 mb-3">OR</div>

          <input
            type="text"
            placeholder="Enter Image URL"
            name="poster_url"
            value={formData.poster_url || ""}
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
        }
    </div>
  )
}

export default EditEvent