import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Rewards from "./components/rewards/Index";
import RewardEdit from "./components/rewards/edit/RewardEdit";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/reward/:id" component={ RewardEdit } />
              <Route path="/rewards/:status?" component={ Rewards } />
              <Route exact path="/" component={ Rewards } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
