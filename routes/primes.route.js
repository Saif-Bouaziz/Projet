const express = require('express') ; 
const { AddPrime, FindAllPrime, FindSinglePrime, UpdatePrime, DeletePrime } = require('../controller/prime.controller');
const router = express.Router() 


/* add user */
router.post('/primes', AddPrime)

/* find all users */
router.get('/primes', FindAllPrime)

/* find single user */
router.get('/primes/:id', FindSinglePrime)

/* add user */
router.put('/primes/:id', UpdatePrime)

/* add user */
router.delete('/primes/:id', DeletePrime)


module.exports = router ; 