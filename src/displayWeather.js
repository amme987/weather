import { inputLocation, getWeather } from './index';
import { displayHourlyWeather } from './hourlyWeather';
import { getTemp } from './units';

const location = document.querySelector('.location');
const tempNumber = document.querySelector('.number');
const img = document.querySelector('img');
const condition = document.querySelector('.condition');
const tempHigh = document.querySelector('.high');
const tempLow = document.querySelector('.low');
const form = document.querySelector('form');
const input = document.getElementById('input');

form.addEventListener('submit', e => {
  e.preventDefault();
  inputLocation.location = input.value;
  input.value = '';
  updateWeather();
});

export async function displayWeather(response) {
  location.textContent = `${response.location.name}, ${response.location.region}`;
  tempNumber.textContent = `${
    response.current[`temp_${getTemp()}`]
  }°${getTemp().toUpperCase()}`;
  img.src = response.current.condition.icon;
  condition.textContent = response.current.condition.text;
  tempHigh.textContent = `High: ${
    response.forecast.forecastday[0].day[`maxtemp_${getTemp()}`]
  }°${getTemp().toUpperCase()}`;
  tempLow.textContent = `Low: ${
    response.forecast.forecastday[0].day[`mintemp_${getTemp()}`]
  }°${getTemp().toUpperCase()}`;
}

export async function updateWeather() {
  const response = await getWeather();
  displayWeather(response);
  displayHourlyWeather(response);
}
