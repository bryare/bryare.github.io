import React, {Component} from 'react';
// import BootStrapNav from './components/BootStrapNav.js';
// import Landing from './components/Landing.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Experience from './components/Experience.js';
// import BootStrapFooter from './components/BootStrapFooter.js'
//import GradientButton from './components/GradientButton.js';
import Experience1 from './components/Experiences/Exp1.js';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import MainBody from './components/MainBody.js';
export default class App extends Component {
  render() {
    return (
      <html>
          <Router>
            
            <Route exact path="/" component={MainBody} />
            <div className="container">
              {/* <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/experiences/exp1" component={Experience1} /> */}
            </div>
            
          </Router>
          {/* <div className="container">
            <Landing/>
            <Home/>
            <About/>
            <Projects/>
            <Experience/>
            <Services/>
            <Contact/>
           <Experiences/>   
          </div>
          <BootStrapFooter/>  */}

      </html>
    )
  }
}