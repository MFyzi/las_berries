// import React, { useEffect, useState } from 'react'
// import Cards from '../components/home-cards/cards'
// import {cakePic} from '../images/lasberry.jpg'
import { useNavigate } from 'react-router-dom'
import './home.css'
// import useFireFetch from '../components/hooks/useFireFetch'

function Home() {
const navigate = useNavigate()
  return (

    <div className="home__container">
        <p className='bar'></p>
      <header className='section'>
        <img src="./images/icon.jpg" alt="" />
      </header>
      <section className="section home__container_section-product">
        <div className="product-cake">
          <div className="product-cake-card">
            <img src="./images/lasberry.jpg" alt="" />
            <h3>Cakes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores iure quos sint illum soluta expedita fuga atque accusamus totam temporibus doloribus dolorem rerum, asperiores ipsum ratione tempora. Incidunt, sequi!</p>
            <button className='btn'onClick={()=>
            navigate('/products/cakes')}>Shop</button>
          </div>
        </div>
        <div className="product-cupcake">
        <div className="product-cupcake-card">
            <img src="./images/lasberry.jpg" alt="" />
            <h3>Cup Cakes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores iure quos sint illum soluta expedita fuga atque accusamus totam temporibus doloribus dolorem rerum, asperiores ipsum ratione tempora. Incidunt, sequi!</p>
            <button className='btn' onClick={()=>
            navigate('/products/cupcakes')}>Shop</button>
          </div>
        </div>
        <div className="product-jarcake">
        <div className="product-jarcake-card">
            <img src="./images/lasberry.jpg" alt="" />
            <h3>JAr Cakes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores iure quos sint illum soluta expedita fuga atque accusamus totam temporibus doloribus dolorem rerum, asperiores ipsum ratione tempora. Incidunt, sequi!</p>
            <button className='btn'onClick={()=>
            navigate('/products/jarcakes')}>Shop</button>
          </div>
        </div>
      </section>
      <section className="section home__container_section-about">
        <div className="about-card">
          
        </div>
      </section>
      <section className="section home__container_section-contact">
        now
      </section>
    </div>
)}

export default Home