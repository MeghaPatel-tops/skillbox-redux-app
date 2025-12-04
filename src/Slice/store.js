import { configureStore } from "@reduxjs/toolkit";
import categoryReducer  from "./Category";
import eventReducer from "./EventSlice";
import userReducer from "./User"

export const store = configureStore({
    reducer:{
        'category':categoryReducer ,
        'event':eventReducer,
        'user':userReducer
    },
})