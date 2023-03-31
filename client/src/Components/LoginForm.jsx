import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({ submitHandler}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');





    const handleSubmit = (e) => {
        e.preventDefault();
        submitHandler({
            email,
            password,
        })
        
    }



    return (
        <div className='form-main'>
            <div className="p-3 mb-4 bg-secondary bg-opacity-10 border border-warning border-start-0 rounded-end ">
                <form onSubmit={handleSubmit} className='form'>
                    <p>Email:</p>
                    <input type="text" className='form-control ' onChange={(e) => setEmail(e.target.value)}/>
                    <p>Password:</p>
                    <input type="password" className='form-control ' onChange={(e) => setPassword(e.target.value)} />
                    <div className="mt-4 text-end">
                        <button className="btn btn-lg btn-secondary " >Sign in !</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm