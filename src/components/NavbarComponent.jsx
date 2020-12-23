import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../images/logo.png';

class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{"background-color" : "#ae275f"}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} height="50"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Contact Us</a>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                            </li> */}
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Motor Insurance
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Car Insurance</a></li>
                                <li><a className="dropdown-item" href="#">Bike Insurance</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Travel Insurance</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavbarComponent;