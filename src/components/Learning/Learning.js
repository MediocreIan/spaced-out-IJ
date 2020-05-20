import React, { Component } from 'react';
import Button from '../Button/Button';
import { Input, Label, InputCombo } from '../Form/Form';
import languageService from '../../services/language-service';

import './Learning.css';
import { Redirect } from 'react-router-dom';

class Learning extends Component {
  componentDidMount() {
    languageService.getNextWord().then((data) => this.setState({ ...data }));
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
              state: { response: this.state.response },
            }}
          />
        ) : (
          <>
            <h2>Translate the word: {nextWord}</h2>
            <p>Your total score is: {totalScore}</p>
            <form onSubmit={(e) => this.handleGuess(e)}>
              <InputCombo>
                <Input
                  type="text"
                  id="learn-guess-input"
                  name="learn-guess-input"
                  required
                  onChange={this.setGuess}
                ></Input>
                <Label htmlFor="learn-guess-input">Guess</Label>
              </InputCombo>
              <Button type="submit">Guess!</Button>
            </form>
            <div>
              <p>
                You have answered this word correctly {wordCorrectCount} times.
              </p>
              <p>
                You have answered this word incorrectly {wordIncorrectCount}{' '}
                times.
              </p>
            </div>
          </>
        )}
      </>
    );
  }
}
export default Learning;
