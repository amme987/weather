import { getWeather } from './index';

const location = document.querySelector('.location');
const temperature = document.querySelector('.temperature');
const img = document.querySelector('img');
const condition = document.querySelector('.condition');
const tempHigh = document.querySelector('.temp-high');
const tempLow = document.querySelector('.temp-low');
const form = document.querySelector('form');
const input = document.getElementById('input');

form.addEventListener('submit', e => {
  e.preventDefault();
  let q = input.value;
  input.value = '';
  displayWeather(q);
});

export async function displayWeather(weather) {
  const response = await getWeather(weather);
  location.textContent = `${response.location.name}, ${response.location.region}`;
  temperature.textContent = `${response.current.temp_f}°F`;
  img.src = response.current.condition.icon;
  condition.textContent = response.current.condition.text;
  tempHigh.textContent = `High: ${response.forecast.forecastday[0].day.maxtemp_f}°F`;
  tempLow.textContent = `Low: ${response.forecast.forecastday[0].day.mintemp_f}°F`;
}
