import React, { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";

const Blog = () => {
  const [blogs, setblogs] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescripton] = useState("");
  const [image, setImage] = useState(null);
  const [loading , setLoading] = useState(false)


  const formData = new FormData()


  formData.append("title" , title)
  formData.append("description" , description)
  formData.append("image" , image)



  const handleCreateblog = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {

      const url = "http://localhost:4002/user/create/blog";
      const res = await axios.post(url, formData);
      console.log(res)
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false)
    }
  };

  const fetchBlogData = async () => {
    const url = "http://localhost:4002/getAllBlogs";
    const res = await axios.get(url);
    console.log(res);
    setblogs(res.data.payload);
  };

  useEffect(() => {
    
    fetchBlogData();
    
  }, [loading]);

  return (
    <div className="blog-container">
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blog">
            <h2> {blog.title} </h2>
            
            <img src={blog.blogImageUrl} alt="no-preview" />

            <p> {blog.description}</p>
          </div>
        ))}
      </div>

      <div className="create-blog-card">
        <form>
          <h2> Create Your Own blog </h2>

          <input
            placeholder="Enter title of blog"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            placeholder="Enter the body of Blog"
            value={description}
            onChange={(e)=>{
              setDescripton(e.target.value)
            }}
          ></textarea>

          <input 
          placeholder="select an image" 
          type="file"  
          onChange={(e)=>{
            setImage(e.target.files[0])
          }} />

          <button onClick={handleCreateblog}> Create Blog</button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
