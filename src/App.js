import React, {Component} from 'react';
import BootStrapNav from './components/BootStrapNav.js';
import Landing from './components/Landing.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

//import GradientButton from './components/GradientButton.js';
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
          <Contact/>
        </div>
      </html>
    )
  }
}