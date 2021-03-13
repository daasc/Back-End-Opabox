const express = require('express');
const ordenaLista= require('./ordenaLista');
const interlace = require('./interlace');
const router = express.Router();

router.use('/ordenaLista', ordenaLista);
router.use('/interlace', interlace);
router.get('/', (req, res) => {
    res.send('api rodando');
});

module.exports = router;