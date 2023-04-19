const { Router } = require("express");
const bookRouter = Router();

const {  addBook,  getAllBooks,  deleteBook,  updateBook, } = require("./controllers");

bookRouter.post("/books/addbook", addBook);

bookRouter.get("/books/getallbooks", getAllBooks);

bookRouter.delete("/books/deletebook", deleteBook);

bookRouter.put("/books/updatebook", updateBook);

module.exports = bookRouter;
