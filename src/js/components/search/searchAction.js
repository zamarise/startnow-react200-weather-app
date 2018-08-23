import axios from 'axios';

const API_KEY = process.env.API_KEY;

export function searchCitySubmit(name) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=${API_KEY}`;

  const promise = axios.get(url);

  return {
    type: 'SEARCH_CITY',
    payload: promise
  };
}
