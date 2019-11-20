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
  handlePick() {
    console.log('handlepick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

// Options
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll(){
    console.log(this.props.options)
    //alert('handleRemoveAll');
  }
  render() {
    return (
      <div>
        <p><button onClick={this.handleRemoveAll}>Remove All</button></p>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
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
        <p>{this.props.optionText}</p>
      </div>
    );
  }
}

// AddOption
class AddOption extends React.Component {

  handleAddOption(e){
    e.preventDefault();  

    const option = e.target.elements.option.value.trim();
    
    if (option) {
      console.log('option true', option)
    }
    
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));