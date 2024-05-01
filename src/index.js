import { displayWeather } from './displayWeather';
import { displayHourlyWeather } from './hourlyWeather';
import './style.css';

const input = document.querySelector('input');

// Default parameter is zip code 31047
export async function getWeather(weather = 31047) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=3257338dfbd248ea8ca212610241004&q=${weather}&days=2`,
    { mode: 'cors' }
  );
  return await response.json();
} // async function convertTemp() {
//   await displayHourlyWeather();
//   const temperature = document.getElementsByClassName('temp');
//   // console.log(temperature);
// }
// getWeather = await test();
// convertTemp();
// console.log(getWeather());
// export default await getWeather;
displayWeather();
displayHourlyWeather();
