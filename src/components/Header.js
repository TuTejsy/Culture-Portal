import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './styles/Header.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

const Header = ({ siteTitle, lang, setLang }) => {
  const handleLangClick = e => {
    const currentLang = e.currentTarget.innerText;
    if (currentLang === lang) return;

    setLang(currentLang);
  }

  let button1;
  let button2;
  let button3;

  switch (lang) {
    case 'by':
      button1 = <>Пісьменнікі Беларусі</>
      button2 = <>Галоўная Старонка</>
      button3 = <>Пошук</>
      break;

    case 'en':
      button1 = <>Writers of Belarus</>
      button2 = <>Main Page</>
      button3 = <>Search</>
      break;

    default:
      button1 = <>Писатели Беларуси</>;
      button2 = <>Главная Страница</>;
      button3 = <>Поиск</>
      break;
  }

  return (
    <header className="page-header header">
      <div className="page-header__container navbar">
        <h1 style={{ margin: 0 }}>

          <Link to="/"
            state={{ lang }}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {button1}
          </Link>
        </h1>

        <div className="page-header__buttons">
          <Link
            to="/"
            state={{ lang }}>
            {button2}
          </Link>

          <Link
            to="/search/"
            state={{ lang }}>
            {button3}
          </Link>
        </div>

        <ul className="page-header__language-select">
          <li className={(lang === 'ru') ? "lang selected" : "lang"} onClick={handleLangClick}>ru</li>
          <li className={(lang === 'by') ? "lang selected" : "lang"} onClick={handleLangClick}>by</li>
          <li className={(lang === 'en') ? "lang selected" : "lang"} onClick={handleLangClick}>en</li>
        </ul>
      </div>
    </header >
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
