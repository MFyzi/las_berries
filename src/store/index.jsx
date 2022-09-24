import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import navSlice from "./nav-slice";

const store = configureStore({
    reducer : {
        auth : authSlice.reducer,
        nav : navSlice.reducer,
        cart : cartSlice.reducer,
    },
})
export default store;