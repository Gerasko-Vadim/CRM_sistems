
import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import "./slider.scss";
import clas from "./slider.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


const Slider = ({ images }) => {
  return (
    <div className="corusel-wrapper">
      <Carousel>
        {
          images && images.map((item, index) => {
            return (
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={item}
                  alt="First slide"
                />

              </Carousel.Item>
            )
          })
        }

        
      </Carousel>
    </div>
  );
};
export default Slider;
