import express from "express"
import http from "http"
import SocketIO from "socket.io"

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set("views", __dirname + '/views');
app.use("/public", express.static(__dirname + '/public'));
app.get('/', (_, res) => res.render("home"));
app.get("/*", (_, res) => res.render("/"))

const server = http.createServer(app)
const io = SocketIO(server)

const Listen = () => console.log(`Listening on http://localhost:${port}`)
server.listen(port, Listen)