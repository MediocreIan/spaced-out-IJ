import WordContext from "../../contexts/WordContext";
import React, { Component } from "react";

export default class Dashboard extends Component {
  static contextType = WordContext;

  render() {
    console.log(this.context.words);
    return (
      <>
        <h1>{this.context.language.name}</h1>
        <h4>total score {this.context.language.total_score}</h4>
        <ul>
          {this.context.words.map((word) => {
            return (
              <li key={word.id}>
                <h4>{word.original}</h4>
                <p>correct guesses {word.correct_count}</p>
                <p>incorrect guesses {word.incorrect_count}</p>
              </li>
            );
          })}
        </ul>
        {/* button component goes here 
        <Buttone>
        */}
      </>
    );
  }
}
