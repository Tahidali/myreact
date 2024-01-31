import { createSlice } from "@reduxjs/toolkit";

var ProfileSlice= createSlice({
    name:"Profile",
    initialState:{
        name:"tahid",
        address:"Surat",
        add:0
    },
    reducers:{
       increment:(state)=>{
        state.add=state.add+1
       },
       decrement:(state)=>{
        state.add=state.add-1
       }
    }
})

export const {increment,decrement}=ProfileSlice.actions
export default ProfileSlice.reducer;
