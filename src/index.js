const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();

app.options("*", cors());
app.use(cors());
app.use(express.json());
app.use("/", router);

module.exports = app;
