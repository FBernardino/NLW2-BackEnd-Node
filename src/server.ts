import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json()); // entender json
app.use(routes);
app.listen(3333);


// ###### MÉTODOS ###### //
// GET: Buscar ou Listar uma informação
// POST: Criar alguma informação 
// PUT: Atualizar uma informação já existente
// DELETE: Deletar uma informaçao existente

// ###### PARAMETROS ###### //
// Corpo (Request Body) dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso quero atualizar ou deletar (request.params)
// Query Params: Paginação, Filtros, Ordenação etc .... (request.query )