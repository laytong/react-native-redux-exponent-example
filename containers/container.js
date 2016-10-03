import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Reducer from '../store/reducer.js';
import MeetingApp from './my-app';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(Reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MeetingApp />
      </Provider>
    );
  }
}