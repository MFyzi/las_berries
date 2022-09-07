import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import navSlice from "./nav-slice";

const store = configureStore({
    reducer : {
        auth : authSlice.reducer,
        nav : navSlice.reducer,
    },
})
export default store;