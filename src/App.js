import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Get from './components/Get';
import Add from './components/Add';
import Update from './components/Update';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Get}></Route>
            <Route path="/us" component={Get}></Route>
            <Route path="/add" component={Add}></Route>
            <Route path="/edit/:id" component={Update}></Route>
            {/*  */}
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
