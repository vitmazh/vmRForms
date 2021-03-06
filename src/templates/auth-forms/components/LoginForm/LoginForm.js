import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Form from "./Form";

class LoginForm extends Component {
  loginHandle(values) {
    // this.props.usersAction.loginUser(values);
    console.log(values)
  }



  render() {
    return (
      <div className='login-c'>
        <div className='login-c_with'>
          <button className='login-c_with-fb'>
            Log in with Facebook
          </button>
          <button className='login-c_with-google'>
            Log in with Google
          </button>
        </div>
        <div className='login-c_divider'>
          OR
        </div>
        <Form
          onSubmit={(e)=>this.loginHandle(e)}
        />
        <a href="#"> Forgot password?</a>
        <div className='login-c_goto-signup'>
          <span>Don't have an account?</span>
          <Link to={`/register`}>Sign Up</Link>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  // usersAction: bindActionCreators(usersAction, dispatch)
});
export default connect(null, mapDispatchToProps)(LoginForm);