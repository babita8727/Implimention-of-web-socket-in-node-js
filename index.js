const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
app.use(express.static(path.resolve("./public")));

const io = new Server(server);

// socket.io

io.on("connection", (socket) => {
  socket.on("userMessage", (message) => {
    io.emit("message", message);
  });
});

app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});
server.listen(4000, () => console.log(`server running at port:4000`));
