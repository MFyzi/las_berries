import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name : 'auth',
    initialState : { isLoggedIn : false, inPage : false ,currentUser :JSON.parse(localStorage.getItem("user"))||null},
    reducers : {
        login(state,action) {
            state.currentUser = action.payload;
            state.isLoggedIn = true ;
        },
        logout(state){
            state.isLoggedIn = false ;
            state.currentUser = null;
        },
        isInPage(state){
            state.inPage =!state.inPage;
        }

    }  
   
})
export const authActions = authSlice.actions
export default authSlice