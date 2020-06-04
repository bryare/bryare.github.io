import React, {Component} from 'react';
import text from '../docs/MainText.js';
class Home extends Component {

    render() {
        const myText = text;
        return(
            <section id="home">         
                <div>
                    <p>
                         {myText}
                    </p>
                </div>                
            </section>   
            
        ) 
    }
}

export default Home