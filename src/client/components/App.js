import React, { Component } from 'react';
import _ from 'lodash';
import Auth from "../helpers/Auth";
import {
    BrowserRouter as Router, Switch
} from 'react-router-dom';
import Menu from './Menu';
import Routes from '../routes/routes';
import {RouteName} from "../helpers/Router";
import HeaderContainer from "../containers/HeaderContainer";

export default class App extends Component {

  constructor(props)
  {
      super(props);
      if (Auth.IsLogged())
      {
        this.props.UserLogged(Auth.GetToken());
      }

  }

  render() {
    return (

      <div className="container">
          <HeaderContainer />
          <Router>
              <div className="container">

                  <Menu logged={(!_.isEmpty(this.props.user)) ? true : false} />
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
