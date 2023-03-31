import React from "react";
import { Link } from 'react-router-dom'



const NavBar = () => {


    return (
        <div className="nav-container">
            <div className='nav'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6k-Bu76rPkuW8BY5k9r8xHSQ4c1Z_IgRavt0UkXKgj88N0x9ijEejbiuRj0BqdKZsAaVi9YDZvE&usqp=CAU&ec=48665701" alt="Sun Photo" />
                <h3>Bright Ideas</h3>
            </div>
            <div className="nav-section">
                <ul className="nav-list">
                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                    <li><Link to={'/login'} className="nav-link">Sign in</Link></li>
                    <li><Link  to={'/register'} className="nav-link">Register</Link></li>
                </ul>
            </div>
        </div>
    )
}


export default NavBar