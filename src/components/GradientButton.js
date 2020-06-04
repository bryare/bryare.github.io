import React, {Component} from 'react';
import { Link } from "react-scroll";

export default class GradientButton extends Component {
    render() {   
        return(    
            <Link
                to="#home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="gradient-button gradient-button-3"
            >
                Learn more
            </Link>
        )
    }
}