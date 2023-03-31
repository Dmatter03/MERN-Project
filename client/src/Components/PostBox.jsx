import React, { useState } from "react";
import { Link } from "react-router-dom";




const PostBox = ({ messages, submit, users, formSubmit, favorite }) => {
    const [message, setMessage] = useState('');
    const [like, setLike] = useState(0);
    const [likeCount, setLikeCount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('The message was sent', message)
        formSubmit({
            users,
            message
        })
        submit(message);
        setMessage('');
    }

    const handleLike = (e) => {
        e.preventDefault();

        formSubmit({
            users,
            like
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='user-posts'>
                    <input type="text" value={message} className='form-control' placeholder="Post a Idea" onChange={(e) => setMessage(e.target.value)} />
                    <button className='btn btn-warning ' >Post</button>
                </div>
            </form>
            
            
            <div className="chat-window">
                {messages && messages.map((msg, i) => (
                    <div key={i} className='display-card' >
                        <div>
                            {users && users._id && <p><Link to={`/users/${users._id}`} >{msg.username}</Link></p>}
                        </div>
                        <div className="card-body">
                            <p>Posted:</p>
                            <p>{msg.content}</p>
                        </div>
                        <div>
                            <form onSubmit={handleLike} className="like-count">
                                <button className="btn btn-primary btn-sm text-end" value={0} onClick={(e) => setLike(like + 1)} >Brighten</button>
                                <Link > {like}   Brightness</Link>
                            </form>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}



export default PostBox