import React, {Component} from 'react'

export default class BootStrapNav extends Component {
    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>    
                    <li><a href="#about">about</a></li>    
                    <li><a href="#projects">projects</a></li>    
                    <li><a href="#contact">contact</a></li>    
                </ul>
                <ThemeSwitcher
                    cssSelector= "body"
                    darkColor=  "#000"//"linear-gradient(to right, #4b478686 0%, rgba(79, 88, 122, 0.884) 51%, rgb(62, 62, 100) 100%);"
                    lightColor= "#fff"//"linear-gradient(to right, #c5bfc4fd 0%, rgba(137, 133, 138, 0.884) 51%, rgb(100, 100, 102) 100%);"
                    lightTextColor= "#000"
                    darkTextColor= "#fff"
                /> 
            </nav>           
        )
    }
}
