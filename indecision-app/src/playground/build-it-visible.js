console.log('build-it-visible.js is running');

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    })
  }

  render() {
    return (
      <div>
        <h4>Toggle visible</h4>
        <button onClick={this.handleToggleVisibility}>Click here to {this.state.visibility ? 'hide' : 'show'}</button>
        {this.state.visibility && <p>Paragraph with the text to be visible or hidden</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// OLD:

// let status = 'visible';

// const toggleVisible = () => {
//   status === 'visible' ? status = 'hidden' : status = 'visible';

//   render();

// };

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
//     <div>
//       <h4>Toggle visible</h4>
//       <button onClick={toggleVisible}>Make it {status}</button>
//       {status === 'hidden' ? <p>Paragraph with the text to be visible or hidden</p> : null}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();