import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'

class Form extends Component {
  constructor() {
    super();

  }
  componentWillMount() {
    // console.log(this.props)
  }


  render() {
    const { handleSubmit } = this.props;



    return (
      <form
        className='login-c_form'
        onSubmit={handleSubmit}

      >
        <Field
          name='username'
          component='input'
          type='text'
          placeholder='Email'
        />
        <Field
          name='password'
          component='input'
          type='text'
          placeholder='Password'
        />
        <button
          type='submit'
        >
          Log In
        </button>
      </form>
    )
  }
}

// export default reduxForm({
//   form: 'login'
// })(FormLogin);

Form = reduxForm({
  // a unique name for the form
  form: 'login'
})(Form)

export default Form;