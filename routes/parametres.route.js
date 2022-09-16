const express = require('express') ; 
const { AddParametre, FindAllParametre, FindSingleParametre, UpdateParametre, DeleteParametre } = require('../controller/parametres.controller');
const router = express.Router() 


/* add user */
router.post('/parametres', AddParametre)

/* find all users */
router.get('/parametres', FindAllParametre)

/* find single user */
router.get('/parametres/:id', FindSingleParametre)

/* add user */
router.put('/parametres/:id', UpdateParametre)

/* add user */
router.delete('/parametres/:id', DeleteParametre)


module.exports = router ; 