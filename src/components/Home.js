import React, {Component} from 'react';
import MainText from '../docs/MainText.js';

export default class Home extends Component {
    render() {
        return(
            <section id="home"> 
                <p className="email">
                    {MainText} <a href = "mailto: bryanmarevalo@gmail.com" class="navbar-text">bryanmarevalo@gmail.com</a>
                </p>
            </section>   
        ) 
    }
}