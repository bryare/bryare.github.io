import React, {Component} from 'react';
// import BootStrapNav from '../BootStrapNav';
// import BootStrapFooter from '../BootStrapFooter';
import Exp1 from './Exp1.js';
import Exp2 from './Exp2.js';
import Exp3 from './Exp3.js';
import '../../styles/App.scss';

export default class Experiences extends Component {
  render() {
    return (
      <html>
        
          
          
          <div className="container" id="exps">
            
          <Exp1/>
          <Exp2/>
          <Exp3/>
            
          </div>
          
      </html>
    )
  }
}