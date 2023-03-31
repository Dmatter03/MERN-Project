import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import NavBar from '../Components/NavBar'
import RegisterForm from '../Components/Register'


const RegisterPage = () => {
    const nav = useNavigate();

    const submitHandler = (newUser) => {
        axios.post('http://localhost:8000/api/register', newUser, {withCredentials:true})
        .then((response) => {
            console.log(response)
            nav('/users')
        })
        .catch((err) => {
            console.log(err.response)
        })
    }






    return(
        <div>
            <NavBar />
            <RegisterForm submitHandler={submitHandler}  />
        </div>
    )
}


export default RegisterPage





