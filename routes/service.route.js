const express = require('express');
const { AddService, FindAllService, FindSinglService, UpdateService, DeleteService } = require('../controller/service.controller');
const router = express.Router();

router.post('/service', AddService)

/* find all users */
router.get('/service', FindAllService)

/* find single user */
router.get('/service/:id', FindSinglService)

/* add user */
router.put('/service/:id', UpdateService)

/* add user */
router.delete('/service/:id', DeleteService)


module.exports = router;