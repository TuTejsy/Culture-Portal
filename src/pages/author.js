import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Author from "../components/Author"
// import { async } from "q";


function authorPage() {
  return(
  <Layout>
    <SEO title="Main" />
    <Author></Author>
  </Layout>
  )
}

export default authorPage
