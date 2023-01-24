import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleMinusButtonClicked = this.handleMinusButtonClicked.bind(this);
    this.handlePlusButtonClicked = this.handlePlusButtonClicked.bind(this);
  }

  handlePlusButtonClicked = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButtonClicked = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePlusButtonClicked}>+</button>
        <p>{this.state.counter}</p>
        <button onClick={this.handlePlusButtonClicked}>-</button>
      </div>
    );
  }
}
