import './style.css';

const location = document.querySelector('.location');
const temperature = document.querySelector('.temperature');
const condition = document.querySelector('.condition');
const tempLow = document.querySelector('.temp-low');
const tempHigh = document.querySelector('.temp-high');

const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');

getWeather();

form.addEventListener('submit', e => {
  e.preventDefault();
  let q = input.value;
  console.log(q);
  getWeather(q);
});

// Default parameter is zip code 31047
function getWeather(weather = 31047) {
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=3257338dfbd248ea8ca212610241004&q=${weather}`,
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      // console.log(response.forecast);
      location.textContent = `${response.location.name}, ${response.location.region}`;
      temperature.textContent = response.current.temp_f;
      condition.textContent = response.current.condition.text;
      tempLow.textContent = response.forecast.forecastday[0].day.mintemp_f;
      tempHigh.textContent = response.forecast.forecastday[0].day.maxtemp_f;
    });
}
