const express = require('express') ; 
const { AddPhotocopie, FindAllPhotocopie, FindSinglPhotocopie, UpdatePhotocopie, DeletePhotocopie } = require('../controller/photocopie.controller');
const router = express.Router() 


/* add user */
router.post('/photocopie', AddPhotocopie)

/* find all users */
router.get('/photocopie', FindAllPhotocopie)

/* find single user */
router.get('/photocopie/:id', FindSinglPhotocopie)

/* add user */
router.put('/photocopie/:id', UpdatePhotocopie)

/* add user */
router.delete('/photocopie/:id', DeletePhotocopie)


module.exports = router ; 