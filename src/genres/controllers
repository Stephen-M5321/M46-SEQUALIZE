const Genre = require("./model");
const Book  = require("../books/model");

//=========================================================

  //      http://localhost:5001/genres/addGenre
  // {
  //   "title":"horror book",
  //   "author":"scary dave",
  //   "genre":"horror"
  // }

const addGenre = async (req, res) => {
    try {
      const genre = await Genre.create({
        genre: req.body.genre,
      });

        // res.send("hello from author controllers")  <--- testing

      const succceessResponse = {
          message: "success",
          genre: genre,
      };

    //   res.status(201).json(successResponse)

    res.status(201).json({ message: "success", genre: genre });
    } catch (error) {
    console.log(error);
    }
};

//===========================================================

const getAllBooks = async (req, res) => {
  try {
    // console.log(req.params.genre);             //<--- testing

    const foundGenre = await Genre.findOne({ 
      where: { genre: req.params.genre },
      include:{
        model: Book,
        where: { genre: req.params.genre }
      }
  });
  
  console.log(foundGenre),

   res.status(200).json({ 
    message: "success", book: foundGenre 
  });
  
} catch (error) {
    console.log(error);
  }
};

//===========================================================

//module.exports = addGenre;
// No good. exported as function but imported as object
// modified version below |
//                        v
//===========================================================

module.exports = {
    addGenre,
    getAllBooks,
};

