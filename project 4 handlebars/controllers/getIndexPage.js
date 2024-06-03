const Book = require("../models/bookModel");

const getIndexPage = async (req, res) => {
  try {
    // the books data coming from mongoose is not a staright json object .... thats why hbs was not able to acces properties

    // .lean method changes this object into json object and problem is solvd
    let arr = await Book.find().lean();

    const data = arr.slice(0, 8);

    res.render("index", {
      pageTitle: "BookStore | Landing page",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getIndexPage;
