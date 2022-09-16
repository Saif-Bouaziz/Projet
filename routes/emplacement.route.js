const express = require('express') ; 
const { AddEmplacement, FindAllEmplacement, FindSinglEmplacement, UpdateEmplacement, DeleteEmplacement } = require('../controller/emplacement.controller');
const router = express.Router() 


/* add user */
router.post('/emplacement', AddEmplacement)

/* find all users */
router.get('/emplacement', FindAllEmplacement)

/* find single user */
router.get('/emplacement/:id', FindSinglEmplacement)

/* add user */
router.put('/emplacement/:id', UpdateEmplacement)

/* add user */
router.delete('/emplacement/:id', DeleteEmplacement)


module.exports = router ; 