import React, {Component} from 'react';
import {instrumentos} from '../datos/instrumentos.json';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class DetalleInstrumento extends Component{
    
    constructor(){
        super();
        this.state = {
          instrumentos
        }
      }

      envio(envio) {
        
        if (envio == 'G') {
            
            
            return true;
        }else{
            return false;
        }
      }

    render(){
       console.log(this.props);
        const parametroId = this.props.match.params.id;
        const instrumentoEncontrado = instrumentos.filter(i => i.id === parametroId);

        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Container>
                
                    <br></br>
                    <br></br>
                <Row>
                    <Col>
                        <img className="minAltoImg" src={require(`../assets/images/${instrumentoEncontrado[0].imagen.toLowerCase()}`).default}/>
                        <p></p>                       
                        <Row>
                            <Col>
                                <h2 style={{fontSize: 16, fontFamily:"Helvetica"}}>Descripcion:</h2>
                                <p></p>
                                <h1 style={{fontSize: 13, fontFamily:"Helvetica"}}>{instrumentoEncontrado[0].descripcion}</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <Col><h2 style={{fontSize: 15, fontFamily:"Helvetica"}}>{instrumentoEncontrado[0].cantidadVendida} Vendidos</h2></Col>
                        </Row>
                        <Row>
                            <Col><h1>{instrumentoEncontrado[0].instrumento}</h1></Col>
                        </Row>
                        <Row>
                            <Col><h1 style={{fontSize: 45, color: 'grey',  fontFamily:"Helvetica"}}>${instrumentoEncontrado[0].precio}</h1></Col>
                        </Row>
                        <Row>
                            <Col><h2 style={{fontSize: 15, fontFamily:"Helvetica"}}>Marca: {instrumentoEncontrado[0].marca}</h2></Col>
                        </Row>
                        <Row>
                            <Col><h2 style={{fontSize: 15, fontFamily:"Helvetica"}}>Modelo: {instrumentoEncontrado[0].modelo}</h2></Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 style={{fontSize: 17}}>Costo Envio: </h1>
                                <a>
                                {this.envio(`${instrumentoEncontrado[0].costoEnvio}`)? <a style={{color: "green",fontSize: 17}}>Envio gratis a todo el pais!</a>: <a style={{color: "red",fontSize: 17}}>envio ${instrumentoEncontrado[0].costoEnvio}</a>}
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <br></br>
                        <Button variant="info" href="/productos" style={{ height: '50px', width: '150px',fontSize: 19 }}>Volver</Button>
                    </Col>
                </Row>  
            
                </Container>
            </React.Fragment>
            
        );

    }
}

export default DetalleInstrumento;