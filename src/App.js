import React from 'react'
import Navbar from './Component/Navbar'
import { Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
import NavText from './Pages/NavText'
import Footer from './Pages/Footer'



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
   </Routes>
    <Footer/>
    </>
  )
}

export default App
