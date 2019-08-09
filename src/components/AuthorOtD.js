import React from "react"
import { Link } from "gatsby"

import "./styles/bootstrap.css"
import * as data from '../data/data.json'
import './styles/authorOfTheDay.css'

function getAuthor() {
  const date = new Date();
  const authorIndex = date.getDate() % 5;
  return data.authors[authorIndex];
}

const AuthorOtD = ({ lang }) => {
  let title;

  switch(lang) {
    case 'en':
      title = 'Author of the day:';
      break;

    case 'by':
      title = 'Аўтар дня:';
      break;

    default:
      title = 'Автор дня:';
      break;
  }

  let buttonDescription;

  switch(lang) {
    case 'en':
      buttonDescription = 'Go';
      break;

    case 'by':
      buttonDescription = 'Перайсці';
      break;

    default:
      buttonDescription = 'Перейти';
      break;
  }

  const author = getAuthor();

  return (
    <div className="author-of-the-day__container">
      <h2 className="author-of-the-day__title">{title}</h2>
      <div className="author-of-the-day">
        <div className="author-of-the-day__photo_wrapper">
          <img
            src={author.photo}
            alt="Фото автора"
            className="author-of-the-day__photo img"
          ></img>
        </div>
        <div className="author-of-the-day__info">
          <h2 className="author-of-the-day__info__name">{author.language[lang].name}</h2>
          <h5 className="author-of-the-day__info__date">{author.language[lang].date}</h5>
          <p className="author-of-the-day__info__summary">{author.language[lang].summary}</p>
          <Link to="/author" state={{ lang, author }} className='btn author-of-the-day__info__button_link '>{buttonDescription}</Link>
        </div>
      </div>
    </div>
  )
}

export default AuthorOtD

