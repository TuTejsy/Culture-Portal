import React from 'react'
import data from '../data/data.json'


import './styles/gallery.css'

class Photos extends React.Component {

    prevPhoto = () => {
        let slide = document.querySelector('.active');
        let photo = document.querySelector('.active-photo');
        let slideNum = slide.id;
        let photoNum = photo.id.slice(5, 6);
        slide.classList.remove('active');
        photo.classList.remove('active-photo');
        if (slideNum === "1") {
            document.getElementById('10').classList.add('active');
            document.getElementById('photo10').classList.add('active-photo');
        } else {
            document.getElementById(slideNum - 1).classList.add('active');
            document.getElementById(`photo${photoNum - 1}`).classList.add('active-photo');
        }
    }

    nextPhoto = () => {
        let slide = document.querySelector('.active');
        let photo = document.querySelector('.active-photo');
        let slideNum = slide.id;
        let photoNum = photo.id.slice(5, 6);
        slide.classList.remove('active');
        photo.classList.remove('active-photo');
        if (slideNum === "3") {
            document.getElementById('1').classList.add('active');
            document.getElementById('photo1').classList.add('active-photo');
        } else {
            document.getElementById(slideNum * 1 + 1).classList.add('active');
            document.getElementById(`photo${photoNum * 1 + 1}`).classList.add('active-photo');
        }
    }

    selectPhoto = (event) => {
        let slide = event.target;
        let slideNum
        if (slide.tagName === 'LI') {
            document.querySelector('.active').classList.remove('active');
            document.querySelector('.active-photo').classList.remove('active-photo');
            slideNum = slide.id;
            document.getElementById(slideNum).classList.add('active');
            document.getElementById(`photo${slideNum}`).classList.add('active-photo');
        }
    }

    render() {
        return ( 
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
            <ol className="carousel-indicators">
                <li id="1" className="slide active" onClick={this.selectPhoto}></li>
                <li id="2" className="slide" onClick={this.selectPhoto}></li>
                <li id="3" className="slide" onClick={this.selectPhoto}></li>
                <li id="4" className="slide" onClick={this.selectPhoto}></li>
                <li id="5" className="slide" onClick={this.selectPhoto}></li>
                <li id="6" className="slide" onClick={this.selectPhoto}></li>
                <li id="7" className="slide" onClick={this.selectPhoto}></li>
                <li id="8" className="slide" onClick={this.selectPhoto}></li>
                <li id="9" className="slide" onClick={this.selectPhoto}></li>
                <li id="10" className="slide"  onClick={this.selectPhoto}></li>
             </ol>
            <div className="carousel-inner">
                <div className="carousel-item active-photo" id="photo1">
                    <img src={data.authors[0].photo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo2">
                    <img src={data.authors[1].photo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo3">
                    <img src={data.authors[2].photo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo4">
                    <img src={data.authors[3].photo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo5">
                    <img src={data.authors[4].photo} className="d-block w-100" alt="..." />
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
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={this.prevPhoto}>
                <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fas fa-angle-left"></i></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={this.nextPhoto}>
                <span className="carousel-control-next-icon" aria-hidden="true"><i className="fas fa-angle-right"></i></span>
            </a>
        </div>
        );
    }
}

export default Photos;