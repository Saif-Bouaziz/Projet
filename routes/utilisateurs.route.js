const express = require('express') ; 
const { AddUtilisateurs, FindAllUtilisateurs, FindSingleUtilisateurs, UpdateUtilisateurs, DeleteUtilisateurs } = require('../controller/utilisateurs.controller');
const router = express.Router() 


/* add user */
router.post('/utilisateurs', AddUtilisateurs)

/* find all users */
router.get('/utilisateurs', FindAllUtilisateurs)

/* find single user */
router.get('/utilisateurs/:id', FindSingleUtilisateurs)

/* add user */
router.put('/utilisateurs/:id', UpdateUtilisateurs)

/* add user */
router.delete('/utilisateurs/:id', DeleteUtilisateurs)


module.exports = router ; 