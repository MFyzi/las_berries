import React from "react";
import { Link, Outlet } from "react-router-dom";
import './products.css'

function Products() {
  return (
    <div className="products__container">
      <div className="products__container__nav">
        <input className="products__container__nav-search" type='text' placeholder="hello"/>
       <div className="products__container__nav-links">
        <Link to="/products/cakes"> Search </Link>
        <Link to="/products/jarcakes"> List </Link>
        <Link to="/products/cupcakes"> Add </Link>
        </div>
      </div>
      <Outlet />

    </div>
  );
}

export default Products;