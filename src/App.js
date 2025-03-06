import React from "react";
import Header from "./components/Header";
import Cars from "./components/Cars";
import AddCar from "./components/AddCar";

class App extends React.Component {
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
          seats: 4,
          price: 1500
        },
        {
          id: 2,
          brend: 'Delamain',
          tier: 'corporate',
          model: 'Delamain Cab',
          horsePower: 333,
          seats: 4,
          price: 2000
        },
        {
          id: 3,
          brend: 'Herreca',
          tier: 'upper',
          model: 'Herrera Outlaw GTS',
          horsePower: 755,
          seats: 4,
          price: 7500
        },
        {
          id: 4,
          brend: 'Rayfield',
          tier: 'upper',
          model: 'Rayfield Caliburn',
          horsePower: 1660,
          seats: 2,
          price: 2400
        }
      ]
    }
    this.addCar = this.addCar.bind(this);
  }

  render() {
    return (
      <div>
        <Header title='car list' />
        <main>
          <Cars carsList={this.state.cars}/>
        </main>
        <aside>
          <AddCar onAdd={this.addCar}/>
        </aside>
      </div>
    );
  }

  addCar(car) {
    const id = this.state.cars.length + 1;
    this.setState({cars: [...this.state.cars, {id, ...car}]});
  }
}

export default App;