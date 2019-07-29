import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

const IndexPage = ({ lang }) => (
  <Layout>
    <SEO title="Main" />
    <h1>{lang}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/search/">Go to page 2</Link>
    <br></br>
    <Link to="/author">Some author</Link>
  </Layout>
)

export default IndexPage
