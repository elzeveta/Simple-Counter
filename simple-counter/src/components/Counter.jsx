import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <button onClick={(x) => this.decrement(x)}>Decrement!</button>
        <button onClick={(x) => this.reset(x)}>Reset</button>
        <button onClick={(x) => this.increment(x)}>Increment!</button>
        <h1>Current Count:<span style={{color: this.state.count >= 0 ? "green" : "red"}}>{this.state.count}</span></h1>
      </div>
    );
  }
}
