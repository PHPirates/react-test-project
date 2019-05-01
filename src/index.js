import React from 'react';
import ReactDOM from 'react-dom';

// React element
const element = <h1>Hello, world!</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

// Conceptually, components are like JavaScript functions.
// They accept arbitrary inputs (called “props”)
// and return React elements describing what should appear on the screen.