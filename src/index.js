import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const App = () => {
  const buttonText = { text: 'Click me!' };
  const labelText = 'Enter name: ';
  return (
    <div>
      <label className='label' htmlFor='name'>
        {labelText}
      </label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// ReactDOM.render(<App />, document.querySelector('#root'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
