'use strict';

console.log('build-it-visible.js is running');

var status = 'visible';

var toggleVisible = function toggleVisible() {
  status === 'visible' ? status = 'hidden' : status = 'visible';

  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h4',
      null,
      'Toggle visible'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisible },
      'Make it ',
      status
    ),
    status === 'hidden' ? React.createElement(
      'p',
      null,
      'Paragraph with the text to be visible or hidden'
    ) : null
  );

  ReactDOM.render(template, appRoot);
};

render();
