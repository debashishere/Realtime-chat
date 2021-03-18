window.addEventListener("DOMContentLoaded", (event) => {
    const chatForm = document.getElementById('chat-form');
    const chatMessage = document.querySelector('.chat-messages');
    const roomName = document.getElementById('room-name');
    const userList = document.getElementById('users');

    //get username and room from url
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const room = urlParams.get('room');

    const socket = io();

    //join chatroom
    socket.emit('joinRoom', ({ username, room }));

    //Get room ans users
    socket.on('roomUsers', ({ room, users }) => {
        console.log(users)
        outputRoomName(room);
        outputUser(users);
    })
    //Message From server
    socket.on('message', message => {
        console.log("message", message)
        outputMessage(message);

        //scroll down
        chatMessage.scrollTop = chatMessage.scrollHeight;
    })

    //message submit
    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const msg = event.target.elements.msg.value;

        //Emit message to server
        socket.emit('chatMessage', msg)
        event.target.elements.msg.value = ''
        event.target.elements.msg.focus()
        //Listem for new
    });

    //output message to DOM
    const outputMessage = (message) => {
        const div = document.createElement('div');
        div.classList.add('message');
        div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
        <p class="text">
         ${message.text}
        </p>`
        document.querySelector('.chat-messages').appendChild(div)
    }

    //Add room name to DOM
    const outputRoomName = (room) => {
        roomName.innerText = room;
    }

    //Add users to DOM
    const outputUser = (users) => {
        userList.innerHTML = `
            ${users.map(user => `<li>${user.username}</li>`).join('')}
        `
    }
})