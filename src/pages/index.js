import React from "react"

import Layout from "../components/Layout"
import Main from "../components/Main"
import SEO from "../components/Seo"

const IndexPage = ({ location }) => (
  <Layout language={location.state ? location.state.lang : null}>
    <SEO title="Main" />
    <Main />
  </Layout>
)

export default IndexPage
