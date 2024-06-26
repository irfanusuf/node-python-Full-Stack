document.addEventListener("DOMContentLoaded", () => {
  const fetchImages = async (query , page) => {
    const endpoint = `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=80`;
    const apiKey = "EbvixQkEPE7kqKI2qHd0ackQCu5roaHHF5jiJvSykgsxxKTcf80F2vKY";

    try {
   
      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: apiKey,
        },
      });

      const data = await res.json();
      const pics = data.photos;
      console.log(data);

      displayImages(pics);
    } catch (error) {
      console.log(error);
      displayErrMessage(error.message + " " + "No internet connection")
    }
  };

  const fetchCuratedImages = async (page) => {
    const endpoint = `https://api.pexels.com/v1/curated?page=${page}&per_page=80`;
    const apiKey = "EbvixQkEPE7kqKI2qHd0ackQCu5roaHHF5jiJvSykgsxxKTcf80F2vKY";

    try {
    
      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: apiKey,
        },
      });

      const data = await res.json();
      const pics = data.photos;
      console.log(data);

      displayImages(pics);
    } catch (error) {
      console.log(error);
      displayErrMessage(error.message)
    }
  };

  fetchCuratedImages(1);

  function displaySpinner() {
    const targetDiv = document.getElementById("spinner");
    targetDiv.classList.remove("display-none");
  }

  // create a state update function for displaying message

  function displayErrMessage(message) {
    const targetDiv = document.getElementById("message");
    targetDiv.innerHTML = "";
    targetDiv.innerHTML = message;
  }

  // create a state update function

  function displayImages(pics) {
    const targetDiv = document.getElementById("card");
    targetDiv.innerHTML = "";

    pics.forEach((pic) => {
      // creating a div with class ="pic"
      const PicElement = document.createElement("div");
      PicElement.classList.add("pic");

      // create an image tag  with src  and alt coming from api

      const ImgElement = document.createElement("img");
      ImgElement.src = pic.src.medium;
      ImgElement.alt = pic.alt;

      const textElement = document.createElement("div");
      textElement.classList.add("text");

      textElement.innerHTML = pic.photographer;

      // dom heirarchy
      targetDiv.appendChild(PicElement);
      PicElement.appendChild(ImgElement);
      PicElement.appendChild(textElement);
    });
  }

  document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value;
    const page = document.getElementById("page-number").value

    if (query) {
      fetchImages(query , page);
    }
  });
});
