import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Redux/CartSlice";
import ProfileSlice from "./Redux/ProfileSlice";
import ListSlice from "./Redux/ListSlice";

export const Store =configureStore({
    reducer:{
        cart:CartSlice,
        Profile:ProfileSlice,
        list:ListSlice
    }
})