
const apiKey = "d75ec0f277194bb6aa1b75d1ebeaf603";



const fetchNews = async (query) => {
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2024-05-14&sortBy=publishedAt&apiKey=${apiKey}`, {
      method: "GET",
    
    });

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};



fetchNews("kashmir")


//  home work 











// callback hell

// fetch(endpoint, {
//     method: "GET",
//   })
//     .then((res) => {
//       res.json();
//     })
//     .then()
//     .then()
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally((loading) => {
//       loading = false;
//     });
