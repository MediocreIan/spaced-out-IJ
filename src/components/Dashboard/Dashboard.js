import WordContext from '../../contexts/WordContext';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  static contextType = WordContext;

  render() {
    console.log(this.context.words);
    return (
      <>
        <h2>
          {this.context.language.name}
          Total correct answers: {this.context.language.total_score}
          <Link to="/learn">Start practicing</Link>
        </h2>
        <h3>Words to practice</h3>
        <ul>
          {this.context.words.map((word) => {
            return (
              <li key={word.id}>
                <h4>{word.original}</h4>
                <p>correct answer count: {word.correct_count}</p>
                <p>incorrect answer count: {word.incorrect_count}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
