import React, { Component } from 'react';
import Button from '../Button/Button';
import { Input, Label, InputCombo } from '../Form/Form';
import languageService from '../../services/language-service';
import { Redirect } from 'react-router-dom';
import './Learning.css';

class Learning extends Component {
  componentDidMount() {
    if (!this.props.state) {
      languageService.getNextWord().then((data) => this.setState({ ...data }));
    } else {
      this.setState({
        ...this.props.state,
      });
    }
  }

  state = {
    nextWord: '',
    totalScore: 0,
    wordCorrectCount: '0',
    wordIncorrectCount: '0',
    guess: '',
    answered: false,
    response: null,
  };

  setGuess = (e) => {
    this.setState({
      guess: e.target.value,
    });
  };

  handleGuess = (e) => {
    e.preventDefault();
    return languageService.guessWord(this.state.guess).then((res) => {
      this.setState({
        response: res,
        answered: true,
      });
    });
  };

  render() {
    const {
      nextWord,
      totalScore,
      wordCorrectCount,
      wordIncorrectCount,
    } = this.state;
    return (
      <>
        {this.state.answered ? (
          <Redirect
            to={{
              pathname: '/results',
              state: {
                ...this.state.response,
                origional: this.state.nextWord,
                userAnswer: this.state.guess,
              },
            }}
          />
        ) : (
          <section className="Learning">
            <h2>Translate the word:</h2>
            <span className="Learning__next">{nextWord}</span>
            <p className="Learning__total">Your total score is: {totalScore}</p>
            <form onSubmit={(e) => this.handleGuess(e)}>
              <InputCombo>
                <Input
                  type="text"
                  id="learn-guess-input"
                  name="learn-guess-input"
                  required
                  onChange={this.setGuess}
                ></Input>
                <Label htmlFor="learn-guess-input">
                  What's the translation?
                </Label>
              </InputCombo>
              <Button type="submit">Submit your answer</Button>
            </form>
            <div className="Learning__history">
              <p>
                You have answered this word{' '}
                <span className="Learning__correct">correctly</span>{' '}
                {wordCorrectCount} times.
              </p>
              <p>
                You have answered this word{' '}
                <span className="Learning__incorrect">incorrectly</span>{' '}
                {wordIncorrectCount} times.
              </p>
            </div>
          </section>
        )}
      </>
    );
  }
}
export default Learning;
