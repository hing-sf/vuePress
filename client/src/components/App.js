import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import PromoNew from './promos/promoNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={ Landing } />
            <Route exact path="/promosList" component={ Dashboard } />
            <Route path="/promoInstance/new" component={ SurveyNew } />
            <Route path="/promos/promoNew" component={ PromoNew } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

