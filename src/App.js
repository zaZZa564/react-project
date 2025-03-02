import React from "react";
import Header from "./components/Header";
import Cars from "./components/Cars";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title='car list' />
        <main>
          <Cars />
        </main>
        <aside></aside>
      </div>
    );
  }
}

export default App;