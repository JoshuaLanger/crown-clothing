import React from 'react';

// Styles
import './Login.scss';

// Components
import FormInput from '../form-input/FormInput';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
