let searchBtn = document.getElementById("btn");
let countryInp = document.getElementById("search");
var result = "";

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data[0]);
      // console.log(data[0].capital[0]);
      // console.log(data[0].flags.svg);
      // console.log(data[0].name.common);
      // console.log(data[0].continents[0]);
      // console.log(Object.keys(data[0].currencies)[0]);
      // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      // console.log(Object.values(data[0].languages).toString().split(",").join(", ")
      // );

      result = `
        
            <div class="wrap-img">
                <img src="${data[0].flags.svg}" alt="Flag">
            </div>
            <div class="content">
                <div class="details">
                    <h4>Name:</h4>
                    <p>${data[0].name.common}</p>
                </div>
                <div class="details">
                    <h4>Capital:</h4>
                    <p>${data[0].capital[0]}</p>
                </div>
                <div class="details">
                    <h4>Continent:</h4>
                    <p>${data[0].continents[0]}</p>
                </div>
                <div class="details">
                    <h4>Currency:</h4>
                    <p>${Object.keys(data[0].currencies)[0]}</p>
                </div>
                <div class="details">
                    <h4>Currency Type:</h4>
                    <p>${
                      data[0].currencies[Object.keys(data[0].currencies)].name
                    }</p>
                </div>
                <div class="details">
                    <h4>Languages:</h4>
                    <p>${Object.values(data[0].languages)
                      .toString()
                      .split(",")
                      .join(", ")}</p>
                </div>
            </div>
        `;

      $(".wrapper").html(result);
    })
    .catch(() => {
      document.getElementById("container").style.width="400px";
      if (countryName.length == 0) {
        result = `
            <h5>The input fiels cannot be empty</h5>`;
      } else {
        result = `<h1>Please enter a valid country name</h1>`;
      }
      $(".result").html(result);
    });
});
