import { Request, Response } from 'express';
import { app } from "./http";
import fs, { stat } from "fs";

import { AtualizaLabelConcluido } from "../services/ConsumerGitLab";

app.get("/", (request: Request, response: Response) => {
    return response.status(200).json({
        ok: true
    })
})

app.post("/webhook", async (request: Request, response: Response) => {
    const data = request.body;

    const { event_type } = data;
    /**
     * Se o evento for do tipo 'issue'
     */
    if (event_type === "issue") {

        const { state, action, project_id, iid } = data.object_attributes

        /**
         * Se a issue for para fechado, colocar a label de Concluido.
         */
        if ( state === "closed" && action === "close" ) {
            await AtualizaLabelConcluido(project_id, iid)
        }

    }

    return response.status(200).json(data);
})
