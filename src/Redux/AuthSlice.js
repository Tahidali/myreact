import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password

export const login = createAsyncThunk("login",async({formValue,navigate},{dispatch})=>{
    try {
        dispatch(startLoading())
      const response= await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9ye7aRie_2JaHThOTQLKC5uaYKcvqVcE",formValue)
      console.log("response",response)
        if (response.status === 200){
            navigate("/")
            dispatch(loginSuccess())
        }
    } catch (error) {
        dispatch(loginFail())
        // alert(error.response.data.error.message)
    }
})
function getlocalstorage(){
    const islogin=localStorage.getItem("login");
    if(islogin){
        return true
    }else{
        return false
    }
}
const AuthSlice=createSlice({
    name:"Auth",
    initialState:{
        loading:false,
        islogin:getlocalstorage(),
        error:false,
        errorMessage:""
    },
    reducers:{
        startLoading:(state,action)=>{
            state.loading=true
        },
        loginSuccess:(state,action)=>{
         state.loading=false
         state.islogin=true
         localStorage.setItem("login",'true')
        },
        loginFail:(state,action)=>{
            state.loading= false
            console.log("error msg ",action.payload)
        },
        Logout:(state,action)=>{
            localStorage.removeItem("login")
           state.islogin=false
        }
        
    }
})
export const{startLoading,loginSuccess,loginFail,Logout}=AuthSlice.actions
export default AuthSlice.reducer