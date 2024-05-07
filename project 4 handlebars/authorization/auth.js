// auth middle wares

const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      res
        .status(401)
        .render("login", { message: "UnAuthorized Plz login again" });
    } else {
      const verifyToken = await jwt.verify(
        token,
        "thgiismysecretkey",
        (reject, resolve) => {
          if (reject) {
            res.status(403).render("login", {
              message: "Forbidden: Plz login again after sometime ",
            });
          } else {

            // req.userId = resolve.userId;
            return next();
          }
        }
      );

     
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = isAuthenticated;
