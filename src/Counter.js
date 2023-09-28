import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      counter1: 0,
      paused: true
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.increaseCount, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleCounterLimit = (count) => {
    if (count < 10) {
      return count + 1;
    }
    return count;
  };

  increaseCount = () => {
    if (this.state.paused) {
      this.setState((prevState) => ({
        counter: this.handleCounterLimit(prevState.counter),
        counter1: prevState.counter1 + 1
      }));
    }
  };

  handlePlay = () => {
    this.setState((prevState) => ({
      paused: !prevState.paused
    }));
  };

  handleReset = () => {
    this.setState({ counter: 0, counter1: 0 });
  };

  render() {
    const counter = this.state;
    return (
      <div>
        <h1>Counter : {counter.counter}</h1>
        <h1>Counter 1: {counter.counter1}</h1>
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
