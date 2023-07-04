import React, { createContext, useState } from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import About from './Pages/About'
import Cocktail from './Pages/Cocktail'
import Product from './Pages/Product'
import CocktailDetails from './Pages/CocktailDetails'
import ProductDetails from './Pages/ProductDetails'
import Login from './Pages/Login'
import PrivateRoute from './Component/PrivateRoute'
import Product2 from './Pages/Product2'
import Example from './Component/Example'
import Shoping from './Pages/Shoping'
import ShopingCard from './Component/ShopingCard'
import ReactCheckBox from './Pages/ReactCheckBox'

export const Appdeatails=createContext()


function App() {
const [cart,setCart]=useState([])
  return (
    <>
    <Appdeatails.Provider value={cart}>
    <Navbar/>
  

   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Cocktail" element={<Cocktail/>}></Route>
    <Route path='/Cocktail/:id' element={<PrivateRoute><CocktailDetails/></PrivateRoute>}/>
    <Route path='/Product/:id' element={<ProductDetails/>}></Route>
    <Route path='/Products' element={<Product/>}></Route>
    <Route path='/Product2' element={<Product2/>}></Route>
    <Route path='/Shoping' element={<Shoping/>}></Route>
    <Route path='/Shoping/:id' element={<ShopingCard/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
   </Routes>
   </Appdeatails.Provider>
   <ReactCheckBox/>
   <Example/>
    </>
  )
}

export default App
