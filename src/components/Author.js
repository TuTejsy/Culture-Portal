import React from "react"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"

import "./styles/bootstrap.css"
import "./styles/Author.css"


function BasicInfo(props) {
  return (
    <div className="media">

        <img 
        src="https://pbs.twimg.com/profile_images/2199788887/22_400x400.jpg" 
        alt={props.author.photo} className="rounded mr-3" width="200px"></img>{" "}

      <div className="media-body">
        <h2>{props.author.language.ru.name}</h2>
        {props.author.language.ru.info}
      </div>
    </div>
  )
}

function videoComponent(props) {
  return (
    <div className="videoComponent">

    </div>
  )
}

class Author extends React.Component {
  // const response = fetch(
  //   `https://rawcdn.githack.com/TuTejsy/Culture-Portal/489e0a33295b2a2dc1a1245c2c99cf4c4eb75c57/src/data/data.json`
  // );
  constructor(props) {
    super(props);
    this.state = {
      "authors": [
        {
          "photo": "Photo",//Фотография 200px/200px
          "video": "NMnU1hJwal8",//id youtube 
          "years": "2145-2493",// годы жизни
          "mapInfo": "some cords", //пока хз, надо согласовать с виджетом
          "language": { 
            "ru": {
              "name": "виталя",// Фио
              "city": "Минск",//Город рождения
              "info": [// list of artist's works with the date of creation
                "Childhood bla bla",
                "Best years bla bla",
                "some else life events",
                "old years bla bla"
              ],
              "worksList":[ // list of artist's works with the date of creation
                {
                  "artName": "Библиотека",
                  "date": "14.05.1462"
                },
                {
                  "artName": "Музей кротов",
                  "date": "04.01.1294"
                }
              ]
            },
            "en": {
              "name": "Vitalya",
              "city": "Minsk",
              "info": "Da"
            },
            "by": {
              "name": "Бацька",
              "info": "Бульба",
              "city": "Мiнск"
            }
          }
        }
      ]
    };
  }

  // async componentDidMount() {
  //   const response = await fetch(`https://rawcdn.githack.com/TuTejsy/Culture-Portal/489e0a33295b2a2dc1a1245c2c99cf4c4eb75c57/src/data/data.json`);
  //   const json = await response.json();
  //   console.log(json);
  //   this.setState({authors: json.authors});
  // }

  render() {
    const authorNumber = 0;
    const currentAuthor = this.state.authors[0];
    return (
      <div className="container w-75 mt-5">

        <BasicInfo author={currentAuthor}></BasicInfo>
        {/* <AuthorTimeLine author={currentAuthor}></AuthorTimeLine> */}
        <videoComponent author={currentAuthor.video}></videoComponent>
        {/* <galleryComponent></galleryComponent>  */}
        {/* <mapComponent></mapComponent>  */}
      </div>
    )
  }
}

export default Author

function AuthorTimeLine() {
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem
        key="001"
        dateText="11/2010 – Present"
        style={{ color: "#e86971" }}
      >
        <h3>Title, Company</h3>
        <h4>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="04/2009 – 11/2010"
        dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
        bodyContainerStyle={{
          background: "#ddd",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "#61b8ff" }}>Title, Company</h3>
        <h4 style={{ color: "#61b8ff" }}>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
      </TimelineItem>
    </Timeline>
  )
}
