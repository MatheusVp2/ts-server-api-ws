import { Socket } from "socket.io";
import { io } from "./http";

io.on("connection", (socket: Socket) => {
    console.log(`Cliente ID: ${socket.id} conectado !`)
})
