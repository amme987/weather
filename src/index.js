import { displayWeather } from './displayWeather';
import {
  getHourIndex,
  getHourlyWeather,
  displayHourlyWeather,
} from './hourlyWeather';
import './style.css';

displayWeather();
getHourIndex();

// Default parameter is zip code 31047
export function getWeather(weather = 31047) {
  return fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=3257338dfbd248ea8ca212610241004&q=${weather}&days=2`,
    { mode: 'cors' }
  ).then(function (response) {
    return response.json();
  });
  // .then(function (response) {
  //   // console.log(response);
  //   location.textContent = `${response.location.name}, ${response.location.region}`;
  //   temperature.textContent = `${response.current.temp_f}°F`;
  //   img.src = '//cdn.weatherapi.com/weather/64x64/day/113.png';
  //   condition.textContent = response.current.condition.text;
  //   tempHigh.textContent = `High: ${response.forecast.forecastday[0].day.maxtemp_f}°F`;
  //   tempLow.textContent = `Low: ${response.forecast.forecastday[0].day.mintemp_f}°F`;
  //   // time.textContent = response.current.last_updated.substr(-5);
  //   // days = response.forecast.forecastday;
  // });
}

getHourlyWeather();
displayHourlyWeather();
