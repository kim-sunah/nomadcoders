import express from "express"
import WebSocket from "ws";
import http from "http"

const app = express();
const port = 3000;
app.set('view engine', 'pug');
app.set("views", __dirname + '/views');
app.use("/public", express.static(__dirname + '/public'));
app.get('/', (_, res) => res.render("home"));
app.get("/*", (_, res) => res.render("/"))

const Listen = () => console.log(`Listening on http://localhost:${port}`)

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

const sockets = []

wss.on('connection', (socket) => {
    sockets.push(socket);
    socket['nickname'] = "suna";
    console.log("connected to browser")
    socket.on("close", () => console.log("disconnected from browser"))
    socket.on("message", (message) => {
        const parts = JSON.parse(message.toString());
        switch (parts.type) {
            case "new_message":
                sockets.forEach(aSocket => {
                    aSocket.send(`${socket.nickname}: ${par}`, parts.payload);
                })
            case "nickname":
                socket['nickname'] = parts.payload

        }

    })
})

server.listen(port, Listen)