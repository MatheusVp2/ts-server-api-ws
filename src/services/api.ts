import { Request, Response } from 'express';
import { app } from "./http";

app.get("/", (request: Request, response: Response) => {
    response.status(200).json({
        ok : true
    })
})
