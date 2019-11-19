console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: []
}

// JSX - JavaScript XML

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const removeAllItems = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(randomNum);
};


const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAllItems}>Remove All</button>

      <ol>
        {
          app.options.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();

