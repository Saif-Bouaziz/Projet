const express = require('express') ; 
const { AddHonoraire, FindAllHonoraire, FindSingleHonoraire, UpdateHonoraire, DeleteHonoraire } = require('../controller/honoraire.controller');
const router = express.Router() 


/* add user */
router.post('/honoraires', AddHonoraire)

/* find all users */
router.get('/honoraires', FindAllHonoraire)

/* find single user */
router.get('/honoraires/:id', FindSingleHonoraire)

/* add user */
router.put('/honoraires/:id', UpdateHonoraire)

/* add user */
router.delete('/honoraires/:id', DeleteHonoraire)


module.exports = router ; 