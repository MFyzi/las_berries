import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebse"


function useFireFetch(item) {
    const cakesDataRef =collection(db,item)
    const [cakeData, setCakeData] = useState([])

    useEffect(()=>{
        getCakesData()
    },[])

    function getCakesData(){
        getDocs(cakesDataRef).then(res=>{
            const cakes = res.docs.map(doc=>({
                ...doc.data(),id:doc.id
            }))
            setCakeData(cakes)
        })
    }
    
  return {cakeData}
}

export default useFireFetch