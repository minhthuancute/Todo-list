import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    count: 0,
    // image: 'https://picsum.photos/536/354',
    value: this.props.counters.value
  };

  handleIncremnet = () => {
    this.setState({
      // count: this.state.count + 1,
      value: this.state.value + 1
    });
  };

  // style = {
  //   fontSize: 18,
  //   'margin': '0 0 10px 0'
  // }

  handleIncremnet = product => {
    this.setState({
      // count: this.state.count + 1,
      value: this.state.value + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      value: this.state.value - 1
    })
  }

  // funtion set css for button
  getBadgeClasses() {
    let classes = "btn m-2";
    classes += (this.state.value === 0) ? " btn-danger" : " btn-warning";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (

      <div>

        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncremnet()}
          className="btn btn-light m-2"
        // style={this.style}
        >
          Click to Increment
        </button>
        <button
          onClick={() => this.handleDecrement()}
          className="btn btn-group m-2"
        // style={this.style}
        >
          Click to Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counters.id)}
          className="btn btn-dark"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
