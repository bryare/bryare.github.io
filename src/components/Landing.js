import React, {Component} from 'react';
import '../styles/App.scss';
import logo from '../assets/logo.png';
//import Anime, {anime} from 'react-anime';
//import Home from './Home.js';
import Carousel from './Carousel.js';
//import GradientButton from './GradientButton.js';

class Landing extends Component {

    render() {  
        return(
            <section id="/">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <h1 className="landing-text effect-1">
                        Bryan arevalo:                
                    </h1>
                    <Carousel/>
                </div>
            </section>      
        )
    }
}

export default Landing