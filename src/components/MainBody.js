import React, {Component} from 'react';
import BootStrapNav from './BootStrapNav.js';
import Landing from './Landing.js';
import Home from './Home.js';
import About from './About.js'
import Projects from './Projects.js';
import Services from './Services.js';
import Contact from './Contact.js';
import Experience from './Experience.js';
import BootStrapFooter from './BootStrapFooter.js'

export default class App extends Component {
    render() {
      return (
        <html>
            
            <BootStrapNav/>
            
            <div className="container">
                <Landing/>
                <Home/>
                <About/>
                <Projects/>
                <Experience/>
                <Services/>
                <Contact/>
                  
            </div>

            <BootStrapFooter/> 
        </html>
      )
    }
  }
    
    
