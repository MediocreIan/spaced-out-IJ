import WordContext from '../../contexts/WordContext';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default class Dashboard extends Component {
  static contextType = WordContext;

  render() {
    return (
      <section className="Dashboard">
        <h2>
          {this.context.language.name}
          <span className="Dashboard__score">
            Total correct answers: {this.context.language.total_score}
          </span>
        </h2>
        <div className="Dashboard__list_head">
          <h3>Words to practice</h3>
          <Link to="/learn">Start practicing</Link>
        </div>
        <ul className="Dashboard__list">
          {this.context.words.map((word) => {
            return (
              <li key={word.id}>
                <h4>{word.original}</h4>
                <div>
                  <p>
                    <span>Total Correct:</span> {word.correct_count}
                  </p>
                  <p>
                    <span>Total Incorrect:</span> {word.incorrect_count}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
