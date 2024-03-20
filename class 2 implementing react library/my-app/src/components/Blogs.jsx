import React from "react";
import "./Blogs.scss";
import img1 from "../assets/rice 1.jpg";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="blogs">
      <h1>Blogs</h1>

      <div className="blog">
        <img src={img1} alt="no-preview" />

        <div className="desc">
          <p> Description </p>

          <p>
         
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            iste porro iure aliquid cupiditate voluptatibus modi ullam
            doloremque sit voluptatem enim illum debitis nostrum, voluptas harum
            eveniet asperiores autem culpa!
          </p>

        <Link>  Read More</Link>
        </div>
      </div>

      
      <div className="blog">
        <img src={img1} alt="no-preview" />

        <div className="desc">
          <p> Description </p>

          <p>
         
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            iste porro iure aliquid cupiditate voluptatibus modi ullam
            doloremque sit voluptatem enim illum debitis nostrum, voluptas harum
            eveniet asperiores autem culpa!
          </p>

        <Link>  Read More</Link>
        </div>
      </div>


      <div className="blog">
        <img src={img1} alt="no-preview" />

        <div className="desc">
          <p> Description </p>

          <p>
         
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            iste porro iure aliquid cupiditate voluptatibus modi ullam
            doloremque sit voluptatem enim illum debitis nostrum, voluptas harum
            eveniet asperiores autem culpa!
          </p>

        <Link>  Read More</Link>
        </div>
      </div>

      <div className="blog">
        <img src={img1} alt="no-preview" />

        <div className="desc">
          <p> Description </p>

          <p>
         
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            iste porro iure aliquid cupiditate voluptatibus modi ullam
            doloremque sit voluptatem enim illum debitis nostrum, voluptas harum
            eveniet asperiores autem culpa!
          </p>

        <Link>  Read More</Link>
        </div>
      </div>





    </div>
  );
};

export default Blogs;
