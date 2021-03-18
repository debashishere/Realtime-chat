const express = require("express");
const app = express()
const path = require("path");
const socketio = require("socket.io");
const formatMessage = require('./utils/messages')
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/user')
const http = require("http");
const { get } = require("https");
const server = http.createServer(app);
const io = socketio(server);

//static folder
app.use(express.static(path.join(__dirname, 'public')));
const botName = "chatbot";

//Run when client connects
io.on('connection', socket => {
    console.log("new socket  connection");

    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        //Wellcome current user
        socket.emit("message", formatMessage(botName, "wellcome to chatapp!"));

        //Brodcast when a user connects (emit to all client)
        socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${username} has joined the chat`));

        //Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        })
    })

    //Listen for chatMessage
    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id)
        //emit back to everybody
        io.to(user.room).emit('message', formatMessage(user.username, msg));
    })


    //Run when client disconnect
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
            //emits to everyone
            io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
            //Send users and room info
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            })
        }

    });
})


app.get('/', (req, res) => {
    res.send("index.html")
})



const port = 3000 || process.env.PORT
server.listen(port), (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`server at ${port}`);
}
