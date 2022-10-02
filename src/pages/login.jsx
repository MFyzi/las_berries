import React from 'react'
import './login.css'
import { motion } from 'framer-motion'
import { useDispatch } from "react-redux";
import { authActions } from '../store/auth-slice'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebse';
import { cartActions } from '../store/cart-slice';
function Login() {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    
    const handleLogin= async ()=>{
        try{
            const user=await signInWithEmailAndPassword(auth,email,password)
            console.log(user)
            dispatch(authActions.login())
            dispatch(authActions.isInPage())
            navigate('/products/cakes')
            dispatch(cartActions.addUser(user.user.uid))
        }catch(err){
            console.log(err.message);
        }
    }
    const handleRegister = async () =>{
        try{
            const user=await createUserWithEmailAndPassword(auth,email,password)
            updateProfile(auth.currentUser,{
                displayName : name
            })
            console.log(user)
            dispatch(authActions.isInPage())
            dispatch(authActions.login())
            dispatch(cartActions.addUser(user.user.uid))
            navigate('/products/cakes')
        }catch(err){
            console.log(err.message);
        }
    }
    const [signup, setSignup] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
  return (
    <div className='login__page'>
        <div className="login__page__backdrop">
            <div className="login__container">
                <div className="login__container__header">
                    <h1 className='title'>Las Berries</h1>
                    <p className='tag'>Treat With Us</p>
                </div>
                {!signup && <div  className="container__form">
                    <motion.input type='text' placeholder='username' onChange={(e)=>{
                        setEmail(e.target.value)
                    }}></motion.input>
                    <input type='password' placeholder='pass' onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></input>
                    <div className="container__form-btns">               
                        <motion.button whileHover={{
                            scale:1.2
                        }} onClick={handleLogin} >
                            Login
                        </motion.button>
                        <motion.button whileHover={{
                            scale:1.2
                        }} onClick={()=>{setSignup(true) 
                        console.log(signup)}} >
                            signup
                        </motion.button>
                    </div>
                </div>} 

                {signup && <div  className="container__form">
                    <motion.input type='text' placeholder='name' onChange={(e)=>{
                        setName(e.target.value)
                    }}></motion.input>
                    <motion.input type='text' placeholder='username' onChange={(e)=>{
                        setEmail(e.target.value)
                    }}></motion.input>
                    <input type='password' placeholder='pass' onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></input>
                    <div className="container__form-btns"> 
                        <motion.button whileHover={{
                            scale:1.2
                        }} onClick={handleRegister} >
                            Register
                        </motion.button>
                    </div>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Login