import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from "../assets/car1.jpg"
import car2 from "../assets/car2.jpg"
import car3 from "../assets/car3.jpg"
import car4 from "../assets/car4.jpg"
import car5 from "../assets/car5.jpg"
import car6 from "../assets/car6.jpg"

import { FaArrowRight } from "react-icons/fa"

;


export default class SimpleSlider extends Component {



  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="carousel-contain mt-6">
        <Slider {...settings}>
          <div>
            <img src={car6} className="car-pic" />
          </div>

          <div>
            <img src={car1} className="car-pic" />
          </div>

          <div>
            <img src={car2} className="car-pic" />
          </div>

          <div>
            <img src={car3}className="car-pic" />
          </div>

          <div>
            <img src={car4} className="car-pic" />
          </div>

          <div>
            <img src={car5} className="car-pic" />
          </div>





        </Slider>
      </div>
    );
  }
}