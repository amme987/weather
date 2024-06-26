import './style.css';
import { updateWeather } from './displayWeather';
import { unitEvent } from './units';

export const inputLocation = { location: 31047 };

// Get user's current location coordinates and put it in inputLocation object. If user denies request, run updateWeather() with default location
navigator.geolocation.getCurrentPosition(geo => {
  inputLocation.location = `${geo.coords.latitude},${geo.coords.longitude}`;
  updateWeather();
}, updateWeather);

/**
 * Gets the current weather for the given location.
 * @param {string | number} location The location to find the weather,
 * e.g. a ZIP code (12345) or a city.
 * @returns {object} A response object from the Weather API
 */
export async function getWeather() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3257338dfbd248ea8ca212610241004&q=${inputLocation.location}&days=2`,
    { mode: 'cors' }
  );
  return await response.json();
}

unitEvent();
