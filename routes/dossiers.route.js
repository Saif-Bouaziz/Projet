const express = require('express') ; 
const { AddDossier, FindAllDossier, FindSingleDossier, UpdateDossier, DeleteDossier } = require('../controller/dossier.controller');
const router = express.Router() 


/* add user */
router.post('/dossiers', AddDossier)

/* find all users */
router.get('/dossiers', FindAllDossier)

/* find single user */
router.get('/dossiers/:id', FindSingleDossier)

/* add user */
router.put('/dossiers/:id', UpdateDossier)

/* add user */
router.delete('/dossiers/:id', DeleteDossier)


module.exports = router ; 