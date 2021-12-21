const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


// router.get('/books/:id/edit', reviewsCtrl.edit);
// router.put('/books/:id/reviews',reviewsCtrl.create);
router.put('/reviews/:id/', reviewsCtrl.update);
router.post('/books/:id/reviews', reviewsCtrl.create);


router.delete('/reviews/:id', reviewsCtrl.delete);




module.exports = router;