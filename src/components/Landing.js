import React, {Component} from 'react';
import logo from '../assets/LogoNew.png';
import Carousel from './Carousel.js';
//import GradientButton from './GradientButton.js';
import '../styles/App.scss';

export default class Landing extends Component {
    render() {  
        return(
            <section id="/">
                <img src={logo} className="App-logo" alt="logo"/>
                <div style={{display:"flex"}}>
                    <h1 className="landing-text effect-1">
                        Bryan arevalo,     
                        
                    </h1> 
                    <Carousel/>
                </div>
                
            </section>      
        )
    }
}