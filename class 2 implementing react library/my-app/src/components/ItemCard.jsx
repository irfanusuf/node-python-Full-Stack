import React from "react";
import "./ItemCard.scss";
import { useParams } from "react-router-dom";
import img1 from "../assets/rice.jpg";
import img2 from "../assets/rice 1.jpg";
import img3 from "../assets/rice 2.jpg";




const details = [
  {
    id: "1",
    imgSrc: { img: img1 },
    Title: "MERN Stack Full Course",
    Description: "This is mern stack course ",
    Review: " 5 STAR ",
    Price: "30000",
  },

  {
    id: "2",
    imgSrc: { img: img2 },
    Title: "python Stack Full Course",
    Description: "web dev  stck with python ",
    Review: " 4.5 STAR ",
    Price: "50000",
  },

  {
    id: "3",
    imgSrc: { img: img3 },
    Title: "php Stack Full Course",
    Description: "This is php stack course ",
    Review: " 3 STAR ",
    Price: "20000",
  },
  {
    id: "4",
    imgSrc: { img: img2 },
    Title: "machine learning ",
    Description: "complete ML course ",
    Review: " 5 STAR ",
    Price: "100000",
  },
  {
    id: "5",
    imgSrc: { img: img2 },
    Title: "python Stack Full Course",
    Description: "web dev  stck with python ",
    Review: " 4.5 STAR ",
    Price: "50000",
  },

  {
    id: "6",
    imgSrc: { img: img3 },
    Title: "php Stack Full Course",
    Description: "This is php stack course ",
    Review: " 3 STAR ",
    Price: "20000",
  },
  {
    id: "7",
    imgSrc: { img: img2 },
    Title: "machine learning ",
    Description: "complete ML course ",
    Review: " 5 STAR ",
    Price: "100000",
  },
];

const ItemCard = () => {
  const id = useParams()
  const object = details.find(item => item.id === id)

  // function myFunction(value, index, array) {
  //   return index === id;
  // }

  return (
    <div className="item-card">
      <div className="card">
        {/* <img src="" /> */}
        <button onClick={()=>{console.log(object)}}>click</button>
      </div>
    </div>
  );
};

export default ItemCard;
