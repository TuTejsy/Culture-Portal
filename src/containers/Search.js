import React, { Component } from "react";

import './styles/Search.css';
import AuthorPreview from '../components/AuthorPreview'
import * as data from '../data/data.json'

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      birthPlace: '',
    }
  }

  renderBirthPlaces = () => {
    if (!this.props.lang) return;

    const authors = data.authors;

    let unicPlaces = [];

    let birthPlaces = authors.map((author, i) => {
      if (!author.language[this.props.lang]) return;

      const birthPlace = author.language[this.props.lang].birthPlace;

      if (unicPlaces.includes(birthPlace)) return;
      else unicPlaces.push(birthPlace);

      return <option value={birthPlace} key={i}>{birthPlace}</option>
    })

    return birthPlaces;
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.currentTarget.value });
  }

  handleBirthPlaceChange = (e) => {
    this.setState({ birthPlace: e.currentTarget.value });
  }

  render() {
    return (
      <>
        {/*<div className="search-container">
          <input type="text" className="search-input" onChange={this.handleInputChange} />
          <select name="author-birthPlace" id="author-birthPlace" onChange={this.handleBirthPlaceChange}>
            <option value=""></option>
            {this.renderBirthPlaces()}
          </select>
        </div>*/}
        <h1>{this.state.inputValue}</h1>
        <AuthorPreview lang={this.props.lang} />
        <Author />
        <h1>{this.state.birthPlace}</h1>
        <p>Welcome to page 2</p>
      </>
    )
  }
}