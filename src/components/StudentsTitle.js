import React from "react"

import "./styles/bootstrap.css"

const StudentsTitle = ({ lang }) => {
  let title;

  switch(lang) {
    case 'en':
      title = 'This project is developed by RSSchool students:';
      break;

    case 'by':
      title = 'Гэты праект створаны студэнтамі RSSchool:';
      break;

    default:
      title = 'Этот проект создан студентами RSSchool:';
      break;
  }

  return (
    <div className="students">
      <h2 className="students__title">{title}</h2>
    </div>
  )
}

export default StudentsTitle

