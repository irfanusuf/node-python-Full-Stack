import React, { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";
import { HiDotsVertical } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import EditBlog from "./EditBlog";
import CreateBlog from "./CreateBlog";

const Blog = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal , setShowEditModal] = useState(false)

  



  const fetchBlogData = async () => {
    const url = "http://localhost:4002/getAllBlogs";
    const res = await axios.get(url);
    console.log(res);
    setblogs(res.data.payload);
  };

  useEffect(() => {
    if (!loading) {
      fetchBlogData();
    }
  }, [loading]);

  return (
    <div className="blog-container">
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blog">

            <div className="heading">
           
              <h2> {blog.title} </h2>

              <span onClick={()=>{setShowModal(!showModal);}}>
                {showModal ? <RxCross1 /> : <HiDotsVertical />}
              </span>

            </div>

            {showModal && (
              <div className="modal">
                <ul>
                  <li onClick={()=>{setShowEditModal(!showEditModal)}} >Edit</li>
                  <li>Delete</li>
                </ul>
              </div>
            )}

            {showEditModal && <EditBlog/> }
      
          
            <img src={blog.blogImageUrl} alt="no-preview" />

            <p> {blog.description}</p>

            <input placeholder="commeent"/>

            <button> Comment</button>
          </div>
        ))}
      </div>

      
      <CreateBlog/>
     
    </div>
  );
};

export default Blog;
