import React, { Component } from "react"

import './styles/Search.css';
import AuthorPriview from '../components/AuthorPreview'
import * as data from '../data/data.json'
import '../components/styles/bootstrap.css'

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      inputValue: "",
      birthPlace: "",
    }
  }

  renderBirthPlaces = () => {
    if (!this.props.lang) return

    const authors = data.authors

    let unicPlaces = []

    let birthPlaces = authors.map((author, i) => {
      if (!author.language[this.props.lang]) return

      const birthPlace = author.language[this.props.lang].birthPlace

      if (unicPlaces.includes(birthPlace)) return
      else unicPlaces.push(birthPlace)

      return (
        <option value={birthPlace} key={i}>
          {birthPlace}
        </option>
      )
    })

    return birthPlaces
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value })
  }

  handleBirthPlaceChange = e => {
    this.setState({ birthPlace: e.currentTarget.value })
  }

  render() {
    const authors = data.authors
    const { birthPlace, inputValue } = this.state
    let city
    let name

    switch (this.props.lang) {
      case "en":
        city = "City"
        name = "Full Name"
        break

      case "by":
        city = "Горад"
        name = "Прозвішча, імя"
        break

      default:
        city = "Город"
        name = "ФИО"
        break
    }

    const authorPreviews = authors.map((item, i) => {
      if (
        (inputValue &&
          !item.language[this.props.lang].name
            .toLowerCase()
            .includes(inputValue.toLowerCase())) ||
        (birthPlace !== "" &&
          item.language[this.props.lang].birthPlace !== birthPlace)
      ) {
        return
      }

      return (
        <AuthorPriview author={item} lang={this.props.lang || "ru"} key={i} />
      )
    })

    return (
      <>
        <div className="search-container">
          <label htmlFor="search-input" class="search-label search-input-label">
            {name}:
          </label>
          <input
            name="search-input"
            type="text"
            className="search-input"
            onChange={this.handleInputChange}
          />
          <label
            htmlFor="author-birthPlace"
            class="search-label author-birthPlace-label"
          >
            {city}:
          </label>
          <select
            name="author-birthPlace"
            id="author-birthPlace"
            class="author-birthPlace"
            onChange={this.handleBirthPlaceChange}
          >
            <option value=""></option>
            {this.renderBirthPlaces()}
          </select>
        </div>
      </>
    )
  }
}
