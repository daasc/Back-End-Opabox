//arquivo de configuração do projeto 
const express = require("express");
const router = require("./router");
const cors = require("cors");
//cors permissão para acessar as rotas
const app = express();

app.options("*", cors());
//o * significa que qualquer cliente poderá consumir a API
app.use(cors());
app.use(express.json());
//express da versão 4.16.0 podemos substituir o body-parser por express.json e express.urlencoded([options])  
app.use("/", router);
//as rotas do projeto
module.exports = app;
