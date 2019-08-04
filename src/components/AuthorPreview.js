import React from "react"
import { Link } from "gatsby"

import './styles/bootstrap.css';
import './styles/AuthorPreview.css';

const AuthorPreview = ({lang, author}) => {
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

     default:  
     
     buttonDescription = 'Перейти';
      break;
  }
  return (
    <div className='author-preview d-flex flex-column flex-md-row w-75 mt-5 rounded'
         style={{
           margin: '0 auto',
           background: 'linear-gradient(#fff, #ddd)',
           boxShadow: '0 0 4px 2px rgba(0, 0, 0, .2)',
          }}>
      <img src={author.photo}
           className='author-preview-img-top mb-0 rounded'
           style={{width: '550px',}}
           alt={author.language[lang].name} />
      <div className='author-preview-body mt-3 mb-3 ml-3'>
      <h5 className='author-preview-title'>{author.language[lang].name}</h5>
      <p className='author-preview-text'><em>{author.language[lang].birthPlace}</em></p>
      <p className='author-preview-text font-weight-bold'
         style={{fontSize: '14px',}}>
         {author.language[lang].date}
      </p>
      <p className='author-preview-text'>{author.language[lang].summary}</p>
      <Link to="/author" state={{ lang, author }} className='btn btn-primary mb-2'>{buttonDescription}</Link>
      </div>
    </div>
    )

};

export default AuthorPreview;
