import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import "../pages/styles.css"

const IndexPage = ({ lang }) => (
  <Layout>
    <div class="main-container">
      <div class="buttons">
          <a class="to-authors-list" href="#"> К списку авторов </a>
          
        </div>
        <div class="main-page-text">
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
        <div class="author-of-the-day">
          <div class="title">Автор дня</div>
          <div class="author-frame">
            <div class="author-photo"> </div>
            <div class="author-description">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
