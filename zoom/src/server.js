import express from "express"
import http from "http"
import SocketIO from "socket.io"

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set("views", __dirname + '/views');
app.use("/public", express.static(__dirname + '/public'));
app.get("/*", (_, res) => res.render("home"));
// app.get("/*", (_, res) => res.render("/"))

const server = http.createServer(app)
const io = SocketIO(server)

io.on("connection", (socket) => {
    socket.on('join_room', (roomName) => {
        socket.join(roomName)
        socket.to(roomName).emit("welcome")
        // socket.broadcast.to(roomName).emit('user_connected', roomName)
    })
    socket.on('offer', (offer, roomName) => {
        socket.to(roomName).emit('offer', offer)
    })
    socket.on('answer', (answer, roomName) => {
        socket.to(roomName).emit('answer', answer);
    });
    socket.on('ice', (ice, roomName) => {
        socket.to(roomName).emit('ice', ice);
    });
})

const Listen = () => console.log(`Listening on http://localhost:${port}`)
server.listen(port, Listen)