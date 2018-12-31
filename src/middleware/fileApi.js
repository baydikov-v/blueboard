import data from '../data';
import { SUCCESS, FAILURE } from '../actionTypes';

export default () => next => action => {
  const { dataApiKey, dataId, type } = action;
  if (!dataApiKey) return next(action);

  if (typeof data[dataApiKey] !== 'undefined') {
    return next({
      type: type + SUCCESS,
      response: !dataId ? data[dataApiKey] : data[dataApiKey].find(item => item.id === +dataId),
    });
  } else {
    return next({
      type: type + FAILURE,
      error: 'Data not found',
    });
  }
};