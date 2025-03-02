import React from "react";

class Car extends React.Component {
  car = this.props.car;
  render() {
    return (
        <div className="car">
          <h3>{this.car.model}</h3>
          <p>brend: {this.car.brend}</p>
          <p>tier:{this.car.tier}</p>
          <b>{this.car.horsePower >= 750 ? 'u cant afford it' : 'it\'s cheap'}</b>
        </div>
    );
  }
}

export default Car;