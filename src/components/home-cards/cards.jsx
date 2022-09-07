import React from 'react'
import {motion} from 'framer-motion'
import './home_card.css'
import { BiCartAlt } from "react-icons/bi";
import { BsStarHalf,BsStarFill } from "react-icons/bs";
function Cards(props) {
  return (
    <div className='home__card'>
        <div className="image__container">    
            <div className="home__card__banner" 
            style={{ backgroundImage: `url(${props.url})`}}
            >
                <motion.h2
                whileHover={{
                scale:1.2
                }} >{props.name}</motion.h2>
            </div>
        </div>
            <button className="home__card_buy-btn">buy now</button>
        <div className="home__card__buy">
            <div className="home__card__rating">
                <BsStarFill color='white' size='1rem'/>
                <BsStarFill color='white' size='1rem'/>
                <BsStarFill color='white' size='1rem'/>
                <BsStarFill color='white' size='1rem'/>
                <BsStarHalf color='white' size='1rem'/>
            </div>
            <div className="home__card__cart">
                <BiCartAlt color='white' size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Cards