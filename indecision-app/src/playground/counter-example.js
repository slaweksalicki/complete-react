class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
    // old 
    // this.setState({
    //   count: 0
    // });
    // this.setState({
    //   count: this.state.count + 1
    // });
  }

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleReset}> Reset </button>
      </div>
    );
  }
}

// Create three methods: handleAddOne, handleMinusOne, handleReset
// use console.log to print the method name.
// Wire up onClick & bind in the constructor function


ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };



// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>: {count}</h1>
//       <button id="my-id" className="button" onClick={minusOne}> -1 </button>
//       <button id="my-id" className="button" onClick={addOne}> +1 </button>
//       <button id="my-id" className="button" onClick={reset}> Reset </button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();