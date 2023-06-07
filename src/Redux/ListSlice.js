import { createSlice } from "@reduxjs/toolkit";

const ListSlice=createSlice({
    name:"list",
    initialState:{
        Listdata:[]
    },
    reducers:{
        AddFriend:(state,action)=>{
            state.Listdata.push(action.payload)
            // state.Listdata=[...state.Listdata,action.payload]
        }
    }
})
export const {AddFriend}=ListSlice.actions
export default ListSlice.reducer