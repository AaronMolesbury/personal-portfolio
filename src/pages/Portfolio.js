import React from 'react';
import "./Portfolio.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

function Portfolio() {
  return (
    <MDBCarousel showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src= "../assets/portfolio-backgrounds/Dissertation-Background.png" alt='...' />
          <MDBCarouselCaption>
            <h5 className='caption-header'>First slide label</h5>
            <p className='caption-body'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default Portfolio;

