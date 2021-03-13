const express = require("express");
const Interlace = require("../controller/Interlace");
const interlace = new Interlace();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const {
      query: { intervaloA, intervaloB }
    } = req;
    const result = await interlace.breaks(intervaloA, intervaloB);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
