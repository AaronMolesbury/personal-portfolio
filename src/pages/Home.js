import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { 
  MDBBtn,
  MDBIcon,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand, } from 'mdb-react-ui-kit';

function Home() {
    return (
        <>
          <div class="container-lg hc1">
            <p1 class="hp1">
              Junior Software Developer
            </p1>
            <h1 class = "hh1">
              Aaron Molesbury
            </h1>
            <br/>
            <p2 class="hp2">
              Hi, I'm Aaron! I have recently graduated from Heriot Watt University 
              with a degree <br/> in Computer Science and I'm looking to begin my Software Developer journey.
              You can<br/> learn more about what I have offer below.
            </p2>
            <br/>
            <br/>
            <Link to="/about">
              <button type="button" class="btn btn-dark btn-rounded about-button" >
                About Me
              </button> 
            </Link>
          </div>
          <MDBNavbar fixed='bottom'>
            <MDBBtn href="/contact" tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
              <MDBIcon fab icon='google' size='lg' />
            </MDBBtn>
            <MDBBtn href="https://www.linkedin.com/in/aaron-molesbury" tag='a' color='none' className='m-1' style={{ color: '#0082ca' }}>
              <MDBIcon fab icon='linkedin' size='lg' />
            </MDBBtn>
            <MDBBtn href="https://github.com/AaronMolesbury" tag='a' color='none' className='m-1' style={{ color: 'white' }}>
              <MDBIcon fab icon='github' size='lg' />
            </MDBBtn>
          </MDBNavbar>
        </>
      );
}

export default Home;