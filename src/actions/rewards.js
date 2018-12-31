import { FETCH_REWARDS, FETCH_REWARD, UPDATE_REWARD } from '../actionTypes';

export function fetchRewards() {
  return {
    type: FETCH_REWARDS,
    dataApiKey: 'rewards'
  };
}

export function fetchReward(id) {
  return {
    type: FETCH_REWARD,
    dataApiKey: 'rewards',
    dataId: id,
  };
}

export function updateReward(data) {
  return {
    type: UPDATE_REWARD,
    data,
  };
}