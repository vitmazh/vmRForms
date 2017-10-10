import React from 'react';
import {Component} from "react/lib/ReactBaseClasses";
import LoginForm from "../components/LoginForm/LoginForm";

class AuthForm extends Component {
  render() {
    return (
      <div>
        <LoginForm/>
      </div>
    )
  }
}

export default AuthForm;