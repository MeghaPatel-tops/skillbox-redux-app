import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection,query ,getDocs, getDoc, doc, deleteDoc, setDoc} from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { act } from "react";

export const updateEventByID= createAsyncThunk('updateEventByID',async({id,data})=>{
    try {
        const docRef = doc(db,"events",id);
        const res = await setDoc(docRef,data,{merge:true})
        if(res){
            return "Data successfully updated"
        }
    } catch (error) {
        console.log("error in update",error);
        
          return error
    }
})

export const geteventById = createAsyncThunk('geteventById',async(id)=>{
     try {
        const docRef = doc(db,"events",id);
        const res = await getDoc(docRef);
       
        const eventData = res.data();
        eventData['id']=res.id
         console.log(eventData);

         return eventData ?? [];
      
    } catch (error) {
        return error
    }
})

export const deleteEvent = createAsyncThunk('deleteEvent',async(id)=>{
    try {
        const docRef = doc(db,"events",id);
        const res = await deleteDoc(docRef);
        return {
            msg:"Event Deleted",
        }
    } catch (error) {
        return error
    }
})

 export const getEventWithCtaegory = createAsyncThunk('getEventWithCtaegory',async ()=>{
      try {
          const eventSnap = await getDocs(collection(db,"events"));
        const eventCatData = [];

        for(let eventdoc of eventSnap.docs){
             const eventRef = doc(db,"category",eventdoc.data().category_id);
             const catDataEvent = await getDoc(eventRef);

             eventCatData.push({
                id:eventdoc.id,
                ...eventdoc.data(),
                ...(catDataEvent.exists()? catDataEvent.data() :{})
             })
        }
       // console.log(eventCatData);
        return eventCatData ?? [];
      } catch (error) {
        console.log("error",error);
        
          return error;
      }
        
 })

export const createEvent = createAsyncThunk('createEvent',async(eventData)=>{
     let docRef = collection(db,"events");
     let res = await addDoc(docRef,eventData);
     console.log(res.id);
     
     return {id:res.id,msg:"Event successfully created"};
})

export const getEvents = createAsyncThunk('getEvents',async()=>{
    
    try {
           const q = query(collection(db,"events"));
  
           const snap = await getDocs(q);
           let eventArray =[];
  
           snap.forEach(doc => {
               eventArray.push({...doc.data(),id:doc.id})
           });
          console.log("in thunk",eventArray);
          return eventArray;    
         
      } catch (error) {
          return error
      }
})


const EventSlice = createSlice({
    name:'event',
    initialState:{
        error:null,
        msg:null,
        eventData:[],
        singleEvent:{},
        loading:false,
        eventid:null
    },
    reducers:{
        setEvent:(state,action)=>{
            state.data = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(createEvent.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(createEvent.fulfilled,(state,action)=>{
            state.eventid=action.payload.id;
            state.msg=action.payload.msg
        })
        .addCase(createEvent.rejected,(state,action)=>{
            state.error=action.payload
        })
        .addCase(getEventWithCtaegory.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(getEventWithCtaegory.fulfilled,(state,action)=>{
            state.eventData=action.payload;
            state.loading=false
        })
        .addCase(getEventWithCtaegory.rejected,(state,action)=>{
            state.error=action.payload;
        })
        .addCase(deleteEvent.fulfilled,(state,action)=>{
            state.msg = action.payload.msg;
        })
        .addCase(deleteEvent.rejected,(state,action)=>{
            state.error=action.payload
        })
        .addCase(geteventById.pending,(state,action)=>{
            state.loading= true
        })
        .addCase(geteventById.fulfilled,(state,action)=>{
            state.singleEvent= action.payload;
            state.loading=-false
        })
        .addCase(geteventById.rejected,(state,action)=>{
            state.error= action.payload
        })
        .addCase(updateEventByID.fulfilled,(state,action)=>{
            state.msg = action.payload
        })
        .addCase(updateEventByID.rejected,(state,action)=>{
            state.error = action.payload
        })
    }
})

export default EventSlice.reducer;