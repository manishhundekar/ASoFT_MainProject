import './App.css';
import store from './store'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Provider } from 'react-redux'
import NavbarComponent from './components/NavbarComponent';
import React, { Component } from 'react';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div>
         <Provider store={store}>
          <NavbarComponent />
          <Switch>
              <Route exact path="/" component={HomePage}​​​​​ />
              <Route exact path="/car-insurance" component={HomePage}​​​​​ />
          </Switch>
         </Provider>
      </div>
    );
  }
}

export default App;