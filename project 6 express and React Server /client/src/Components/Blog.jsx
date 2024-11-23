import React, { useContext, useEffect, useState } from "react";
import "./Blog.css";
import { HiDotsVertical } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import EditBlog from "./EditBlog";
import { Context } from "../useContext/Store";
import { FaHeart } from "react-icons/fa";


const Blog = () => {

  const { loading , blogs , fetchBlogData  } =useContext(Context)

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showHeart , setShowHeart] = useState(false)


  const handleLike = () =>{ 
    setShowHeart(!showHeart)

  }


  useEffect(() => {
    if (!loading) {
      fetchBlogData();
    }
  }, [loading , fetchBlogData]);

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

              <span  onClick={handleLike}>{showHeart ?<FaHeart style={{color : "red"}} />   : <FaHeart />  }     </span>
              <span> 0 </span>


                <form>  
                <input placeholder="comment" />

                    <button> Comment</button>
                </form>

              
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
