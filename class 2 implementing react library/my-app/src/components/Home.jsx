import React from "react";
import "./Home.scss";
import img1 from "../assets/rice.jpg";
import img2 from "../assets/rice 1.jpg";
import img3 from "../assets/rice 2.jpg";

import { Link } from "react-router-dom";

// const array = []; // empty array
// const fruitsArr = ["apple", "banana", "orange"]; // simple array


//json object
// const details1 = {
//   Title : "MERN Stack Full Course",
//   Description : "mern stck with python ",
//   Review : " 4.5 STAR ",
//   Price : "50000"
// }

// details.map((param) => (<div> {param.anything}</div>))



//multi associated array


const details = [
  {
    id : "1",
    imgSrc: { img: img1 },
    Title: "MERN Stack Full Course",
    Description: "This is mern stack course ",
    Review: " 5 STAR ",
    Price: "30000",
  },

  {
    id : "2",
    imgSrc: { img: img2 },
    Title: "python Stack Full Course",
    Description: "web dev  stck with python ",
    Review: " 4.5 STAR ",
    Price: "50000",
  },

  {
    id : "3",
    imgSrc: { img: img3 },
    Title: "php Stack Full Course",
    Description: "This is php stack course ",
    Review: " 3 STAR ",
    Price: "20000",
  },
  {
    id : "4",
    imgSrc: { img: img2 },
    Title: "machine learning ",
    Description: "complete ML course ",
    Review: " 5 STAR ",
    Price: "100000",
  },
  {
    id : "5",
    imgSrc: { img: img2 },
    Title: "python Stack Full Course",
    Description: "web dev  stck with python ",
    Review: " 4.5 STAR ",
    Price: "50000",
  },

  {
    id : "6",
    imgSrc: { img: img3 },
    Title: "php Stack Full Course",
    Description: "This is php stack course ",
    Review: " 3 STAR ",
    Price: "20000",
  },
  {
    id : "7",
    imgSrc: { img: img2 },
    Title: "machine learning ",
    Description: "complete ML course ",
    Review: " 5 STAR ",
    Price: "100000",
  },
];

const Home = () => {

  return (
    <div className="home">
      <div className="cards">
        {details.map((item) => (
          <div  key={item.id} className="card">
            <Link to={`/items/${item.id}`}><img src={item.imgSrc.img} alt="Preview" /></Link>
            

            <div className="description">
              <span>Title: {item.Title} </span>
              <span>Description: {item.Description} </span>
              <span>Review: {item.Review} </span>
              <span>Price : {item.Price} </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
