import { SET_STATUS, SET_QUERY, SET_SORTING, RESET_FILTERS } from "../actionTypes";

export function setStatus(status) {
  return {
    type: SET_STATUS,
    status,
  };
}

export function setQuery(query) {
  return {
    type: SET_QUERY,
    query,
  };
}

export function setSorting(sorting) {
  return {
    type: SET_SORTING,
    sorting
  };
}

export function resetFilters() {
  return {
    type: RESET_FILTERS,
  };
}