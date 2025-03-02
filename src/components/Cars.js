import React from "react";

class Cars extends React.Component {
  cars = [
    {
      id: 1,
      brend: 'Archer',
      tier: 'middle',
      model: 'Archer Hella EC-D i360',
      horsePower: 212,
      seats: 4
    },
    {
      id: 2,
      brend: 'Delamain',
      tier: 'corporate',
      model: 'Delamain Cab',
      horsePower: 333,
      seats: 4
    },
    {
      id: 3,
      brend: 'Herreca',
      tier: 'upper',
      model: 'Herrera Outlaw GTS',
      horsePower: 755,
      seats: 4
    },
    {
      id: 4,
      brend: 'Rayfield',
      tier: 'upper',
      model: 'Rayfield Caliburn',
      horsePower: 1660,
      seats: 2
    },
  ];

  render() {
    return (
      <div>
        {this.cars.map((el) => (
          <div className="car">
            <h3>{el.model}</h3>
            <p>brend: {el.brend}</p>
            <p>tier:{el.tier}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Cars;