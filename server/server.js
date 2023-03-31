const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
// CONFIG MONGOOSE
require("./config/mongoose.config");
// CONFIG EXPRESS
// app.use(cors()) // Having 2 localhost port to communicate
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
}));
app.use(express.json())
app.use(cookieParser());

require("./routes/user.routes")(app)
require("./routes/post.routes")(app)

const server = app.listen(8000, () => console.log('The server is listening on port 8000'))
//
const io = require('socket.io')(server, { cors: true });

io.on('connection', (socket) => {
    //socket is the object containing the information of the client connection
    console.log("The server is listening for a connection");
    console.log(socket.id);

    //this emits an event to the client 
    // the first argument will be refered to from the client as an event listener
    //second argument is the data that is retrieved within the first argument
    socket.emit('user-post', 'Handshake was made console should have connection and Id in terminal');

    socket.on('post', (clientInput) => {
        console.log('The users input is:', clientInput)

        io.emit('post-feed', clientInput)
    });


});

