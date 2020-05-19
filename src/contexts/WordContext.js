import React, { Component } from "react";
import languageService from "../services/language-service";

const WordContext = React.createContext({
  words: [],
  language: "",
});

export default WordContext;

export class WordProvider extends Component {
  constructor(props) {
    super(props);
    const state = { language: "", words: [] };
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
    console.log(this.state.words);
    const value = {
      words: this.state.words,
      language: this.state.language,
    };
    return (
      <WordContext.Provider value={value}>
        {this.props.children}
      </WordContext.Provider>
    );
  }
}