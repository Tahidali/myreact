import { configureStore } from "@reduxjs/toolkit";
import CocktailSlice from "./CocktailSlice";
import ProductSlice from "./ProductSlice";
import AuthSlice from "./AuthSlice";
import Product2Slice from "./Product2Slice";
import ShopingSlice from "./ShopingSlice";

export const store=configureStore({
 reducer:{
    CocktailSl:CocktailSlice,
    ProductSl:ProductSlice,
    Auth:AuthSlice,
    Product2Sl:Product2Slice,
    Shoping:ShopingSlice
   }
})