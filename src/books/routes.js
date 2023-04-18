const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getallbooks,
  deletebook,
  updatebook,
} = require("./controllers");

bookRouter.post("/books/addbook", addBook);

bookRouter.get("/books/getallbooks", getallbooks);

bookRouter.delete("/books/deletebook", deletebook);

bookRouter.put("/books/updatebook", updatebook);

module.exports = bookRouter;
