import React, { Component } from 'react';
import WelcomeContainer from "../containers/WelcomeContainer";
import LoginFormContainer from "../containers/LoginFormContainer";
import {GetToken, IsLogged} from "../helpers/Auth";
import axios from "axios";

export default class App extends Component {

  constructor(props)
  {
      super(props);
      if (IsLogged())
      {
        this.props.UserLogged(GetToken());
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
          <WelcomeContainer />
          <LoginFormContainer />
      </div>
    );
  }
}
