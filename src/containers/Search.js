import React, { Component } from "react";

import './styles/Search.css';
import AuthorPreview from '../components/AuthorPreview'

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <>
        <div className="search-container">
          <input type="text" className="search-input" />
        </div>
        <AuthorPreview lang={this.props.lang} />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
      </>
    )
  }
}