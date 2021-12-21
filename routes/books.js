const express = require('express');

const router = express.Router();
const booksCtrl = require('../controllers/books')
const isLoggedIn = require('../config/auth');


router.get('/', booksCtrl.index)
router.get('/new', isLoggedIn, booksCtrl.new)

router.post('/new', isLoggedIn, booksCtrl.create)

router.get('/:id', booksCtrl.show)

module.exports = router 