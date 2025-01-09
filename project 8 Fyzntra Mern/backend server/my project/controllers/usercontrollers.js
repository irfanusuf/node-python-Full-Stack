const { User } = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")




const registerController = async (req, res) => {
try{
const {username, email, password } = req.body

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
      const {email, password} = req.body
      if (email !== "" && password !== "") {const existingUser = await User.findOne({email})
      if(existingUser){
       const passverify = await bcrypt.compare(password , existingUser.password)

       const  _id = existingUser._id
       if(passverify) {const token = await jwt.sign({_id} , "thisismysecretkey" )

        res.json({ message: "logged in successfully", token })

       }
       else{

        res.json({ message: " wrong credentials "})

       }


      }
      else{

        res.json({ message: "User Not Found" })


      }

}
else{
  res.json({ message: "All credentials Required" });

}
     






    }
    catch(err){
      console.log(err)


    }


};
const deleteUserController =async (req, res) =>{

try{
const {userId} = req.query;
if(userId !== undefined && userId !==""){
const existingUserDel = await User.findByIdAndDelete(userId);

if(existingUserDel){

res.json({ message: "User Deleted Successfully"})

}
else{

res.json({ message: " Some Error"})

}

}

else{

  res.json({ message: "Server Error"});
}




}






catch(err){

res.json({ message: "Server Error"});
console.log(err);

}





}





module.exports = {

  
    registerController,
    loginController,
    deleteUserController
}

