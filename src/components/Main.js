import { Link } from "gatsby"
import React from "react"

import StudentCards from "./StudentCards"
import AuthorOtD from "./AuthorOtD"
import StudentsTitle from "./StudentsTitle"
import "./styles/Main.css"


const Main = ({ lang }) => {
  let text

  switch (lang) {
    case "by":
      text = (
        <>
          <p>
            Самабытная мастацкая культура Беларусі фарміравалася на працягу
            стагоддзяў.Тут існавалі арыгінальныя архітэктурныя і мастацкія
            школы, ствараліся непаўторныя музычныя і літаратурныя творы.
          </p>
          <p>
            Усе якія дайшлі да нашых дзён шэдэўры беларускага мастацтва
            знаходзяцца пад абаронай дзяржавы. Яны захоўваюцца ў калекцыях
            буйнейшых беларускіх музеяў, зборах бібліятэк. класіка беларускай
            музыкі і драматургіі дэманструецца на тэатральных падмостках і ў
            канцэртных залах.
          </p>
          <p>
            Спіс аўтараў, якія ў дадзеную хвіліну знаходзяцца на нашым серверы
            (5 чалавек). Тут улічваюцца пісьменнікі, якія жылі на тэрыторыі
            Беларусь і займаліся сваёй творчасцю на працягу доўгіх гадоў.
          </p>
        </>
      )
      break

    case "en":
      text = (
        <>
          <p>
            The original artistic culture of Belarus has been formed over the
            centuries. Original architectural and art schools existed here,
            unique musical and literary works.
          </p>
          <p>
            All the masterpieces of Belarusian art that have survived are
            protected by the state.They are stored in collections of the largest
            Belarusian museums, library collections. ClassicBelarusian music and
            drama is shown on the stage and in concert halls.
          </p>
          <p>
            The list of authors who are currently on our server (5 people). Here
            are counted writers who have lived in Belarus and have been engaged
            in their work for many years.
          </p>
        </>
      )
      break

    default:
      text = (
        <>
          <p>
            Самобытная художественная культура Беларуси формировалась на
            протяжении столетий. Здесь существовали оригинальные архитектурные и
            художественные школы, создавались неповторимые музыкальные и
            литературные произведения.
          </p>
          <p>
            Все дошедшие до наших дней шедевры белорусского искусства находятся
            под защитой государства. Они хранятся в коллекциях крупнейших
            белорусских музеев, собраниях библиотек. Классика белорусской музыки
            и драматургии демонстрируется на театральных подмостках и в
            концертных залах.
          </p>
          <p>
            Список авторов, которые в данную минуту находятся на нашем сервере
            (5 человек). Здесь учитываются писатели, которые проживали на
            территории Беларусь и занимались своим творчеством на протяжении
            долгих лет.
          </p>
        </>
      )
      break
  }

  return (
      <div className="main-container">
        <div className="buttons">
          <a className="to-authors-list" href="#">
            {" "}
            К списку авторов{" "}
          </a>
        </div>
        <div className="main-page-text">{text}</div>
        <AuthorOtD lang={lang} />
        <StudentsTitle lang={lang} />
        <StudentCards />
      </div>
  )
}

export default Main
