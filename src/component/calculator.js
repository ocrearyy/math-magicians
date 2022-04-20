import React, { Component } from 'react';
import operate from '../logic/operate';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="input-wrap">
          <div className="output">
            <p className="input-text">0</p>
          </div>
          <div className="button-wrap">
            {/* row 1 */}
            <button className="function" type="button">AC</button>
            <button className="function" type="button">+/-</button>
            <button className="function" type="button">%</button>
            <button className="operator" type="button">÷</button>
            {/* row 2 */}
            <button className="number" type="button">7</button>
            <button className="number" type="button">8</button>
            <button className="number" type="button">9</button>
            <button className="operator" type="button">x</button>
            {/* row 3 */}
            <button className="number" type="button">4</button>
            <button className="number" type="button">5</button>
            <button className="number" type="button">6</button>
            <button className="operator" type="button">-</button>
            {/* row 4 */}
            <button className="number" type="button">1</button>
            <button className="number" type="button">2</button>
            <button className="number" type="button">3</button>
            <button className="operator" type="button">+</button>
          </div>
          {/* row 5 */}
          <div className="final-row">
            <button className="number" type="button">0</button>
            <button className="function" type="button">.</button>
            <button className="operator" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}
