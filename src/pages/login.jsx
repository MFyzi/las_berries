import React from 'react'
import './login.css'
import { motion } from 'framer-motion'
import { useDispatch } from "react-redux";
import { authActions } from '../store/auth-slice'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(authActions.login())
        navigate('/products/cakes')
    }
  return (
    <div className='login__page'>
        <div className="login__page__backdrop">
            <div className="login__container">
                <div className="login__container__header">
                    <h1 className='title'>Las Berries</h1>
                    <p className='tag'>Treat With Us</p>
                </div>
                <div  className="login__container__form">
                    <motion.input type='text' placeholder='username'></motion.input>
                    <input type='password' placeholder='pass'></input>
                    <motion.button whileHover={{
                        scale:1.2
                    }} onClick={handleSubmit} >
                        Login
                    </motion.button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login