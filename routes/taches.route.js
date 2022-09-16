const express = require('express') ; 
const { AddTaches, FindAllTaches, FindSingleTaches, UpdateTaches, DeleteTaches } = require('../controller/taches.controller');
const router = express.Router() 


/* add user */
router.post('/taches', AddTaches)

/* find all users */
router.get('/taches', FindAllTaches)

/* find single user */
router.get('/taches/:id', FindSingleTaches)

/* add user */
router.put('/taches/:id', UpdateTaches)

/* add user */
router.delete('/taches/:id', DeleteTaches)


module.exports = router ; 