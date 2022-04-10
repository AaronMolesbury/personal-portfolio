import React from 'react';
import { Link } from 'react-router-dom';
import "../pages/Home.css";
import { 
  MDBBtn,
  MDBIcon,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand, } from 'mdb-react-ui-kit';

function Home() {
    return (
        <div>
          <div class="container-lg c1">
            <p1 class="p1">
              Junior Software Developer
            </p1>
            <h1 class = "h1">
              Aaron Molesbury
            </h1>
            <br/>
            <p2 class="p2">
              Hi, I'm Aaron! I have recently graduated from Heriot Watt University 
              with a degree <br/> in Computer Science and I'm looking to begin my Software Developer journey.
              You can<br/> learn more about what I can offer below.
            </p2>
            <br/>
            <br/>
            <Link to="/about">
              <button type="button" class="btn btn-dark btn-rounded" >
                About Me
              </button> 
            </Link>
          </div>
          <MDBNavbar fixed='bottom'>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
              <MDBIcon fab icon='google' size='lg' />
            </MDBBtn>
              <MDBBtn href="www.linkedin.com/in/aaron-molesbury" tag='a' color='none' className='m-1' style={{ color: '#0082ca' }}>
                <MDBIcon fab icon='linkedin' size='lg' />
              </MDBBtn>
          </MDBNavbar>
        </div>
        
        
      );
}

export default Home;