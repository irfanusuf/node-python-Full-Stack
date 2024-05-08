const cloudinary = require("cloudinary").v2;
const Book = require("../models/bookModel");

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
        return res.render("addBook", { message: "No image Selected" });
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
        res.render("addBook", { message: "Book saved Succesfully!" });
      } else {
        res.render("addBook", { message: "Some Error during saving " });
      }
    } else {
      res.render("addBook", { message: "All Details Required" });
    }
  } catch (err) {console.log(err)}
};

module.exports = createBook;
