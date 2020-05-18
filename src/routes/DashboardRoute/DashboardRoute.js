import React, { Component } from "react";
import WordContext from "../../contexts/WordContext.js";
import Dashboard from "../../components/Dashboard/Dashboard.js";

class DashboardRoute extends Component {
  render() {
    return (
      <section>
        <WordContext.Consumer>{(value) => <Dashboard />}</WordContext.Consumer>{" "}
      </section>
    );
  }
}

export default DashboardRoute;
