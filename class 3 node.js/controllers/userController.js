 const homeController = (req, res) => {
  res.send("heeelo world");
};

 const registerController = (req, res) => {
  res.send("register here ");
};

const loginController = (req, res) => {
  res.send("login here ");
};



module.exports = {
    homeController,
    registerController,
    loginController

}