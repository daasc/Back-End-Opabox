const express = require("express");
const { validationResult } = require("express-validator");
const OrdenaLista = require("../controller/OrdenaLista");
const OrdenaListaValidation = require("../validation/OrdenaLista");
const ordenaListaValidation = new OrdenaListaValidation();
const ordenaLista = new OrdenaLista();
const router = express.Router();

router.post("/", ordenaListaValidation.order(), async (req, res) => {
  try {
    const erro = validationResult(req);
    if (!erro.isEmpty()) {
      return res.status(400).send({ erros: erro.array() });
    }
    const result = await ordenaLista.order(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
