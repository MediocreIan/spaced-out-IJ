import React, { Component } from 'react';
import { Input, Label, InputCombo } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import ButtonSpinner from '../ButtonSpinner/ButtonSpinner';
import Alert from '../Alert/Alert';
import './LoginForm.css';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null, loading: false };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null, loading: true });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        this.setState({ loading: false });
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
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
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        {error && <Alert error={error} />}
        <InputCombo>
          <Input
            ref={this.firstInput}
            id="login-username-input"
            name="username"
            required
          />
          <Label htmlFor="login-username-input">Username</Label>
        </InputCombo>
        <InputCombo>
          <Input
            id="login-password-input"
            name="password"
            type="password"
            required
          />
          <Label htmlFor="login-password-input">Password</Label>
        </InputCombo>
        <Button disabled={this.state.loading} type="submit">
          {this.state.loading ? <ButtonSpinner /> : 'Login'}
        </Button>
      </form>
    );
  }
}

export default LoginForm;
