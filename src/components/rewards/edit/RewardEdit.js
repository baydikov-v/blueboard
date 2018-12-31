import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReward, updateReward } from '../../../actions/rewards';
import Form from './Form';

class RewardEdit extends Component{

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id, reward } = this.props;
    if (!reward) {
      this.props.fetchReward(id);
    }
  }

  handleSubmit(values) {
    this.props.updateReward(values);
    this.props.history.push('/rewards');
  }

  render () {
    const { reward } = this.props;
    return <div>
      <Link to='/rewards'>All rewards</Link>
      {reward ?
        <div>
          <h1>Edit Reward, id: {reward.id}</h1>
          <Form
            initValues={reward}
            handleSubmit={this.handleSubmit}
          />
        </div>
        : ''
      }
    </div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    reward: state.rewards.items[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchReward,
  updateReward,
})(RewardEdit);