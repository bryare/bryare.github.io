import React, {Component} from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Home from './components/Home'
import About from './components/About'
import Icons from './components/Icons.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
class App extends Component { 
  render() {
    return (
      <body>
        <div className="container">
          <Navbar/>
          
          <Landing/>
          <Home
            
          />
          <About
          
          />
          <Projects 
        
          />
          <Contact 
           
          />
          </div>
        
      </body>
      )
  }
}

export default App;

/*
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>

      </div>
    </Router>
    */