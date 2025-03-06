import React from "react";
import Car from "./Car";

class Cars extends React.Component {
  render() {
    if(this.props.carsList.length > 0) {
      return (
        <div>
          {this.props.carsList.map((el) => (
            <Car key={el.id} car={el}/>
          ))}
        </div>
      ); 
    }
    else {
      return(
        <div className="car">
          <h3>u r poor piece of shit</h3>
        </div>
      );
    }
  }
}

export default Cars;