import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Cartcard from '../components/cart-card'
import { auth } from '../firebse'
import './cart.css'

function Cart() {
  const [user, setUser] = useState('')
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  const cartItem = useSelector(state=>state.cart.itemList)
  console.log(cartItem)
  return (
    <div className="cart__container">
      <div className="cart__container__header">
        <h3>{user.displayName}'s cart</h3>
      </div>
      <div className="cart__container__cards" >
        {cartItem.map((item)=>
           <Cartcard
            key={item.name} 
            name = {item.name}
            url = {item.imgUrl}
            price = {item.price}
            category = {item.category}
            // category = {item.}
            />
        )}
      </div>
      <footer className='cart__container__footer'>
        <div className="cart__container__footer__product">
          <h3>Total price :</h3>
          <h3>Quantity : </h3>
        </div>
        <button className="cart__container__footer-btn">buy</button>
      </footer>
    </div>
  )
}

export default Cart