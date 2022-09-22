import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { auth } from '../firebse'
import './cart.css'

function Cart() {
  const [user, setUser] = useState('')
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  return (
    <div className="cart__container">
      <div className="cart__container__header">
        <h3>{user.displayName}'s cart</h3>
      </div>
    </div>
  )
}

export default Cart