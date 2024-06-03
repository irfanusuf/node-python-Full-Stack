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
        res.redirect("/admin/dashboard");
      } else {
        res.redirect("/admin/dashboard", {
          message: "Some Error during saving ",
        });
      }
    } else {
      res.redirect("/admin/dashboard", { message: "All Details Required" });
    }
  } catch (err) {
    console.log(err);
  }
};

const editBook = async (req, res) => {
  try {
    const _id = req.params.id;

    const { bookTitle, bookAuthor, bookDescription, bookPrice } = req.body;

    // const image = req.file.path;

    // if (!image) {
    //   return res.render("secureHome", { message: "No image Selected" });
    // }

    const fileUpload = await cloudinary.uploader.upload(req.file.path, {
      folder: "Book_Delights",
    });

    const bookImgUrl = fileUpload.secure_url;

    const book = await Book.findByIdAndUpdate(_id, {
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
    console.log("image Error");
  }
};

const deleteBook = async (req, res) => {
  try {
    const _id = req.params.id;

    const delBook = await Book.findByIdAndDelete(_id);

    if (delBook) {
      return res.redirect("/admin/dashboard");
    } else {
      return res.render("secureHome", { message: "Some Error" });
    }
  } catch (error) {
    console.log(error);
  }
};

const bookPayment = async (req, res) => {
  try {
    const _id = req.params.id; // book id
    const book = await Book.findById({_id});

    console.log(_id);

    res.render("payment", { pageTitle: "BookStore | payment", book: book });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createBook, editBook, deleteBook, bookPayment };
