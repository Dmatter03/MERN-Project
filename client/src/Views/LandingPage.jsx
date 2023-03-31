import React, {useState, useEffect} from 'react'



import NavBar from '../Components/NavBar'

const LandingPage = () => {



    // <img src="https://cutewallpaper.org/24/sunrise-png/1323318874.jpg" alt="" />



    return(
        <div>
            <NavBar />
            <div className='container' >
                <div className='welcome'>
                    <h1 className='header'>Ideas That Shine</h1>
                </div>
                <div className='intro'>
                    <p>
                        PLease Register or Sign-in get started
                    </p>
                </div>
            </div>
        </div>
    )
}


export default LandingPage





