import React from "react"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"

import "./styles/bootstrap.css"
import "./styles/Author.css"
import data from "../data/data"
import MapWidget from '../components/MapWidget';

const language = "ru"

function BasicInfo({author}) {
  console.log(author.photo);
  return (
    <div className="d-flex flex-column flex-md-row">
      <img
        src={author.photo}
        alt="Фото автора"
        className="rounded mr-3 ml-3"
        width="200px"
      ></img>
      <div className="">
        <h1>{author.language[language].name}</h1>
        <h5>
          {author.language[language].birthPlace}
        </h5>
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

function createWorksRow(author, number){
  return(
    <tr key={number}>
      <td>{author.date}</td>
      <td>{author.title}</td>
    </tr>
  )
}

function Works(props) {
  const Masterpiece = props.author.language[language].info.works;
  return (
    <table className="table table-striped table-bordered table-hover">
      <tbody className="">
        {Masterpiece.map(createWorksRow)}
      </tbody>
    </table>
  )
}

class Author extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authors: [data],
    }
  }

  // async componentDidMount() {
  //   const response = await fetch(`https://rawcdn.githack.com/TuTejsy/Culture-Portal/489e0a33295b2a2dc1a1245c2c99cf4c4eb75c57/src/data/data.json`);
  //   const json = await response.json();
  //   this.setState({authors: json.authors});
  // }

  render() {
    const authorNumber = 0
    const currentAuthor = this.state.authors[authorNumber]
    return (
      <div className="container w-75 mt-5">
        <BasicInfo author={currentAuthor}></BasicInfo>
        <AuthorTimeLine author={currentAuthor}></AuthorTimeLine>
        <Works author={currentAuthor}></Works>
        <MapWidget author={currentAuthor} />
        {/* <galleryComponent></galleryComponent>  */}
        <VideoComponent videoId={currentAuthor.video}></VideoComponent>
      </div>
    )
  }
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

function AuthorTimeLine(props) {
  return (
    <Timeline lineColor={"#ddd"}>
      {props.author.language[language].info.timeline.map(CreateTimelineItem)}
    </Timeline>
  )
}
