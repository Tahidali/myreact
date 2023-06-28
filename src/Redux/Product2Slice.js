import { Filter } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProduct2list = createAsyncThunk("fetchProduct2", async () => {
    try {
        const response = await axios.get(`http://localhost:8000/product/products`)
        return response.data.data
    } catch (error) {
        // console.log("error",error)
    }
})

export const aadProduct = createAsyncThunk("addProduct", async ({ formValue, handleClose }, { dispatch }) => {
    dispatch(startloading())
    try {
        const resp = await axios.post("http://localhost:8000/product", formValue)
        if (resp.status === 200) {
            handleClose()
            dispatch(getProduct2list())
        }
        dispatch(closeloading())
    } catch (error) {
        dispatch(closeloading());
        dispatch(adderrormessage(error.response.data.message));
        // console.log("error",error.resp.data.message)
    }
})

export const DeleteProduct = createAsyncThunk("DeleteProduct", async({ id }, { dispatch })=> {
    try {
        const response = await axios.delete(`http://localhost:8000/product/${id}`)
        if (response === 200) {
         return dispatch(getProduct2list())
        }
    } catch (error) {

    }
})

export const UpdateProduct=createAsyncThunk("update",async({formValue,EditHandleClose},dispatch)=>{
    try {
        const {_id,name,price,category,qty}=formValue;
        const id=_id;
        const data={
            name,price,category,qty
        }
    const response =await axios.patch(`http://localhost:8000/product/${id}`,data)
        if(response===200){
            dispatch(EditHandleClose())
            dispatch(getProduct2list())
        }
    } catch (error) {
        console.log("error",error)
    }
})
const Product2slice = createSlice({
    name: "Product2Sl",
    initialState: {
        Product2list: [],
        filterProductList:[],
        loading: false,
        addProductLoading: false,
        error: "",

    },
    reducers: {
        startloading: (state, action) => {
            state.addProductLoading = true
        },
        closeloading: (state, action) => {
            state.addProductLoading = false
        },
        adderrormessage: (state, action) => {
            state.error = action.payload
        },
        EmptyError: (state, action) => {
            state.error = ""
        },
        searchProduct:(state,action)=>{
        const SearchData= state.Product2list.filter((item)=>item.name.replace(" ","").toLowerCase().includes(action.payload.toLowerCase()))
        state.filterProductList=SearchData
        }

    },
    extraReducers: {
        [getProduct2list.pending]: (state, action) => {
            state.loading = true
        },
        [getProduct2list.fulfilled]: (state, action) => {
            state.loading = false
            state.filterProductList=action.payload.products
            state.Product2list = action.payload.products
        },
        [getProduct2list.rejected]: (state, action) => {
            state.loading = false
        }
    }

})
export const { startloading, closeloading, adderrormessage, EmptyError,searchProduct } = Product2slice.actions
export default Product2slice.reducer
