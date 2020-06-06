import React, {Component} from 'react';
import BootStrapNav from './components/BootStrapNav.js';
import Landing from './components/Landing.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Experience from './components/Experience.js';
import BootStrapFooter from './components/BootStrapFooter.js'
//import GradientButton from './components/GradientButton.js';
// import Experiences from './components/Experiences/Experiences.js';

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
            {/* <Experiences/>   */}
          </div>
          <BootStrapFooter/> 

      </html>
    )
  }
}