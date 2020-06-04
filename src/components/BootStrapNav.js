import React, {Component} from 'react'
import logo from '../assets/B.png'
import '../styles/App.scss';
import ThemeSwitcher from './ThemeSwitcher.js'
import { Navbar,Nav,NavDropdown} from 'react-bootstrap'



export default class BootStrapNav extends Component {
    render() {
        return(
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="transparent">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="BryAre logo"
                    />
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>    
                </Navbar.Collapse>                
                
                <Nav>
                

                <ThemeSwitcher
                        cssSelector= "body"
                        darkColor=  "#090909"//"linear-gradient(to right, #4b478686 0%, rgba(79, 88, 122, 0.884) 51%, rgb(62, 62, 100) 100%);"
                        lightColor= "#f2f2f2"//"linear-gradient(to right, #c5bfc4fd 0%, rgba(137, 133, 138, 0.884) 51%, rgb(100, 100, 102) 100%);"
                        lightTextColor= "#000"
                        darkTextColor= "#fff"
                />
                </Nav>
            </Navbar>
        )
    }
}


{/* <Navbar collapseOnSelect expand="lg" >
            <Navbar.Brand href="#home">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>

            </Navbar.Collapse>
            <ThemeSwitcher
                     cssSelector= "body"
                     darkColor=  "#1a1a1a"//"linear-gradient(to right, #4b478686 0%, rgba(79, 88, 122, 0.884) 51%, rgb(62, 62, 100) 100%);"
                     lightColor= "#f2f2f2"//"linear-gradient(to right, #c5bfc4fd 0%, rgba(137, 133, 138, 0.884) 51%, rgb(100, 100, 102) 100%);"
                     lightTextColor= "#000"
                     darkTextColor= "#fff"
                />
            </Navbar> */}