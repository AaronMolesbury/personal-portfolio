import React, { useState } from 'react';
import "./Navbar.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

function Navbar() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);

  return (
    <MDBNavbar sticky expand='lg' dark>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/' >
          Aaron Molesbury  
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColorSecond(!showNavColorSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
          <MDBNavbarNav right fullWidth={false} >
            <MDBNavbarItem right>
              <MDBNavbarLink href='/about' className='menu-item-text'>About Me</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem right>
              <MDBNavbarLink href='/portfolio' className='menu-item-text'>Portfolio</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem right>
              <MDBNavbarLink href='/cv' className='menu-item-text'>Curriculum Vitae</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem right>
              <MDBNavbarLink href='/contact' className='menu-item-text'>Contact Me</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar