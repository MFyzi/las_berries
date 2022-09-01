import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import'./dropdown.css';

function Dropdown() {
  return (
    <nav className='dropdown_nav'>
        <ul className="dropdown_nav_list">
            <motion.li 
            whileHover={{scale:1.1}}
            className="dropdown_nav_list_item">
            <NavLink to='/'>
                Home
            </NavLink>
            </motion.li>
            <li className="dropdown_nav_list_item">
              <NavLink to='cakes'>
                Cake
              </NavLink>
            </li>
            <li className="dropdown_nav_list_item">
              <NavLink to='/cart'>
                Cart
              </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Dropdown