import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// https://reactjs.org/docs/hello-world.html

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

// Create element which represents a component (based on Capitals, otherwise it's a html tag)
const me = <Welcome name="me" />;

function render(element) {
    ReactDOM.render(element, document.getElementById('root'));
}

render(me);

// Class components can have state

// Define a component using an ES6 class
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

render(<Clock />);


// Adding lifecycle methods

class UpdatingClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // When the clock is rendered to the DOM for the first time: mounting
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

render(<UpdatingClock />);

// Class methods are not bound by default. Use
// this.handleClick = this.handleClick.bind(this);
// or:

class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this);
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}

render(<LoggingButton />);

class WhatIsThis extends Component {
    data = {
        some: 'data'
    }

    renderObject (object) {
        return Object.keys(object).map((obj) => {
            return (
              <div key={obj}>
                  key: {obj}; <br/>
                  value: {object[obj]} <br/><br/>
              </div>
            )
        })
    }

    render() {
        console.log('this is: ', this)
        return (
          <div> This is an object: <br />
              { this.renderObject(this.data) }
          </div>
        )
    }
}

render(<WhatIsThis />);
