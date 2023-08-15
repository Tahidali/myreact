import React from 'react';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
// import Home from './Component/Home';
import HomeChild from './LazyLoadingPages/HomeChild';
import AboutChild from './LazyLoadingPages/AboutChild';
import Data from './Component/Data';
import BackgoundSet from './Component/BackgoundSet';
import './style.css'
import Crud from './Component/Crud';
// import About from './Component/About';
const LazyAbout = React.lazy(()=>import("./Component/About"))
const LazyHome = React.lazy(()=>import("././Component/Home"))

const data =["apple","banana","Guava","papaya","date","cherry"]

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/crud' element={<Crud/>}></Route>
      <Route path='/back' element={<BackgoundSet />}></Route>
      <Route path='/data' element={<Data data={data}/>}></Route>
      <Route path='/' element={<React.Suspense fallback={<HomeChild/>}> <LazyHome/>  </React.Suspense>}></Route>
      <Route path='/About' element={<React.Suspense fallback={<AboutChild/>}> <LazyAbout/> </React.Suspense>}></Route>
    </Routes>
    </>
  );
}

export default App;