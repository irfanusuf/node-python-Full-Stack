const Article = require("../models/clothingmodel");

const getHomePage = async (req, res) => {
  try {
    const articles = await Article.find().lean();
    if (articles) {
     return  res.render("home", { message: "Data feteched Sucessfully!", articles });
    } else {
      return res.render("home");
    }
  } catch (error) {
    console.log(error);
  }
};


const getSingleArticle = async (req,res) =>{

 const id = req.params.id
    try {


        const article = await Article.findById(id)

        const {ArticleName , ArticleBrand , ArticlePrice} = article

        if(article){
            res.render("singleArticle" ,{mesaage : "Article Fetched Succesfully" , ArticleName , ArticleBrand , ArticlePrice})
        }
        else {
            res.render("singleArticle")
        }
        
    } catch (error) {
        console.log(error);
    }
}


const getProductPage = async(req ,res , category) =>{

  try {

    const articles =  await Article.find({ArticleCategory : category}).lean()

    // console.log(articles)

    res.render("ProductPage" , {
      articles : articles
    })


  } catch (error) {
    console.error(error)
  }
}






module.exports = { getHomePage , getSingleArticle , getProductPage };
