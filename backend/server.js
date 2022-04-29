const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const qoutes = require("./routes/api/qoutes");
const users = require("./routes/api/users");
const cors = require("cors");
const dotenv = require("dotenv");
const socket = require("socket.io");
const { addUser, getUser, removeUser, getUsersInRoom } = require("./users");

// Initiate express
const app = express();

//consigure env file
dotenv.config();

//middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/qoute/", qoutes);
app.use("/api/user/", users);
app.get("/chat", (req, res) => {
  res.json({ message: "no data to be sent" });
});

// Database related settings
const dbURI = process.env.dbURI_PRODUCTION;
console.log(dbURI)
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err,"there was an error while connecting"));

// fire up the server
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("server is running on port " + port);
});

// socket related
// const io = socket(server, {
//   cors: {
//     origin: "*", // need to make sure it connects
//   },
// });

// io.on("connection", (socket) => {
//   console.log("loggin");

//   socket.on("join", (payload, callback) => {
//     const { name, room } = payload;
//     const { error, user } = addUser({ id: socket.id, name, room });
//     console.log(error, user);

//     if (error) {
//       socket.emit("message", {
//         user: "admin",
//         text: "user name already teken",
//       });
//       return callback({ error });
//     } else {
//       // Tell the user
//       socket.emit("message", {
//         user: "admin",
//         text: user.name + " welcome to " + user.room,
//       });
//       //tells everyone else
//       socket.broadcast
//         .to(user)
//         .emit("message", { user: "admin", text: user.name + "has joined" });

//       socket.join(user.room);
//       console.log(user);
//       callback({ user });
//     }
//   });

//   socket.on("sendMessage", (message, callback) => {
//     const user = getUser(socket.id);
//     console.log(user);
//     io.to(user.room).emit("message", { user: user.name, text: message });
//     callback();
//   });

//   socket.on("disconnect", () => {
//     console.log("logged out");
//   });
// });
