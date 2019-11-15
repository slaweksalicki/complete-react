console.log('App.js is running')

// JSX - JavaScript XML
var template = <h3>This is JSX from app.js!!!</h3>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);