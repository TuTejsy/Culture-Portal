import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Author from "../components/Author"


function authorPage({ location }) {
  return(
  <Layout language={location.state.lang} author={location.state.author}>
    <SEO title={location.state.author.language['en'].name}/>
    <Author></Author>
  </Layout>
  )
}

export default authorPage
