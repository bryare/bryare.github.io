import React, {Component} from 'react';
import MainText from '../docs/MainText.js';

export default class Home extends Component {
    render() {
        return(
            <section id="home"> 
                <p className="">
                    {MainText}
                </p>
            </section>   
        ) 
    }
}