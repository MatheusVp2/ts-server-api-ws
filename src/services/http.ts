import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();

app.use(cors());

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
    cors: {
        origin: '*'
    }
})

export {
    serverHttp,
    app,
    io
}

