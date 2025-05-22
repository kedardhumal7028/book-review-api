const Book = require('../models/Book');

exports.searchBooks = async (req, res) => {
  const query = req.query.query;

  try {
    const books = await Book.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { author: { $regex: query, $options: 'i' } }
      ]
    });

    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
