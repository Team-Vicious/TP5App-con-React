import React, {Component} from 'react';
import Navigation from './Navigation';

class DondeEstamos extends Component{
    
    render(){
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <body style={{fontSize: 20,fontFamily: "Helvetica",padding: '30px 0px 0px 15px ', width: '80rem'}}>

                    <h3>Insertar un mapa de Google con ubicación Av. Las Heras y Av. San Martin, Ciudad de Mendoza</h3>
                </body>
            </React.Fragment>
        );

    }
}

export default DondeEstamos;