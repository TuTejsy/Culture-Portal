import React from "react"
import { Link } from "gatsby"

import "./styles/bootstrap.css"
import * as data from '../data/data.json'

function getAuthor() {
  const date = new Date();
  const authorIndex = date.getDate() % 7;
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
    <div className="author-of-the-day">
      {title}
      <img
        src={author.photo}
        alt="Фото автора"
        className="author-of-the-day__photo"
        width="100px"
      ></img>
      <div className="author-of-the-day__info">
        <h1>{author.language[lang].name}</h1>
        <h5>{author.language[lang].date}</h5>
        <p>{author.language[lang].summary}</p>
      </div>
      <Link to="/author" state={{ lang, author }} className='author-of-the-day__button_link'>{buttonDescription}</Link>
    </div>
  )
}

export default AuthorOtD

