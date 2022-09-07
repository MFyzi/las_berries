import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name:'nav',
    initialState:{isToggle:false},
    reducers:{
        navToggle(state){
            state.isToggle =!state.isToggle;
        },
    }
})
export const navAction= navSlice.actions
export default navSlice