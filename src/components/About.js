import React, {Component} from 'react';
import AboutText from '../docs/AboutText.js';

export default class About extends Component {
    render() {
        return(
            <section id="about">
                <p className="">
                    {AboutText}
                </p>
                
            </section>    
        ) 
    }
}