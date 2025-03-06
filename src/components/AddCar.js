import React from "react";

class AddCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brend: '',
      tier: '',
      model: '',
      horsePower: '',
      seats: '',
      price: ''
    }
  }

  render() {
    return (
      <form>
        <input placeholder="brend"
          onChange={(e) => {this.setState({brend: e.target.value})}}
        />
        <input placeholder="tier"
          onChange={(e) => {this.setState({tier: e.target.value})}}
        />
        <input placeholder="model"
          onChange={(e) => {this.setState({model: e.target.value})}}
        />
        <input placeholder="horsePower"
          onChange={(e) => {this.setState({horsePower: e.target.value})}}
        />
        <input placeholder="seats"
          onChange={(e) => {this.setState({seats: e.target.value})}}
        />
        <input placeholder="price"
          onChange={(e) => {this.setState({price: e.target.value})}}
        />
        <button type="button" onClick={() => {this.props.onAdd({
          brend: this.state.brend,
          tier: this.state.tier,
          model: this.state.model,
          horsePower: this.state.horsePower,
          seats: this.state.seats,
          price: this.state.price
        })}}>add</button>
      </form>
    );
  }
}

export default AddCar;