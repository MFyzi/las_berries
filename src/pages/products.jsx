import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GiMasonJar} from 'react-icons/gi'
import {RiCake3Line} from 'react-icons/ri'
import {SiCakephp} from 'react-icons/si'
import './products.css'

function Products() {
  return (
    <div className="products__container">
      <div className="products__container__nav">
        <input className="products__container__nav-search" type='text' placeholder="hello"/>
       <div className="products__container__nav-links">
        <ul>
          <li className="nav-links">
            <Link  to="./cakes">
              <SiCakephp/> 
            </Link>
          </li>
          <li className="nav-links">
            <Link  to="./jarcakes">
              <GiMasonJar/>
            </Link>
          </li>
          <li className="nav-links">
            <Link  to="./cupcakes"> 
              <RiCake3Line/> 
            </Link>
          </li>
        </ul>
        </div>
      </div>
      < Outlet />
    </div>
  );
}

export default Products;