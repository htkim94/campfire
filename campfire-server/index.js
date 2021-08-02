const express = require("express");
const users = require("./routes/users");
const cors = require("cors");
const socketio = require("socket.io");
const app = express();
app.use(cors());
app.use("/users", users);

const PORT = process.env.PORT || 3002;

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("back end connected");
  socket.send("hello");

  socket.on("createRoom", ({ roomID }) => {
    console.log(roomID);
    socket.join(roomID);
    io.to(roomID).emit("joinedRoom");
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
