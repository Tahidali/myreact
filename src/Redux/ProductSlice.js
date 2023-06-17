import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import loading from "../Pages/Product"

// export const getProductList = createAsyncThunk("getAllfetchdata", async () => {
//     try {
//         const response = await axios.get('https://fakestoreapi.com/products')
//         return response.data
//     } catch (error) {
//         document.write("error", error)
//     }
// })
export const getProductList=createAsyncThunk("getAllfetchdata",async()=>{
    try {
       const res= await axios.get("https://fakestoreapi.com/products")
    //    console.log(res)
       return res.data
    } catch (error) {
        
    }
})

export const getProductDetails=createAsyncThunk("getfetchId",async(id,{})=>{
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    // console.log(response[0])
    return response.data[0]
    } catch (error) {
        
    }
})

const ProductSlice = createSlice({
    name: "ProductSl",
    initialState: {
        ProductList: [],
        loading : false,
        ProductDetails:{}
    },
    reducers: {},
    extraReducers: {
        [getProductList.pending]: (state, action) => {
           state.loading = true
        },
        [getProductList.fulfilled]: (state, action) => {
            state.ProductList = action.payload
            state.loading=false

        },
        [getProductList.rejected]:(state,action)=>{
            state.loading= false
        },
        [getProductDetails.pending]:(state,action)=>{
            state.loading=true
        },
        [getProductDetails.fulfilled]:(state,action)=>{
            state.loading=false
            state.ProductDetails=action.payload
        },
        [getProductDetails.rejected]:(state,action)=>{
            state.loading=false
        }
    }
})


export default ProductSlice.reducer