
import "./Form.css";
import React, { useContext, useState } from "react";
import { Context } from "../useContext/Actions";


const CreateBlog = () => {
  const { user, loading, handleCreateblog } = useContext(Context);
  
  const [title, setTitle] = useState("");
  const [description, setDescripton] = useState("");
  const [image, setImage] = useState(null);

  
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image);


  return (
    <div className="blog-card">
      <form>
        <h2> Create Your Own blog {user}</h2>

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

        <button disabled={loading} onClick={(e) => {handleCreateblog(e,formData)}}>
          {loading ? "Creating...." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
