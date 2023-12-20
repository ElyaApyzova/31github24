import React from "react";

export class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue1: 1,
      inputValue2: 1,
      result: 0,
    };
  }

  oninput1 = (e) => {
    this.setState({ inputValue1: parseInt(e.target.value) });
  };

  oninput2 = (e) => {
    this.setState({ inputValue2: parseInt(e.target.value) });
  };

  onPlus = () => {
    this.setState({
      result:
        parseInt(this.state.inputValue1) + parseInt(this.state.inputValue2),
    });
  };

  onMinus = () => {
    this.setState({
      result:
        parseInt(this.state.inputValue1) - parseInt(this.state.inputValue2),
    });
  };

  render() {
    return (
      <div>
        <h1>Calculator1</h1>
        <input
          type="number"
          value={this.state.inputValue1}
          onChange={this.oninput1}
        />
        <button onClick={this.onPlus}>+</button>
        <button onClick={this.onMinus}>-</button>
        <input
          type="number"
          value={this.state.inputValue2}
          onChange={this.oninput2}
        />
        <h1>sum:{this.state.result}</h1>
      </div>
    );
  }
}
export default Calculator1;
