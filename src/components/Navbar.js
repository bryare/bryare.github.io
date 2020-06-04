import React, {Component} from 'react'
import logo from '../assets/B.png'
import '../styles/App.scss';
import ThemeSwitcher from './ThemeSwitcher.js'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    
    render() {
        return(
            <nav className="navbar">
                <div>
                    {/* <img
                        src={logo}
                        alt="logo"
                    /> */}
                
                
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>    
                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>    
                        <li>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Projects
                            </Link>
                        </li>    
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>    
                    </ul>

                    {/* <ThemeSwitcher
                    cssSelector= "body"
                    
                    darkColor=  "#000"//"linear-gradient(to right, #4b478686 0%, rgba(79, 88, 122, 0.884) 51%, rgb(62, 62, 100) 100%);"
                    lightColor= "#fff"//"linear-gradient(to right, #c5bfc4fd 0%, rgba(137, 133, 138, 0.884) 51%, rgb(100, 100, 102) 100%);"
                    lightTextColor= "#000"
                    darkTextColor= "#fff"
                    /> */}

                </div>
            </nav>           
        )
    }
}
