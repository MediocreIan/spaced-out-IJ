import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegistrationRoute.css';

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/login');
  };

  render() {
    return (
      <section className="RegistrationRoute">
        <p>
          Practice learning{' '}
          <a
            href="https://en.wikipedia.org/wiki/Afrikaans"
            rel="noopener noreferrer"
            target="_blank"
          >
            Afrikaans
          </a>{' '}
          with the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Spaced_repetition"
            rel="noopener noreferrer"
            target="_blank"
          >
            spaced reptition
          </a>{' '}
          revision technique.
        </p>
        <h2>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute;
