const Book = require("./model");

const addBook = async (Req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    console.log(error);
  }
};

const getallbooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    console.log(error);
  }
};

const deletebook = async (req, res) => {
  try {
    const bookList = await Book.deleteOne({
      title: req.body.title,
    });
    console.log(bookList);
    res.status(201).json({ message: "success", book: updateBook });
  } catch (error) {
    console.log(error);
  }
};

const updatebook = async (Req, res) => {
  try {
    const updatebook = await book.updateOne(
      { title: req.body.title },
      { author: req.body.author }
    );
    res.status(201).json({ message: "success", book: updatebook });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBook,
  getallbooks,
  deletebook,
  updatebook,
};
