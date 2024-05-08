import { updateWeather } from './displayWeather';

const units = document.getElementsByClassName('unit');

export function unitEvent() {
  [...units].forEach(unit =>
    unit.addEventListener('click', () => {
      setUnit.bind(unit)();
      updateWeather();
    })
  );
}

function setUnit() {
  [...units].forEach(unit => unit.classList.remove('current'));
  this.classList.add('current');
}

export function getTemp() {
  // Get element with 'current' class
  const current = [...units].find(unit => unit.classList.contains('current'));
  const unit = current.classList.contains('fahrenheit')
    ? 'fahrenheit'
    : 'celsius';
  return unit.at(0);
}
