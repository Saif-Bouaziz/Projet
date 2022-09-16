const express = require('express') ; 
const { AddRecette, FindAllRecette, FindSinglRecette, UpdateRecette, DeleteRecette } = require('../controller/recette.controller');
const router = express.Router() 


/* add user */
router.post('/recette', AddRecette)

/* find all users */
router.get('/recette', FindAllRecette)

/* find single user */
router.get('/recette/:id', FindSinglRecette)

/* add user */
router.put('/recette/:id', UpdateRecette)

/* add user */
router.delete('/recette/:id', DeleteRecette)


module.exports = router ; 