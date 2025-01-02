const socket = io();

const welcome = document.getElementById('welcome');
const form = welcome.querySelector('form');
const room = document.getElementById('room');

let roomName;

room.hidden = true;

function addMessage(message) {
    const ul = room.querySelector('ul');
    const li = document.createElement('li');
    li.innerText = message;
    ul.appendChild(li);
}

function showRoom() {
    room.hidden = false;
    welcome.hidden = true;
    const h3 = room.querySelector('h3');
    h3.innerText = `Room ${roomName}`
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector('input');
    socket.emit('enter_room', input.value, showRoom);
    roomName = input.value;
}

socket.on("welcome", () => {
    addMessage("Welcome to the chat room!")
})

form.addEventListener("submit", handleRoomSubmit);