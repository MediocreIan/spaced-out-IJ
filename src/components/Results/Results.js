import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Results.css';

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
                The correct translation for <span>{this.state.origional}</span>{' '}
                was <span>{this.state.answer}</span> and you chose{' '}
                <span>{this.state.userAnswer}</span>!
              </p>{' '}
            </section>
          </>
        ) : (
          <>
            {' '}
            <h2>You were correct!</h2>{' '}
            <section className="DisplayFeedback">
              <p>
                The correct translation for <span>{this.state.origional}</span>{' '}
                was <span> {this.state.answer}</span> and you chose{' '}
                <span>{this.state.userAnswer}</span>!
              </p>{' '}
            </section>
          </>
        )}
        <Link
          className="DisplayScore__next"
          to={{
            pathname: '/learn',
            state: {
              ...this.state,
            },
          }}
        >
          <Button>Try another word!</Button>
        </Link>
      </>
    );
  }
}
