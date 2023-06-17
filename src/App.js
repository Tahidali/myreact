import React, { useState } from 'react'
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


function App() {
  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Cocktail" element={<Cocktail/>}></Route>
    <Route path='/Cocktail/:id' element={<PrivateRoute><CocktailDetails/></PrivateRoute>}/>
    <Route path='/Product/:id' element={<ProductDetails/>}></Route>
    <Route path='/Products' element={<Product/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
   </Routes>
    </>
  )
}

export default App
