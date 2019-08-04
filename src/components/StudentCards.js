import React from "react"

import "./styles/bootstrap.css";
import { studentData } from '../data/studentData';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <img
        src='RandomPic.jpg'
        alt="Student photo"
        className="student-card__photo"
        width="100%"
      ></img>
      <div className="student-card__info">
        <h5 className="student-card__info__name">{student.name}</h5>
        <p className="student-card__info__work">{student.work}</p>
      </div>

        <a className="student-card__contacts_link" href={student.github}>
          <img
            src='../src/images/icons/github-icon.svg'
            alt="github-icon"
            className="student-card__contacts_link_image"
          ></img>
        </a>
    </div>
  )
}

export default class StudentCards extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="student-card_container">
        {studentData.map((student) => <StudentCard student={student} />)}
      </div>

    );
  }
}