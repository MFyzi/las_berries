import React from 'react'
import Cards from '../components/home-cards/cards'
import useFireFetch from '../components/hooks/useFireFetch'
import './cakes.css'

function Cakes() {
  const {cakeData}=useFireFetch('cake')
  return (

    <div className='products-cake__container'>
      {cakeData.map((item)=>
      <Cards
      id={item.id}
      name={item.name}
      url={item.url}
      price = {item.price}/>
      )}

    </div>
  )
}

export default Cakes