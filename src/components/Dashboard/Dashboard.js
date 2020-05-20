import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import languageService from '../../services/language-service';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    const state = {
      language: {
        head: null,
        id: null,
        name: '',
        total_score: 0,
        user_id: null,
      },
      words: [],
    };
    this.state = state;
  }

  componentDidMount() {
    languageService.setWords().then((res) => {
      this.setState({
        language: res.language,
        words: res.words,
      });
    });
  }

  render() {
    return (
      <section className="Dashboard">
        <h2>
          {this.state.language.name}
          <span className="Dashboard__score">
            Total correct answers: {this.state.language.total_score}
          </span>
        </h2>
        <div className="Dashboard__list_head">
          <h3>Words to practice</h3>
          <Link to="/learn">Start practicing</Link>
        </div>
        <ul className="Dashboard__list">
          {this.state.words.map((word) => {
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
