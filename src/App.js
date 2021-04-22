import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css'
import MiComponente from './components/MiComponente';



function mensajeHolaMundo(mensaje) {
  return mensaje.toUpperCase();
}

function App() {
  var mensaje = 'Hola Mundo';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {mensajeHolaMundo(mensaje)}
      </header>
      
      <React.Fragment>
        <MiComponente textoH2="Propiedad textoH2" textoH3="Propiedad textoH3"></MiComponente>
        <h2>Titulo Aplicando Etiqueta H2</h2>
      </React.Fragment>
      
    
    </div>

  );
}
export default App;
