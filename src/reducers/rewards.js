import _ from "lodash";
import { FETCH_REWARDS, FETCH_REWARDS_SUCCESS, FETCH_REWARDS_FAILURE, FETCH_REWARD_SUCCESS, UPDATE_REWARD } from '../actionTypes';

const defaultState = {
  isLoaded: false,
  isFetching: false,
  items: {}
};

export default (state = defaultState, action) => {
  const { type, response, data } = action;

  switch (type) {
    case FETCH_REWARDS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_REWARDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoaded: true,
        items: _.mapKeys(response, 'id')
      };
    case FETCH_REWARDS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_REWARD_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [response.id]: response
        }
      };
    case UPDATE_REWARD:
      return {
        ...state,
        items: {
          ...state.items,
          [data.id]: data
        }
      };
    default:
      return state;

  }
};