import React from 'react'
import'./cartcard.css';
import { SiCakephp } from 'react-icons/si'
import { GiMasonJar } from 'react-icons/gi'
import { RiCake3Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

function Cartcard(props) {
    let name = props.name
    let url = props.url
    let price = props.price
    let category = props.category
    let totalPrice = props.totalPrice
    let weight =props.weight
    console.log(price)

    const dispatch = useDispatch()

  return (
    <div className='cartcard'>
        <div className="cartcard-img" 
        style={{ backgroundImage: `url(${url})`}}
        ></div>
        <div className="cartcard__details">
            <div className='cartcard__details_header'>
                <h1 className='header'>{name}</h1>
                <div className="header-sub">
                    {category === 'cake' && <p>
                        <SiCakephp size={'1.5rem'}/> 
                    </p>}
                    
                    {category === 'jarcake' && <p>
                        <GiMasonJar size={'1.5rem'}/> 
                    </p>}
                    {category === 'cupcakes' && <p>
                        <RiCake3Line size={'1.5rem'}/> 
                    </p>}
                    <button className='btn' onClick={() => dispatch(cartActions.removeItem({name}))}>remove</button>
                </div>
            </div>

            <div className='cartcard__details_price'>
                
                <svg width="216" height="49" viewBox="0 0 216 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.72535 1H215.5L182 15.5L215.5 31.6737H30.8387C28.2702 31.6737 27.8422 41.0737 27.8422 48C23.3901 41.6674 10.5759 34.4772 4.72535 31.6737C-0.411435 30.6842 -0.0691845 3.37474 4.72535 1Z" fill="#F2D6A7"/>
                    <path d="M4.72535 31.6737C-0.411435 30.6842 -0.0691845 3.37474 4.72535 1H215.5L182 15.5L215.5 31.6737C215.5 31.6737 96.9116 31.6737 30.8387 31.6737M4.72535 31.6737C10.5759 34.4772 23.3901 41.6674 27.8422 48C27.8422 41.0737 28.2702 31.6737 30.8387 31.6737M4.72535 31.6737C5.84589 31.6737 15.6451 31.6737 30.8387 31.6737" stroke="black" stroke-width="0.5"/>
                </svg>
                <h3 className='price-tag'>price : {price} {category === 'cake' ? '/kg' : '/piece'}</h3>
            </div>

            <div className='cartcard__details_selections'>
                {category === 'cake' && <div className="weight">
                    <h3>wight</h3>
                    <button className='weight-type' onClick={() => dispatch(cartActions.updateCart({value:.5,name,price}))}>1/2kg</button>
                    <button className='weight-type' onClick={() => dispatch(cartActions.updateCart({value:1,name,price}))}>1kg</button>
                    <button className='weight-type' onClick={() => dispatch(cartActions.updateCart({value:2,name,price}))}>2kg</button>
                </div>}
                {category === 'cake' && <div className="quantity">
                    <h3>quantity</h3>
                    <button className='quantity-type' onClick={() => dispatch(cartActions.updateCartByQuantity({value:1,name,category}))}>1</button>
                    <button className='quantity-type'onClick={() => dispatch(cartActions.updateCartByQuantity({value:2,name,category}))}>2</button>
                    <button className='quantity-type'onClick={() => dispatch(cartActions.updateCartByQuantity({value:3,name,category}))}>3</button>
                </div>}
                {category !== 'cake' && <div className="quantity">
                    <h3>quantity</h3>
                    <input 
                    className='quantity-inpt' 
                    type="text"
                    placeholder='1'
                    onChange={(e) => dispatch(cartActions.updateCartByQuantity({value:e.target.value,name,category}))} 
                      />
                    
                </div>}
            </div>

            <div className='cartcard__details_condition'>
                {category === 'cake' ? <p>** For quantity more than 3 please contanct us **</p> : 
                <p>** For quantity more than 25, please contanct us **</p>
                }
                {category === 'cupcakes' && 
                <p>**bottom(diameter):5cm, top(diameter):15cm, height:10cm** </p>
                }
                {category === 'jarcake' && 
                <p>**diameter:8cm, height:10cm** </p>
                }
            </div>

            <div className='cartcard__details_buy'>
                <h3>Total price : {totalPrice}/-</h3>
                <button className='btn'>buy</button>
            </div>

        </div>
    </div>
  )
}

export default Cartcard