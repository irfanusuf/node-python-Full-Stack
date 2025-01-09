const mongoose = require("mongoose")


const Article = mongoose.model("Article",{

    ArticleName : String,
    ArticleBrand: String,
    ArticlePrice: Number,
    ArticleDescription: String,
    ArticleImgUrl: String,
    ArticleQty: Number,
    ArticleCategory:String,
    searchtags:String




})

module.exports = Article