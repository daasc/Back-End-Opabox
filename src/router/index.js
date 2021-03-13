const express = require('express');
const ordenarLista= require('./ordenarLista');
const interlace = require('./interlace');
const router = express.Router();

router.use('/ordenaLista', ordenarLista);
router.use('/interlace', interlace);
router.get('/', (req, res) => {
    res.send('api rodando');
});

module.exports = router;