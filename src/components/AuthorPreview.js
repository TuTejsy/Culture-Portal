import React from "react"
import { Link } from "gatsby"

import './styles/AuthorPreview.css';

const AuthorPreview = ({ lang }) => (
  <div className="author-container">
    <Link to="/" state={{ lang }}>Go back to the homepage</Link>
  </div>
);

export default AuthorPreview;