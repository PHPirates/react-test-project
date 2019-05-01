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

// Define a React component, a function component
function Welcome(props) {
    // The props should not be changed (components should be pure functions)
    return <h1>Hello, {props.name}</h1>;
}

// Define a component using an ES6 class
class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

// Create element which represents a component (based on Capitals, otherwise it's a html tag)
const me = <Welcome name="me" />;

function render(element) {
    ReactDOM.render(element, document.getElementById('root'));
}

render(me);


