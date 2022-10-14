import React from 'react'
import { SiCakephp } from "react-icons/si";
import { TbSmartHome } from "react-icons/tb";
import { BiCartAlt } from "react-icons/bi";
import { Link, Outlet } from 'react-router-dom';
import './navigation.css'
import { motion } from 'framer-motion'
import Dropdown from './dropdown';

import { useSelector,useDispatch } from "react-redux";
import { authActions } from '../../store/auth-slice';
import { navAction } from '../../store/nav-slice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebse';


function Navigation() {
  const dispatch=useDispatch()
    const handleLoginLink =()=>{
      // dispatch(authActions.isInPage())
      console.log('hai');

    }

    const handleLogoutLink =async()=>{
     try{
      await signOut(auth)
      dispatch(authActions.logout())
     }catch(err){
      console.log(err.message)
     }
    }
    
    const handleHamburger = () =>{
      dispatch(navAction.navToggle())
    }
    const currentUser = useSelector(state=>state.auth.currentUser)
    const isToggle = useSelector(state=>state.nav.isToggle)
    const inPage = useSelector(state=>state.auth.inPage)
    console.log(isToggle)
    console.log(currentUser)
  return (
    <nav className='navbar'>
      <div className="nav_list">
          <h1 className='navbar_header'>Las Berries</h1>
          <ul className="navbar_nav">
              <li className='navbar_nav_logo'>
              <Link to='/'>
                <TbSmartHome />
              </Link>
              </li>
              <li className='navbar_nav_logo'>
                <Link to='products/cakes' >
                <SiCakephp/>
                </Link>
              </li>
              {currentUser !== null &&<li className='navbar_nav_logo'>
                <Link to='cart'>
                  <BiCartAlt />
                </Link>
              </li>}
              {currentUser === null && <li className='navbar_nav_logo nav-btn '>
                <Link to='login' onClick={handleLoginLink} className='log-btn'>
                  Login
                </Link>
              </li>}
              {currentUser !== null &&<li className='navbar_nav_logo nav-btn '>
                <Link to='' onClick={handleLogoutLink} className='log-btn'>
                  Logout
                </Link>
              </li>}
          </ul>
          <Outlet/>

        <div 
        onClick={handleHamburger} 
        className="navbar_hamburger">
          <motion.div 
          animate={isToggle ? { rotate: 40, originX:0} : { rotate: 0, originX:0} }
          transition={{duration:.5}}
          className="navbar_hamburger_line ">
          </motion.div>

          <motion.div 
          animate={isToggle ? {scale:0} : {scale:1}} 
          transition={{duration:.5}}
          className="navbar_hamburger_line ">
          </motion.div>

          <motion.div 
          animate={isToggle ? {rotate: -40, originX:0} :{ rotate: 0, originX:0} } 
          transition={{duration:.5}}
          className="navbar_hamburger_line ">
          </motion.div>
        </div>

      </div>
        {isToggle && <Dropdown />}
    </nav>
  )
}

export default Navigation