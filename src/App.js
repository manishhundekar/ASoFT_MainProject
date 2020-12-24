import './App.css';
import store from './store'
import { Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux'
import NavbarComponent from './components/NavbarComponent';
import React, { Component } from 'react';
import About from './components/About';
import HomePage from './components/HomePage';
import CarInsurance from './components/CarInsurance'
class App extends Component {
  render() {
    return (
      <div>
         <Provider store={store}>
          <NavbarComponent />
          <Route exact path={["/", "/home"]} component={HomePage} />
                
                <div className="container mt-3">
                <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/car-insurance" component={CarInsurance} />              
            </Switch>         
        </div>
         
         </Provider>
         
         
      </div>
    );
  }
}

export default App;