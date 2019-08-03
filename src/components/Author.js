import React from "react"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"

import "./styles/bootstrap.css"
import "./styles/Author.css"
import MapWidget from "../components/MapWidget"

function BasicInfo({ author, lang }) {
  return (
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
  )
}

function VideoComponent({ videoId }) {
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="embed-responsive embed-responsive-16by9 mb-5">
      <iframe
        className="embed-responsive-item"
        src={url}
        allowFullScreen
        title="title"
      ></iframe>
    </div>
  )
}

function createWorksRow(author) {
  return (
    <tr>
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
      <MapWidget
        id="myMap"
        onMapLoad={map => {
          const marker = new window.google.maps.Marker({
            position: { lat: 41.0082, lng: 28.9784 },
            map: map,
            title: 'Hello Istanbul!'
          });
        }}
      />

      {/* <galleryComponent></galleryComponent>  */}
      <VideoComponent videoId={author}></VideoComponent>
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
