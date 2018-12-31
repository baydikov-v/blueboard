import { createSelector } from "reselect";
import _ from "lodash";

const getFilters = state => state.filters;
const getRewards = state => state.rewards.items;

export const getVisibleRewards = createSelector(
  [getFilters, getRewards],
  (filters, rewards) => {
    const { status, query, sort, sortDir } = filters;
    let result = {...rewards};
    if (status)
      result = _.filter(result, item => item.status === status);
    if (query)
      result = _.filter(result, item =>
        item.experience.toLowerCase().match(query) ||
        item.user.name.toLowerCase().match(query)
      );

    if (sort) {
      if (sort === 'date') {
        result = _.orderBy(result, item => new Date(item.date), [sortDir]);
      } else {
        result = _.orderBy(result, [sort], [sortDir]);
      }
    }
    return result;
  }
);