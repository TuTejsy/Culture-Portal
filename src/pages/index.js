import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import Photos from "../components/PhotoGallery"

const IndexPage = ({ lang }) => (
  <Layout>
    <SEO title="Main" />
    <h1>{lang}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Photos/>
    </div>
    <Link to="/search/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
