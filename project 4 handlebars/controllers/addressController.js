const Address = require("../models/addressModel");

const addressHandler = async (req, res) => {
  try {


    const bookId = req.params.id
    const { name, street, city, state, pincode } = req.body;

    
      let address = await Address.create({
        name,
        street,
        city,
        state,
        pincode,
        bookId
      });

      if (address) {
        res.redirect(`/book/payment/${bookId}`);
      } else {
        res.render("index", { message: "Some Error " });
      }
 
  } catch (error) {
    console.log(error);
  }
};

module.exports = addressHandler;
