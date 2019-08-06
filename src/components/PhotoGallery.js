import React from 'react'

import './styles/gallery.css'

class Photos extends React.Component {
    constructor(props) {
        super();
        this.state = {author: props.author};
    }

    prevPhoto = () => {
        let slide = document.querySelector('.active');
        let photo = document.querySelector('.active-photo');
        let slideNum = slide.id;
        let photoNum;
        if (document.getElementById('10').classList.contains('active')) {
            photoNum = photo.id.slice(5, 7);
        } else {
            photoNum = photo.id.slice(5, 6);
        }
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
        if (slideNum === "10") {
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
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
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
                    <img src={this.state.author.gallery[0]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo2">
                    <img src={this.state.author.gallery[1]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo3">
                    <img src={this.state.author.gallery[2]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo4">
                    <img src={this.state.author.gallery[3]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo5">
                    <img src={this.state.author.gallery[4]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo6">
                    <img src={this.state.author.gallery[5]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo7">
                    <img src={this.state.author.gallery[6]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo8">
                    <img src={this.state.author.gallery[7]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo9">
                    <img src={this.state.author.gallery[8]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" id="photo10">
                    <img src={this.state.author.gallery[9]} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev button" data-slide="prev" onClick={this.prevPhoto}>
                <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fas fa-angle-left"></i></span>
            </button>
            <button className="carousel-control-next button" data-slide="next" onClick={this.nextPhoto}>
                <span className="carousel-control-next-icon" aria-hidden="true"><i className="fas fa-angle-right"></i></span>
            </button>
        </div>
        );
    }
}

export default Photos;