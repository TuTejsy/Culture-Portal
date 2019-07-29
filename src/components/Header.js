import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './styles/Header.css'

const Header = ({ siteTitle, lang, setLang }) => {
  const handleLangClick = e => {
    const currentLang = e.currentTarget.innerText;
    if (currentLang === lang) return;

    setLang(currentLang);
  }

  return (
    <header className="page-header">
      <div className="page-header__container">
        <h1 style={{ margin: 0 }}>
          <Link to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {
              (lang === 'ru') && <>Писатели Беларуси</>
              || (lang === 'by') && <>Пісьменнікі Беларусі</>
              || (lang === 'en') && <>Writers of Belarus</>
            }
          </Link>
        </h1>

        <div className="page-header__buttons">
          <Link to="/">
            {
              (lang === 'ru') && <>Главная Страница</>
              || (lang === 'by') && <>Галоўная Старонка</>
              || (lang === 'en') && <>Main Page</>
            }
          </Link>

          <Link to="/search/">
            {
              (lang === 'ru') && <>Поиск</>
              || (lang === 'by') && <>Пошук</>
              || (lang === 'en') && <>Search</>
            }
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
