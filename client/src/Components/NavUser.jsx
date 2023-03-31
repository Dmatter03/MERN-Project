import React from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";

// /api/logout

const NavUser = () => {
    const nav = useNavigate();

    const logoutUser = (e) => {
        axios.get('http://localhost:8000/api/logout')
        .then((response) => {
            console.log(response)
            nav('/')
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return (
        <div className="nav-container">
            <div className='nav'>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6k-Bu76rPkuW8BY5k9r8xHSQ4c1Z_IgRavt0UkXKgj88N0x9ijEejbiuRj0BqdKZsAaVi9YDZvE&usqp=CAU&ec=48665701" alt="Sun Photo" />
                <h3>Bright Ideas</h3>
            </div>
            <div className="nav-section">
                <ul className="nav-list">
                    <li><Link to={'/users'} className="nav-link">Home</Link></li>
                    <li><Link className="nav-link" onClick={logoutUser}>Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}


export default NavUser