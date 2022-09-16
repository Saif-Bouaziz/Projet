const express = require('express') ; 
const { AddTransport, FindAllTransport, FindSinglTransport, UpdateTransport, DeleteTransport } = require('../controller/transport.controller');
const router = express.Router() 


/* add user */
router.post('/transport', AddTransport)

/* find all users */
router.get('/transport', FindAllTransport)

/* find single user */
router.get('/transport/:id', FindSinglTransport)

/* add user */
router.put('/transport/:id', UpdateTransport)

/* add user */
router.delete('/transport/:id', DeleteTransport)


module.exports = router ; 