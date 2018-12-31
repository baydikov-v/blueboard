import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from "../../components/rewards/Menu";
import Filters from './Filters';
import List from '../../components/rewards/List';
import { fetchRewards } from '../../actions/rewards';
import { setStatus } from '../../actions/filters';
import { getVisibleRewards } from "../../selectors/index";

class Rewards extends Component{

  componentDidMount() {
    this.props.setStatus(this.props.status);
    if (!this.props.isLoaded) {
      this.props.fetchRewards();
    }
  }

  render () {
    return <div>
      <Menu
        status={this.props.status}
        onSelect={this.props.setStatus}
      />
      <Filters/>
      <List rewards={this.props.rewards}/>
    </div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoaded: state.rewards.isLoaded,
    rewards: getVisibleRewards(state),
    status: ownProps.match.params.status || ''
  };
};

Rewards.propTypes = {
  isLoaded: PropTypes.bool,
  rewards: PropTypes.array,
  status: PropTypes.string,
  setStatus: PropTypes.func,
  fetchRewards: PropTypes.func,
};

export default connect(mapStateToProps, {
  setStatus,
  fetchRewards,
})(Rewards);