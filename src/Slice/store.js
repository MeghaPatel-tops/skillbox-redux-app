import { configureStore } from "@reduxjs/toolkit";
import categoryReducer  from "./Category";
import eventReducer from "./EventSlice"

export const store = configureStore({
    reducer:{
        'category':categoryReducer ,
        'event':eventReducer
    },
})