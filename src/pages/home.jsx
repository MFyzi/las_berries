// import React, { useEffect, useState } from 'react'
import Cards from '../components/home-cards/cards'
import './home.css'
import useFireFetch from '../components/hooks/useFireFetch'

function Home() {
 const {cakeData}= useFireFetch('cake')

  return (

    <header className='home_container'>
      <div className="home_card_container">
            {cakeData.map((item)=>
            <Cards  
            id = {item.id}
            name = {item.name}
            url ={item.url}
            price = {item.price}
            />
            )}
      </div>
    </header>  )
}

export default Home