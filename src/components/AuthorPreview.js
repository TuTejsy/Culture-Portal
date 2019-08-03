import React from "react"
import { Link } from "gatsby"

// import './styles/bootstrap.css';
// import './styles/AuthorPreview.css';

const AuthorPriview = ({lang, author}) => {
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
    <div className='author-preview' style={{width: '18rem',}}>
      <img src={author.photo} className='author-preview-img-top' alt={author.language[lang].name} />
      <div className='author-preview-body'>
      <h5 className='author-preview-title'>{author.language[lang].name}</h5>
      <p className='author-preview-text'>{author.language[lang].date}</p>
      <p className='author-preview-text'>{author.language[lang].summary}</p>
      <Link to="/author" state={{ lang, author }} className='btn btn-primary'>{buttonDescription}</Link>
      </div>
    </div>
    )

};

export default AuthorPriview;
