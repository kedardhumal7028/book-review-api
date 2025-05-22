// controllers/bookController.js

const Book = require('../models/Book');
const Review = require('../models/Review');

// ✅ Add Book
exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;

    const book = new Book({ title, author, genre, publishedYear });
    await book.save();

    res.status(201).json({ message: 'Book Added', book });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get All Books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get Book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add Review
exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const bookId = req.params.id;
    const userId = req.user;  // middleware madhun yeil

    const review = new Review({
      user: userId,
      book: bookId,
      rating,
      comment
    });

    await review.save();
    res.status(201).json({ message: 'Review added', review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update Review
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    if (review.user.toString() !== req.user) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    review.rating = req.body.rating || review.rating;
    review.comment = req.body.comment || review.comment;

    await review.save();
    res.status(200).json({ message: 'Review updated', review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete Review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    if (review.user.toString() !== req.user) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await review.remove();
    res.status(200).json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
