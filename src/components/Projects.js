import React, {Component} from 'react';
import ProjectsText from '../docs/ProjectsText.js';
import '../styles/App.scss';

export default class Projects extends Component {
    render() {  
        return(
            <section id="projects">
                <p className="">
                    {ProjectsText}
                </p>
            </section>      
        )
    }
}

