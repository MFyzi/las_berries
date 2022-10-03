// import React, { useEffect, useState } from 'react'
// import Cards from '../components/home-cards/cards'
// import {cakePic} from '../images/lasberry.jpg'
import './home.css'
// import useFireFetch from '../components/hooks/useFireFetch'

function Home() {
//  const {cakeData}= useFireFetch('cake')

  return (

    // <header className='home_container'>
    //   <div className="home_card_container">
    //         {/* {cakeData.map((item)=>
    //         <Cards  
    //         id = {item.id}
    //         name = {item.name}
    //         url ={item.url}
    //         price = {item.price}
    //         />
    //         )} */}
    //         <div className="section_hero">
    //           handleLogin
    //         </div>
    //         <div className="section"></div>
    //   </div>
    // </header>  )

    <div className="home__container">
      <header className='section'>
      helloS
        {/* <img src='./images/lasberry.jpg' alt=""  /> */}
        <p></p>
      </header>
      <section className="section home__container_section-product">
        
        <h2>What we Provide</h2>
        <div className="product-cake">
        </div>
        <div className="product-cupcake">cup</div>
        <div className="product-jarcake">aj</div>
      </section>
      <section className="section home__container_section-about">
        bye
      </section>
      <section className="section home__container_section-contact">
        now
      </section>
    </div>
)}

export default Home