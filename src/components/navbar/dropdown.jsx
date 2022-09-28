import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import'./dropdown.css';
import { useSelector,useDispatch } from "react-redux";
import { authActions } from '../../store/auth-slice';
import { navAction } from '../../store/nav-slice';
import { auth } from '../../firebse';
import { signOut } from 'firebase/auth';
function Dropdown() {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    const dispatch=useDispatch() 
    const handleNav = () =>{
      dispatch(navAction.navToggle())
    }
    const handleLoginLink =()=>{
      dispatch(navAction.navToggle())
      dispatch(authActions.isInPage())
    }

    const handleLogoutLink =async()=>{
      try{
       await signOut(auth)
       dispatch(authActions.logout())
      }catch(err){
       console.log(err.message)
      }
     }

  return (
    <nav className='dropdown_nav'>
        <motion.ul onClick={handleNav} className="dropdown_nav_list">
            <motion.li 
            className="dropdown_nav_list_item">
            <Link to='/'>
                Home
            </Link>
            </motion.li>
            <li onClick={handleNav}className="dropdown_nav_list_item">
              <Link  onClick={handleNav} to='products/cakes'>
                Cake
              </Link>
            </li>
            {isLoggedIn && <li oclassName="dropdown_nav_list_item">
              <Link  onClick={handleNav} to='cart'>
                Cart
              </Link>
            </li>}
            {!isLoggedIn&&<li className="dropdown_nav_list_item">
              <Link to='login' onClick={handleLoginLink} className='log-btn'>
                login
              </Link>
            </li>}
            {isLoggedIn&&<li className="dropdown_nav_list_item">
              <Link to='' onClick={handleLogoutLink} className='log-btn'>
                logout
              </Link>
            </li>}
        </motion.ul>
    </nav>
  )
}

export default Dropdown