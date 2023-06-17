import { configureStore } from "@reduxjs/toolkit";
import CocktailSlice from "./CocktailSlice";
import ProductSlice from "./ProductSlice";
import AuthSlice from "./AuthSlice";

export const store=configureStore({
 reducer:{
    CocktailSl:CocktailSlice,
    ProductSl:ProductSlice,
    Auth:AuthSlice
   }
})