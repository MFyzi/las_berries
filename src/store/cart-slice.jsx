import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        itemList : [],
        totalPrice : 0,
        totalQuantity: 0
    },
    reducers : {
        addToCart(state,action) {
            const newItem = action.payload;
            state.itemList.push({
                imgUrl:newItem.url,
                // id : newItem.id,
                totalPrice : newItem.price,
                price : newItem.price,
                totalQuantity : 1,
                name : newItem.name
            })
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice