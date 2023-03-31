import React, { useState } from 'react'
import axios from 'axios'



const RegisterForm = ({submitHandler }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');




    const handleSubmit = (e) => {
        e.preventDefault();
        submitHandler({
            name,
            username,
            email,
            password,
            confirmPassword
        });
    }



    return (
        <div className='form-main'>
            <div className="p-3 mb-4 bg-secondary bg-opacity-10 border border-warning border-start-0 rounded-end ">
                <form onSubmit={handleSubmit} className='form'>
                    <p>Name:</p>
                    <input type='text' className='form-control ' onChange={(e) => setName(e.target.value)} />
                    <p>Username:</p>
                    <input type='text' className='form-control ' onChange={(e) => setUsername(e.target.value)} />
                    <p>Email:</p>
                    <input type="text" className='form-control ' onChange={(e) => setEmail(e.target.value)} />
                    <p>Password:</p>
                    <input type="text" className='form-control ' onChange={(e) => setPassword(e.target.value)} />
                    <p>Confirm Password:</p>
                    <input type="text" className='form-control ' onChange={(e) => setConfirmPassword(e.target.value)} />
                    <div className="mt-4 text-end">
                        <button className="btn btn-lg btn-secondary " >Register !</button>
                    </div>
                </form>
                </div>
            </div>
            )
}

            export default RegisterForm