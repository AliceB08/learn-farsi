import React, { Component } from "react";
import { NavBar, WordList } from "../../components";

class TranslationPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <WordList />
      </div>
    );
  }
}

export default TranslationPage;
