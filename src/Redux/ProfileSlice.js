import { createSlice } from "@reduxjs/toolkit";
import img1 from "./img111.webp"
import changeimg from "./im222.jpg"
 const ProfileSlice=createSlice({
    name:"Profile",
    initialState:{
        name:"Tahid",
        address:"Navsari",
        image:img1
    },
    reducers:{
        ChangeDetail:(state,action)=>{
            state.name=action.payload
            state.address="Kosamba"
        },
        ChangeImage:(state)=>{
            state.image=changeimg
        },
        AddressChange:(state,action)=>{
            state.address=action.payload
        }
    }
 })
 export const {ChangeDetail,ChangeImage,AddressChange}=ProfileSlice.actions   
 export default ProfileSlice.reducer