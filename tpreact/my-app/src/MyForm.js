import React from 'react';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, () => {
      const isValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      this.setState({ emailValid: isValid });
    });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, () => {
      this.setState({ passwordValid: this.state.password.length === 4 });
    });
  }

  handleChangeConfirmPassword(event) {
    this.setState({ confirmPassword: event.target.value }, () => {
      this.setState({ confirmPasswordValid: this.state.confirmPassword === this.state.password });
    });
  }

  handleValidation() {
    console.log('handleValidation', this.state);
  }

  isDisable() {
    return !(this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid);
  }

  render() {
    return (
      <div>
                Email : <input type="email" name="email" onChange={this.handleChangeEmail} /> <br />
                Password : <input type="password" name="pwd" onChange={this.handleChangePassword} /> <br />
                Confirm password : <input type="password" name="confirmPassword" onChange={this.handleChangeConfirmPassword} /> <br />
        <input type="button" onClick={this.handleValidation} value="Valid" disabled={this.isDisable()} />
      </div>
    );
  }
}

export default MyForm;

