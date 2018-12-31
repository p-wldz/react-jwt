import React, { Component } from 'react';
import Auth from "../helpers/Auth";
import axios from "axios";
import {
    BrowserRouter as Router, Switch
} from 'react-router-dom';
import Menu from './Menu';
import Routes from '../routes/routes';
import {RouteName} from "../helpers/Router";

export default class App extends Component {

  constructor(props)
  {
      super(props);
      if (Auth.IsLogged())
      {
        this.props.UserLogged(Auth.GetToken());
      }

      axios.get('http://localhost:3000/api/me').then((response) => {
        console.log("Logged!");
      }).catch((error) => {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="container">
          <Router>
              <div className="container">

                  <Menu />
                  <Switch>
                  {Object.keys(Routes).map((route) => (
                      <RouteName key={route} {...Routes[route]} />
                  ))}
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}
