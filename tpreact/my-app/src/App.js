import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { trainingsReducer } from './store/trainings.reducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import logo from './logo.svg';
import './App.css';
import TrainingList from './TrainingList';
import MyForm from './MyForm';
import { ConnectionContainer } from './ConnectionContainer';

// Assemblage des différents reducers d'une application
const reducers = combineReducers({
  trainings: trainingsReducer,
});

const logger = createLogger({
  level: 'log',
});

// Création du store
const store = createStore(reducers, applyMiddleware(thunk, logger));

class App extends Component {
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

          <ConnectionContainer>
            <TrainingList />
            <div className="myform"><MyForm /></div>
          </ConnectionContainer>
        </div>
      </Provider>
    );
  }
}

export default App;
