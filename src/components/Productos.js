import React, {Component} from 'react';
import Navigation from './Navigation';
import {platos} from '../datos/platos.json';
import Fila from './Fila';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Productos extends Component{
    
  constructor(){
    super();
    this.state = {
      platos
    }
  }

  render(){
    const platos = this.state.platos.map((plato, i)=>{return (
      //<div>{plato.nombre}</div>
      <Fila key={plato.id} id={plato.id} nombre={plato.nombre} precio={plato.precio} rubro={plato.rubro} envio={plato.envio} vendidos={plato.vendidos} imagenPath={plato.imagenPath}></Fila>
    )
  })
    return (
      <React.Fragment>
          <Navigation></Navigation>
          <Container fluid="md">
              <Row>
              {platos}
              </Row>
          </Container>
      </React.Fragment>
      );

  }
}

export default Productos;