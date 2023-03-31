import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import LoginForm from '../Components/LoginForm'
import NavBar from '../Components/NavBar'



const LoginPage = () => {
    const nav = useNavigate();
    const [user, setUser] = useState();

    const submitHandler = (savedUser) => {
        axios.post('http://localhost:8000/api/login', savedUser, {withCredentials:true})
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
            <LoginForm submitHandler={submitHandler} />
        </div>
    )
}


export default LoginPage





