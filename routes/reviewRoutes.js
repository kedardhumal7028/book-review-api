const express = require('express');
const router = express.Router();
const { updateReview, deleteReview } = require('../controllers/reviewController');
const auth = require('../middleware/auth');

router.put('/:id', auth, updateReview);      
router.delete('/:id', auth, deleteReview);   

module.exports = router;
