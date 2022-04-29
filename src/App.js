import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Calculator from './component/calculator';
import Quote from './component/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/quote">
                <Quote />
              </Route>
              <Route exact path="/calculator">
                <Calculator />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
