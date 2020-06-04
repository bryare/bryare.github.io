import React, {Component} from 'react';
import ContactText from '../docs/ContactText.js';
import '../styles/App.scss';

export default class Contact extends Component {
    render() {  
        return(
            <section id="contact">
                <p className="">
                    {ContactText}
                </p>
            </section>      
        )
    }
}