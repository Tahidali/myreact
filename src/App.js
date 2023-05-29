import React from 'react'
import Navbar from './Component/Navbar'
import { Routes,Route} from 'react-router-dom/'
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
// import Fetch_api from './Component/Fetch_api'



function App() {
  return (
    <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Courses' element={<Courses/>}></Route>
    <Route path='/courses/:id' element={<CourseDetails/>}></Route>
    <Route path='/NavText' element={<NavText/>}></Route>
    <Route path='/Cocktail' element={<Cocktail/>}></Route>
    <Route path='/Cocktail/:id' element={<CocktailDetails/>}></Route>
    <Route path='/Shoping' element={<Shoping/>}></Route>
    <Route path='/ShopingDetails' element={<ShopingDetails/>}></Route>
   </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
