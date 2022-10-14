import {  Routes, Route, Navigate, useLocation} from 'react-router-dom'

import Home from './pages/home';
import Login from './pages/login';
import Navigation from './components/navbar/navigation';
import { useSelector } from "react-redux";

import './Sass/index.css';
import Cart from './pages/cart';
import Products from './pages/products';
import Cakes from './pages/cakes';
import JarCakes from './pages/jarCakes';
import CupCakes from './pages/cupCakes';
import './style.css'
import { useEffect } from 'react';

function App() {
    const inPage = useSelector(state=>state.auth.inPage)
    const newPrice = useSelector(state=>state.cart.itemList)
    const currentUser = useSelector(state=>state.auth.currentUser)
    useEffect(() => {
      localStorage.setItem("user",JSON.stringify(currentUser))
    }, [currentUser])
        console.log(newPrice)
        console.log(currentUser);
    const RequireAuth =({children})=>{
      return currentUser === null ? (children) : <Navigate to ='/'/>
    }
    const nn =useLocation()
    console.log(nn.pathname)
    return (
      <div className="App" >
        {nn.pathname !=='/login' && <Navigation/>}
      <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='products' element={<Products/>} >
              <Route path='cakes'element={<Cakes/>} />
              <Route path='jarcakes' element={<JarCakes/>}/>
              <Route path='cupcakes' element={<CupCakes/>}/>
            </Route>
            <Route path='cart' element={<Cart/>}/> 
            <Route path='login' element={<RequireAuth><Login/></RequireAuth>}/>
            <Route path="*" element={<div>heollo</div>} />
        </Routes>
        {/* <Footer/> */}
      </div> 
       
  );
}

export default App;
