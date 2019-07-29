import React, { Component } from "react";

import './styles/Search.css';

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
      </>
    )
  }
}