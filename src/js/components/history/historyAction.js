// argument list that returns a dispatch function
export default function historyCity(city) {
  return {
    type: 'HISTORY_CITY',
    payload: { city }
  };
}
