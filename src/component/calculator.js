import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEvent = (e) => {
    const button = e.target.textContent;
    const value = calculate(this.state, button);
    this.setState(value);
  }

  render() {
    const { total, operation, next } = this.state;
    const getResult = () => {
      let result = 0;
      if (total) {
        result = `${total} ${operation || ''} ${next || ''}`;
      } else if (next) {
        result = next;
      }
      return result;
    };

    return (
      <div className="calculator">
        <div className="input-wrap">
          <div className="output">
            <p className="input-text">{getResult()}</p>
          </div>
          <div className="button-wrap">
            {/* row 1 */}
            <button className="function" type="button" onClick={this.handleEvent}>AC</button>
            <button className="function" type="button" onClick={this.handleEvent}>+/-</button>
            <button className="function" type="button" onClick={this.handleEvent}>%</button>
            <button className="operator" type="button" onClick={this.handleEvent}>÷</button>
            {/* row 2 */}
            <button className="number" type="button" onClick={this.handleEvent}>7</button>
            <button className="number" type="button" onClick={this.handleEvent}>8</button>
            <button className="number" type="button" onClick={this.handleEvent}>9</button>
            <button className="operator" type="button" onClick={this.handleEvent}>x</button>
            {/* row 3 */}
            <button className="number" type="button" onClick={this.handleEvent}>4</button>
            <button className="number" type="button" onClick={this.handleEvent}>5</button>
            <button className="number" type="button" onClick={this.handleEvent}>6</button>
            <button className="operator" type="button" onClick={this.handleEvent}>-</button>
            {/* row 4 */}
            <button className="number" type="button" onClick={this.handleEvent}>1</button>
            <button className="number" type="button" onClick={this.handleEvent}>2</button>
            <button className="number" type="button" onClick={this.handleEvent}>3</button>
            <button className="operator" type="button" onClick={this.handleEvent}>+</button>
          </div>
          {/* row 5 */}
          <div className="final-row">
            <button className="number" type="button" onClick={this.handleEvent}>0</button>
            <button className="function" type="button" onClick={this.handleEvent}>.</button>
            <button className="operator" type="button" onClick={this.handleEvent}>=</button>
          </div>
        </div>
      </div>
    );
  }
}
