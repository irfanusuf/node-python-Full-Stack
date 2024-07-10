import React, { useEffect, useState } from "react";
import "../styles/Blogs.css";
import axios from "axios";

const Blogs = () => {
  // front end logic
  const [newsArr, setNewsArr] = useState([]);

  const apiKey = "d75ec0f277194bb6aa1b75d1ebeaf603";

  const url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=d75ec0f277194bb6aa1b75d1ebeaf603";

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      const articlesArr = res.data.articles;

      setNewsArr(articlesArr);

      // for debugging purpose only
      console.log(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="blogs">
      {newsArr.map((element) => (
        <div className="blog">
          <div className="heading">
         
            <p> <b>Published At: </b>  {element.publishedAt}</p>
            <p> <b>Author: </b>    {element.author} </p>
          </div>

          <h1> {element.title}</h1>
          <img src={element.urlToImage} alt="blog-image" />
          <p> {element.description}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Blogs;
