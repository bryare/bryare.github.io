import React, {Component} from 'react';
import {Link} from "react-router-dom";

class GradientButton extends Component {
    render() {   
        return(    
            <Link
                 to="#home" 
                 className="gradient-button gradient-button-3"
            >
                Learn more
            </Link>
        )
    }
}

export default GradientButton