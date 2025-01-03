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

function handleMessageSubmit(event) {
    event.preventDefault();
    const input = room.querySelector('#msg input');
    const value = input.value;
    socket.emit('new_message', input.value, roomName, () => {
        addMessage(`You: ${value}`);
    })
    input.value = "";
}
function handleNicknameSubmit(event) {
    event.preventDefault();
    const input = room.querySelector('#name input');
    const value = input.value;
    socket.emit('nickname', value)
}

function showRoom() {
    room.hidden = false;
    welcome.hidden = true;
    const h3 = room.querySelector('h3');
    h3.innerText = `Room ${roomName}`
    const msgForm = room.querySelector('#msg');
    const nameForm = room.querySelector('#name');
    msgForm.addEventListener('submit', handleMessageSubmit);
    nameForm.addEventListener('submit', handleNicknameSubmit);
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector('input');
    socket.emit('enter_room', input.value, showRoom);
    roomName = input.value;
}

socket.on("welcome", (user, newCount) => {
    const h3 = room.querySelector('h3');
    h3.innerText = `Room ${roomName} (${newCount})`
    addMessage(`${user} welcome`)
})

socket.on('bye', (user, newCount) => {
    const h3 = room.querySelector('h3');
    h3.innerText = `Room ${roomName} (${newCount})`
    addMessage(`${user} bye`)
});
socket.on('new_message', addMessage)

socket.on("room_change", (rooms) => {
    const roomList = welcome.querySelector("ul");
    roomList.innerHTML = '';
    if (rooms.length === 0) {
        return
    }
    rooms.forEach(room => {
        const li = document.createElement("li");
        li.innerText = room;
        roomList.appendChild(li);
    })
})

form.addEventListener("submit", handleRoomSubmit);