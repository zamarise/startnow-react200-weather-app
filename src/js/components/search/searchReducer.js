const initialState = {
  all: [],
  selected: {
    coord: {},
    main: {},
    wind: {},
    weather: [{ icon: '' }]
  }
};

// first arg state second action
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SEARCH_CITY_FULFILLED':
      const all = [...state.all];

      all.push(payload.data);
      return { ...state, all, selected: payload.data };
    default:
      return state;
  }
};
