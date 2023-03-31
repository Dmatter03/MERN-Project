import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import NavUser from "../Components/NavUser";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/getUser', { withCredentials: true })
            .then((response) => {
                console.log(response)
                setUser(response.data)
            })
            .catch(err => console.log(err))
    }, [])




    return (
        <div>
            <div>
                <NavUser />
            </div>
            <div className="container" >
                <div className="container-top" >
                    <div className="p-container">
                    <img className="profilePic" src="https://tinyurl.com/4x4e3anm" alt="Sun Photo" />
                    </div>
                    <div className="user-info">
                        <div className="info-header">
                            <p>Basic info</p>
                        </div>
                        <div className="info-body">
                            <div>
                                <p>Name:</p>
                                <p>Username:</p>
                                <p>Email:</p>
                            </div>
                            <div>
                                <p>{user.name}</p>
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <div className="info-header">
                        </div>
                        <div className="info-body">
                            <div>
                                <p>Total Ideas:</p>
                                <p>Total Brightness:</p>
                            </div>
                            <div>
                                <p>1</p>
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                </div>
            </div>
        </div>
    )
}


export default UserDetails