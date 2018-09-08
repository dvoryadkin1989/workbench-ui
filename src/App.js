import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk'

import AppContent from './components/AppContent';
import HomeView from './modules/home/HomeView';
import CeaseView from './modules/cease/CeaseView';
import SalesView from './modules/sales/SalesView';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    routing: routerReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)) 
);

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={AppContent}>
            <IndexRoute component={HomeView}/>
            <Route path="sales" component={SalesView}/>
            <Route path="cease" component={CeaseView}/>
          </Route>
      </Router>
    </Provider>
    );
  }
}

export default App;
