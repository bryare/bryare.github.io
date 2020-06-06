import React, {Component} from 'react';
// import ServicesText from '../docs/ServicesText.js';
import '../styles/App.scss';

export default class Services extends Component {
    render() {  
        return(
            <section id="services">
                <p className="">
                Services that I have to offer you:
            
                </p>
                <ul style={{listStyleType: "square"}}>
                    <br/>
                            <li>Web design</li>
                            <li>Web developing</li>
                            <li>Brand developing</li>
                            <li>Logo design</li>
                            <li>Quality craftsmanship</li>
                </ul>
                
            </section>      
        )
    }
}