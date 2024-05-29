const cloudinary = require("cloudinary").v2;
const Book = require("../models/bookModel");
const errorHandler = require("../utils/feature");

cloudinary.config({
  cloud_name: "dbo0xmbd7",
  api_key: "717735839128615",
  api_secret: "fqcjtd3HxpH_t1dAEtqr595ULW0",
});

const createBook = async (req, res) => {
  try {
    const { bookTitle, bookAuthor, bookDescription, bookPrice } = req.body;

    if (
      bookTitle !== "" &&
      bookAuthor !== "" &&
      bookDescription !== "" &&
      bookPrice !== ""
    ) {
      const image = req.file.path;

      if (!image) {
        return res.render("secureHome", { message: "No image Selected" });
      }

      const fileUpload = await cloudinary.uploader.upload(image, {
        folder: "Book_Delights",
      });

      const bookImgUrl = fileUpload.secure_url;

      const book = await new Book({
        bookTitle,
        bookAuthor,
        bookDescription,
        bookPrice,
        bookImgUrl,
      });
      const save = await book.save();

      if (save) {
        res.redirect("/secureIndex");
      } else {
        res.render("secureHome", { message: "Some Error during saving " });
      }
    } else {
      res.render("secureHome", { message: "All Details Required" });
    }
  } catch (err) {
    console.log(err);
  }
};

const getAllBooks = async (req, res) => {
  try {
    // the books data coming from mongoose is not a staright json object .... thats why hbs was not able to acces properties

    // .lean method changes this object into json object and problem is solvd
    const data = await Book.find().lean();

    res.render("secureHome", {
      pageTitle: "BookStore | Dashboard",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

const editBook = async (req, res) => {
  try {
    const _id = req.params.id;

    const { bookTitle, bookAuthor, bookDescription, bookPrice } = req.body;

    const image = req.file.path;

    if (!image) {
      return res.render("secureHome", { message: "No image Selected" });
    }

    const fileUpload = await cloudinary.uploader.upload(image, {
      folder: "Book_Delights",
    });

    const bookImgUrl = fileUpload.secure_url;

    book = await Book.findByIdAndUpdate(_id, {
      bookTitle: bookTitle,
      bookAuthor: bookAuthor,
      bookDescription: bookDescription,
      bookPrice: bookPrice,
      bookImgUrl: bookImgUrl,
    });

    if (book) {
      return res.redirect("/secureIndex");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteBook = async (req, res) => {
  try {
   const _id = req.params.id;

   const delBook = await Book.findByIdAndDelete(_id) 

   if(delBook) {
    return res.redirect('/secureIndex');
   }
   else{
    return res.render("secureHome", { message : "Some Error"});
   }


  } catch (error) {
    console.log(error);
  }
};

module.exports = { createBook, getAllBooks, editBook , deleteBook };
