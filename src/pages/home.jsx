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
        <div className='filter'></div>
        <div className="header-content">
          <img src="./images/icon.jpg" alt="" />
          <h1>Las Berries</h1>
        </div>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae accusamus nihil quibusdam temporibus aut nam voluptates natus perferendis eius, repellendus obcaecati, consequuntur aliquam vitae veritatis.</p> */}
      </header>
      <section className="section home__container_section-product">
      <div className="product product-cake">
        <div className="product-card product-cake-card">
            <img src="./images/lasberry.jpg" alt="" />
            <h3>Cakes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores iure quos sint illum soluta expedita fuga atque Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sint officia vero facilis repellat esse.</p>
            <button className='btn' onClick={()=>
            navigate('/products/cupcakes')}>Shop</button>
          </div>
        </div>
        <div className="product product-cupcake">
        <div className="product-card product-cupcake-card">
            <img src="./images/lasberry.jpg" alt="" />
            <h3>Cup Cakes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores iure quos sint illum soluta expedita fuga atque Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sint officia vero facilis repellat esse.</p>
            <button className='btn' onClick={()=>
            navigate('/products/cupcakes')}>Shop</button>
          </div>
        </div>
        <div className="product product-jarcake">
        <div className="product-card product-jarcake-card">
            <img src="./images/lasberry.jpg" alt="" />
            <h3>JAr Cakes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores iure quos sint illum soluta expedita fuga atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit, optio sunt dicta tempore eveniet?</p>
            <button className='btn'onClick={()=>
            navigate('/products/jarcakes')}>Shop</button>
          </div>
        </div>
      </section>
      {/* <section className="section home__container_section-about">
        <div className="about-card">
          
        </div>
      </section>
      <section className="section home__container_section-contact">
        now
      </section> */}
    </div>
)}

export default Home