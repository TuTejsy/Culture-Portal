import React from "react"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"

// import "bootstrap"
import "./styles/bootstrap.css"
import "./styles/Author.css"
import MapWidget from "../components/MapWidget"
import Photo from "./PhotoGallery"

function BasicInfo({ author, lang }) {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row">
        <img
          src={author.photo}
          alt="Фото автора"
          className="rounded mr-3 ml-3"
          width="200px"
        ></img>
        <div className="">
          <h1>{author.language[lang].name}</h1>
          <h5>{author.language[lang].birthPlace}</h5>
        </div>
      </div>
    </div>
  )
}

function VideoComponent({ author, video }) {
  let url = `https://www.youtube.com/embed/${author.video}`
  return (
    <div className="embed-responsive embed-responsive-16by9 videoComponent">
      <iframe
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="embed-responsive-item"
        title="Author"
      ></iframe>
    </div>
  )
}

function createWorksRow(author, i) {
  return (
    <tr key={i}>
      <td>{author.date}</td>
      <td>{author.title}</td>
    </tr>
  )
}

function Works({ author, lang }) {
  const Masterpiece = author.language[lang].info.worksList
  return (
    <table className="table table-striped table-bordered table-hover">
      <tbody className="">{Masterpiece.map(createWorksRow)}</tbody>
    </table>
  )
}

const Author = ({ author, lang }) => {
  return (
    <div className="container w-75 mt-5">
      <BasicInfo author={author} lang={lang}></BasicInfo>
      <AuthorTimeLine author={author} lang={lang}></AuthorTimeLine>
      <Works author={author} lang={lang}></Works>
      <Photo author={author} />
      <MapWidget id="myMap" author={author} />
      <VideoComponent author={author}></VideoComponent>
    </div>
  )
}

export default Author

function CreateTimelineItem(props, number) {
  return (
    <TimelineItem
      key={number}
      dateText={props.date}
      dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
      bodyContainerStyle={{
        background: "#ddd",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <p>{props.text}</p>
    </TimelineItem>
  )
}

function AuthorTimeLine({ author, lang }) {
  return (
    <Timeline lineColor={"#ddd"}>
      {author.language[lang].info.timeline.map(CreateTimelineItem)}
    </Timeline>
  )
}
