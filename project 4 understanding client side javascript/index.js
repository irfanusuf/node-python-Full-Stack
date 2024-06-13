const fetchImages = async (query) => {
  const endpoint = `https://api.pexels.com/v1/search?query=${query}&per_page=80`;
  const endpoint2 = `https://api.pexels.com/v1/curated?page=${query}&per_page=40`;
  const apiKey = "EbvixQkEPE7kqKI2qHd0ackQCu5roaHHF5jiJvSykgsxxKTcf80F2vKY";

  try {
    const res = await fetch(endpoint2, {
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
  }
};

// create a state function

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

  if (query) {
    fetchImages(query);
  }
});
