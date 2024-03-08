import React from "react";
import "./Home.scss";
import img1 from  "../assets/rice.jpg"
import img2 from  "../assets/rice 1.jpg"
import img3 from  "../assets/rice 2.jpg"
import img4 from  "../assets/rice.jpg"
import { useNavigate } from "react-router-dom";




const details = [
  {
    imgSrc : img1,
    Title: "MERN Stack Full Course",
    Description: "This is mern stack course ",
    Review: " 5 STAR ",
    Price: "30000",
  },

  {
    imgSrc : img2,
    Title: "python Stack Full Course",
    Description: "web dev  stck with python ",
    Review: " 4.5 STAR ",
    Price: "50000",
  },

  {
    imgSrc : img3,
    Title: "php Stack Full Course",
    Description: "This is php stack course ",
    Review: " 3 STAR ",
    Price: "20000",
  },
  {
    imgSrc : img4,
    Title: "machine learning ",
    Description: "complete ML course ",
    Review: " 5 STAR ",
    Price: "100000",
  },
];




// const details = {
//   Title : "MERN Stack Full Course",
//   Description : "mern stck with python ",
//   Review : " 4.5 STAR ",
//   Price : "50000"

// }

const Home = () => {



  const navigate = useNavigate()


  const handleClickCard = ()=>{

      navigate('/card-details')
    // console.log("card clicked ")


    
    }


  return (
    <div className="home">
      <div className="cards">
        {details.map((item) => (
          <div onClick={handleClickCard} className="card">
            <img src={item.imgSrc} />

            <div className="description">
              <span>Title: {item.Title} </span>
              <span>Description:  {item.Description} </span>
              <span>Review: {item.Review} </span>
              <span>Price :  {item.Price} </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
