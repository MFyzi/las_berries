import { createSlice } from "@reduxjs/toolkit";
import { onValue, ref, set } from "firebase/database";
import { rtdb } from "../firebse";


// function readCart(userId){
//     const dataRef = ref(rtdb,'cart/'+userId)
//     const data = onValue(dataRef,(snapshot)=>{
//         const data = snapshot.val();
//         console.log(data);
//         return data
        
//     })
//     return data
// }

function writeCartData (obj) {
    const reference = ref(rtdb,'cart/' + obj.userId);
    set (reference,{
        userId : obj.userId,
        itemList : obj.itemList,
        totalItems : obj.totalItems,
        totalPrice : obj.totalPrice
    })
}

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        userId : null,
        itemList : [],
        totalPrice : 0,
        totalItems: 0
    },

    reducers : {
        addUser (state,action) {
            // const userId = action.payload
            const userId = action.payload
            state.userId = userId
            writeCartData(state)
            // state.itemList = cart.itemList
            // state.userId = cart.userId
            // state.totalItems = cart.totalItems
            // state.totalPrice =cart.totalPrice
        },
        fetchUser (state,action){
            const userId = action.payload
            const dataRef = ref(rtdb,'cart/'+userId)
             onValue(dataRef,(snapshot)=>{
                const data = snapshot.val();
                state.itemList = data.itemList
                state.totalItems = data.totalItems
                state.totalPrice = data.totalPrice
                state.userId = data.userId
                console.log(data.itemList);  
            })
        },
        addToCart(state,action) {
            const newItem = action.payload;
            const isFound = state.itemList.some(element => {
                if (element.name === newItem.name) {
                    return element;
                }
                
                return false;
            });
            // console.log(state.itemList)
            
            console.log(isFound)
            if (isFound === false ) {   
                state.itemList.push({
                    imgUrl:newItem.url,
                    // id : newItem.id,
                    totalPrice : newItem.price,
                    price : newItem.price,
                    weight:1,
                    quantity : 1,
                    name : newItem.name,
                    category:newItem.category,
                    currentChoosenPrice:newItem.price 
                    
                })
                state.totalItems += 1
            }
            writeCartData(state)
        },
        updateCart(state,action){
            const newItem =action.payload
            // console.log(weight)
            const existingItem = state.itemList.find(item=>item.name===newItem.name)
            console.log(newItem.price)
            existingItem.weight = newItem.value
                if (newItem.value === 1) {
                    existingItem.currentChoosenPrice=newItem.price
                    existingItem.totalPrice = newItem.price
                }
                else{
                    if (newItem.value === .5) {
                        existingItem.totalPrice = newItem.price/2+25
                        existingItem.currentChoosenPrice=existingItem.totalPrice
                    }
                    else{
                        existingItem.totalPrice = newItem.price*2-100
                        existingItem.currentChoosenPrice=existingItem.totalPrice
                    }
                }
                // const Total = (this.state.itemList.reduce((total,currentitem)))
                // state.totalPrice = state.itemList.map(item=>state.totalPrice += parseInt(item.totalPrice) )
                // console.log(item.totalPrice)
                writeCartData(state)
            },
            updateCartByQuantity(state,action){
                const newItem = action.payload
            const existingItem = state.itemList.find(item=>item.name===newItem.name)
            if(newItem.category === 'cake'){
                
                if (newItem.value === 1){
                    existingItem.totalPrice = existingItem.currentChoosenPrice
                }
                else{
                    existingItem.totalPrice = existingItem.currentChoosenPrice*newItem.value
                    
                }
            }
            else{
                existingItem.totalPrice = existingItem.currentChoosenPrice*newItem.value
            }
            
            writeCartData(state)
        },
        removeItem(state,action){
            const id = action.payload
            const newList = state.itemList.filter((item) => item.name !== id.name)
            console.log(id)
            state.itemList = newList
            writeCartData(state)
        },
    }
})


export const cartActions = cartSlice.actions
export default cartSlice