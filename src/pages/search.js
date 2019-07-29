import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from '../containers/Search'
import AuthorPreview from '../components/AuthorPreview'

const SecondPage = () => (
  <Layout>
    <SEO title="Search" />
    <Search />
    <AuthorPreview />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
