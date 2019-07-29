/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./styles/Layout.css"

const Layout = ({ children }) => {
  const [lang, setLang] = useState('ru');

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const newChildren = children.map(child => React.cloneElement(child, { lang, setLang }));

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} lang={lang} setLang={setLang} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{newChildren}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
