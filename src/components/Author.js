import React from "react"

import "./styles/Author.css"

function BasicInfo() {
  return (
    <div className="Author__Info">
      <div className="imageContainter">some picture</div>
      <div className="info">Some info</div>
    </div>
  )
}

const Author = ({ lang }) => (
  <div className="author-container">
    dada
    <BasicInfo></BasicInfo>
    {/* /<timeLine></timeLine>  */}
     {/* <videoComponent></videoComponent> */}
    {/* <galleryComponent></galleryComponent>  */}
    {/* <mapComponent></mapComponent>  */}
  </div>
)

export default Author
