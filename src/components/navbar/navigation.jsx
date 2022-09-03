import React, { useState } from 'react'
import { GiCakeSlice } from "react-icons/gi";
import { TbSmartHome } from "react-icons/tb";
import { BiCartAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import './navigation.css'
import { motion } from 'framer-motion'
import Dropdown from './dropdown';

function Navigation() {
  const [isShow, setIsShow] = useState(false)
  return (
    <nav className='navbar'>
      <div className="nav_list">
          <h1 className='navbar_header'>Las Berries</h1>
          <ul className="navbar_nav">
              <li className='navbar_nav_logo'>
              <NavLink to='/'>
                <TbSmartHome />
              </NavLink>
              </li>
              <li className='navbar_nav_logo'>
                <NavLink to='cakes'>
                  <GiCakeSlice />
                </NavLink>
              </li>
              <li className='navbar_nav_logo'>
                <NavLink to='/cart'>
                  <BiCartAlt />
                </NavLink>
              </li>
          </ul>

        <div 
        onClick={()=>setIsShow(!isShow)} 
        className="navbar_hamburger">
          <motion.div 
          animate={isShow ? { rotate: 40, originX:0} : { rotate: 0, originX:0} }
          transition={{duration:.5}}
          className="navbar_hamburger_line ">
          </motion.div>

          <motion.div 
          animate={isShow ? {scale:0} : {scale:1}} 
          transition={{duration:.5}}
          className="navbar_hamburger_line ">
          </motion.div>

          <motion.div 
          animate={isShow ? {rotate: -40, originX:0} :{ rotate: 0, originX:0} } 
          transition={{duration:.5}}
          className="navbar_hamburger_line ">
          </motion.div>
        </div>

      </div>
        {isShow && <Dropdown />}
    </nav>
  )
}

export default Navigation