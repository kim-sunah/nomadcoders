import express from "express"
import http from "http"
import { Server } from "socket.io"
import { instrument } from "@socket.io/admin-ui";

const app = express();
const port = 3000;
app.set('view engine', 'pug');
app.set("views", __dirname + '/views');
app.use("/public", express.static(__dirname + '/public'));
app.get('/', (_, res) => res.render("home"));
app.get("/*", (_, res) => res.render("/"))

const Listen = () => console.log(`Listening on http://localhost:${port}`)

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: ['https://admin.socket.io'],
        credentials: true,
    }
});
instrument(io, {
    auth: false
})

function publicRooms() {
    const { sockets: { adapter: { sids, rooms } } } = io;
    const publicRooms = [];
    rooms.forEach((_, key) => {
        if (sids.get(key) === undefined) {
            publicRooms.push(key)
        }
    })
    return publicRooms;
}

function countRoom(roomName) {
    return io.sockets.adapter.rooms.get(roomName)?.size;
}

io.on('connection', (socket) => {
    socket['nickname'] = "a"
    socket.onAny((event) => {
        console.log(`socket event : ${event}`)
    })
    socket.on('enter_room', (roomName, done) => {
        socket.join(roomName)
        done();
        socket.to(roomName).emit("welcome", socket.nickname, countRoom(roomName))
        io.sockets.emit("room_change", publicRooms())
    })
    socket.on('disconnecting', () => {
        socket.rooms.forEach((room) => socket.to(room).emit("bye", socket.nickname), countRoom(roomName) - 1);

    })
    socket.on('disconnect', () => {
        io.sockets.emit("room_change", publicRooms())
    })
    socket.on('new_message', (msg, roomName, done) => {
        socket.to(roomName).emit("new_message", `${socket.nickname}: ${msg}`);
        done();
    })
    socket.on('nickname', (nickname) => { socket['nickname'] = nickname })
})

server.listen(port, Listen)