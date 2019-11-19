class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = '!Put your life in the hands of a computer';
    const options = ['Thing 1', 'Thing 2', 'Thing 4'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

// Options
class Options extends React.Component {
  render() {
    return (
      <div>
        {
          <Option /> // CODE HERE
        }
      </div>
    );
  }
}

// Option
class Option extends React.Component {
  render() {
    return (
      <div>
        <strong>Option component here</strong>
      </div>
    );
  }
}

// AddOption
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button>Add Option</button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));