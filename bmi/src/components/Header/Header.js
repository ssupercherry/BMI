import React, { Component } from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown'

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
        data:[],
        redirectToReferrer: false,
        name:'',
        };
        this.getUserFeed = this.getUserFeed.bind(this);
        this.logout = this.logout.bind(this);
        }

        componentWillMount() {

        if(sessionStorage.getItem("userData")){
        this.getUserFeed();
        }

        else{
        this.setState({redirectToReferrer: true});
        }

        }
        getUserFeed() {

            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({name:data.userData.name});
        }
        logout(){
            sessionStorage.setItem("userData",'');
            sessionStorage.clear();
            window.location.href = "/login";
            }

render() {
return (
<div>
<Navbar bg="outline-danger" variant="dark" expand="lg" fixed="top" >
  <Navbar.Brand href="/">BMI</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title={this.state.name} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>

      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
);
}
}
export default Header;
