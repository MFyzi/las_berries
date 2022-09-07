import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name : 'auth',
    initialState : { isLoggedIn : false, inPage : false },
    reducers : {
        login(state) {
            state.isLoggedIn = true ;
        },
        logout(state){
            state.isLoggedIn = false ;
        },
        isInPage(state){
            state.inPage =!state.inPage;
        }

    }

})
export const authActions = authSlice.actions
export default authSlice