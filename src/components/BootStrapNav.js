import React, {Component} from 'react'
//import logo from '../assets/B.png'
//import logo from '../assets/B.svg'
import heart from '../assets/heart.svg'
// import heart2 from '../assets/heart2.svg'
import '../styles/App.scss';
import ThemeSwitcher from './ThemeSwitcher.js'
import { Navbar,Nav } from 'react-bootstrap'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class BootStrapNav extends Component {
    render() {
        return(
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="transparent">
                <Navbar.Brand href="/">
                    <img
                        src={heart}
                        width="100"
                        height="100"
                        alt="BryAre logo"
                    />
                </Navbar.Brand> 

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto active-page">
                        <Nav.Link href="#home" className="active-page" ><p className="navbar-text active-page">Home</p></Nav.Link>
                        <Nav.Link href="#about" className="active-page"><p className="navbar-text">About</p></Nav.Link>
                        <Nav.Link href="#projects"className="active-page"><p className="navbar-text">Projects</p></Nav.Link>
                        <Nav.Link href="#experience" className="active-page"><p className="navbar-text">Experience</p></Nav.Link>
                        <Nav.Link href="#services" className="active-page"><p className="navbar-text">Services</p></Nav.Link>
                        <Nav.Link href="#contact" className="active-page"><p className="navbar-text">Contact</p></Nav.Link>
                    </Nav>    
                </Navbar.Collapse>                
                
                <Nav>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                                <Nav.Link href="https://github.com/BryAre" target="_blank" rel="noopener noreferrer"><p className="navbar-text">Github</p></Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/bryare/" target="_blank" rel="noopener noreferrer"><p className="navbar-text">LinkedIN</p></Nav.Link>
                                <Nav.Link href="#projects"><a href = "mailto: bryanmarevalo@gmail.com" className="navbar-text">Email</a></Nav.Link>
                        </Nav>    
                    </Navbar.Collapse>  
                    
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

