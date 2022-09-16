const express = require('express') ; 
const { AddGreffier, FindAllGreffier, FindSinglGreffier, UpdateGreffier, DeleteGreffier } = require('../controller/greffier.controller');
const router = express.Router() 


/* add user */
router.post('/greffier', AddGreffier)

/* find all users */
router.get('/greffier', FindAllGreffier)

/* find single user */
router.get('/greffier/:id', FindSinglGreffier)

/* add user */
router.put('/greffier/:id', UpdateGreffier)

/* add user */
router.delete('/greffier/:id', DeleteGreffier)


module.exports = router ; 