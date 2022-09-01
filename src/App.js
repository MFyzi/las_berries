
import Home from './pages/home';
import Login from './pages/login';
import Navigation from './components/navbar/navigation';
import { useSelector } from "react-redux";

import { Route, Routes} from 'react-router-dom'
import './Sass/index.css';
import Cakes from './pages/cakes';
import Cart from './pages/cart';

function App() {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  return (
    <div className="App" >
      {isLoggedIn && <Navigation/>}
      {isLoggedIn&&<Routes >
        <Route path='/' element={<Home/>} />
        <Route path='cakes' element={<Cakes/>}/>
        <Route path='cart' element={<Cart/>}/> 
      </Routes>} 
      {!isLoggedIn && <Login />}
    </div>
  );
}

export default App;
