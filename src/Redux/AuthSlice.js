import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password

export const login = createAsyncThunk("login",async({formValue,navigate})=>{
    try {
      const response= await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9ye7aRie_2JaHThOTQLKC5uaYKcvqVcE",formValue)
      console.log("response",response)
        if (response.status === 200){
            navigate("/Cocktail")
        }
    } catch (error) {
        alert(error.response.data.error.message)
    }
})
const AuthSlice=createSlice({
    name:"Auth",
    initialState:{
        islogin:false,
    },
    reducers:{
        
    }

})
export default AuthSlice.reducer