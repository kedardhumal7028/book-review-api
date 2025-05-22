// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const { updateReview, deleteReview } = require('../controllers/reviewController');
const auth = require('../middleware/auth');

router.put('/:id', auth, updateReview);      // PUT /api/reviews/:id
router.delete('/:id', auth, deleteReview);   // DELETE /api/reviews/:id

module.exports = router;
