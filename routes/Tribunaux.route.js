const express = require('express');
const { AddTribunal, FindAllTribunaux, FindSingleTribunal, UpdateTribunal, DeleteTribunal } = require('../controller/Tribunaux.controller');
const router = express.Router()

router.post('/Tribunaux', AddTribunal)

router.get('/Tribunaux', FindAllTribunaux)

router.get('/Tribunaux/:id', FindSingleTribunal)

router.put('/Tribunaux/:id', UpdateTribunal)

router.delete('/Tribunaux/:id', DeleteTribunal)


module.exports = router;