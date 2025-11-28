import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, QuerySnapshot } from 'firebase/firestore'
import { db } from "../Firebase/firebase";
import { act } from "react";
export const   getCategory = createAsyncThunk('getCategory',async()=>{
     try {
         const q = query(collection(db,"category"));

         const snap = await getDocs(q);
         let categoryArray =[];

         snap.forEach(doc => {
             categoryArray.push({...doc.data(),id:doc.id})
         });
        console.log("in thunk",categoryArray);
        return categoryArray;
        
       
       
    } catch (error) {
        return error
    }
}) 

export const addCategory = createAsyncThunk('addCategory',async(catname)=>{
    console.log("in add thiunk",catname);
    
     try {
         const docRef = collection(db,"category");
      const res = await addDoc(docRef,{catname});
      console.log(res);
      
      return {
        msg:"success",
        docId:res.id
      }
     } catch (error) {
        console.log(error);
        
     }
})
   


export const CategorySlice = createSlice({
    name:'category',
    initialState:{
        data:null,
        error:null,
        msg:null,
        singleCat:{},
        loading:true
    },
    reducers:{
        setCategory: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    }
    },
    extraReducers:(builder)=>{
        builder.addCase(getCategory.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(getCategory.fulfilled,(state,action)=>{
            
            
            state.data=action.payload;
        })
        .addCase(getCategory.rejected,(state,action)=>{
            state.error= ['error data']
        })
        .addCase(addCategory.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(addCategory.fulfilled,(state,action)=>{
            state.msg= action.payload;
        })
        .addCase(addCategory.rejected,(state,action)=>{
            state.error= action.payload;
        })
    }
})

export default CategorySlice.reducer;