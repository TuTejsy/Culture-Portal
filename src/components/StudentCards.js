import React from "react"
import ReactSVG from "react-svg"

import "./styles/bootstrap.css"
import { studentData } from "../data/studentData"
import './styles/studens.css'

function StudentCard({ student }) {
  return (
    <a className="student-card" href={student.github}>
      <img
        src={student.photo}
        alt="Student"
        className="student-card__photo"
        width="100%"
      ></img>
      <div className="student-card__info">
        <h5 className="student-card__info__name">{student.name}</h5>
        <p className="student-card__info__work">{student.work}</p>
      </div>

      <div className="student-card__contacts_link" href={student.github}>
        <ReactSVG
          src="https://raw.githubusercontent.com/TuTejsy/Culture-Portal/master/src/images/icons/github-icon.svg"
          className="student-card__contacts_link_icon"
        />
      </div>
    </a>
  )
}

export default class StudentCards extends React.Component {

  render() {
    return (
      <div className="student-card_container">
        {studentData.map((student, i) => (
          <StudentCard student={student} key={i} />
        ))}
      </div>
    )
  }
}
