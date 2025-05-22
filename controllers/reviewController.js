// controllers/reviewController.js

const Review = require('../models/Review');

// 🔄 Update Review
exports.updateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const userId = req.user;

    const review = await Review.findById(reviewId);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    // User check
    if (review.user.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized to update this review' });
    }

    review.rating = req.body.rating || review.rating;
    review.comment = req.body.comment || review.comment;

    await review.save();

    res.status(200).json({ message: 'Review updated', review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ❌ Delete Review
exports.deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const userId = req.user;

    const review = await Review.findById(reviewId);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    if (review.user.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this review' });
    }

    await review.deleteOne();

    res.status(200).json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
