import { Link } from "gatsby"
import React from 'react'

import Image from "./Image"
import StudentCards from './StudentCards';
import AuthorOtD from "./AuthorOtD";
import "./pages/Main.css"

const Main = ({ lang }) => (
    <div className="main-container">
      <div className="buttons">
          <a className="to-authors-list" href="#"> К списку авторов </a>
        </div>
        <div className="main-page-text">
          <p>Самобытная художественная культура Беларуси формировалась на протяжении столетий. 
            Здесь существовали оригинальные архитектурные и художественные школы, создавались 
            неповторимые музыкальные и литературные произведения.</p>
          <p>Все дошедшие до наших дней шедевры белорусского искусства находятся под защитой государства. 
            Они хранятся в коллекциях крупнейших белорусских музеев, собраниях библиотек. Классика 
            белорусской музыки и драматургии демонстрируется на театральных подмостках и в концертных 
            залах.</p>
            <p>Список авторов, которые в данную минуту находятся на нашем сервере (5 человек). 
              Здесь учитываются писатели, которые проживали на территории Беларусь и занимались 
              своим творчеством на протяжении долгих лет.</p>
        </div>
        <div className="author-of-the-day">
          <div className="title">Автор дня</div>
          <div className="author-frame">
            <div className="author-photo"> </div>
            <div className="author-description">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
        <div className="developers">
          <div className="dev-card">
            <p className="dev-name">Василий</p> 
            <div className="dev-photo"></div>     
            <a className="github-id" href="https://github.com/TuTejsy">TuTejsy</a>
          </div>
           <div className="dev-card">
            <p className="dev-name">Екатерина</p>
            <div className="dev-photo"></div>             
            <a className="github-id" href="https://github.com/katyYats">katyYats</a>
          </div>
          <div className="dev-card">
            <p className="dev-name">Наталья</p> 
            <div className="dev-photo"></div>           
            <a className="github-id" href="https://github.com/NatalyaApasova">NatalyaApasova</a>
          </div>
          <div className="dev-card">
            <p className="dev-name">Владислав</p>
            <div className="dev-photo"></div>           
            <a className="github-id" href="https://github.com/VladMeleshko">VladMeleshko</a>
          </div>
          <div className="dev-card">
            <p className="dev-name">Антон</p>
            <div className="dev-photo"></div>            
            <a className="github-id" href="https://github.com/Zamtakaish">Zamtakaish</a>
          </div>
          <div className="dev-card">
            <p className="dev-name">Лидия</p>
            <div className="dev-photo"></div>            
            <a className="github-id" href="https://github.com/505Flamingo">505Flamingo</a>
            </div>
          <div className="dev-card">
            <p className="dev-name">Андрей</p>
            <div className="dev-photo"></div>
            <a className="github-id" href="https://github.com/Qunapi">Qunapi</a>
          </div> 
        </div>
    </div>
  <AuthorOtD lang={lang}/>
    <StudentCards />
)

export default Main