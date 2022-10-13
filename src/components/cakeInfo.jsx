import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/cakeinfo.css'

function CakeInfo(props) {
    const navigate = useNavigate()
    console.log(props.name)
  return (
    <section className={`product product-${props.name}`}>
          <div className={`product-card product-${props.name}-card`}>
            <div className="image_box">
              <img src={`${props.image}`} alt={`${props.alt}`} />
            </div>
            <div className="content_box">
              <h3>{props.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores iure quos sint illum soluta expedita fuga atque Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sint officia vero facilis repellat esse.</p>
              <button className='btn' onClick={()=>
              navigate(`${props.navigation}`)}>Shop</button>
            </div>
          </div>
      </section>
  )
}

export default CakeInfo