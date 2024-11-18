import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";
import { HiDotsVertical } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import EditBlog from "./EditBlog";


const Blog = (props) => {
  const [blogs, setblogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const fetchBlogData = async () => {
    try {
      const url = "http://localhost:4002/getAllBlogs";
      const res = await axios.get(url);
      console.log(res);
      setblogs(res.data.payload);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!props.loading) {
      fetchBlogData();
    }
  }, [props.loading]);

  return (
    <div className="blog-container">
      <div className="blogs">
        {blogs.length > 0  ? (


          blogs.map((blog) => (
            <div className="blog">
              
              <div className="heading">
                <h2> {blog.title} </h2>

                <span
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                >
                  {showModal ? <RxCross1 /> : <HiDotsVertical />}
                </span>
              </div>

              {showModal && (
                <div className="modal">
                  <ul>
                    <li
                      onClick={() => {
                        setShowEditModal(!showEditModal);
                      }}
                    >
                      Edit
                    </li>
                    <li>Delete</li>
                  </ul>
                </div>
              )}

              {showEditModal && <div className="editModal"><EditBlog /></div>}

              <img src={blog.blogImageUrl} alt="no-preview" />

              <p> {blog.description}</p>

              <input placeholder="commeent" />

              <button> Comment</button>
            </div>
          ))


        ) : (
          <div> No Blogs Found </div>
        )}
      </div>

      
    </div>
  );
};

export default Blog;
