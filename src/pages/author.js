import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import basicInfo from "../components/Author"
import Author from "../components/Author"

const data = {
  authors: [
    {
      photo: "",
      video: "",
      language: {
        ru: {
          name: "Витя",
          info: "Молодец",
        },
        en: {
          name: "Katya",
          info: "Nice too",
        },
        by: {
          name: "Саня",
          info: "Бацька",
        },
      },
    },
  ],
}

const authorPage = () => (
  <Layout>
    <SEO title="Main" />
    <Author>
      {" "}
      {/* <basicInfo></basicInfo> */}
      {/* <timeLine></timeLine> */}
      {/* <videoComponent></videoComponent> */}
      {/* <galleryComponent></galleryComponent> */}
      {/* <mapComponent></mapComponent> */}
    </Author>
  </Layout>
)

export default authorPage
