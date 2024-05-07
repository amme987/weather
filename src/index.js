import { displayWeather, updateUI } from './displayWeather';
import { displayHourlyWeather } from './hourlyWeather';
import './style.css';

// Default parameter is zip code 31047
/**
 * Gets the current weather for the given location.
 * @param {string | number} location The location to find the weather,
 * e.g. a ZIP code (12345) or a city.
 * @returns {object} A response object from the Weather API
 */
export async function getWeather(location = 31047) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=3257338dfbd248ea8ca212610241004&q=${location}&days=2`,
    { mode: 'cors' }
  );
  return await response.json();
}

// async function getTemp(response) {
//   // await getWeather();
//   await displayHourlyWeather(response);
//   const temperature = document.getElementsByClassName('temp');
//   let tempArray = [];
//   [...temperature].forEach(temp =>
//     tempArray.push(Number(temp.textContent.slice(-6, -2)))
//   );
//   return tempArray;
// }

// async function convertTemp() {
//   const temperature = await getTemp();
//   console.log(temperature);
// }

updateUI();

const units = document.getElementsByClassName('unit');

console.log(units);
[...units].forEach(unit =>
  unit.addEventListener('click', function () {
    setUnit.bind(unit)();
  })
);

function setUnit() {
  [...units].forEach(unit => unit.classList.remove('current'));
  this.classList.add('current');
}
