
const stripe = require("stripe")(process.env.SK_SECRET_KEY);



const calculateAmount = (qty, price) => { 
  return qty * price * 100;
};
const paymentIntent = async (req, res) => {
  try {
    const { qty, price } = req.body;

 

    const amount = calculateAmount(qty, price);


    
    const intent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });


    res.send({
      clientSecret: intent.client_secret,
    });
    // res.render("paymentByCard" , {clientSecret : intent.client_secret })

   
  } catch (error) {
    console.log(error);
  }
};

module.exports = paymentIntent;
