const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const {token} = req.cookies
    // console.log(token)
    if (!token) {
      res.status(401).render("login", { message: "UnAuthorized User!" });
    } else {
      await jwt.verify(
        token,
        "passwordkyahai",
        (reject, resolve) => {
          if (reject) {
            res
              .status(403)
              .render("login", {
                message: "Forbidden User Try Again After Sometime",
              });
          } else {
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
