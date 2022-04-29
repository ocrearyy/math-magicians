import React from 'react';
import './App.css';
import Calculator from './component/calculator';
import Navbar from './component/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Calculator />
      </div>
    );
  }
}

export default App;
