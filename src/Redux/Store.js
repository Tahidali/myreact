import { configureStore } from "@reduxjs/toolkit";
import ProfileSlice from "./ProfileSlice";

export var store = configureStore({
    reducer:{
        Profile:ProfileSlice,
    }
})