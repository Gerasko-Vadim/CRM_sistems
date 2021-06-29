
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


const Slider = ({ images }) => {
  return (
    <div className="corusel-wrapper">
      <MDBContainer>
        <MDBCarousel
          activeItem={0}
          length={images && images.length}
          showControls={false}
          showIndicators={true}
          multiItem={images && images.length > 1 ? true : false}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            {
              images && images.map((item, index) => {
                return (
                  <MDBCarouselItem itemId={index}>
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={item}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                )
              })
            }
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};
export default Slider;
