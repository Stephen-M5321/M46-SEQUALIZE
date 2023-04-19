const { Router } = require("express");
const authorRouter = Router();

const {  addAuthor,  getAuthor, } = require("./controllers");

authorRouter.post("/authors/addauthors", addAuthor);

authorRouter.get("/authors/getauthor/:authorname", getAuthor);

module.exports = authorRouter;