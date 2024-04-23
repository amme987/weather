import './style.css';

const location = document.querySelector('.location');
const temperature = document.querySelector('.temperature');
const condition = document.querySelector('.condition');
const tempHigh = document.querySelector('.temp-high');
const tempLow = document.querySelector('.temp-low');

const form = document.querySelector('form');
const input = document.getElementById('input');

const img = document.querySelector('img');

getWeather();

form.addEventListener('submit', e => {
  e.preventDefault();
  let q = input.value;
  input.value = '';
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
      console.log(response);
      console.log(response.current.condition.icon);
      img.src = '//cdn.weatherapi.com/weather/64x64/day/113.png';
      location.textContent = `${response.location.name}, ${response.location.region}`;
      temperature.textContent = `${response.current.temp_f}°F`;
      condition.textContent = response.current.condition.text;
      tempHigh.textContent = `High: ${response.forecast.forecastday[0].day.maxtemp_f}°F`;
      tempLow.textContent = `Low: ${response.forecast.forecastday[0].day.mintemp_f}°F`;
    });
}
