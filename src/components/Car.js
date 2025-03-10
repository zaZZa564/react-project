import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class Car extends React.Component {
  car = this.props.car;
  render() {
    return (
        <div className="car">
          <IoCloseCircleSharp className="delete-icon" />
          <IoHammerSharp className="edit-icon" />
          <h3>{this.car.model}</h3>
          <p>brend: {this.car.brend}</p>
          <p>tier: {this.car.tier}</p>
          <b>{this.car.horsePower >= 750 ? 'u cant afford it' : 'it\'s cheap'}</b>
          <p><strong>price: {this.car.price}</strong></p>
        </div>
    );
  }
}

export default Car;