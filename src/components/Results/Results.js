import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default class Results extends Component {
  state = { ...this.props.state };
  render() {
    return (
      <>
        <section className="DisplayScore">
          <p>Your total score is: </p>
          <p>{this.state.totalScore}</p>
        </section>
        <h1>Results</h1>
        {!this.state.isCorrect ? (
          <>
            {' '}
            <h2>Good try, but not quite right</h2>{' '}
            <section className="DisplayFeedback">
              <p>
                The correct translation for {this.state.origional} was{' '}
                {this.state.answer} and you chose {this.state.userAnswer}!
              </p>{' '}
            </section>
          </>
        ) : (
          <>
            {' '}
            <h2>You were correct!</h2>{' '}
            <section className="DisplayFeedback">
              <p>
                The correct translation for {this.state.origional} was{' '}
                {this.state.answer} and you chose {this.state.userAnswer}!
              </p>{' '}
            </section>
          </>
        )}
        <Button>Try another word!</Button>
      </>
    );
  }
}
