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
          <Router>
            <Route exact path="/" render={props =>(
                  <React.Fragment>
                    <HomePage />
                  </React.Fragment>
                )} >
            </Route>
         </Router>
         </Provider>
      </div>
    );
  }
}

export default App;