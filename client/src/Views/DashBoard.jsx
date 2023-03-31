import io from 'socket.io-client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'



import NavUser from '../Components/NavUser'
import PostBox from '../Components/PostBox'

const DashBoard = () => {
    const [socket] = useState(() => io(':8000'));
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState();
    const [username, setUsername] = useState('');
    const[favorite, setFavorite] = useState([]);

    //================================================== Sockets ===============================================>
    useEffect(() => {
        console.log('This is the (client) running');
        socket.on('post-feed', (data) => {
            setMessages((prevMsgState) => [...prevMsgState, data]);
        });
        return () => socket.removeAllListeners();
    }, [socket])
    
    const sendMessage = (message) =>{
        socket.emit('post', {username, content: message})
    }
//==================================================== Get User =================================================>

    useEffect(() => {
        axios.get('http://localhost:8000/api/getUser', { withCredentials: true })
            .then((response) => {
                console.log(response)
                setUsers(response.data)
                setUsername(response.data.username)
            })
            .catch(err => console.log(err))
    }, [])
//======================================================= Create Post ============================================>
    const postSubmit = (newPost) => {
            axios.post('http://localhost:8000/api/posts', newPost)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.response);
        })
    }
//====================================================== Get Likes=================================================>
    useEffect(() => {
        axios.get('http://localhost:8000/api/posts')
        .then((response) => {
            console.log(response.data)
            setFavorite(response.data)

        })
        .catch((error) => {
            console.log(error.response);
        })
    },[socket])



    return (
        <div>
            <NavUser />
            <div>
                {users && <h2 className='greeting'>Welcome, {users.username}</h2>}
                <PostBox messages={messages} submit={sendMessage} users={users} formSubmit={postSubmit} favorite={favorite}  />
            </div>
        </div>
    )
}


export default DashBoard





