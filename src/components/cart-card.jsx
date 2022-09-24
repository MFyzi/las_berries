import React from 'react'
import'./cartcard.css'
import {SiCakephp} from 'react-icons/si'

function Cartcard(props) {
    let name = props.name
    let url = props.url
    let price = props.price
    console.log(price)
  return (
    <div className='cartcard'>
        <div className="cartcard-img" 
        style={{ backgroundImage: `url(${url})`}}
        ></div>
        <div className="cartcard__details">
            <div className='cartcard__details_header'>
                <h1 className='header'>{name}</h1>
                <div className="header-sub">
                    <p>
                        <SiCakephp size={'1.5rem'}/> 
                    </p>
                    <button className='btn'>remove</button>
                </div>
            </div>

            <div className='cartcard__details_price'>
                
                <svg width="216" height="49" viewBox="0 0 216 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.72535 1H215.5L182 15.5L215.5 31.6737H30.8387C28.2702 31.6737 27.8422 41.0737 27.8422 48C23.3901 41.6674 10.5759 34.4772 4.72535 31.6737C-0.411435 30.6842 -0.0691845 3.37474 4.72535 1Z" fill="#F2D6A7"/>
                    <path d="M4.72535 31.6737C-0.411435 30.6842 -0.0691845 3.37474 4.72535 1H215.5L182 15.5L215.5 31.6737C215.5 31.6737 96.9116 31.6737 30.8387 31.6737M4.72535 31.6737C10.5759 34.4772 23.3901 41.6674 27.8422 48C27.8422 41.0737 28.2702 31.6737 30.8387 31.6737M4.72535 31.6737C5.84589 31.6737 15.6451 31.6737 30.8387 31.6737" stroke="black" stroke-width="0.5"/>
                </svg>
                <h3 className='price-tag'>price : {price}/kg</h3>
            </div>

            <div className='cartcard__details_selections'>
                <div className="weight">
                    <h3>wight</h3>
                    <h3 className='weight-type'>1/2kg</h3>
                    <h3 className='weight-type'>1kg</h3>
                    <h3 className='weight-type'>2kg</h3>
                </div>
                <div className="quantity">
                    <h3>quantity</h3>
                    <h3 className='quantity-type'>1</h3>
                    <h3 className='quantity-type'>2</h3>
                    <h3 className='quantity-type'>3</h3>
                </div>
            </div>

            <div className='cartcard__details_condition'>
                <p>** For quantity more than 3 please contanct us **</p>
            </div>

            <div className='cartcard__details_buy'>
                <h3>Total price : /-</h3>
                <button className='btn'>buy</button>
            </div>

        </div>
    </div>
  )
}

export default Cartcard