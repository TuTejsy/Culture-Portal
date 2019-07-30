import React from "react"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"

import "./styles/Author.css"

function BasicInfo(props) {
  return (
    <div className="basic-info">
      <div className="basic-info__image">
        <img src="" alt={props.author.photo}></img>{" "}
      </div>
      <div className="basic-info__text">
        <h2>{props.author.language.ru.name}</h2>
        {props.author.language.ru.info}
        <br></br>

      </div>
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
          "photo": "Photo",
          "video": "Video",
          "language": {
            "ru": {
              "name": "виталя",
              "info": "Величайший"
            },
            "en": {
              "name": "Hu",
              "info": "Da"
            },
            "by": {
              "name": "Бацька",
              "info": "Бульба"
            }
          }
        }
      ]
    };
  }

  async componentDidMount() {
    const response = await fetch(`https://rawcdn.githack.com/TuTejsy/Culture-Portal/489e0a33295b2a2dc1a1245c2c99cf4c4eb75c57/src/data/data.json`);
    const json = await response.json();
    console.log(json);
    this.setState({authors: json.authors});
  }

  render() {
    const authorNumber = 0;
    const currentAuthor = this.state.authors[0];
    return (
      <div className="author-container">

        <BasicInfo author={currentAuthor}></BasicInfo>
        <AuthorTimeLine author={currentAuthor}></AuthorTimeLine>
        {/* <videoComponent></videoComponent> */}
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
