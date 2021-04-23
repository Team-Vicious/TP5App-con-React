import React, {Component} from 'react';
import Navigation from './Navigation';

class Home extends Component{
    
    render(){
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <body style={{fontSize: 20,fontFamily: "Helvetica",padding: '30px 0px 0px 15px ', width: '80rem'}}>

                <a>
                    Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el 
                    conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.
                </a>
                </body>
            </React.Fragment>
        );

    }
}

export default Home;