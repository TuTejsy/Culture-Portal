import React, { Component } from "react";

//import './styles/bootstrap.css';
import './styles/AuthorPreview.css';
//import data from '../data/data';

const AuthorPreview = ({ lang }) => {
  const language = { lang };

  return (
  
  <div className="author-container">
    <AuthorsCads />
  </div>
  )
};

const AuthorsCads = props => {
  return (
    <div className='card' style={{width: '18rem',}}>
      <img src='' class='card-img-top' alt='' />
      <div class='card-body'>
        <h5 class='casd-title'></h5>
        <p className='card-text'></p>
        <p className='card-text'></p>
        <p className='card-text'></p>
        <a href='' class='btn btn-primary'></a>
      </div>
    </div>
  )
};

export default AuthorPreview;