import axios from 'axios';
import "./Form.css"
import React, { useState } from 'react'

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescripton] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);



    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);


    const handleCreateblog = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
          const url = "http://localhost:4002/user/create/blog";
          const res = await axios.post(url, formData);
          console.log(res);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };



  return (
    


    <div className="blog-card">
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
        onChange={(e) => {
          setDescripton(e.target.value);
        }}
      ></textarea>

      <input
        placeholder="select an image"
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />

      <button disabled={loading} onClick={handleCreateblog}>
        {" "}
        {loading ? "Creating...." : "Create Blog"}{" "}
      </button>
    </form>
  </div>
  )
}

export default CreateBlog