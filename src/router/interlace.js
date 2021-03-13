//arquivo de rotas do interlace nesse arquivo não manipulamos dados só recebemos e retornamos eles
//os dados são enviados para o controller onde serão tratado conforme a regra de negócio
 
const express = require("express");
const Interlace = require("../controller/Interlace");
const interlace = new Interlace();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const {
      query: { intervaloA, intervaloB }
    } = req;
    const result = await interlace.intervalo(intervaloA, intervaloB);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
