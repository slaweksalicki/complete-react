console.log('build-it-visible.js is running');

let status = 'visible';

const toggleVisible = () => {
  status === 'visible' ? status = 'hidden' : status = 'visible';

  render();

};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h4>Toggle visible</h4>
      <button onClick={toggleVisible}>Make it {status}</button>
      {status === 'hidden' ? <p>Paragraph with the text to be visible or hidden</p> : null}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();