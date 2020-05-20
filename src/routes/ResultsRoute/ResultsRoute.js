import React, { Component } from 'react';
import WordContext from '../../contexts/WordContext.js';
import Results from '../../components/Results/Results.js';

class ResultsRoute extends Component {
  render() {
    return (
      <section>
        <Results state={this.props.location.state} />
      </section>
    );
  }
}

export default ResultsRoute;
