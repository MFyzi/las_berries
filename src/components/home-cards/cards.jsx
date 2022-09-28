import React from 'react'
import {motion} from 'framer-motion'
import './home_card.css'
import { BiCartAlt } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
// import { useEffect } from 'react';
// import { BsStarHalf,BsStarFill } from "react-icons/bs";

function Cards(props) {

    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)

    const dispatch=useDispatch()

    let name = props.name
    let url = props.url
    let price = props.price
    let category = props.category
    let weight = 1

    const addToCart = ()=>{
        dispatch(cartActions.addToCart({name,url,price,category,weight}))
    }

  return (
    <div className='home__card'>
        <div className="image__container">    
            <div className="home__card__banner" 
            style={{ backgroundImage: `url(${url})`}}
            >
                <motion.h2
                whileHover={{
                scale:1.2
                }} >{name}</motion.h2>
            </div>
        </div>
            <button className="home__card_buy-btn">buy now</button>
        <div className="home__card__buy">
            {/* <div className="home__card__rating">
                <BsStarFill color='white' size='1rem'/>
                <BsStarFill color='white' size='1rem'/>
                <BsStarFill color='white' size='1rem'/>
                <BsStarFill color='white' size='1rem'/>
                <BsStarHalf color='white' size='1rem'/>
            </div> */}
            <div className="home__card__price">
                <h5>{price} {category === 'cake' ? '/kg' : '/piece'}</h5>
            </div>
            {isLoggedIn && <motion.div className="home__card__cart"
            whileHover={{scale:1.2}}
            >
                <BiCartAlt onClick={addToCart} color='white' size={30}/>
            </motion.div>}
        </div>
    </div>
  )
}

export default Cards