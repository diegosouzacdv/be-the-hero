const express = require('express');
const cors = require('cors');
const routes = require('./routes');
/**
 * Tipos de Parâmetros:
 * 
 * Query Params: /users?nome= => Parâmetros nomeados enviados na rota após "?" (FIltros, paginação)
 * Ruoter Params: /users/:id => Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */
const app = express();
app.use(cors());

// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

app.use(express.json());
app.use(routes);

app.listen(3333);