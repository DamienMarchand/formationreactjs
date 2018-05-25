import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoContainer from "./TodoContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodo: [
                {id: 1, title : 'Send a mail', isDone: false},
                {id: 2, title : 'Develop', isDone: true},
                {id: 3, title : 'Test', isDone: true},
                {id: 4, title : 'Take a beer', isDone: false}
            ]
        };

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo = (todoTitle) => {
        console.log("addTodo");
        console.log(todoTitle);
        /*this.setState({
            fieldVal: val
        })*/
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <TodoContainer></TodoContainer>
      </div>
    );
  }
}

export default App;
