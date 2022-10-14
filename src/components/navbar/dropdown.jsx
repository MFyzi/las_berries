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
    const currentUser = useSelector(state=>state.auth.currentUser)
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
        dispatch(navAction.navToggle())
      }catch(err){
       console.log(err.message)
      }
     }

  return (
    <nav className='dropdown_nav'>
        <motion.ul 
        onClick={handleNav}
         className="dropdown_nav_list">
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
            {currentUser !== null && <li oclassName="dropdown_nav_list_item">
              <Link  onClick={handleNav} to='cart'>
                Cart
              </Link>
            </li>}
            {currentUser === null &&<li className="dropdown_nav_list_item">
              <Link to='login' onClick={handleLoginLink} className='log-btn'>
                login
              </Link>
            </li>}
            {currentUser !== null&&<li className="dropdown_nav_list_item">
              <Link to='' onClick={handleLogoutLink} className='log-btn'>
                logout
              </Link>
            </li>}
        </motion.ul>
    </nav>
  )
}

export default Dropdown