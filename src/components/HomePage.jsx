import React, { Component } from 'react';
import '../App.css';
import motorbikelogo from '../images/motorbikelogo.jpg'
import healthlogo from '../images/healthlogo.png'
import travellogo from '../images/travellogo.png'
import lifelogo from '../images/lifelogo.png'

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="container my-5">
                  <div className="row" >
                        <div className="card col-md-2 mx-3 productcard">
                            <img className="card-img-top mx-2" style={{"width" : 90 + "%"}} src={"https://image.flaticon.com/icons/png/512/55/55283.png"} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Car Insurance</h5>
                            </div>
                        </div>
                        <div className="card col-md-2 mx-3 productcard">
                            <img className="card-img-top mx-2" style={{"width" : 90 + "%"}} src={motorbikelogo} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Bike Insurance</h5>
                            </div>
                        </div>
                        <div className="card col-md-2 mx-3 productcard">
                            <img className="card-img-top mx-2" style={{"width" : 90 + "%"}} src={travellogo} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Travel Insurance</h5>
                            </div>
                        </div>
                        <div className="card col-md-2 mx-3 productcard">
                            <img className="card-img-top mx-2" style={{"width" : 90 + "%"}} src={healthlogo} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Health Insurance</h5>
                            </div>
                        </div>
                        <div className="card col-md-2 mx-3 productcard">
                            <img className="card-img-top mx-2" style={{"width" : 90 + "%"}} src={lifelogo} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Life Insurance</h5>
                            </div>
                        </div>
                  </div>
                </div>
                
            </div>
        );
    }
}

export default HomePage;