const express = require('express') ; 
const { AddTimbre, FindAllTimbre, FindSinglTimbre, UpdateTimbre, DeleteTimbre } = require('../controller/timbre.controller');
const router = express.Router() 


/* add user */
router.post('/timbre', AddTimbre)

/* find all users */
router.get('/timbre', FindAllTimbre)

/* find single user */
router.get('/timbre/:id', FindSinglTimbre)

/* add user */
router.put('/timbre/:id', UpdateTimbre)

/* add user */
router.delete('/timbre/:id', DeleteTimbre)


module.exports = router ; 