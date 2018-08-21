import axios from 'axios';

const myKey = process.env.API_KEY;

export function searchCitySubmit(name) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=${myKey}`;

  const promise = axios.get(url);

  return {
    type: 'SEARCH_CITY',
    payload: promise
  };
}
