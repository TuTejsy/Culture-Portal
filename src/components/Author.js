import React from "react"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"

import "./styles/bootstrap.css"
import "./styles/Author.css"

const language = "ru"

function BasicInfo(props) {
  return (
    <div className="d-flex flex-column flex-md-row">
      <img
        src="https://pbs.twimg.com/profile_images/2199788887/22_400x400.jpg"
        alt={props.author.photo}
        className="rounded mr-3 ml-3"
        width="200px" 
      ></img>
      <div className="">
        <h1>{props.author.language[language].name}</h1>
        <h5>
          {props.author.years}, {props.author.language[language].city}
        </h5>
      </div>
    </div>
  )
}

function VideoComponent({videoId}) {
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="embed-responsive embed-responsive-16by9 mb-5">
      <iframe
        className="embed-responsive-item"
        src={url}
        allowFullScreen
        title="title"
      >
      </iframe>
    </div>
  )
}

class Author extends React.Component {
  // const response = fetch(
  //   `https://rawcdn.githack.com/TuTejsy/Culture-Portal/
  // 489e0a33295b2a2dc1a1245c2c99cf4c4eb75c57/src/data/data.json`
  // );
  constructor(props) {
    super(props)
    this.state = {
      authors: [
        {
          photo: "Photo", //Фотография 200px/200px
          video: "NMnU1hJwal8", //id youtube
          years: "2145-2493", // годы жизни
          mapInfo: "some cords", //пока хз, надо согласовать с виджетом
          language: {
            ru: {
              name: "виталя 21tg134 g543eqrbewtbewr rnre ety", // Фио
              city: "Минск", //Город рождения
              info: [
                // list of artist's works with the date of creation
                { date: "1234", text: "Childhood bla bla" },
                { date: "1224", text: "WOAAA" },
                { date: "114", text: "LULULULULUL" },
                { date: "1784", text: "Ok yes" },
              ],
              worksList: [
                // list of artist's works with the date of creation
                {
                  artName: "Библиотека",
                  date: "14.05.1462",
                },
                {
                  artName: "Музей кротов",
                  date: "04.01.1294",
                },
              ],
            },
            en: {
              name: "Vitalya",
              city: "Minsk",
              info: "Da",
            },
            by: {
              name: "Бацька",
              info: "Бульба",
              city: "Мiнск",
            },
          },
        },
      ],
    }
  }

  // async componentDidMount() {
  //   const response = await fetch(`https://rawcdn.githack.com/TuTejsy/Culture-Portal/489e0a33295b2a2dc1a1245c2c99cf4c4eb75c57/src/data/data.json`);
  //   const json = await response.json();
  //   console.log(json);
  //   this.setState({authors: json.authors});
  // }

  render() {
    const authorNumber = 0
    const currentAuthor = this.state.authors[authorNumber]
    return (
      <div className="container w-75 mt-5">
        <BasicInfo author={currentAuthor}></BasicInfo>
        <AuthorTimeLine author={currentAuthor}></AuthorTimeLine>
        <VideoComponent videoId={currentAuthor.video}></VideoComponent>
        {/* <galleryComponent></galleryComponent>  */}
        {/* <mapComponent></mapComponent>  */}
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
      {props.author.language[language].info.map(CreateTimelineItem)}
    </Timeline>
  )
}
