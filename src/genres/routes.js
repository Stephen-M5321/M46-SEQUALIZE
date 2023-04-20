const { Router } = require("express");
const genreRouter = Router();

const {addGenre, getAllBooks } = require("./controllers");

genreRouter.post("/genres/addgenre", addGenre);
genreRouter.get("/genres/getallbooks/:genre", getAllBooks);

module.exports = genreRouter;