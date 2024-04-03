const { User } = require("../models/userModel");
const bcrypt = require("bcrypt")

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    const encryptPass = await bcrypt.hash(password , 10)

    if (!existingUser) {
      const newUser = new User({ username, email, password : encryptPass });

      await newUser.save();

      if (newUser) {
        res.json({ message: "user Saved Succesfully" });
      } else {
        res.json({ message: "some Error" });
      }
    }
    else {
      res.json({message : "user Already Exists!"})
    }
  } catch (err) {
    console.log(err);
  }
};


const loginController = async (req, res) => {

try{
const {email , password} = req.body
const existingUser = await User.findOne({email}) 
if(existingUser) {
   const passVerify = await bcrypt.compare(password , existingUser.password)
   if(passVerify){
    res.json({message : "logged in successfully!"})
   }
   else{
    res.json({message : "incorrect password"})
   }

}
else{
  res.json({message : "user not Found"})
}




}
catch(err){

console.log(err)
}


};

module.exports = {
  registerController,
  loginController,
};
