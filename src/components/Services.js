import React, {Component} from 'react';
import ServicesText from '../docs/ServicesText.js';
import '../styles/App.scss';

export default class Services extends Component {
    render() {  
        return(
            <section id="services">
                <p className="">
                    {ServicesText}
                </p>
            </section>      
        )
    }
}