import React, { Component } from 'react';
import Learning from '../../components/Learning/Learning';

class LearningRoute extends Component {
  render() {
    return (
      <section>
        <Learning state={this.props.location.state} />
      </section>
    );
  }
}

export default LearningRoute;
