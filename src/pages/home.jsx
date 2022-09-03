import React, { useEffect, useState } from 'react'
import Cards from '../components/home-cards/cards'
import './home.css'
import {collection,getDocs} from 'firebase/firestore'
import {db} from '../firebse'

function Home() {
  const cakeDataRef = collection(db,'cake')
  const [cakeData, setCakeData] = useState([])

  useEffect(() => {
    console.log(cakeData)
  }, [cakeData])

  useEffect(() => {
    getCakesData()
  }, [])
  
    function  getCakesData () {
      getDocs(cakeDataRef).then(res=>{
        const cakes = res.docs.map(doc=>({
          ...doc.data(), id: doc.id
        }))
        setCakeData(cakes)
      })
    }

  return (

    <header className='home_container'>
      <div className="home_card_container">
            {cakeData.map((item)=>
            <Cards  
            id = {item.id}
            name = {item.name}
            url ={item.url}
            />
            )}
      </div>
    </header>  )
}

export default Home