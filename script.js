const API_KEY = "b6b0c5d4ab46c1f9407dda51439152ea";
const form = document.querySelector("form");
const search = document.querySelector("#city");
const weather = document.querySelector("#result");

const getWeather = async (city) => {
weather.innerHTML = `<div class="lds-ripple" id="loader"><div></div><div></div></div>`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};

const showWeather = (data)=>{
if (data.cod == "404") {
weather.innerHTML = `<h4>City not found.</h4>`}
weather.innerHTML = `
 <h2 ng-bind="Data">${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        
  
        </div>
`;
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const city = search.value;
  getWeather(city);
});


