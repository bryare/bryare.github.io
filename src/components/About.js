import React, {Component} from 'react';
import AboutText from '../docs/AboutText.js';
import Icons2 from './Icons2';

export default class About extends Component {
    render() {
        return(
            <section id="about">
                <p className="">
                    {AboutText}
                </p>
                <Icons2/>
            </section>    
        ) 
    }
}