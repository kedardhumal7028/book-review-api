const express = require('express');
const router = express.Router();

const { addBook, getBooks, getBookById, addReview, updateReview, deleteReview } = require('../controllers/bookController');

const auth = require('../middleware/auth');

router.post('/', auth, addBook);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/:id/reviews', auth, addReview);
router.put('/reviews/:id', auth, updateReview);
router.delete('/reviews/:id', auth, deleteReview);

module.exports = router;
