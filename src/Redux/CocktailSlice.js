import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CocktailDetails from "../Pages/CocktailDetails";
// import { json } from "react-router-dom";

// export const getCocktailList= createAsyncThunk("getallCocktailList",async()=>{
// // ================= Axios ============================
//  try {
//     const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
//     return response.data.drinks
//  } catch (error) {
//     console.log("error",error)
//  }

// //  ==================== Fetch Method =================
//     // try {
//     //   const response=await  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
//     //   const data= await response.json()
//     //   return data.drinks
//     // } catch (error) {
//     //     console.log("error",error)
//     // }
// })
export const getCocktailList= createAsyncThunk("fetchCocktailList",async(khudkapara,{})=>{
    const{search}=khudkapara
    try {
        const response= await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        return response.data.drinks
    } catch (error) {
        document.write("error Something missing",error)
    }
     
})

//  ================= fetch for Cocktail Details for id ==================

export const getCocktailDetails= createAsyncThunk("getallCocktailList",async(id)=>{
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    return response.data.drinks[0]
})
const CocktailSlice = createSlice({
    name: "CocktailSl",
    initialState: {
        CocktailList:[],
        loading: false,
        CocktailDetails:{}
    },
    reducers: {

    },
    extraReducers:{
        [getCocktailList.pending]:(state,action)=>{
            state.loading=true
        },
        [getCocktailList.fulfilled]:(state,action)=>{
            state.loading=false
            state.CocktailList=action.payload
        },
        [getCocktailList.rejected]:(state,action)=>{
            state.loading = false
        },
        [getCocktailDetails.pending]:(state,action)=>{
            state.loading=true
        },
        [getCocktailDetails.fulfilled]:(state,action)=>{
            state.loading= false
            state.CocktailDetails=action.payload
        },
        [getCocktailDetails.rejected]:(state,action)=>{
            state.loading=false
        }
    }
    
})
export default CocktailSlice.reducer