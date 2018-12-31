import { SET_STATUS, SET_QUERY, SET_SORTING, RESET_FILTERS } from '../actionTypes';

const defaultState = {
  query: '',
  status: '',
  sort: 'date',
  sortDir: 'desc',
};

export default (state = defaultState, action) => {
  const { type, status, query, sorting } = action;

  switch (type) {
    case SET_STATUS:
      return {
        ...state,
        status,
      };
    case SET_QUERY:
      return {
        ...state,
        query,
      };
    case SET_SORTING:
      const [sort, sortDir] = sorting.split('_');
      return {
        ...state,
        sort,
        sortDir,
      };
    case RESET_FILTERS:
      return {
        ...defaultState,
        status: state.status,
      };
    default:
      return state;

  }
};