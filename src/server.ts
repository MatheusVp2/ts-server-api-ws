
/**
 * Importa o serverHttp configurado.
 */
import { serverHttp } from "./serverless/http";

/**
 * Importando o Socket.
 */
import "./serverless/websocket";

/**
 * Importando a API.
 */
import "./serverless/api";

/**
 * Inicializa o servidor http.
 * Preicisa desse env port devido ao deploy da heroku.
 */
const server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
serverHttp.listen(server_port, function() {
    console.log('Listening on port %d', server_port);
});
