import React, {Component} from 'react';
import Navigation from './Navigation';
import {instrumentos} from '../datos/instrumentos.json';
import Fila from './Fila';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Productos extends Component{
    
  constructor(){
    super();
    this.state = {
      instrumentos
    }
  }

  render(){
    const instrumentos = this.state.instrumentos.map((instrumento, i)=>{return (
      <Fila key={instrumento.id} id={instrumento.id} nombre={instrumento.instrumento} precio={instrumento.precio} marca={instrumento.marca} modelo={instrumento.modelo} envio={instrumento.costoEnvio} vendidos={instrumento.cantidadVendida} imagenPath={instrumento.imagen}></Fila>
    )
  })
    return (
      <React.Fragment>
          <Navigation></Navigation>
          <Container fluid="md">
              <Row>
              {instrumentos}
              </Row>
          </Container>
      </React.Fragment>
      );

  }
}

export default Productos;