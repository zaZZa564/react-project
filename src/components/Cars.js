import React from "react";
import Car from "./Car";

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars : [
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
        }
      ]
    }
  }

  render() {
    if(this.state.cars.length > 0) {
      return (
        <div>
          {this.state.cars.map((el) => (
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