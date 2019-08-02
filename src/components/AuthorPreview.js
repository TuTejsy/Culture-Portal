import React, { Component } from "react";

//import './styles/bootstrap.css';
import './styles/AuthorPreview.css';
import data from '../data/data';

const AuthorPreview = ({ lang }) => {
  const language = { lang };
  const { authors } = data;

  return (
    <div className="author-container">
      <AuthorsCads authors={authors} language={language.lang}/>
    </div>
  )
};

const AuthorsCads = props => {
  const lang = props.language;

  let buttonDescription;

  switch(lang) {
    case 'ru':
      buttonDescription = 'Перейти';
      break;

    case 'en':
      buttonDescription = 'Go';
      break;

    case 'by':
      buttonDescription = 'Перайсці';
      break;
  }

  const cards = props.authors.map(author => {
    return (
      <div className='card' style={{width: '18rem',}}>
        <img src={author.photo} class='card-img-top' alt={author.language.lang.name} />
        <div class='card-body'>
          <h5 class='card-title'>{author.language.lang.name}</h5>
          <p className='card-text'>{author.language.lang.date}</p>
          <p className='card-text'>{author.language.lang.summary}</p>
          <a href='#' class='btn btn-primary'>{buttonDescription}</a>
        </div>
      </div>
    )
  });
  return {cards};
};

export default AuthorPreview;
