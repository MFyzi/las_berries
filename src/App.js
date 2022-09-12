import {  Routes, Route} from 'react-router-dom'

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
// import Footer from './components/footer';
import './style.css'

function App() {
  // const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    const inPage = useSelector(state=>state.auth.inPage)

    return (
      <div className="App" >
        {!inPage&&<Navigation/>}
      <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='products' element={<Products/>} >
              <Route path='cakes'element={<Cakes/>} />
              <Route path='jarcakes' element={<JarCakes/>}/>
              <Route path='cupcakes' element={<CupCakes/>}/>
            </Route>
            <Route path='cart' element={<Cart/>}/> 
            <Route path='login' element={<Login/>}/>
            <Route path="*" element={<div>heollo</div>} />
        </Routes>
        {/* <Footer/> */}
      </div> 
       
  );
}

export default App;
