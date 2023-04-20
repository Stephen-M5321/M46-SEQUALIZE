const { Router } = require("express");
const bookRouter = Router();

const {  addBook,  getAllBooks,  deleteBook,  deleteAllBooks, updateBook, getSingleBookByTitle,} = require("./controllers");

bookRouter.post("/books/addbook", addBook);

bookRouter.get("/books/getallbooks", getAllBooks);

bookRouter.get("/books/getsinglebookbytitle", getSingleBookByTitle)

bookRouter.delete("/books/deletebook", deleteBook);

bookRouter.delete("/books/deleteallbooks", deleteAllBooks)

bookRouter.put("/books/updatebook", updateBook);

module.exports = bookRouter;
