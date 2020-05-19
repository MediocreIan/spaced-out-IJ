import React, { Component } from 'react';
import Button from '../Button/Button';
import { Input, Label } from '../Form/Form';
import languageService from '../../services/language-service';

import './Learning.css';

class Learning extends Component {
  componentDidMount() {
    languageService.getNextWord().then((data) => this.setState({ ...data }));
  }

  state = {
    nextWord: '',
    totalScore: 0,
    wordCorrectCount: '0',
    wordIncorrectCount: '0',
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
        <h2>Translate the word: {nextWord}</h2>
        <p>Your total score is: {totalScore}</p>
        <form>
          <Input
            type="text"
            id="learn-guess-input"
            name="learn-guess-input"
            required
          ></Input>
          <Label htmlFor="learn-guess-input">Guess</Label>
          <Button type="submit">Guess!</Button>
        </form>
        <div>
          <p>You have answered this word correctly {wordCorrectCount} times.</p>
          <p>
            You have answered this word incorrectly {wordIncorrectCount} times.
          </p>
        </div>
      </>
    );
  }
}
export default Learning;
