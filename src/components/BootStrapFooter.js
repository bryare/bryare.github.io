import React, {Component} from 'react'
//import logo from '../assets/B.png'
//import logo from '../assets/B.svg'
import '../styles/App.scss';
import { Navbar} from 'react-bootstrap'

export default class BootStrapFooter extends Component {
    render() {
        return(
            <Navbar fixed="bottom" collapseOnSelect expand="lg" bg="transparent">
                <p className="navbar-text">© Bryare - piece № 1 - "Love/Heart"</p>
                {/* <p class="navbar-text">piece № 1 - "Love/Heart" - © Bryare</p> */}
                        
                
            </Navbar>

        )
    }
}


