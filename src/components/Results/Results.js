import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Results.css';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.Link = React.createRef();
  }

  componentDidMount() {
    this.Link.current.focus();
  }
  state = { ...this.props.state };
  render() {
    return (
      <section className="DisplayScore">
        {!this.state.isCorrect ? (
          <>
            <h2 className="Displayincorrect">Nice try!</h2>
            <p>
              The correct translation for <span>{this.state.origional}</span>{' '}
              was <span>{this.state.answer}</span> and you chose{' '}
              <span>{this.state.userAnswer}</span>!
            </p>
          </>
        ) : (
          <>
            <h2 className="DisplayCorrect">Correct!</h2>
            <p>
              The correct translation for <span>{this.state.origional}</span>{' '}
              was <span>{this.state.answer}</span> and you chose{' '}
              <span>{this.state.userAnswer}</span>!
            </p>
          </>
        )}
        <p>Your total score is: </p>
        <p className="DisplayScore__total">{this.state.totalScore}</p>

        <Link
        innerRef = {this.Link}
          className="DisplayScore__next"
          to={{
            pathname: '/learn',
            state: {
              ...this.state,
            },
          }}
        >
          Try another word!
        </Link>
      </section>
    );
  }
}
