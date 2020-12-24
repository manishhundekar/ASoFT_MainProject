import React, { Component } from 'react';

class CarInsurance extends Component {
  render() {
    return (
        <div className="container my-5 mx-3">
        <form>
        <div className="car-number">
          <input
            type="text"
            placeholder="Enter Car Number: (eg. DL-10-CB-1234)"
          />
          
        </div>
        <button type="submit" className="myButton">
          View Prices
        </button>
        
      </form>
      </div>
      

     
    );
  }
}

export default CarInsurance