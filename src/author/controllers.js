const Author = require("./model");

//==============================================================================

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      author: req.body.author,
    });

    const successResponse = {
      message: "success",
      author: author,
    };

    res.status(201).json({ message: "success code ", author: author });
  } catch (error) {
    console.log(error);
  }
};

//==============================================================================

  const getAuthor = async (req, res) => {
    try {
      const authorandbooks = await Author.findAll({
        where:{
        author: req.params.authorname,
      },
      });

      res.status(200).json({ message: "success", books: authorandbooks });
    } catch (error) {
      console.log(error);
    }
  };

//==============================================================================


//==============================================================================




  module.exports = {
    addAuthor,
    getAuthor,
  };
