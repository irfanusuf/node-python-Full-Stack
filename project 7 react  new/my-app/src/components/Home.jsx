import React, { useEffect, useState } from "react";
import "../styles/home.css";
// import image from "../assests/pics/pic1.jpg";
import axios from "axios";

const Home = () => {
  
  const apiKey = "A18L6UPAOtZeFZ4vLDzj2fO4wTeto2iIb2aqtyo2EA3agRXRdEN6YFRV";
  const requestUrl = "https://api.pexels.com/v1/curated?page=1&per_page=80";

  const [imageArr, setArr] = useState([]);

  const fetchImages = async () => {
    const fetchData = await axios.get(requestUrl, {
      headers: {
        Authorization: apiKey,
      },
    });

    // this arr is actually coming from pexels
    const arr = fetchData.data.photos;

    setArr(arr);

    // console is used for debugging purpose
    console.log(arr);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="home">
      {imageArr.map((pic) => (
        <div className="card">
          <img src={pic.src.medium} alt="preview" />
          <div className="card-content">
            <p>Description :</p>
            <p>Author : {pic.photographer}</p>
            <p>Location :</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
