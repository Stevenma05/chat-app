import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { app, server } from "./lib/socket.js";

dotenv.config()

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
})
);

app.use("/api/auth", authRoutes); //second parameter can be any name but links file
app.use("/api/message", messageRoutes); //second parameter can be any name but links file

server.listen(PORT, () => {
    console.log("Server is running on PORT:" + PORT);
    connectDB();
})