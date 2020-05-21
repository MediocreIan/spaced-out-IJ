import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Required, Label, InputCombo } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import Button from '../Button/Button';
import ButtonSpinner from '../ButtonSpinner/ButtonSpinner';
import Alert from '../Alert/Alert';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null, loading: false };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ loading: true });
    const { name, username, password } = ev.target;
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        name.value = '';
        username.value = '';
        password.value = '';
        this.setState({ loading: false });
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error, loading: false });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        {error && <Alert error={error} />}
        <InputCombo>
          <Input
            ref={this.firstInput}
            id="registration-name-input"
            name="name"
            required
          />
          <Label htmlFor="registration-name-input">
            Enter your name
            <Required />
          </Label>
        </InputCombo>
        <InputCombo>
          <Input id="registration-username-input" name="username" required />
          <Label htmlFor="registration-username-input">
            Choose a username
            <Required />
          </Label>
        </InputCombo>
        <InputCombo>
          <Input
            id="registration-password-input"
            name="password"
            type="password"
            required
          />
          <Label htmlFor="registration-password-input">
            Choose a password
            <Required />
          </Label>
        </InputCombo>
        <footer>
          <Button disabled={this.state.loading} type="submit">
            {this.state.loading ? <ButtonSpinner /> : 'Sign up'}
          </Button>
          <Link to="/login">Already have an account?</Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
