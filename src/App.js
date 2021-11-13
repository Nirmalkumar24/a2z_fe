import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from "./views/Store";
import Events from "./views/Events.js";
import Dashboard from "./views/Dashboard";
import Feedback from "./views/Feedback";
import Transport from "./views/Transport";
import Purchase from "./views/Purchase";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NavAuth from "./views/NavAuth";
import PrivateRoute from "./utils/PrivatRoute";
import "./App.css";


class App extends Component {


  render() {

    return (
      <div>
        
        <Router>
          <NavAuth/>
          <Switch>
            <PrivateRoute component={Dashboard} path="/" exact />
            <PrivateRoute component={Store} path="/store" exact />
            <PrivateRoute component={Events} path="/events" exact />
            <PrivateRoute component={Feedback} path="/feedback" exact />
            <PrivateRoute path='/transport' component={Transport} />
            <PrivateRoute path='/purchase' component={Purchase} />
            <Route path="/login" component={Login} />
            <Route path="/Signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;