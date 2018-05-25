import React, { Component } from 'react';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import {Home} from "./routes/Home";
import {About} from "./routes/About";
import {Contact} from "./routes/Contact";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <div>Header</div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/about">About</Link>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
                <footer>Footer</footer>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
