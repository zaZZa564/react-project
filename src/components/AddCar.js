import React from "react";

class AddCar extends React.Component {
  render() {
    return (
      <form>
        <input placeholder="brend"/>
        <input placeholder="tier"/>
        <input placeholder="model"/>
        <input placeholder="horsePower"/>
        <input placeholder="seats"/>
        <input placeholder="price"/>
      </form>
    );
  }
}

export default AddCar;