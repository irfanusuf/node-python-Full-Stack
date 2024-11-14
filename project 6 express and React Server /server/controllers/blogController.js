const { Blog } = require("../models/blogModel");
const { messageHandler } = require("../utils/messageHandler");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dbo0xmbd7",
  api_key: "717735839128615",
  api_secret: "fqcjtd3HxpH_t1dAEtqr595ULW0",
});

const createBlogHandler = async (req, res) => {
  try {
    const { title, description } = req.body;

    const image = req.file.path;

    if (title === "" || description === "" || !image) {
      return messageHandler(res, 400, "All Data feilds Necessary");
    }

    const upload = await cloudinary.uploader.upload(image);

    const url = upload.secure_url;

    if (upload) {
      await Blog.create({
        title,
        description,
        blogImageUrl: url,
      });

      return messageHandler(res, 200, "Blog Created", upload.public_id);
    } else {
      return messageHandler(res, 500, "Cloudinary Error");
    }
  } catch (error) {
    console.log(error);
  }
};



const getAllBlogsHandler = async(req,res) =>{

try {

  const getBlogs = await Blog.find()

  if(getBlogs){

    return messageHandler(res , 200 , "blogs found" , getBlogs )
  }
  
  
} catch (error) {
  console.error(error)
  return messageHandler(res , 500 , "server Error")
}

}


module.exports = { createBlogHandler , getAllBlogsHandler };
