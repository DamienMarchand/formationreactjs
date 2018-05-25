import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {todosReducer} from './store/todo.reducer';
import {createLogger} from 'redux-logger';
import logo from './logo.svg';
import './App.css';

import TodoContainer from "./TodoContainer";

// Assemblage des différents reducers d'une application
const reducers = combineReducers({
    todos: todosReducer
});

const logger = createLogger({
    level: 'log'
});

// Création du store
const store = createStore(reducers, applyMiddleware(logger));


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
        <Provider store={store}>
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
        </Provider>
    );
  }
}

export default App;
