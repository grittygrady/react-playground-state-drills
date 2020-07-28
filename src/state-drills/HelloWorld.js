import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "Grady"
    };
  }
  handleButton = newValue => {
    this.setState({
      who: newValue
    });
  };
  
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={() => this.handleButton("world")}>World</button>
        <button onClick={() => this.handleButton("friend")}>Friend</button>
        <button onClick={() => this.handleButton("React")}>React</button>
      </div>
    );
  }
}

export default HelloWorld;