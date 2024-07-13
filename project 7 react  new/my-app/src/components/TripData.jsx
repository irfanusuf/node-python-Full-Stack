import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/tripdata.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const TripData = () => {
  const [arr, setArr] = useState([]);
  const [query1, setQuery] = useState(1);

  const handleQUery = async () => {};

  const accessTripData = async (query) => {
    try {
      const options = {
        method: "GET",
        url: `https://al-quran1.p.rapidapi.com/${query}/1-100`,
        headers: {
          "x-rapidapi-key":
            "79bd850338msh2791f9644fac656p197751jsnac6970a86c03",
          "x-rapidapi-host": "al-quran1.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);

      const data = response.data;
      const verses = Object.values(data);

      setArr(verses);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    accessTripData(query1);
  }, [query1]);

  return (
    <div className="test">
      <h1> Al Quran </h1>

      <form method="post" onSubmit={handleQUery}>
        <input
          placeholder="Enter Surah Number "
          value={query1}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit"> enter</button>
      </form>

      {arr.map((element) => (
        <div>
          <h1>
            {/* Ayah: {element.id} */}
            <IoMdCheckmarkCircleOutline/> {element.content} 
          </h1>
          <h2>{element.translation_eng}</h2>
          {/* <h2>{element.transliteration}</h2> */}
        </div>
      ))}
    </div>
  );
};

export default TripData;
