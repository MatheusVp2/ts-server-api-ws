import { AxiosError, AxiosResponse } from './../../node_modules/axios/index.d';
import axios from "axios";

const service = axios.create({
    baseURL: "https://gitlab.com/api/v4",
    headers: {
        "PRIVATE-TOKEN": ""
    }
})

const AtualizaLabelConcluido = async (project_id: number, iid: number) => {
    service.put(`/projects/${project_id}/issues/${iid}`, {}, {
        params: { labels: 'Concluída' },
    })
        .then((resp: AxiosResponse) => {
            console.log("Sucesso");
            console.log(resp.status);
        }).catch((err: AxiosError) => {
            console.error("Houve algum erro");
            console.error(err.response.status);
        });
}

export {
    AtualizaLabelConcluido
}
