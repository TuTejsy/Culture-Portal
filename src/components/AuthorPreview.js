import React from "react"

import './styles/AuthorPreview.css';

const AuthorPreview = ({ lang }) => (
  <div className="author-container">
    {lang}
  </div>
);

export default AuthorPreview;