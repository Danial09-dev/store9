import Container  from '@material-ui/core/Container';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css"

export default function SimpleSlider() {
    let settings = {
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      lazyLoad: 'progressive',
      className: "slides"
     
    };


    const slidesData = [
      {
        id: 1,
        title: 'Mens Den',
        label: 'Dolorem officiis temporibus.',
        image: '/images/HomePage/homePageimg.png'
      }, {
        id: 2,
        title: 'Womens Den',
        label: 'Officia non provident dolor esse et neque.',
        image: '/images/HomePage/img2.jpg'
      }, {
        id: 3,
        title: 'Casual Freedom',
        label: 'Ut recusandae vel vitae molestiae id soluta.',
        image: '/images/HomePage/img3.jpg'
      },
    ];

    return (
      <div className="App">

      <div className="slider-wrapper">

        <Slider {...settings}>

          {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id} >
              <h2 className="slick-slide-title">{slide.title}</h2>
              <img className="slick-slide-image" src={slide.image}  />
              <label className="slick-slide-label">{slide.label}</label>
            </div>

          )}

        </Slider>

      </div>

    </div>
      
    );
  }
