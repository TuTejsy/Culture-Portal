import React from 'react'
import data from '../data/data.json'


import './styles/gallery.css'

function photos() {
    const gallery = <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
    </ol>
    <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={data.authors[2].gallery[0]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
        <img src={data.authors[2].gallery[1]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
        <img src={data.authors[2].gallery[2]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
        <img src={data.authors[2].gallery[3]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
        <img src={data.authors[2].gallery[4]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
        <img src={data.authors[2].gallery[5]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
        <img src={data.authors[2].gallery[6]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
        <img src={data.authors[2].gallery[7]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
        <img src={data.authors[2].gallery[8]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
        <img src={data.authors[2].gallery[9]} className="d-block w-100" alt="..." />
    </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fas fa-angle-left"></i></span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"><i className="fas fa-angle-right"></i></span>
    </a>
    </div>;
    return gallery;      
}

export default photos;