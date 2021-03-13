const express = require("express");
const { validationResult } = require("express-validator");
const OrdenarLista = require("../controller/OrdenarLista");
const OrdenarListaValidation = require("../validation/OrdenarLista");
const ordenarListaValidation = new OrdenarListaValidation();
const ordenarLista = new OrdenarLista();
const router = express.Router();

router.post("/", ordenarListaValidation.order(), async (req, res) => {
  try {
    const erro = validationResult(req);
    if (!erro.isEmpty()) {
      return res.status(400).send({ erros: erro.array() });
    }
    const result = await ordenarLista.ordernar(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
