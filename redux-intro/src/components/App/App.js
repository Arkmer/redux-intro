import React, { Component } from 'react';
import './App.css';

// THIS file uses the following to talk to the Redux Store
import { connect } from 'react-redux'; // connect is a function!

class App extends Component {
  constructor(props) {
    super(props); // Do this or things won't work right

    this.state = {
      newElement: {
        element: '',
      },
      elementArray: [],
    }
  }

  // The following is an example of shitty binding that you had to do before the arrow function bypass.
  // this.state = {
  //   this.example = this.example.bind(this);
  // }

  // example() {
  //   console.log('Hello');
  //   this.setState({
  //     temp: 'something'
  //   })
  // }
  // End supidity //

  handleClick = (button) => (event) => { // this removes the need for binding - Ask for example
    // Dispatch needs and Action
    this.props.dispatch({ // within this set of curlies is an action
      type: button, // must be type, this word is magic
    })
  }

  handleAddStar = () => { // this removes the need for binding - Ask for example
    // Dispatch needs and Action
    this.props.dispatch({ // within this set of curlies is an action
      type: 'ADD_STAR', // must be type, this word is magic
      payload: {
        name: 'Gacrux',
        diameter: 50,
      }
    })
  }

  handleChange = (propertyName) => (event) => {
    this.setState({
      newElement: {
        ...this.state.newElement,
        [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = (propertyName) => (event) => {
    event.preventDefault();
    this.setState({
      elementArray: [...this.state.elementArray, this.state.newElement],
      newElement: {
        element: '',
      }
    })
    this.transferElement();
    // console.log('Such Log, Wow:', this.state.elementArray);
  }

  transferElement = () => { // this removes the need for binding - Ask for example
    // Dispatch needs and Action
    this.props.dispatch({ // within this set of curlies is an action
      type: 'ADD_ELEMENT', // must be type, this word is magic
      payload: this.state.newElement
    })
  }

  render() {
    let someElement;
    if (this.props.reduxState.firstReducer !== 0) {
      someElement = <p>{this.props.reduxState.firstReducer}</p>
    } // This controls whether or not that number shows up.
    return (
      <div className="App">
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <button onClick={this.handleClick('BUTTON_ONE')}>Button One!</button>
        <button onClick={this.handleClick('BUTTON_TWO')}>Button Two!</button>
        <button onClick={this.handleAddStar}>Add Star</button>
        <input onChange={this.handleChange('element')}
          value={this.state.newElement.element}  // Acts like ng-model
          type="text" placeholder="Element" />
        <input type="submit" placeholder="Submit" onClick={this.handleSubmit('ADD_ELEMENT')} />
        <p>Element: {this.state.newElement.element}</p>
        {someElement}
      </div>
    );
  }
}

// This allows you to get things back from the reduxStore on the index.
const mapReduxStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

// connect with currying
export default connect(mapReduxStateToProps)(App); // If dispatch is not a function, then you didn't connect.

// The following is what the above is doing.
// const connected = connect();
// const connectedApp = connected(App);
// export default connectedApp;