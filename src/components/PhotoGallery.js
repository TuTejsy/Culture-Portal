import React from 'react'
import data from '../data/data.json'


import './styles/gallery.css'

function photos() {
    const gallery = <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
    <li id="1" className="active"></li>
    <li id="2"></li>
    <li id="3"></li>
    <li id="4"></li>
    <li id="5"></li>
    <li id="6"></li>
    <li id="7"></li>
    <li id="8"></li>
    <li id="9"></li>
    <li id="10"></li>
    </ol>
    <div className="carousel-inner">
    <div className="carousel-item active" id="photo1">
        <img src={data.authors[2].gallery[0]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id="photo2">
        <img src={data.authors[2].gallery[1]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id="photo3">
        <img src={data.authors[2].gallery[2]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id="photo4">
        <img src={data.authors[2].gallery[3]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id="photo5">
        <img src={data.authors[2].gallery[4]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id="photo6">
        <img src={data.authors[2].gallery[5]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id="photo7">
        <img src={data.authors[2].gallery[6]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id="photo8">
        <img src={data.authors[2].gallery[7]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id="photo9">
        <img src={data.authors[2].gallery[8]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id="photo10">
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