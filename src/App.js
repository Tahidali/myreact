import React, { createContext, useContext, useState } from 'react'
import Navbar from './Component/Navbar'
import { Routes,Route, Router} from 'react-router-dom/'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
import NavText from './Pages/NavText'
// import Footer from './Pages/Footer'
import Cocktail from './Component/Cocktail'
import CocktailDetails from './Component/CocktailDetails'
import Shoping from './Component/Shoping'
import ShopingDetails from './Component/ShopingDetails'
import PrivateRoute from './Component/PrivateRoute'
import { Courselist } from './Courselist'
import Carts from './Component/Carts'
import Login from './Component/Login'


export const AppDetail=createContext()

function App() {
  const [login, setLogin]=useState(false)
  const[Cart,setCart]=useState([])
  const[courseListdata,setCourseListdata]=useState(Courselist)
  return (
    <>
  <AppDetail.Provider value={{login,Cart,setCart,setLogin,courseListdata,setCourseListdata}}>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Courses' element={<PrivateRoute> <Courses/></PrivateRoute>}></Route>
    <Route path='/courses/:id' element={<CourseDetails/>}></Route>
    <Route path='/NavText' element={<NavText/>}></Route>
    <Route path='/Cocktail' element={<Cocktail/>}></Route>
    <Route path='/Cocktail/:id' element={<CocktailDetails/>}></Route>
    <Route path='/Shoping' element={<Shoping/>}></Route>
    <Route path='/ShopingDetails' element={<ShopingDetails/>}></Route>
    <Route path='/Carts' element={<Carts/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
   </Routes>
   </AppDetail.Provider>
    {/* <Footer/> */}
    </>
  )
}

export default App
