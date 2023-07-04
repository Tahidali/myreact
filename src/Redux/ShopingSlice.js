import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetShopingData = createAsyncThunk("GetShopingData", async ({ search}, { }) => {
    try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${search}`)
        return response.data
    } catch (error) {
        console.log("error", error)
    }
})
//  Shoping Details

export const ShopingDetails = createAsyncThunk("ShopingDetails", async (id) => {
    try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        return response.data
    } catch (error) {
        console.log("error", error);
    }
})


const Shopingslice = createSlice({
    name: "Shoping",
    initialState: {
        ShopingList: [],
        loading: false,
        Shopingid: {}
    },
    reducers: {
    },
    extraReducers: {
        [GetShopingData.pending]: (state, action) => {
            state.loading = true
        },
        [GetShopingData.fulfilled]: (state, action) => {
            state.loading = false
            state.ShopingList = action.payload
        },
        [GetShopingData.rejected]: (state, action) => {
            state.loading = false
        },
        [ShopingDetails.pending]: (state, action) => {
            state.loading = true
        },
        [ShopingDetails.fulfilled]: (state, action) => {
            state.loading = false
            state.Shopingid = action.payload
        },
        [ShopingDetails.rejected]: (state, action) => {
            state.loading = false
        }
    }
})
// https://api.escuelajs.co/api/v1/products
export default Shopingslice.reducer