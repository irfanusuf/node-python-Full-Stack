const cloudinary = require("cloudinary").v2;
const Article = require("../models/clothingmodel");

cloudinary.config({
  cloud_name: "dukzeonzm",
  api_key: "867993692513933",
  api_secret: "UV850moxpIWYScJR9wh9kd5PotA",
});

const createArticle = async (req, res) => {
  try {
    const { ArticleName, ArticleBrand, ArticlePrice, ArticleDescription,ArticleQty,ArticleCategory,searchtags } =
      req.body;
    if (
      ArticleName !== "" &&
      ArticleBrand !== "" &&
      ArticlePrice !== "" &&
      ArticleDescription !== ""&&
      ArticleQty!==""&&
      ArticleCategory!=="" &&
      searchtags!==""
    ) {
      const image = req.file.path;
      if (image) {
        const fileUpload = await cloudinary.uploader.upload(image, {
          folder: "classycouture",
        });
        const ArticleImgUrl = fileUpload.secure_url;
        const AnArticle = await new Article({
          ArticleName,
          ArticleBrand,
          ArticlePrice,
          ArticleDescription,
          ArticleImgUrl,
          ArticleQty,
          ArticleCategory,
          searchtags,
        });
        await AnArticle.save();

        res.redirect("/Dashboard");
      } else {
        res.render("addArticle", { message: "Please Select An Image" });
      }
    } else {
      res.render("addArticle", { message: "All details  Required!" });
    }
  } catch (err) {
    console.log(err);
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().lean();


    res.render("securehome" , { message: "Data feteched Sucessfully!", articles })

   
  } catch (error) {
    console.log(error);
  }
};



const editArticle = async (req, res) => {
  try {
    const _id = req.params.id;

    const { ArticleName, ArticleBrand, ArticlePrice, ArticleDescription, ArticleQty, ArticleCategory, searchtags } = req.body;


    const article = await Article.findByIdAndUpdate(_id, {
      ArticleName: ArticleName,
      ArticleBrand: ArticleBrand,
      ArticlePrice: ArticlePrice,
      ArticleDescription: ArticleDescription,
      ArticleQty:ArticleQty,
      ArticleCategory:ArticleCategory,
      searchtags:searchtags


    });

    if (article) {
      return res.redirect("/dashboard");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteArticle = async (req, res) => {
  try {
    const _id = req.params.id;

    const deleteArticle = await Article.findByIdAndDelete(_id);

    if (deleteArticle) {
      return res.redirect("/dashboard");
    } else {
      return res.render("secureHome", { message: "Some Error" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createArticle, getArticles, editArticle, deleteArticle };
