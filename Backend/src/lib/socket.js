import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: [process.env.FRONTEND_URL]
    }
});

//to store online users
const userSocketMap = {}

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    console.log("Online users before connection:", userSocketMap);

    const userId = socket.handshake.query.userId
    if (userId) userSocketMap[userId] = socket.id

    console.log("Online users after connection:", userSocketMap);

    //used to send events to all the connected clients
    io.emit("getOnlineUser", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        console.log("Online users (before disconnect):", userSocketMap);
        console.log("A user disconnected:", socket.id);
        delete userSocketMap[userId];
        console.log("Online users (after disconnect):", userSocketMap);
        io.emit("getOnlineUser", Object.keys(userSocketMap));
    })
});

export { io, app, server };
