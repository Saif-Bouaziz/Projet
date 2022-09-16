const express = require('express') ; 
const { AddClient, FindAllClient, FindSinglClient, UpdateClient, DeleteClient } = require('../controller/client.controller');
const router = express.Router() 


/* add user */
router.post('/gestion_client', AddClient)

/* find all users */
router.get('/gestion_client', FindAllClient)

/* find single user */
router.get('/gestion_client/:id', FindSinglClient)

/* add user */
router.put('/gestion_client/:id', UpdateClient)

/* add user */
router.delete('/gestion_client/:id', DeleteClient)


module.exports = router ; 