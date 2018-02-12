import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {

	render () {
		return (
	    <header>
        <Navbar>
				  <Navbar.Header>
				    <Navbar.Brand>
				      Create React App
				    </Navbar.Brand>
				  </Navbar.Header>
				  <Nav>
				    <NavItem eventKey={1} href="#/">
				      Home
				    </NavItem>
				    <NavItem eventKey={2} href="#/about">
				      About
				    </NavItem>
				  </Nav>
				</Navbar>
	    </header>
	  )
	}
}

export default Header;