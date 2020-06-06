import React, {Component} from 'react';
//import ExperienceText from '../docs/ExperienceText.js';
import '../styles/App.scss';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Exp from './Experiences/Experiences.js';

export default class Experience extends Component {
    render() {  
        return(
            <section id="experience">
                <p className="">
                    Here's where I've worked at!
                </p>
                <ul style={{listStyleType: "square"}}> 
                        <li>
                            2018: <a href="#exp1" className="navbar-text">Tutor</a> @ CUNY Tutor Corps.
                        </li> 
                        <li>
                            2019: <a href="#exp2">Researcher/Intern</a> @ CCNY.
                        </li>
                        <li>
                            2020: <a href="#exp3">Intern</a> @ CUNY Co-op.
                        </li>
                    </ul>

                    {/* <BrowserRouter>
                        <Route path="/Experience/Exp1" component={Exp} ></Route>
                    <Link to="/Experience/Exp1">EXp</Link>
                    </BrowserRouter> */}
            </section>      
        )
    }
}

