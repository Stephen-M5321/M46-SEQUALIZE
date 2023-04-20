const Author = require("./model");
const Book = require("../books/model");

//===================================================================

// http://localhost:5001/authors/addauthor

// {
//  "title":"dribly boo",
//  "authorname":"rob didly",
//  "genre":"doing didly",
//  "AuthorId": 106
// }
//

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      authorName: req.body.authorname,
    });

    const successResponse = {
      message: "success",
      author: author,
    };

    res.status(201).json({ message: "success", author: author });
  } catch (error) {
    console.log(error);
  }
};

//=================================================================== 

// http://localhost:5001/authors/getauthorandbooks/rob didly

const getAuthorAndBooks = async (req, res) => {
  try {
    console.log(req.params);

    const author = await Author.findOne({
      where: { authorname: req.params.authorname },
      include: Book,
    });

    res.status(200).json({ message: "success", author: author });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addAuthor,
  getAuthorAndBooks,
};