const express = require('express') ; 
const { AddCollaborateur, FindAllCollaborateur, FindSingleCollaborateur, UpdateCollaborateur, DeleteCollaborateur } = require('../controller/collaborateurs.controller');
const router = express.Router() 


/* add user */
router.post('/collaborateurs', AddCollaborateur)

/* find all users */
router.get('/collaborateurs', FindAllCollaborateur)

/* find single user */
router.get('/collaborateurs/:id', FindSingleCollaborateur)

/* add user */
router.put('/collaborateurs/:id', UpdateCollaborateur)

/* add user */
router.delete('/collaborateurs/:id', DeleteCollaborateur)


module.exports = router ; 