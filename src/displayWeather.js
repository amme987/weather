import { getWeather } from './index';
import { displayHourlyWeather } from './hourlyWeather';

const location = document.querySelector('.location');
const temperature = document.querySelector('.temp');
const tempNumber = document.querySelector('.number');
const img = document.querySelector('img');
const condition = document.querySelector('.condition');
const tempHigh = document.querySelector('.high');
const tempLow = document.querySelector('.low');
const form = document.querySelector('form');
const input = document.getElementById('input');

form.addEventListener('submit', e => {
  e.preventDefault();
  let q = input.value;
  input.value = '';
  updateUI(q);
  // getWeather(q).then(response => {
  //   // console.log(response);
  //   displayWeather(response);
  //   displayHourlyWeather(response);
  // });
});

export async function displayWeather(response) {
  location.textContent = `${response.location.name}, ${response.location.region}`;
  tempNumber.textContent = `${response.current.temp_f}°`;
  img.src = response.current.condition.icon;
  condition.textContent = response.current.condition.text;
  tempHigh.textContent = `High: ${response.forecast.forecastday[0].day.maxtemp_f}°F`;
  tempLow.textContent = `Low: ${response.forecast.forecastday[0].day.mintemp_f}°F`;
}

export async function updateUI(q) {
  const response = await getWeather(q);
  displayWeather(response);
  displayHourlyWeather(response);
}

// TODO: Allow user to toggle between fahrenheit and celsius
