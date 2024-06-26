document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "d75ec0f277194bb6aa1b75d1ebeaf603";
  const date = "2024-05-26";

  const fetchNews = async (query) => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=${apiKey}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();

      console.log(data);

      const newsArr = data.articles;
      displayNews(newsArr);
    } catch (error) {
      console.log(error);
    }
  };

  function displayNews(newsArr) {
    const targetDiv = document.getElementById("card");
    targetDiv.innerHTML = ""; // div sanatization

    newsArr.forEach((news) => {
      const newsElement = document.createElement("div");
      newsElement.classList.add("news-title");
      newsElement.innerHTML = news.title;

      const imageElement = document.createElement("img");
      imageElement.classList.add("news-image");
      imageElement.src = news.urlToImage;

      const descriptionElement = document.createElement("div");
      descriptionElement.classList.add("news-description");
      descriptionElement.innerHTML = news.description + news.content;

      const publishedAt = document.createElement("div");
      publishedAt.classList.add("published-at");
      publishedAt.innerHTML = news.publishedAt;

      const source = document.createElement("a");
      source.classList.add("link");
      source.href = news.url;
      source.innerHTML = "Read more ....";

      targetDiv.appendChild(newsElement);
      targetDiv.appendChild(imageElement);
      targetDiv.appendChild(descriptionElement);
      targetDiv.appendChild(publishedAt);
      targetDiv.appendChild(source);
    });
  }

  document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value;

    if (query) {
      fetchNews(query);
    }
  });
});
