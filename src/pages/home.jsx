import React from 'react'
import './home.css'
import cakeInfo from '../data/cakesInfo' 
import CakeInfo from '../components/cakeInfo'

function Home() {
 cakeInfo.map((item)=>{
  console.log(item)
 })
  return (
    <div className="home__container">
        <p className='bar'></p>
      <header className='section'>
        <div className='filter'></div>
        <div className="header-content">
          <img src="./images/icon.jpg" alt="" />
          <h1>Las Berries</h1>
        </div>
      </header>
      <section className='section home__container_section-product'>
          {cakeInfo.map((item)=>(
              <CakeInfo 
              alt={item.ail}
              image={item.image}
              navigation={item.navigation}
              name={item.name} />
            )
          )}
      </section>
    </div>
)}

export default Home