import { updateWeather } from './displayWeather';
import { unitEvent } from './units';
import './units'; // Change later
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

updateWeather();
unitEvent();
