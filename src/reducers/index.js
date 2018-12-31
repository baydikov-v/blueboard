import { combineReducers } from 'redux';
import rewards from './rewards';
import filters from './filters';

export default combineReducers({
  rewards,
  filters,
});
