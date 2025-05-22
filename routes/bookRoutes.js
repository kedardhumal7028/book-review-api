const express = require('express');
const router = express.Router();

// controllers/bookController.js मधून import केलेले functions
const { addBook, getBooks, getBookById, addReview, updateReview, deleteReview } = require('../controllers/bookController');

// middleware/auth.js मधून import केलेला function
const auth = require('../middleware/auth');

router.post('/', auth, addBook);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/:id/reviews', auth, addReview);
router.put('/reviews/:id', auth, updateReview);
router.delete('/reviews/:id', auth, deleteReview);

module.exports = router;
