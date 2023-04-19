const Book = require("./model");

//==============================================================================
const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });

    const successResponse = {
      message: "success",
      book: book,
    };

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    console.log(error);
  }
};

//==============================================================================

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    console.log(error);
  }
};

//==============================================================================

const updateBook = async (req, res) => {
  try {
    const updateBook = await Book.update(
      {
        author: req.body.newAuthor,
      },
      {
        where: {
          title: req.body.title,
        },
      }
    );

    res.status(201).json({ message: "success", updateResult: updateBook });
  } catch (error) {
    console.log(error);
  }
};

//==============================================================================

const deleteBook = async (req, res) => {
  try {
    const { title } = req.body;

    const book = await Book.destroy({
      where: {
        title: title,
      },
    });

    res.status(201).json({ message: "success", result: book });
  } catch (error) {
    console.log(error);
  }
};

//==============================================================================

const getSingleBookByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const book = await Book.findOne({ where: { title } });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "success", book });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
  }
};


//============================================================================== 

const deleteAllBooks = async (req, res) => {
  try {
    await Book.destroy({
      where: {},
      truncate: true
    });

    res.status(204).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};

//==============================================================================


module.exports = {
  addBook,
  getSingleBookByTitle,
  getAllBooks,
  updateBook,
  deleteBook,
  deleteAllBooks,
};