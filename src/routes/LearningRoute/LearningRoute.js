import React, { Component } from 'react';
import Learning from '../../components/Learning/Learning';

class LearningRoute extends Component {
  render() {
    console.log(this.props.location.state);
    return (
      <section>
        implement and style me
        <Learning state={this.props.location.state} />
      </section>
    );
  }
}

export default LearningRoute;
