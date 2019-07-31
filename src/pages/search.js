import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from '../containers/Search'

const SecondPage = ({ location }) => (
  <Layout language={location.state ? location.state.lang : null}>
    <SEO title="Search" />
    <Search />
  </Layout>
)

export default SecondPage
