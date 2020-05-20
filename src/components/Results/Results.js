import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Results extends Component {
  state = { ...this.props.state.response };
  render() {
    return (
      <>
        <h1>Results</h1>
        {!this.state.isCorrect ? (
          <>
            {' '}
            <h3>Sorry Better luck next time</h3>{' '}
            <p>the correct answer is {this.state.answer}</p>{' '}
          </>
        ) : (
          <h3>Great job you got that right</h3>
        )}
        <p>your total Score is {this.state.totalScore}</p>
      </>
    );
  }
}
