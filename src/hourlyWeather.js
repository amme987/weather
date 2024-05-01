import { getWeather } from './index';

async function getHourIndex() {
  // console.log(getWeather());
  const response = await getWeather();
  const currentTime = response.current.last_updated_epoch;

  // An array the hourly weather for 48 hours
  const hours = response.forecast.forecastday[0].hour.concat(
    response.forecast.forecastday[1].hour
  );

  // Get time epoch value from each object in array
  const timeEpoch = hours.map(obj => obj.time_epoch);

  // Find the index of the next hour in the array
  return timeEpoch.findIndex(index => index > currentTime);
}

async function getHourlyWeather(weather) {
  const response = await getWeather(weather);
  const index = await getHourIndex();
  const hours = response.forecast.forecastday[0].hour.concat(
    response.forecast.forecastday[1].hour
  );

  return hours.slice(index, index + 5);
}

export async function displayHourlyWeather(weather) {
  const nextHours = await getHourlyWeather(weather);
  const hourly = document.querySelector('.hourly');
  hourly.textContent = '';

  for (const obj of nextHours) {
    const article = document.createElement('article');
    hourly.appendChild(article);

    const hour = document.createElement('div');
    hour.textContent = obj.time.slice(-5);
    const conditionIcon = document.createElement('img');
    conditionIcon.src = obj.condition.icon;
    const temperature = document.createElement('div');
    temperature.setAttribute('class', 'temp');
    temperature.textContent = `${obj.temp_f}°F`;

    article.append(hour, conditionIcon, temperature);
  }
}
