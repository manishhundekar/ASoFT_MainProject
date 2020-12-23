import './App.css';
import store from './store'
import { Provider } from 'react-redux'

import React, { Component } from 'react';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div>
         <Provider store={store}>
          <HomePage />
         </Provider>
      </div>
    );
  }
}

export default App;