import React from 'react'
import Cards from '../components/home-cards/cards'
import useFireFetch from '../components/hooks/useFireFetch'
import './cakes.css'

function CupCakes() {
 const{cakeData}= useFireFetch('cupcakes')
 const category = 'cupcakes'
  return (
    <div className='products-cake__container'>   
      {cakeData.map((item)=>
      <Cards 
      category= {category}
      id={item.id}
      name={item.name}
      url={item.url}
      price = {item.price}
      />)}
    </div>
  )
}

export default CupCakes