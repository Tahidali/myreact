import React, { createContext, useState } from 'react';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
// import Home from './Component/Home';
import HomeChild from './LazyLoadingPages/HomeChild';
import AboutChild from './LazyLoadingPages/AboutChild';
import Data from './Component/Data';
import BackgoundSet from './Component/BackgoundSet';
import './style.css'
import Crud from './Component/Crud';
import FetchingApi from './Pages/FetchingApi';
import Cart from './Pages/Cart';
import New from './Component/New';
// import Login from './Component/Login';
import Signin from './Component/Signin';
import Login from './Component/Login';
import UserDetails from './Pages/UserDetails';
import CrudOpertion from './Component/CrudOpertion';
import Car from './Component/Car';
import Cocktail from './Pages/Cocktail';
import NewOperation from './Pages/NewOperation';
import Lateset from './Lateset';
// import About from './Component/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Component/Slider';
import Crud20 from './Component/Crud20';
import FetchItem from './Pages/FetchItem';
import CocktailDetail from './Pages/CocktailDetail';
import Item_Login from './Pages/Item_Login';
import Practice from './Pages/Practice';
import PrivateRoute from './PrivateRoute';
import Home from '././Component/Home';
import Crud22 from './Component/Crud22';
import Changer from './Component/Changer';
import Counter from './Component/Counter';
import Props from './Component/Props';
import TodoApp from './TodoApp';
import Index from './Redux/Index';
const LazyAbout = React.lazy(()=>import("./Component/About"))
const LazyHome = React.lazy(()=>import("././Component/Home"))
const data =["apple","banana","Guava","papaya","date","cherry"]
export const cartApp=createContext()

function App() {
  const [cart ,setCart]=useState([])
  const [table,setTable]=useState([])
  const [IsLoggedIn,setIsLoggedIn]=useState(true);
  var [show,setShow]=useState("")
  var [num,setnum]=useState(0)

  return (
    <>
    <cartApp.Provider value={{cart,setCart,table,setTable ,IsLoggedIn,setIsLoggedIn}}>
    <Navbar setShow={setShow} />
    {/* <Crud22/> */}
    <Index/>
    <Routes>
      <Route path='/tail' element={<Cocktail/>}  />
      <Route path='/tail/:id' element={<PrivateRoute component={CocktailDetail}/>}></Route>
      <Route path='/changer' element={<Changer/>}></Route>
      <Route path='/Item_Login' element={<Item_Login/>}></Route>
      <Route path='/practice' element={<Practice num={num}/>}></Route>
      {/* <Route path='/Car' element={<Car/>}/> */}
      {/* <Route path='/New' element={<New/>}></Route> */}
      {/* <Route path='/UserDetails' element={<UserDetails/>}></Route> */}
      <Route path='/Login' element={<Login/>}></Route>
      {/* <Route path='/Crudop' element={<CrudOpertion/>}></Route> */}
      {/* <Route path='/Signin' element={<Signin/>}></Route> */}
      <Route path='/Cart' element={<Cart/>}></Route>
      {/* <Route path="/Latest" element={<Lateset/>}></Route> */}
      {/* <Route path='/crud' element={<Crud/>}></Route> */}
      <Route path='/fetch' element={<FetchingApi />}/>
      <Route path='/Counter' element={<Counter/>}></Route>
      <Route path='props' element={<Props setnum={setnum} num={num} />}></Route>
      <Route path='/todo' element={<TodoApp/>}></Route>
      {/* <Route path='/back' element={<BackgoundSet />}></Route> */}
      {/* <Route path='/Operation' element={<NewOperation/>}></Route> */}
      {/* <Route path='/data' element={<Data data={data}/>}></Route> */}
      {/* <Route path='/slider' element={<Slider/>}></Route> */}
      {/* <Route path='/crud20' element={<Crud20/>}></Route> */}
      {/* <Route path='/fetch/:itemid' element={<FetchItem/>}></Route>  */}
      <Route path='/' element={<Home show={show}/>}></Route>
      
      {/* <Route path='/' element={<React.Suspense fallback={<HomeChild/>}>
      <LazyHome/>  </React.Suspense>}></Route> */}
      <Route path='/About' element={<React.Suspense fallback={<AboutChild/>}> <LazyAbout/> </React.Suspense>}></Route>
    </Routes>
    </cartApp.Provider>

    </>
  );
}

export default App;